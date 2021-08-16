module.exports = 
{
    name: 'log',
    description: "this command logs someting in the console",
    execute(message, args)
    {
        var today = new Date();

        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();

        if(h < 10) { h = '0' + h; }
        if(m < 10) { m = '0' + m; }
        if(s < 10) { s = '0' + s; }

        console.log(args.join(' '));
      
    }
}