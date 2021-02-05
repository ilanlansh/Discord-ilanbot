// UNUSED

module.exports = 
{
    name: 'reactF',
    description: "every time someone leaves the server, the bot reacts F to the message.",
    execute(message, args)
    {
        message.react("767521067946082304");

        var today = new Date();

        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        if(h < 10) { h = '0' + h; }
        if(m < 10) { m = '0' + m; }
        if(s < 10) { s = '0' + s; }

        console.log('[' + h + ':' + m + ':' + s +"] someone left the server, added reaction to leaving message");
    }
}