module.exports = 
{
    name: 'ping',
    description: "this is a ping command!",
    execute(message, args)
    {
        message.channel.send("Pong!").then(m =>
            {
                let ping = m.createdTimestamp - message.createdTimestamp;
                m.edit(`Pong! **${ping}ms**`);
            });
    }
}