// This file configures the authentication providers and defines session and sign-in behavior for NextAuth.
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connectToDatabase } from "@utils/database";
import User from "@models/user";
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID, //the process.en.GOOGLE_CLIENT_ID is the environment variable that we set in the .env local file
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    callbacks: {
        async session({ session}) {
        const sessionUser = await User.findOne({
            email: session.user.email,
        })
        session.user.id = sessionUser._id.toString();

        return session;
    },
    async signIn( {profile} ) {
        try {
            await connectToDatabase(); //we are calling the connectToDatabase function to connect to the database
            // check if the user already exists in the database
            const userExists = await User.findOne({
                email: profile.email,
            })
            if(!userExists) {
                await User.create({
                    email: profile.email,
                    username: profile.name.replace(" ", "").toLowerCase(),
                    image: profile.picture,
                })
            }
            return true;
        } catch (error) {
            console.error(error);
            return false;
        }
    }
    }
})

export {handler as GET, handler as POST} 