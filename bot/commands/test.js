exports.run = (client, message, args) => {
    message.channel.send("!test").catch(console.error);
}
