    
module.exports = {
    name: "coinflip",
    description: "This is a coinflip command!",
    execute(message, args, Discord, client){
        let choice = Math.floor(Math.random() * 2)
    
        if(choice === 0) return message.reply('It was heads!')
        if(choice === 1) return message.reply('It was tails!')
        }
}