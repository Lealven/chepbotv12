const Discord = require('discord.js');
const client = new Discord.Client();
const config =require("./config.json");
const prefix = config.prefix

client.on('ready', () => {
  console.log(`Bot ${client.user.tag} Adıyla Aktif Oldu!`);
});


client.login(config.token);