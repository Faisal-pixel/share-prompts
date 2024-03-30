"use client";
import {useState, useEffect} from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Profile from "@components/Profile";

const MyProfile = () => {
    const { data: session } = useSession();
    const router = useRouter();

    const [posts, setPosts] = useState([]); // Explanation: The posts state variable is initialized as an empty array using the useState hook. This array will be used to store the user's posts fetched from the database and displayed on the profile page.   

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`);
    }; // Explanation: The handleEdit function is defined as an empty function. This function will be used to handle the logic for editing a post when the user clicks on the edit button.
    const handleDelete = async (post) => {
      const hasConfirmed = confirm("Are you sure you want to delete this prompt?");
      if(hasConfirmed) {
        try {
          await fetch(`/api/prompt/${post._id}`, {
            method: "DELETE",
          });
          
          const filteredPosts = posts.filter((p) => p._id !== post._id); // The filter method is used to create a new array that excludes the post that was deleted. It loops through each post in the posts array and only includes posts that do not have the same id as the post that was deleted.
          setPosts(filteredPosts); // The setPosts function is then called with the filteredPosts array to update the state variable with the new array that excludes the deleted post.
        } catch (error) {
          console.error(error);
        }
      }
    }; // Explanation: The handleDelete function is defined as an empty async function. This function will be used to handle the logic for deleting a post when the user clicks on the delete button.

    //For the data we only want to fetch posts that belong to the user.
    useEffect(() => {
        // Fetch data from the server
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${session.user.id}/posts`)
          const data = await response.json();
          setPosts(data);
        }
        if(session?.user.id) fetchPosts();
      }, [])
  return (
    <Profile 
        name="My"
        desc= "Welcome to your personalised profile page"
        data={posts} // Explanation: The data prop is used to pass an empty array to the Profile component. This array will be used to store the user's posts, which will be fetched from the database and displayed on the profile page.
        handleEdit={handleEdit}// Explanation: The handleEdit prop is used to pass an empty function to the Profile component. This function will be used to handle the logic for editing a post when the user clicks on the edit button.
        handleDelete={handleDelete}// Explanation: The handleDelete prop is used to pass an empty function to the Profile component. This function will be used to handle the logic for deleting a post when the user clicks on the delete button.
    />
  )
}

export default MyProfile;