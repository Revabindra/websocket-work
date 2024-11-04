const express = require('express');
const Redis = require('ioredis');

const redis = new Redis({
    username: "default",
    password: "UzTkPIfz6GfVES1qt3WiE1xr4cLrgy0K",
    port: 13161,
    host: 'redis-13161.c305.ap-south-1-1.ec2.redns.redis-cloud.com'
}); 



const port = 3000;
const app = express();

app.use(express.json());

app.post('/submit',async (req, res)=>{
    const {problemId, userId, code }= req.body;

    await redis.lpush('submission', JSON.stringify({problemId, userId, code}));

    res.send("code submitted successfully");
})

app.get('/', (req, res)=>{
    res.send("coding...");
})

app.listen(3000, (req, res)=>{
    console.log('server chl gya');
})