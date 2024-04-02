import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (req, {params}) => {
    try {
        connectToDatabase();
        const prompts = await Prompt.find({
            creator: params.id
        }).populate("creator");
        
        return new Response(JSON.stringify(prompts), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch all prompts", {status: 500})
    }
}