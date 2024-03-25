"use client";

import React from 'react'
/**
 * The SessionProvider component from the next-auth library handles user authentication,
 * session data storage, and session cookie management in a Next.js application.
 * It provides an interface for user login, stores session data, and manages session cookies.
 * By using this component, you can easily integrate session management into your application.
 */
import { SessionProvider } from 'next-auth/react'; // Import the SessionProvider component from the next-auth library

const Provider = ({children, session}) => { // The Provider component takes in a children prop and a session prop. The children prop is the component that will be wrapped by the SessionProvider component. The session prop is the session data that will be passed to the SessionProvider component.
  return (
    // The SessionProvider component wraps the children component and provides session data to it. It also handles user authentication and session management.
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider