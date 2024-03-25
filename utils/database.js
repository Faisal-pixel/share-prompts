import mongoose from "mongoose";

let isConnected = false; //this is a flag to check if the connection is already established or not

export const connectToDatabase = async () => {
    mongoose.set("strictQuery", true) //this is to make sure that the queries are strict. The queries can be thought of as the commands that we send to the database to get the data
    
    //if the connection is already established, then we don't need to connect again
    if(isConnected) {
        console.log("MongoDB is already connected");
        return;
    }

    //if the connection is not established, then we need to connect to the database
    try {
        /*we are using the mongoose.connect method to connect to the database. 
        We are using the process.env.MONGODB_URI environment variable to get the connection string. 
        URI stands for Uniform Resource Identifier. It is a string of characters used to identify a resource. 
        In this case, the resource is the MongoDB database. We are also passing some options to the connect method. 
        The dbName option is used to specify the name of the database that we want to connect to. 
        The useNewUrlParser option is used to specify that we want to use the new URL parser. 
        The useUnifiedTopology option is used to specify that we want to use the new topology engine. 
        The await keyword is used to wait for the connect method to complete. 
        The connect method returns a promise, so we are using the await keyword to wait for the promise to resolve. If the promise resolves, then the connection is established. If the promise rejects, then an error is thrown. 
        We are using a try...catch block to catch the error and log it to the console.
        */
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })

        isConnected = true;

        console.log("MongoDB is connected")
    } catch (error) {
        console.log("Error connecting to MongoDB", error)
    }
}