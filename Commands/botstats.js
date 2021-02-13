const time = require('ms')
let os = require ('os').platform();;
let cpu = require ('os').cpus()[0].model;;
module.exports = {
    name: "botstats",
    description: "This is a botstats command!",
    execute(message, args, Discord, client){
        let inline = true
        const uptime = time(client.uptime)
        message.channel.send('These are my statistics.')
const Embed = new Discord.MessageEmbed()
.addField("My Latency is:", `> ${Date.now() - message.createdTimestamp}ms`)
.addField("My API Latency is:", `> ${Math.round(client.ws.ping)}ms`)
.addField("My OS is:", `> ${os}`)
.setColor("RANDOM")
.setThumbnail("https://media.discordapp.net/attachments/798594125712326737/808783195940192296/b67e65c2ab0428da786c1f53ebfd4243.png")
.addField('I have been up for:', `> ${uptime}`)
.addField("My CPU is:", `> ${cpu}`)
message.channel.send(Embed);
    }
}
