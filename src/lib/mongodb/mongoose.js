import mongosse from "mongoose"
let initialized=false;
export const connect =async()=>{
    mongoose.set("strictQuery",true);
    if (initialized){
        console.log("MongoDb connected")
        return;
    }
    try{
        await mongosse.connect(process.env.MONGODB_URI,{
            dbName:"clerk",
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log("MongoDb connected")
        initialized=true;
    }catch(error){
        console.log(error)

    }
}