const time = require('ms')

module.exports = {
    name: "botstats",
    description: "This is a botstats command!",
    execute(message, args, Discord, client){
        let inline = true
        const uptime = time(client.uptime)
        message.channel.send('These are my statistics.')
const Embed = new Discord.MessageEmbed()
.addField("My Latency is:", `${Date.now() - message.createdTimestamp}ms`, inline)
.setColor("RANDOM")
.addField("My API Latency is:", `${Math.round(client.ws.ping)}ms`, inline)
.addField('I have been up for:', uptime)
message.channel.send(Embed);
    }
}