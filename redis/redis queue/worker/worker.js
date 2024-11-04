const Redis = require('ioredis');

const redis = new Redis({
    username: "default",
    password: "UzTkPIfz6GfVES1qt3WiE1xr4cLrgy0K",
    port: 13161,
    host: 'redis-13161.c305.ap-south-1-1.ec2.redns.redis-cloud.com'
}); 


async function codeEx(){
    while(1){
        const code = await redis.brpop('submission', 0);
        await new Promise(resolve)

            setTimeout(() => {
                console.log();
                res.json({message: "code processed successfully"});
            }, 2000);
        }
    }


codeEx();