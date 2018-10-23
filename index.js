const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready" , function() {
  bot.user.setGame("Test en cour");
  console.log("Le bot a bien ete connecté");
});

bot.login("NTA0MzYxODU2NTY0MTk5NDQ3.DrD7IA.ik-1m3zGPzpN_StqTN4c_06lm7I");
