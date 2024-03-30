"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
    const router = useRouter();
    const {data: session} = useSession(); // Basically use the session hook to get the user session data
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

   const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Explanation: The createPrompt function is an asynchronous function that handles the form submission for creating a new prompt. 
    //It sends a POST request to the /api/prompt/new endpoint with the prompt data and the user ID. 
    // If the request is successful, the user is redirected to the home page. If an error occurs during the request, an error message is logged to the console. 
    //Finally, the submitting state is set to false to indicate that the form submission is complete.
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session?.user.id,
          prompt: post.prompt,
          tag: post.tag,
        }),
      });



      console.log(res)
      if(res.ok) {
        router.push("/");
      }
    } catch (error) {
      console.error("An unexpected error happened:", error);
    } finally {
      setSubmitting(false);
    }
   }
  return (
    <Form 
        type="Create"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={createPrompt}
    />
  )
}

export default CreatePrompt;