var map = new Map();

module.exports = 
{
    name: 'emergency_meeting',
    description: "when someone sends the emergency button emoji, @Among Us gets tagged and summoned to play among us.",
    execute(message, IDs)
    {
        const M = `> <:emergency_meeting:${IDs.emojiID}>\n<@&${IDs.proAURoleID}> was summoned for an emergency meeting by <@${message.author.id}> to play Among Us!!!!\nhttps://discord.gg/JMhEqf3R4k`;
        
        // only available in #general
        if(!(message.channel.id === IDs.generalChannelID))
        {
            message.channel.send(`You can't use that here!!!\nThis command is only available in <#${IDs.generalChannelID}>`);
            return;
        }
 
        // administrators bypass all requirements
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            message.channel.send(M);
            return;
        }
        
        // only members with "pro among us" role are allowed to use this
        if(!message.member.roles.cache.find(role => role.id === IDs.proAURoleID))
        {
            message.channel.send("You're not allowed to use this.");
            return;
        }
       
        if(map.has(message.author.id))
        {
            if(new Date().getTime() - map.get(message.author.id) >= 600000)
            {
                map.set(message.author.id, new Date().getTime());
                message.channel.send(M);
            }
            else
            {
                let tLeft = 600000 - (new Date().getTime() - map.get(message.author.id));
                let mLeft = Math.floor(tLeft / 60000);
                let sLeft = Math.floor((tLeft - mLeft) / 10000);
                
                message.channel.send(`You can't use this yet!!!\n
                                      You have to wait at least 10 minutes before each button press.\n
                                      **Time Left:**  ${mLeft} minutes and ${sLeft} seconds.`);
            }
        }
        else
        {
            map.set(message.author.id, new Date().getTime());
            message.channel.send(M);
        }
    }
}