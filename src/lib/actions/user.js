import User from "../models/usermodel";
import { connect } from "../mongodb/mongoose";

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_address,
  username
) => {
 try{
  await connect();
  const user = await User.findOneAndUpdate(
    { clerkId: id },
    {
      $set: {
        firstName: first_name,
        lastName: last_name,
        avatar: image_url,
        email: email_address[0].email_address,
        username: username,
      },
    },
    { new: true, upsert: true }
  );

  return user;
}catch(error){
    console.log("Error creating or updating user",error)
}
}
export const deleteUser=async (id)=>{
    try{
        await connect();
        await User.findOneAndDelete({clerkId:id});
    }catch(error){
        console.log("error in deleting user",error);
    }
}
