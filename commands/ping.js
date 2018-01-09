exports.run = (client, message) => {
  function ball() {
	    var rand = ['Also, why are you doing this?', 'I\'m working!', 'Does anyone even use this?'];

	    return rand[Math.floor(Math.random()*rand.length)];
}
      message.channel.send('Ping?')
    .then(msg => {
      msg.edit(`Pong! took:\` ${msg.createdTimestamp - message.createdTimestamp}ms\`. ` + ball());
    })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping/Pong command. I wonder what this does? /sarcasm',
  usage: 'ping'
};
