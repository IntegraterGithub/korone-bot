var jokes = require("one-liner-joke")
module.exports = {
    name: "joke",
    description: "Joke cmd", 
    execute(message, args){
message.reply(jokes.getRandomJoke().body)
    }
}