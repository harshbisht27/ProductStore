import mongoose, { mongo } from "mongoose";

export const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_DB_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    }
    catch(err){
        console.log(err);
        process.exit(1);    //1code means exit with failure , 0 means success
    }
}