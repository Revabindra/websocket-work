import express from "express";
import sendMessage from "../controllers/message.cotrollers.js"
import verifyRoute from "../middleware/verifyRoute.js";


//router.get('/');

const router=express.Router();
router.post('/send/:id',verifyRoute,sendMessage)

export default router




