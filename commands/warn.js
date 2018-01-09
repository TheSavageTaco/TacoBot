const Discord = require('discord.js');
exports.run = (client, message, args) => {
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  let modlog = client.channels.find('name', 'warns'); //warn logs channel!
  if (!modlog) return message.reply('I cannot find a mod-log channel');
  if (reason.length < 1) return message.reply('You must supply a reason for the warning.');
  if (message.mentions.users.size < 1) return message.reply('You must mention someone to warn them.').catch(console.error);
  user.send(`You got warned by **<@${message.author.tag}>** for \`\`${reason}.\`\``)

  message.channel.send(`${user.tag} was warned!`)
  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setDescription(`**Action:** Warning\n**Target:** ${user.tag}\n**Moderator:** ${message.author.tag}\n**Reason:** ${reason}`);
  return client.channels.get(modlog.id).send({embed});
  //user.send(`You got warned by **<@${message.author.id}** for ``${reason}.```)
  //message.channel.send(`${user.tag} was warned!`)
//  user.send(`You got warned by **<@${message.author.id}** for ``${reason}.```)
  //need to get a delete command, clean up chat message.delete('5000')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'warn',
  description: 'Issues a warning to the mentioned user.',
  usage: 'warn [mention] [reason]'
};
