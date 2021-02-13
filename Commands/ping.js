module.exports = {
    name: "ping",
    description: "This is a ping command!",
    execute(message, args, Discord, client){
        message.channel.send('Pong!')
        const Embed = new Discord.MessageEmbed()
        .addField("My Latency is:", `> ${Date.now() - message.createdTimestamp}ms`)
        .setColor("RANDOM")
        .setThumbnail('https://media.discordapp.net/attachments/798594125712326737/808933236507017236/ff8c49a85b7fbda0110c66353a9db71e.png')
        message.channel.send(Embed);
    }
}
