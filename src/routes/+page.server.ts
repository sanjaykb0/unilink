
//@ts-nocheck
import { getOrCreateUserProfile } from "$lib/auth";
import { db } from "$lib/db/index.js";
import { profileTable, projectsTable } from "$lib/db/schema.js";
import { error } from "@sveltejs/kit";
import { eq } from "drizzle-orm";
import { zfd } from "zod-form-data";
import { v4 as uuidv4} from "uuid"

export const load = async ({ locals }) => {
  const userProfile = await getOrCreateUserProfile(locals);
  let projectData = null;
  if (userProfile) {
    projectData = await db.query.projectsTable.findMany({
      where: eq(projectsTable.author, userProfile.id)
    })
  }

  return {
    userProfile,
    projectData,
  };
};

export const actions = {
  login: async ({ request, locals }) => {
    const userProfile = await getOrCreateUserProfile(locals);

    if (!userProfile) {
      error(401, "You need to be logged in!");
    }

    const schema = zfd.formData({
      firstName: zfd.text(),
      lastName: zfd.text(),
      email: zfd.text(),
    });

    const { data } = schema.safeParse(await request.formData());

    if (!data) {
      error(400, "Invalid form data");
    }

    await db.update(profileTable).set({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
    }).where(eq(profileTable.id, userProfile.id));

    return { success: true };
  },

  create_project: async ({request, locals}) => {
    const { user } = await locals.safeGetSession();

    if (!user) {
      error(401, "You need to be logged in!")
    }

    const schema = zfd.formData({
      projectName: zfd.text(),
      projectDesc: zfd.text(),
    })

    const { data } = schema.safeParse(await request.formData());

    if (!data) {
      error(400, "Invalid form data");
    }

    const projectId = uuidv4();

    await db.insert(projectsTable).values({
      title: data.projectName,
      desc: data.projectDesc,
      author: user.id,
    })

    // const newProject = await db.query.projectsTable.findFirst({
    //   where: eq(projectsTable.id == projectId)
    // })

    // if (!newProject) {
    //   error(500, "Could not create new project!");
    // }

    return { success:true };
  }

};