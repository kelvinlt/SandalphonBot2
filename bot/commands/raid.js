exports.run = (client, message, args) => {
    var gbfRole = message.guild.roles.find("name", "GBF");
    var element;
    var dificulty;

    if(args[0]=="-h"){
        message.channel.send({

            "embed": {
                "title": "Ayuda para Comando !raid",
                "description": "Estructura basica: !raid [boss] [element]",
                "url": "https://discordapp.com",
                "color": 15013439,
                "footer": {
                    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                    "text": "footer text"
                },
                "author": {
                    "name": "Doc",
                    "url": "https://discordapp.com",
                    "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
                },
                "fields": [

                    {
                        "name": "Bosses",
                        "value": " c  - Celeste \nc  - Celeste \nc  - Celeste \nc  - Celeste \nc  - Celeste \nc  - Celeste \n",
                        "inline": true
                    },
                    {
                        "name": "Dificultades",
                        "value": " n - normal \nh - hard \no - Omega",
                        "inline": true
                    }
                ]
            }
        }).catch(console.error);
        return null;
    }
    switch (args[0]){
        case "t":
            element=client.emojis.find("name", "wind");
            break;
        case "y":
            element=client.emojis.find("name", "earth");
            break;
        case "c":
            element=client.emojis.find("name", "dark");
            break;
        case "le":
            element=client.emojis.find("name", "water");
            break;
        case "lu":
            element=client.emojis.find("name", "light");
            break;
        default:
            element="unknown";
    }
    switch (args[1]){
        case "n":
            dificulty="Normal";
            break;
        case "h":
            dificulty="Dificil";
            break;
        case "o":
            dificulty="Omega";
            break;
        default:
            dificulty="Unknown";
    }
    message.channel.send(element+" Dificultad: " + dificulty +  "\n"+gbfRole+" get into the raid!"+ " " + message.author + " Necesita ayuda!");
}
