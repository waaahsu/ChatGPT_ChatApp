import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import OpenAI from 'openai';
import openAiRoutes from "./routes/openai.js";
/*CONFIGURATIONS*/
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:true}));
app.use(cors());

/*OPENAI*/
export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY, // This is also the default, can be omitted
  });
/*ROUTES*/
app.use("/openai",openAiRoutes);

/*SERVER SETUP*/
const PORT =process.env.PORT || 9000;
app.listen(PORT, ()=>{
    console.log(`example app listening at http://localhost:${PORT}`);
});