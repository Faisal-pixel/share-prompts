import Link from "next/link";

const Form = (props) => {
  const { type, post, setPost, submitting, handleSubmit } = props;
  // Explanation: The Form component is a reusable component that can be used to create or update a post. It takes in the following props: type, post, setPost, submitting, and handleSubmit. The type prop is a string that determines whether the form is for creating or updating a post. The post prop is an object that contains the post data. The setPost prop is a function that updates the post data. The submitting prop is a boolean that indicates whether the form is currently submitting. The handleSubmit prop is a function that handles the form submission. The Form component renders a form with input fields for the post data and a submit button. The form submission is handled by the handleSubmit function, which is passed as a prop to the Form component.
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left"><span className="blue_gradient">{type} Post</span></h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Your AI prompt
          </span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })} // Explanation: The onChange event handler is used to update the post data when the user types in the textarea input field. The setPost function is called with the updated post data, which includes the new prompt value.
            placeholder="Write your prompt here..."
            required
            className="form_textarea"
          ></textarea>
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-grey-700">
            Tag {` `}
            <span>(#product, #webdevelopment, #idea)</span>
          </span>

          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })} // Explanation: The onChange event handler is used to update the post data when the user types in the input field. The setPost function is called with the updated post data, which includes the new tag value.
            placeholder="#tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href={"/"} className="text-gray-500 text-sm">
            Cancel
          </Link>
          
          <button type="submit" disabled={submitting} className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          // Explanation: The submit button is disabled when the form is submitting, and the text on the button changes to indicate the submission status.
          > 
            {submitting ? `${type}...` : type}
          </button> 
        </div>
      </form>
    </section>
  )
}

export default Form