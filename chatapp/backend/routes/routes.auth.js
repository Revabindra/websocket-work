import express from 'express'
import {signup} from "../controllers/auth.controllers.js"
import {login} from "../controllers/auth.controllers.js"
const router=express.Router()

router.post('/signup',signup)
router.post('/login',login)  

router.post('/logout',(req,res)=>{
    res.send("logout")
})

export default router 