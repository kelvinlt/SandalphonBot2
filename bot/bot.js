const Discord = require("discord.js");
const client = new Discord.Client();
const server = new Discord.Guild();
const config = require("./config.json");
const fs = require("fs");
const raids = require("./raids.json");


client.login(config.token);

client.on("ready", () => {
  client.user.setActivity("Comandos con prefix !");
  console.log("===========================================");
  console.log("BOT SANDALPHON HAS BEEN STARTED!");
  console.log("PARADAISU LOSTO!");
  console.log("===========================================");
});

client.on("guildMemberAdd", (member) => {
    console.log(`New User "${member.user.username}" has joined "${member.guild.name}"` );
    member.guild.channels.get("welcome").send(`"${member.user.username}" has joined this server`);
});

client.on("message", message => {
  if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args, raids);
  } catch (err) {
    console.error(err);
  }
});


