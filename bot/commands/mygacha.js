var array = ["https://imgur.com/PeWWcmW","https://i.redd.it/smir0luhtcg01.jpg",
    "https://imgur.com/r/Granblue_en/iIWvyiL","https://i.imgur.com/idMYAHx.jpg"];
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

