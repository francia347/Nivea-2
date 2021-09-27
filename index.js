const Discord = require("discord.js");
const  client = new Discord.Client();

client.on("ready", () => {
  var generalChannel = client.channels.cache.get(891777940063408139)

  generalChannel.send("Hola a todo el mundo")
  
   console.log("Estoy listo!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login("ODkxNzgyNDk4MDQ3MTExMTk4.YVDXLA.toAedpk00fehnONvhf764FqtSMM");             