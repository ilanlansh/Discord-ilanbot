var map = new Map();

module.exports = 
{
    name: 'emergency_meeting',
    description: "when someone sends the emergency button emoji, @Among Us gets tagged and summoned to play among us.",
    execute(message, args)
    {
        if(message.member.roles.cache.find(r => r.id === "778250388616118352"))
        {
            if(message.channel.id == "757505110711730196")
            {
                if(message.author.id == "381379655665713155" || message.author.id == "535445949124837389")
                {
                    message.channel.send("> <:emergency_meeting:760134052651991112>\n<@&778250388616118352> was summoned for an emergency meeting by <@" + message.author.id + "> to play Among Us!!!!\n https://discord.gg/hjP53CwzmQ");
                    // message.delete();

                    var today = new Date();

                    let h = today.getHours();
                    let m = today.getMinutes();
                    let s = today.getSeconds();

                    if(h < 10) { h = '0' + h; }
                    if(m < 10) { m = '0' + m; }
                    if(s < 10) { s = '0' + s; }

                    console.log('[' + h + ':' + m + ':' + s +"] @Among Us was summoned to play by " + message.author.tag);
                }
                else
                {
                    if(map.has(message.author.id))
                    {
                        if(new Date().getTime() - map.get(message.author.id) >= 600000)
                        {
                            map.set(message.author.id, new Date().getTime());
                            message.channel.send("> <:emergency_meeting:760134052651991112>\n<@&778250388616118352> was summoned for an emergency meeting by <@" + message.author.id + "> to play Among Us!!!!\n https://discord.gg/hjP53CwzmQ");
                            // message.delete();

                            var today = new Date();

                            let h = today.getHours();
                            let m = today.getMinutes();
                            let s = today.getSeconds();

                            if(h < 10) { h = '0' + h; }
                            if(m < 10) { m = '0' + m; }
                            if(s < 10) { s = '0' + s; }

                            console.log('[' + h + ':' + m + ':' + s +"] @Among Us was summoned to play by " + message.author.tag);
                        }
                        else
                        {
                            let tLeft = 600000 - (new Date().getTime() - map.get(message.author.id));
                            let mLeft = Math.floor(tLeft / 60000);
                            let sLeft = Math.floor((tLeft - mLeft) / 10000);
                            
                            message.channel.send("You can't use this yet!!!\nYou have to wait at least 10 minutes before each button press.\n\n**Time Left:  ** " + mLeft + " minutes and " + sLeft + " seconds.\n\n.");
                        }
                    }
                    else
                    {
                        map.set(message.author.id, new Date().getTime());
                        message.channel.send("> <:emergency_meeting:760134052651991112>\n<@&778250388616118352> was summoned for an emergency meeting by <@" + message.author.id + "> to play Among Us!!!!\n https://discord.gg/hjP53CwzmQ");
                        // message.delete();

                        var today = new Date();

                        let h = today.getHours();
                        let m = today.getMinutes();
                        let s = today.getSeconds();

                        if(h < 10) { h = '0' + h; }
                        if(m < 10) { m = '0' + m; }
                        if(s < 10) { s = '0' + s; }

                        console.log('[' + h + ':' + m + ':' + s +"] @Among Us was summoned to play by " + message.author.tag);
                    }
                }
            }
            else
            {
                message.channel.send("You can't use that here!!!\nThis feature is only available in <#757505110711730196>")
            }
        }
        else
        {
            message.channel.send("You're not allowed to use this feature.")
        }
    }
}