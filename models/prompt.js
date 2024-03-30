import {Schema, model, models} from "mongoose";

const PromptSchema = new Schema({
    // Explanation of the creator object: The creator object is a reference to the User model, which represents the user who created the prompt.
    // Explanation of the prompt object: The prompt object is a string that contains the text of the prompt. It is required and cannot be empty.
    // Explanation of the tag object: The tag object is a string that contains the tag associated with the prompt. It is required and cannot be empty.
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    prompt: {
        type: String,
        required: [true, "Prompt is required"],
    },
    tag: {
        type: String,
        required: [true, "Tag is required"],
    },
});

const Prompt = models.Prompt || model("Prompt", PromptSchema);

export default Prompt;
