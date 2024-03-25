/* The models user.js file is used to define the schema for the user collection. 
A schema is a blueprint for the structure of the documents in a collection. It defines the fields and the data types for the fields. 
In this case, we are defining the schema for the user collection. 
The user collection will store the user information, such as the name, email, and profile picture. 
We are using the mongoose.Schema class to define the schema. We are defining the fields using the type property of the Schema class. 
We are also specifying the required property to indicate that the field is required. We are also specifying the unique property to indicate that the field is unique. 
We are exporting the User model using the mongoose.model method. We are passing the name of the collection and the schema to the model method. 
The name of the collection is "User" and the schema is the userSchema. 
The model method returns a model object, which we are exporting as the User model. The model object has methods for interacting with the collection, such as finding, creating, updating, and deleting documents. 
The app/api/auth/%5B...nextauth%5D/route.js file is used to configure the authentication providers and define the session and sign-in behavior for NextAuth. 
We are importing the NextAuth and GoogleProvider classes from the next-auth/next and next-auth/providers/google modules. 
We are also importing the connectToDatabase function from the utils/database module. We are using the NextAuth function to configure the authentication providers. 
We are passing an object to the NextAuth function with the providers property. The providers property is an array of authentication providers. 
In this case, we are using the GoogleProvider class to configure the Google authentication provider. We are passing the client ID and client secret to the GoogleProvider class. 
The client ID and client secret are environment variables that we set in the .env.local file. We are also defining the session and sign-in behavior for NextAuth.
The session function is an async function that takes a session object as an argument.
The session object contains the user information. We are using the User.findOne method to find the user in the database.
We are passing the email from the session object to the findOne method. If the user exists in the database, then we are setting the user ID in the session object.
The signIn function is an async function that takes a profile object as an argument. The profile object contains the user profile information.
*/ 
import { Schema, model, models } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, "Please provide an email"], // The required property is used to indicate that the field is required.
        unique: [true, "This email already exists"], // The unique property is used to indicate that the field is unique. If it is set to true, then the field must be unique. The message is the error message that will be displayed if the field is not unique.
    },
    username: {
        type: String,
        required: [true, "Please provide a username"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"], // The match property is used to specify a regular expression that the field must match. If the field does not match the regular expression, then an error will be thrown. The message is the error message that will be displayed if the field does not match the regular expression. Regular expressions are used to validate strings. They are a sequence of characters that define a search pattern. They are used to match character combinations in strings. In this case, we are using a regular expression to validate the username field. The regular expression specifies that the username must contain 8-20 alphanumeric letters and be unique. The regular expression is enclosed in forward slashes. The regular expression is followed by a comma and the error message that will be displayed if the field does not match the regular expression.
    },
    image: {
        type: String,
    },
})

// The model method returns a model object, which we are exporting as the User model. The model object has methods for interacting with the collection, such as finding, creating, updating, and deleting documents.

// The "models" object is provided by the Mongoose library and stores all the registered models.
// If a model named "User" is already registered, we will use that model. Otherwise, we will create a new model and register it with the name "User".

const User = models.User || model("User", UserSchema) // if the model is already registered, we will use that model. Otherwise, we will create a new model and register it with the name "User".
export default User;