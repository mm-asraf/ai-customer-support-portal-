import mongoose,{ConnectOptions} from "mongoose";
import {Request,Response} from "express";

import DatabaseConnectionExceptionHandler from "../utils/DatabaseConnectionExceptionHandler";


const connectDb = async():Promise<void> => {


    try{
        const conn = await mongoose.connect("mongodb://localhost:27017/ai-customer-support-db", {
           
        } as ConnectOptions);

        console.log(`MongoDB connected at ${conn.connection.host}`);

    }catch(error){ 
        console.log(error);
        throw new DatabaseConnectionExceptionHandler("Database connection failed", 500,"Failed",error);
        process.exit(1);

    }

}
export default connectDb;


