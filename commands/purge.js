exports.run = function(client, message, args) {
  let mod = client.channels.find('name', 'logs');
  let messagecount = parseInt(args.join(' '));
  if (messagecount = '') return message.reply('You must mention someone to warn them.').catch(console.error);
  message.channel.fetchMessages({
      limit: messagecount
  }).then(messages => message.channel.bulkDelete(messages));
  message.reply(`${messagecount} messages were deleted.`);
    //.then(msg => {
    //msg.delete(1000)
  //})
  //.catch

  //measage.reply.delete('5000');
  //else
  //message.reply("You can\'t delete messages, dumbass.")
  //message.delete.reply('1024')
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'prune',
  description: 'Removes X amount of messages from a given channel. For mod use.',
  usage: 'prune <number>'
};
