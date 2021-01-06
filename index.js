//Get discord.js
const Discord = require('discord.js');

//Create client instance as bot
const bot = new Discord.Client();

const GF = require('./GF');
const HF = require('./HF');
const TKW = require('./TKW');
const PFO = require('./PFO');
const RV = require('./RV');
const LA = require('./LA');
const BE = require('./BE');
const SON = require('./SON');

//Set listener on 'ready'
bot.on('ready', () => {
  console.log('Gacha ready!');
});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'The Keen Wetland') {
    message.channel.sendMessage(TKW.pull());
  }

});
//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'Grass Field') {
    message.channel.sendMessage(GF.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'The High Field') {
    message.channel.sendMessage(HF.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'Pine Forest') {
    message.channel.sendMessage(PFO.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'River') {
    message.channel.sendMessage(RV.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'Lake') {
    message.channel.sendMessage(LA.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'Beach') {
    message.channel.sendMessage(BE.pull());
  }

});

//Set listener on 'message'
bot.on('message', message => {
  if (message.content === 'Shore of Nascency') {
    message.channel.sendMessage(SON.pull());
  }

});



bot.login('NzEzMjk0OTExMzE4Nzg2MTAw.XseBpw.UbsOZs9ecnEpmQVl2uasqlBPae4');
