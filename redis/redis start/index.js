const express = require('express');
const Redis = require("ioredis");

const getProducts= require('./api/products');
const app = express();
const redis = new Redis();

const port = 3000;

app.get('/', (req, res)=>{
    res.send("this is the home page");
})

app.get('/products', async (req, res)=>{
    const products = await redis.get('productlist');
    if(products){
        console.log(products);
        res.json(JSON.parse(products));
    }

    const response= await getProducts();
    await redis.set('productlist', JSON.stringify(response), 'EX', 60);
    res.json(response);
})

app.listen(port, ()=>{
    console.log("server chl gya");
} )