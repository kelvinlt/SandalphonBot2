exports.run = (client, message, args) => {
    var time = new Date().toTimeString();
    var res = time.split(" ");
   message.channel.send(res[0]).catch(console.error);
   console.log(new Date());
}
