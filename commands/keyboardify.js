module.exports = 
{
    name: 'keyboardify',
    description: "this command sends passed argument as the server's keyboard keys emojis",
    execute(message, args)
    {
        let letters = "abcdefghijklmnopqrstuvwxyz0123456789 ";
        let thing = "";
        for(i of args)
        {
            thing += i + ' ';
        }

        if(thing.length > 70)
        {
            message.channel.send("THE MESSAGE IS TOO LONG!!!!")
            return;
        }

        let sentM = "";
        for(i of thing)
        {
            if(!letters.includes(i.toLowerCase()) && i != "\n")
            {
                message.channel.send("This command currently supports letters and numbers only.");
                return;
            }

            if(i == ' ') // || i == "\n")
            {
                sentM += "<:transparent:773279201193230356> ";
            }
            else
            {
                var emoji = message.guild.emojis.cache.find(emoji => emoji.name == i.toUpperCase() + "_key");
                sentM += '<:' + i.toUpperCase() + "_key:" + emoji.id + "> ";
            }
        }
        message.channel.send(sentM);
    }
}