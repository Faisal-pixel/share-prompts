"use client";
import Profile from '@components/Profile';
import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const UserProfile = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const user_id = searchParams.get("id");
    const user_name = searchParams.get("username");

    const [posts, setPosts] = useState([]);
    useEffect(() => {
        // Fetch data from the server
        const fetchPosts = async () => {
          const response = await fetch(`/api/users/${user_id}/posts`)
          const data = await response.json();
          setPosts(data);
        }
        if(user_id) fetchPosts();
      }, [])

    
  return (
    <Profile 
        name={user_name}
        desc= {`Welcome to ${user_name}'s personalised profile page. Explore ${user_name} expectional prompts and be inspired by the power of their imagination.`}
        data={posts}
    />
  )
}

export default UserProfile