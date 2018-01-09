exports.run = (client, message, args) => {
  require("request")("http://api.icndb.com/jokes/random",
  function(err, res, body) {
    var data = JSON.parse(body);
    if (data && data.value && data.value.joke) {
    message.channel.send(data.value.joke)
  }
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['c', 'chuck'],
  permLevel: 0
};

exports.help = {
  name: 'chuck',
  description: 'Displays a random Chuck Norris joke.',
  usage: 'chuck'
};
