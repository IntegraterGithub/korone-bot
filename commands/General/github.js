var fetch = require("node-fetch");
module.exports = {
    name: "github",
    execute(message, args){
        if(!args[0]) return message.reply("Please provide a user to search on github!");
        fetch("https://api.github.com/users/" + args.join(" " )).then((r) => {
return r.json()
        }).then((result) => {
        var messageToSend = "";
        messageToSend += 'Name: ' + result.name ;
        messageToSend += '\nFollowers:' + result.followers;
        messageToSend += "\nFollowing: " + result.following;
        messageToSend += "\nCompany: " + result.company ? result.company : "No company";

        message.reply(messageToSend); 


        }).catch(err => {
            message.reply("the requested user does not exist!");
            
        })
    }
}