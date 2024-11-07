import express,{Request,Response,NextFunction} from "express";
import dotenv from "dotenv";
import connectDb from "./config/db";
import AppError from "./utils/AppError";
import globalErrorHandler from "./utils/GlobalErrorHandler";
import router from "./routes/chat";


dotenv.config({path:'../src/.env'});

const app = express();

connectDb();

app.use(express.json());

app.use("/api/v1",router)


app.use(globalErrorHandler);


const PORT = 8877;

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});

