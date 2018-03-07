var array = ["https://media.giphy.com/media/14ipPO3h23LoTm/giphy.gif","https://media.giphy.com/media/IafNxGr6Xx612/giphy.gif",
    "https://media.giphy.com/media/qFr3OqwvOtxxC/giphy.gif","https://media.giphy.com/media/xT8qBifoOp1L3cPoeQ/giphy.gif","https://media.giphy.com/media/ezsfZh1vGrSes/giphy.gif"];
var maximum = array.length - 1;
var minimum = 0;

function randomNumber() {
    var answer = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
    return answer;
}

exports.run = (client, message, args) => {
    var temporal = randomNumber();
    message.channel.send(array[temporal]).catch(console.error);
    console.log(temporal);
}

