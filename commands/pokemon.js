module.exports = 
{
    name: 'pokemon',
    description: "this command notifies members if the poketwo bot spawns a pokemon!",
    execute(message, args)
    {
        try
        {
            if(message.embeds[0].title == "A wild pokémon has appeared!")
            {
                var today = new Date();

                let h = today.getHours();
                let m = today.getMinutes();
                let s = today.getSeconds();

                if(h < 10) { h = '0' + h; }
                if(m < 10) { m = '0' + m; }
                if(s < 10) { s = '0' + s; }

                console.log('[' + h + ':' + m + ':' + s +"] found pokemon spawn embed, notifying members");
                message.channel.send("<@381379655665713155> A POKEMON HAS APPEARED CATCH IT BEFORE DVIR!!!!");
                message.channel.send("<@458978941663707147> A POKEMON HAS APPEARED CATCH IT BEFORE DVIR!!!!");
            }
        }
        catch
        {
            return;
        }
    }
}