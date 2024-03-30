"use client";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import Form from "@components/Form";

const EditPrompt = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const promptId = searchParams.get("id");
    const {data: session} = useSession(); // Basically use the session hook to get the user session data
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        // Fetch data from the server
        const getPromptDetails = async () => {
          const response = await fetch(`/api/prompt/${promptId}`);
          const data = await response.json();
          setPost({
            prompt: data.prompt,
            tag: data.tag,
          });
        }
        if(promptId) getPromptDetails();
      }, [promptId])

    const [post, setPost] = useState({
        prompt: "",
        tag: ""
    });

   const updatePrompt = async (e) => {
    // Basically when the user clicks edit, you want to update the prompt with the new data, so you send a PATCH request to the server with the new data
    // Write a try and catch block to handle the request and if it is successful, redirect the user to the profile page.
    e.preventDefault();
    setSubmitting(true);

    if(!promptId) { // Basically if the prompt id is not found, you want to display an error message. There could be a situation where the prompt id is not found. An example will be if the user tries to edit a prompt that does not exist.
        return alert("Prompt not found");
    };

    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: post.prompt,
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
        type="Edit"
        post={post}
        setPost={setPost}
        submitting={submitting}
        handleSubmit={updatePrompt}
    />
  )
}

export default EditPrompt;