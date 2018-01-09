//Built and made by:\\
//TheSavageTaco#6609\\
//bot is private, use not allowed without permission from me.\\
//Contact for any information\\

const Discord = require('discord.js');
const client = new Discord.Client();
const settings = require('./settings.json');
const chalk = require('chalk');
const fs = require('fs');
const moment = require('moment');
const ms = require("ms");
const randomPuppy = require('random-puppy');
require('./util/eventLoader')(client);

const log = message => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  log(`Loading a total of ${files.length} commands.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    log(`Preparing: ${props.help.name}... `);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.on('message', member => {

const swearWords = ['nigger', 'nig', 'spick', 'fag', 'faggot', 'NIG', 'Nig'];
const good = ['night', 'Night', 'youtube.com', 'https://www.youtube.com']
const link = ['https:', 'discord.gg', 'www.', '.com'];
  if( permlvl = 3) {
  } else
  if( good.some(word => message.content.includes(word)) ) {
  } else
  if( swearWords.some(word => message.content.includes(word)) ) {
    message.reply("watch your mouth!");
    message.delete('1')
  } else
  if( link.some(word => message.content.includes(word)) ) {
    message.reply("please don't post links!");
    message.delete('1')
  }
})
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let cha = client.channels.find('name', 'general');
  let mod = client.channels.find('name', 'logs');
  let welcome = args.slice(1).join(' ');
  let prefix = '~'
  if (message.content.startsWith(prefix + "welcome")) {
    

  const embed = new Discord.RichEmbed()
  .setColor(0x00AE86)
  .setTimestamp()
  .setThumbnail(member.user.avatarURL)
  .addField(`Welcome to F.U.N. ${member.user.tag}!`, `${welcome}`)
    return client.channels.get(cha.id).send({embed});
  /*const bed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .addField(`Action: User Joined\nUser Name: ${member.user.tag}`)
    return client.channels.get(mod.id).send({bed})
  //guild.message.defaultChannel.send({embed});*/
});
//log for user joins, still doesnt work\\
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let mod = client.channels.find('name', 'logs')
  const embed = new Discord.RichEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setDescription(`Action: User Join\nUser Name: ${member.user.tag}\nUser ID:${member.user.id}`)
    return client.channels.get(mod.id).send({embed});
});

client.on('message', message => {
  if (message.content === 'what is my avatar') {
    message.reply(message.author.avatarURL);
  }
});

client.elevation = message => {
  let settings = require('./settings.json');
  //let guild = member.guild;
  let permlvl = 0;
  //let mod_role = message.member.hasPermission("MANAGE_MESSAGES"); //now fixed, i think?
  if (message.channel.permissionsFor(message.member).hasPermission("MANAGE_MESSAGES")) permlvl = 2;
//  let admin_role = message.member.hasPermission("ADMINISTRATOR");
  if (message.channel.permissionsFor(message.member).hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === settings.ownerid) permlvl = 4;
  return permlvl;

};
/*client.on('message', message => {
	var bed = ['discord.gg']
	var bad = ['nigger', 'nig', 'spick', 'fag', 'faggot', 'NIG', 'Nig']
	var good = ['night']
  for (var i = 0; i < good.length; i++) {
		if (message.content.includes(good[i])) {
    } else
	for (var i = 0; i < bad.length; i++) {
		if (message.content.includes(bad[i])) {
			message.delete('1')
			message.reply('Watch your mouth!')
		} else
	for (var i = 0; i < bed.length; i++) {
    if (message.content.includes(bed[i])) {
      message.delete('1')
      message.reply('Please don\'t post links!')
        }
      }
    }
  }
})*/



function doMagic8BallVoodoo() {
    var rand = ['Yes', 'No', 'Why are you even trying?', 'NO', 'Maybe', 'Never', 'Yep', 'lol you wish', 'pluto is gay'];
    return rand[Math.floor(Math.random()*rand.length)];
}


client.on('message', message => {
	function ball() {
	    var rand = ['Yes', 'No', 'Why are you even trying?', 'What do you think? NO', 'Maybe', 'Never', 'Yep', 'Fuck off, you know you don\'t', 'Ahg my 8ball isn\'t working, try again later', 'Me no speaka englis'];

	    return rand[Math.floor(Math.random()*rand.length)];
		}
		if (message.content.startsWith('~8ball')) {
			message.channel.send(':8ball:' + ball() + ':8ball:');
		}
});
client.on('message', message => {
	function num() {
	    var rand = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'fuck off'];
			return rand[Math.floor(Math.random()*rand.length)];
		}
		if (message.content.startsWith('~pick')) {
			message.channel.send('My pick is: ' + num());
	}
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./commands/${command}`)];
      let cmd = require(`./commands/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};




var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
  console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
  console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});
/*
client.on('message', message => {
	if (message.content.startsWith('nigger', 'faggot')) {
		message.reply('Please watch your fucking mouth.')
		message.delete('1')

		//message.delete('5000')
}
});*/
//------------------------------------------------fun commands-----------------------------\\
var prefix = "~"
client.on('message', message => {
	if(!message.content.startsWith(prefix)) return;
	let args = message.content.split(' ').slice(1);
	var argresult = args.join(' ');
	let arg1 = client.user.setGame;

  if (message.content.startsWith(prefix + "thot")) {
    message.channel.send('❌NOW❌FOR❌A❌LIMITED❌TIME❌ONLY!!❌ \nBUY OUR NEWLY FORMULATED, ULTRA-POWERFUL THOT-🅱-GONE 🅱TCH REPELLANT!! 💥WORKS ON THE WIFE👧, THE OFFICE SECRETARY 🙊YOU HAD AN AFFAIR 👅💋WITH LAST WEEK AND TUMBLR SJWS!!💀WATCH AS ITS UNIQUE FORMULA IMMEDIATELY GETS TO WORK 💪DEFYING THE LAWS OF PHYSICS 📚TO MAKE THAT STUPID THOT🔞 SIMPLY DISAPPEAR!!💨 IT\'S LIKE MAGIC 😲ONLY IT\'S REEEEAAALLL!!!!!💯💯💯💯💯 BUY NOW AND GET ANOTHER✋5 ✋CANS OF THOT-🅱-GONE FOR FREE!! THAT\'S RIGHT!! 6 FOR THE PRICE OF ONE!! ORDER TODAY 🌞QUOTING THE CODE th50💣 AND RECIEVE A 💲FREE💲 THOTBLASTER 🔞9000 ANTI-🅱TCH SPRAY CANNON! IT HAS A 50 MILE RANGE🔫 SO YOU CAN HIT THAT 🅱TCH EVEN IF SHE HAS A RESTRAINING ORDER ON YOU...👌 NEVER WILL YOU HAVE TO LISTEN 😩TO😩 HER😩 COMPLAIN😩ABOUT YOU BEING TOO MUCH TO HANDLE AT :full_moon:!!👍💯 THOT-🅱-GONE... FOR THE PEOPLE YOU LOVE LEAST!💕💖')
  } else
	if (message.content.startsWith(prefix + "lizzy")) {
		message.channel.send("Lizzy eats ass")
	} else
  if (message.content.startsWith(prefix + 'fenix')) {
    message.channel.send('Fenix is gay')
  } else
  if(message.content.startsWith(prefix + 'about')) {
    message.reply('I am a private bot, contact <@284844427745427456> for information.')
  } else
  if (message.content.startsWith(prefix + 'dog')) {
    randomPuppy()
      .then(url => {
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setImage(url)

      message.channel.send({embed})
})
  } else
  if(message.content.startsWith(prefix + 'cat')) {
  const embed = new Discord.RichEmbed()
        .setColor(0x00AE86)
        .setImage('http://thecatapi.com/api/images/get?format=src&type=jpg')
  message.channel.send({embed})
  } else

	/*if (message.content.startsWith(prefix + "ash")) {
		message.channel.send("Ash es muy gey because she likes dick")
	} else
	//if (message.content.startsWith(prefix + "son")) {
	//	message.channel.send("I\'m not your "son". I\'m a grown woman. Thank you for taking so much time to type out this completely unnecessary criticism of a harmless comment on an inconsequential website! I bet you feel just fabulous right now that you called out a perfect stranger for no reason whatsoever. Be proud! Clearly you\'re adding much more to the conversation than I am and that\'s just great. Really. I\'m giving you a round of applause right now! Honestly. Thank you for making me see the error of my ways. Jackass.")
	//} else*/
	if (message.content.startsWith(prefix + "taco")) {
		message.channel.send('You mean daddy? ;)')
	} else
	if (message.content.startsWith(prefix + "invite")) {
		message.channel.send('I\'m private, contact @TheSavageTaco#6609 for info about me. The bot.')
	} else/*
	if (message.content.startsWith(prefix + "lolita")) {
		message.channel.send('Watch out, savage as fuck. Will roast you.')
	} else
	if (message.content.startsWith(prefix + 'gottem')) {
		message.channel.send('OOOOOOOOOOOOOOOOOOOOOO GOTTEM YOU JUST GOT ROASTED oooOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO')
	} else
	if (message.content.startsWith(prefix + 'pluto')) {
		message.channel.send('Pluto is a planet, dumbass.')
	} else*/
  if (message.content.startsWith('.prefix')) {
    message.channel.send('The current prefix for me is: \`\`~\`\`, type \n`\n`~help\n`\n` for commands')
  } else
	if(message.content.startsWith(prefix + 'fun')) {
		message.channel.send('`\`\`\Fun Commands\n---------------------------------------------------------------------\n~pick       Picks a number 1-10\n~8ball      It\'s a "magic" 8ball!\n~chuck      Gives you a random Chuck Norris fact!\n~dog/~cat     Sends a random dog/cat picture\nMore to be added later!\`\`\`')
	}
});

client.login(settings.token);
