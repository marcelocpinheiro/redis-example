const redis = require("redis");
const client = redis.createClient();
 
client.on("error", function(error) {
  console.error(error);
});
 
client.get("fadelrequests", (err, valor) => {
    const reqs = valor.split("|").map((v) => {
        if(v) return JSON.parse(v)
    })

    console.log(reqs)

    client.del("fadelrequests")
})
