const moment = require("moment");

module.exports = {
    name: "userinfo",
    description: "This is a userinfo command!",
    execute(message, args, Discord, client){
        const member = message.mentions.members.last() || message.guild.members.cache.get(args[0]) || message.member;

        const trimArray = (arr, maxLen = 10) => {
            if (arr.length > maxLen) {
                const len = arr.length - maxLen;
                arr = arr.slice(0, maxLen);
                arr.push(` and ${len} more roles...`);
            }
            return arr;
        }

        const upperCase = str => {
            return str.toUpperCase().replace(/_/g, " ").split(" ")
                      .join(" ")
        }

        const titleCase = str => {
            return str.toLowerCase().split(" ")
                      .map(word => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
                      .join(" ")
        }

        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);

        let userFlags;
        if (member.user.flags === null) {
            userFlags = ''
        } else {
            userFlags = member.user.flags.toArray();
        }

        const Embed = new Discord.MessageEmbed()
            .setAuthor(`${member.user.tag}`, member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            .setThumbnail(member.user.displayAvatarURL({dynamic:true, size:512}))
            .addFields(
                { name: "Nickname", value: `> ${member.displayName}` || "None", inline: false },
                { name: "Joined Discord", value: `> ${moment(member.user.createdTimestamp).format("DD MMM YYYY")}`, inline: false },
                { name: "Joined Server", value: `> ${moment(member.joinedAt).format("DD MMM YYYY")}`, inline: false },
                { name: "Highest Role", value: `> ${member.roles.highest.id === message.guild.id ? "None" : member.roles.highest}`, inline: false },
                { name: "Roles", value: `> ${roles.length < 10 ? roles.join(", ") : roles.length > 10 ? trimArray(roles).join(", ") : "None"}`, inline: false }
            )
            .setColor(`BLUE`)
            .setFooter(`ID: ${member.user.id} `)
        message.channel.send(Embed)
    }    }