import express from "express";
import dotenv from "dotenv";    
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

const app=express();

// middlewares
app.use(cors());
app.use(express.json());
await connectDB();

app.use("/api/auth", authRoutes);
// test routes
app.get("/",(req,res)=>{
    res.send("Backend is running sucessfully")
});

const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{
console.log(`server is running on the port ${PORT}`);
});