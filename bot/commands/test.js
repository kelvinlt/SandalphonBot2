exports.run = (client, message, args) => {
    console.log(args);
    message.channel.send({embed: {
            title: "This is an embed",
            color: 3447003,
            description: "A very simple Embed!"
        }}).catch(console.error);
}
