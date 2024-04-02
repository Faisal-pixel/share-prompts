"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({post, handleTagClick, handleEdit, handleDelete}) => {

  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();
  const user_id = post.creator._id;
  const user_name = post.creator.username;

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt); //Explanation: The navigator.clipboard.writeText() method is used to copy the prompt text to the clipboard when the user clicks on the copy button. This method is called with the post.prompt value as an argument to copy the prompt text to the clipboard.
    setTimeout(() => setCopied(""), 3000);
  }

  const handleUserProfileClick = () => {
    if(pathName === '/profile' || session?.user.id === post.creator._id) {
      router.push(`/profile`);
      return;
    }; //Explanation: The handleUserProfileClick function is defined to handle the logic for redirecting the user to the user profile page when the user clicks on the user profile image. The function checks if the user is already on the profile page and if the user is the creator of the post. If both conditions are met, the function returns early and does not redirect the user to the user profile page. This prevents the user from being redirected to their own profile page when they click on their profile image on the profile page.
    router.push(`/user-profile?id=${user_id}&username=${user_name}`);
  }
  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick={handleUserProfileClick}>
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />
          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image 
            src={copied === post.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={12}
            height={12}
            alt="copy_icon"
          />
        </div>

      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">
        {post.prompt}
      </p>
      <p 
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)} //Explanation: The onClick event handler is used to call the handleTagClick function when the user clicks on the tag. The handleTagClick function is passed as a prop to the PromptCard component from the parent component, and it is used to handle the logic for filtering posts by tag.
      > 
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === '/profile' &&(
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  )
}

export default PromptCard