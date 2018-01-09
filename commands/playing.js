exports.run = (client, message, args) => {
  client.user.setGame('Have Fun!');
  var argresult = args.join(' ');
  client.user.setGame(argresult);
  message.channel.send(`Now playing \`${argresult}\``);
};


  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
  };

  exports.help = {
    name: 'playing',
    description: 'Sets the "Now Playing" for the bot',
    usage: 'playing [text].'
  };
