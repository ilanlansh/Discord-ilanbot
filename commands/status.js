const TYPES = ["play", "watch", "listen", "stream"];
module.exports = 
{
    name: 'status',
    description: "this command changes the status of the bot (hopefully)",
    execute(message, args, client)
    {
        if(message.author.id == "381379655665713155")
        {
            console.log(args);

            // let type = args[0];
            // let status = args.shift().join(" ");

            // if(TYPES.indexOf(type) == -1)
            // {
            //     message.channel.send("please enter a valid Activity Type. [ `play` | `watch` | `listen` | `stream` ]");
            //     return;
            // }

            // switch(type)
            // {
            //     case "play":
            //         client.user.setActivity(status, { type: 'PLAYING' });
            //         break;
            //     case "watch":
            //         client.user.setActivity(status, { type: 'WATCHING' });
            //         break;
            //     case "listen":
            //         client.user.setActivity(status, { type: 'LISTENING' });
            //         break;
            //     case "stream":
            //         client.user.setActivity(status, {
            //             type: 'STREAMING',
            //             url: 'https://www.twitch.tv/ilanlansh'
            //         });
            //         break;
            // }
        }
        else
        {
            message.channel.send("You're not allowed to use this!")
        }
    }
}