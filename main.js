
const Discord = require('discord.js');
require('discord-reply');
require('dotenv').config();
const fs = require('fs');

const client = new Discord.Client();
 
const prefix = ',,';
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

const IDs = 
{
    ownerUserID:      process.env.OWNERUSERID,
    coOwnerUserID:    process.env.COOWNERUSERID,
    coOwnerRoleID:    process.env.COOWNERROLEID,
    emojiID:          process.env.EMOJIID,
    SussyBakaRoleID:  process.env.SUSSKYBAKAROLEID,
    generalChannelID: process.env.GENERALCHANNELID,
    SussyBakasVCID:   process.env.SUSSYBAKASVCID
}

client.once("ready", () =>
{
    console.log(`Logged in as ${client.user.tag}!\n`);
    
    client.user.setStatus("Online");
    client.user.setActivity("𝒊𝒍𝒂𝒏𝒍𝒂𝒏𝒔𝒉's server", { type: 'WATCHING' });
});

client.on("message", message =>
{
    if(message.content == `<:emergency_meeting:${IDs.emojiID}>`)   // Emergency Meeting
    {
        client.commands.get('emergency_meeting').execute(message, IDs);
        return;
    }

    /** UNUSED
    * 
    * if(message.channel.id == "(old-goodbye-channel's-id)")
    * {
    *     client.commands.get('reactF').execute(message, null);
    *     return;
    * }
    * 
    * if(message.channel.id == "(old-pokemon-channel's-id)" && message.author.id == "(pokemon-bot's-id)")
    * {
    *     client.commands.get('pokemon').execute(message, null);
    *     return;
    * }
    * 
    */

    // ======================================================================================

    if(!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping")
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === "no!" || command === "no")
    {
        client.commands.get('no').execute(message, args);
    }
    else if(command === "log")
    {
        if(message.author.id == IDs.ownerUserID)
        {
            client.commands.get('log').execute(message, args);
        }
    }
    else if(command === "keyboardify" || command === "key")
    {
        client.commands.get('keyboardify').execute(message, args);
    }
    else if(command === "youtube")
    {
        client.commands.get('youtube').execute(message, args);
    }
    else if(command === "status")
    {
        client.commands.get('status').execute(message, args, client);
    }
});

client.on("guildMemberAdd", member =>
{
    // adds a co-owner role to my discord server's co-owner automatically when he joins
    if(member.id == IDs.coOwnerUserID)
    {
        let coOwnerRole = member.guild.roles.cache.find(role => role.id === IDs.coOwnerRoleID);
        member.roles.add(coOwnerRole);
    }
});

client.login(process.env.TOKEN);
