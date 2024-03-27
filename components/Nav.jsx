"use client";
import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

//NOTES
//session?.user is a way to check if the session object exists before trying to access the user object. This is a way to prevent errors in case the session object is null or undefined.

const Nav = () => {
  const {data: session} = useSession(); // We are using the useSession hook to get the session data
  // We are create a state to store the providers, i.e google auth, facebook auth, etc. But in this project, we will only be using google auth
  const [ providers, setProviders ] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  // We are using the useEffect hook to fetch the providers as soon as the component mounts then we store the providers in the state we created.
  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    }
    fetchProviders();
  }, []);
  return (
    <nav className='flex-between w-full mb-16 pt-3'>
      <Link href='/' className='flex gap-2 flex-center'>
        <Image src='/assets/images/logo.svg' alt='Promptopia Logo' width={30} height={30} className='object-contain'/>
        <p className='logo_text'>Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className='sm:flex hidden'>
        {/* We need to know whether a user is currently logged in or not to know which buttons to show */}
        {
          session?.user ? (
            <div className='flex gap-3 md:gap-5'>
              <Link href='/create-prompt' className='black_btn'>
                Create Post
              </Link>

              <button type='button' onClick={signOut} className='outline_btn'>
                Sign Out
              </button>

              <Link href="/profile">
                <Image src={session?.user.image} alt='User Profile' width={37} height={37} className='rounded-full'/>
              </Link>
            </div>
          ) : (
            <>
            {
                providers && Object.values(providers).map((provider) => ( // Object.values is used to convert the object into an array so that we can map through it
                  <button type='button' 
                  onClick={() => signIn(provider.id)} 
                  className='black_btn' 
                  key={provider.name}>
                    Sign in
                  </button>
                ))
              }
            </>
          )
        }
      </div>

      {/* Mobile Navigation */}
      <div className='sm:hidden flex relative'>
        {
          session?.user ? (
            <div className='flex'>
              <Image src={session?.user.image} alt='User Profile' width={37} height={37} className='rounded-full'
                onClick={() => {setToggleDropdown((prev) => !prev)}} // We are using the setToggleDropdown function to toggle the dropdown. We are using the previous value of the state to toggle the dropdown.
              />

              {
                toggleDropdown && (
                  <div className='dropdown'>
                    <Link href="/profile" className='dropdown_link'
                      onClick={() => setToggleDropdown(false)} // We are using the setToggleDropdown function to close the dropdown when the user clicks on the link
                    >
                      My Profile
                    </Link>

                    <Link href="/create-prompt" className='dropdown_link'
                      onClick={() => setToggleDropdown(false)} // We are using the setToggleDropdown function to close the dropdown when the user clicks on the link
                    >
                      Create Prompt
                    </Link>
                    <button
                      type='button'
                      onClick={() => {
                        setToggleDropdown(false);
                        signOut()
                        }}
                      className='mt-5 w-full black_btn'
                    >
                      Sign Out
                    </button>
                  </div>
                )
              }
            </div>
          ) : (
            <>
            {
              providers && Object.values(providers).map((provider) => (
                  <button type='button' 
                  onClick={() => signIn(provider.id)} 
                  className='black_btn' 
                  key={provider.name}>
                    Sign in
                  </button>
                ))
            }
            </>
          )
        }
      </div>
    </nav>
  )
}

export default Nav