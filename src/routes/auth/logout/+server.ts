import { redirect } from "@sveltejs/kit"
//@ts-ignore
export const GET = async ({locals: {supabase}}) => {
    await supabase.auth.signOut()
    redirect(307, "/")
}