const TYPES = ["play", "watch", "listen", "stream"];

module.exports = 
{
    name: 'status',
    description: "this command changes the status of the bot",
    execute(message, args, client)
    {
        if(message.author.id == "381379655665713155")
        {
            let type = args[0];
            args.shift();
            let status = args.join(" ");

            if(TYPES.indexOf(type) == -1)
            {
                message.channel.send("please enter a valid Activity Type. [ `play` | `watch` | `listen` | `stream` ]");
                return;
            }

            if(status == "")
            {
                message.channel.send("please enter a status that isn't blank.");
            }

            var today = new Date();

            let h = today.getHours();
            let m = today.getMinutes();
            let s = today.getSeconds();

            if(h < 10) { h = '0' + h; }
            if(m < 10) { m = '0' + m; }
            if(s < 10) { s = '0' + s; }

            switch(type)
            {
                case "play":
                    client.user.setActivity(status, { type: 'PLAYING' });
                    message.channel.send(`status changed to **Playing ${status}**`);
                    console.log(`[${h}:${m}:${s}:] status changed to ` + `Playing ${status}`.bold());
                    break;
                case "watch":
                    client.user.setActivity(status, { type: 'WATCHING' });
                    message.channel.send(`status changed to **Watching ${status}**`);
                    console.log(`[${h}:${m}:${s}:] status changed to ` + `Watching ${status}`.bold());
                    break;
                case "listen":
                    client.user.setActivity(status, { type: 'LISTENING' });
                    message.channel.send(`status changed to **Listening to ${status}**`);
                    console.log(`[${h}:${m}:${s}:] status changed to ` + `Listening to ${status}`.bold());
                    break;
                case "stream":
                    client.user.setActivity(status, {
                        type: 'STREAMING',
                        url: 'https://www.twitch.tv/ilanlansh'
                    });
                    message.channel.send(`status changed to **Streaming ${status}**`);
                    console.log(`[${h}:${m}:${s}:] status changed to ` + `Streaming ${status}`.bold());
                    break;
            }
        }
        else
        {
            message.channel.send("You're not allowed to use this!")
        }
    }
}