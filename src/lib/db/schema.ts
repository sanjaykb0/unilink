import { pgTable, text, uuid } from "drizzle-orm/pg-core";
export const projectsTable = pgTable("projects", {
    id: uuid("id").primaryKey().defaultRandom(),
    title: text("title").notNull(),
    desc: text("desc"),
    author: text("author").notNull(),
    thumbnail: text("thumbnail"),
    slug: text("slug"),
})

export const profileTable = pgTable("profile", {
    id: uuid("id").primaryKey(),
    firstName: text("first_name").notNull(),
    lastName: text("last_name").notNull(),
    email: text("email").notNull(),
    avatarUrl: text("avatar_url"),
    bio: text("bio"),
    socials: text("socials").array(), 
});