"use client";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";

const CreatePrompt = () => {
    const {data: session} = useSession();
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
        body: JSON.stringify({
            prompt: post.prompt,
            userId: session?.user.id,
            tag: post.tag, 
        }),
      });

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