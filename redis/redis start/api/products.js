
const getProducts= async ()=>{

    
    const products = [{
        id:1,
        name: "abc",
        price: 1234  
    }]
    
    const response=await new Promise((resolve, reject )=>{
        setTimeout(() => {
            resolve(products)
        },2000);
    });

    return response;
}

module.exports=getProducts;