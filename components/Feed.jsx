'use client';
import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
import { set } from 'mongoose';

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  )
}

const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  }

  const filteredPosts = posts.filter((post) => {
    return post.prompt.toLowerCase().includes(searchText.toLowerCase()) || post.creator.username.toLowerCase().includes(searchText.toLowerCase()) || post.tag.toLowerCase().includes(searchText.toLowerCase());
  });

  useEffect(() => {
    // Fetch data from the server
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt")
      const data = await response.json();
      setPosts(data);
    }

    fetchPosts();
  }, [])

  return (
    <section className='feed'>
      <form className='relative w-full flex-container'>
        <input
          type='text'
          placeholder='Search for a tag or a username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>

      <PromptCardList
        data={filteredPosts}
        handleTagClick={(tag) => setSearchText(tag)}
      />
    </section>
  )
}

export default Feed;