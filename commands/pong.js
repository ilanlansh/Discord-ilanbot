module.exports = 
{
    name: 'pong',
    description: "this is a pong command!",
    execute(message, args)
    {
        message.channel.send("ping!");
    }
}