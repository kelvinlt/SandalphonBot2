const fs = require("fs");
const raidBasic = require("../raidBasic.json");

function save(autor) {
    fs.readFile("./raids.json","UTF-8",function (err, data) {
        if(err){
            console.log(err);
        }else{
            console.log(data);
            var json=JSON.parse(data);
            var exist=true;
            for (var i=0; i<json.length; i++){
                if(json[i].nombre===autor){
                    exist=false;
                }
            }
            if(exist){
                json.push({"nombre":autor, "bosses":raidBasic});
                fs.writeFile("./raids.json",JSON.stringify(json), function (err) {
                    if(err){
                        console.log(err)
                    }else{
                        console.log("SAVED!")
                    }
                })
            }

        }
    });


}

exports.run = (client, message, args) => {
    console.log(new Date());
    save(message.author.toString());
}
