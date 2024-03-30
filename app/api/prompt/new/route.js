import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";
export const POST = async (req) => { //This means this is going to be a POST request. We grab the things we have passed through the POST request and then we are going to send it to the database.
    console.log("I am receiving in the backend")
    console.log(req)
    const { userId, prompt, tag } = await req.json(); //We are going to grab the userId, prompt, and tag from the body of the request.
    console.log(userId, prompt, tag)
    
    try {
        await connectToDatabase(); //We are going to connect to the database.
        console.log("Connected to the database")
        const newPrompt = new Prompt({ //We are going to create a new prompt with the userId, prompt, and tag.
            // Explanation of the creator object: The creator object is a reference to the User model, which represents the user who created the prompt. It recieves the userId.
            // Explanation of the prompt object: The prompt object is a string that contains the text of the prompt. It is required and cannot be empty. It recieves the prompt.
            // Explanation of the tag object: The tag object is a string that contains the tag associated with the prompt. It is required and cannot be empty. It recieves the tag.
            creator: userId,
            prompt,
            tag,
        });
        console.log("New prompt created")
        await newPrompt.save(); //We are going to save the new prompt to the database.
        console.log("New prompt is saved")
        return new Response(JSON.stringify(newPrompt), { status: 201 }); //We are going to return the new prompt as a response with a status of 201.
    } catch (error) {
        console.error("An unexpected error happened:", error);
        return new Response( error, { status: 500 }); //If there is an error, we are going to return the error message as a response with a status of 500.
    }
}