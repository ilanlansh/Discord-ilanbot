//hello
const Discord = require('discord.js');

const client = new Discord.Client();
 
const prefix = ',,';
 
const fs = require('fs');

const token = fs.readFileSync("token.txt", 'utf-8');
 
client.commands = new Discord.Collection();
 
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles)
{
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once("ready", () =>
{
    console.log("ILANBOT IS ONLINE!!!!\n");
});

client.on("message", message =>
{
    if(message.content == "<:emergency_meeting:760134052651991112>")   // Emergency Meeting
    {
        client.commands.get('emergency_meeting').execute(message, null, client);
        return;
    }

    if(message.channel.id == "759784107399315457")   // React F to leaving message
    {
        client.commands.get('reactF').execute(message, null);
        return;
    }
    
    if(message.channel.id == "755051181499482222" && message.author.id == "716390085896962058")   // notifying members when a pokemon spawns
    {
        client.commands.get('pokemon').execute(message, null);
        return;
    }

    // =======================================================================================

    if(!message.content.startsWith(prefix) || message.author.bot) { return; }

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === "ping")
    {
        client.commands.get('ping').execute(message, args);
    }
    else if(command === "pong")
    {
        client.commands.get('pong').execute(message, args);
    }
    else if(command === "no!" || command === "no")
    {
        client.commands.get('no').execute(message, args);
    }
    else if(command === "log")
    {
        client.commands.get('log').execute(message, args);
    }
    else if(command === "keyboardify" || command === "key")
    {
        client.commands.get('keyboardify').execute(message, args);
    }
    else if(command === "youtube")
    {
        client.commands.get('youtube').execute(message, args);
    }
});

client.login(token);
