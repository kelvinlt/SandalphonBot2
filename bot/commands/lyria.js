var array = ["https://imgur.com/IhZoOK0","https://imgur.com/VXpgdY0",
    "https://imgur.com/BSbKkIe","https://imgur.com/kky8fW4"];
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

