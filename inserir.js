const redis = require("redis");
const client = redis.createClient();
 
client.on("error", function(error) {
  console.error(error);
});
 
client.append("fadelrequests", `${JSON.stringify({chave: "valor"})}|`)