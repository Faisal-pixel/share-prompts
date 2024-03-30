import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

// GET (read)
export const GET = async (req, {params}) => {
    try {
        await connectToDatabase();
        const prompt = await Prompt.findById(params.id).populate("creator"); // Explanation: The GET function is an asynchronous function that fetches a single prompt from the database using the findById method of the Prompt model. The id of the prompt to fetch is passed as a parameter to the function. The populate method is used to populate the creator field of the prompt with the user data. The fetched prompt is then returned as a JSON response with a status code of 200. Basically as you are fetching the prompt, the creator field is also populated with the user data since it is linked with an Id.
        if(!prompt) return new Response("Prompt not found", {status: 404});
        return new Response(JSON.stringify(prompt), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("Failed to fetch the prompt", {status: 500})
    }
}

// PATCH (update)
export const PATCH = async (req, {params}) => {
    const {prompt, tag} = await req.json();
    try {
        await connectToDatabase();
        const existingPrompt = await Prompt.findById(params.id);
        if(!existingPrompt) return new Response("Prompt not found", {status: 404});

        existingPrompt.prompt = prompt;
        existingPrompt.tag = tag;

        await existingPrompt.save();
        return new Response(JSON.stringify(existingPrompt), {status: 200});
    }
    catch (error) {
        console.error(error);
        return new Response("Failed to update the prompt", {status: 500});
    }

}

// DELETE (delete)

export const DELETE = async (req, {params}) => {
    try {
        await connectToDatabase();
        const deletedPrompt = await Prompt.findByIdAndDelete(params.id);
        if(!deletedPrompt) return new Response("Prompt not found", {status: 404});
        return new Response(JSON.stringify(deletedPrompt), {status: 200});
    } catch (error) {
        console.error(error);
        return new Response("Failed to delete the prompt", {status: 500});
    }
}