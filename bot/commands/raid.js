exports.run = (client, message, args) => {
    var gbfRole = message.guild.roles.find("name", "GBF");
    message.channel.send(gbfRole+" get into the raid!"+ " " + message.author + " Necesita ayuda!");
}
