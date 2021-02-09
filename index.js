const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

const prefix = '!';

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./Commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./Commands/${file}`);

    client.commands.set(command.name, command);
}
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ + /);
    const command = args.shift().toLowerCase()

    if(command === 'ping'){
        client.commands.get('ping').execute(message, args);
    }

    if(command === 'worldclock'){
        client.commands.get('worldclock').execute(message, args, Discord);
    }

    if(command === 'botstats'){
        client.commands.get('botstats').execute(message, args, Discord, client);
    }

    if(command === 'meme'){
        client.commands.get('meme').execute(message, args, Discord, client);
    }
});




client.once('ready', () => {
    console.log('Bot is now online!');
});


client.login('TOKEN')
