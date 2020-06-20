const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.login(config.token);


client.on('message', message => {
    var MessageMinuscule = message.content.toLowerCase()//afin de pas prendre en compte les majuscule ou minuscule 
    if (user.id !== client.user.id && )//pour ignorer les msg du bot
    {
        if (contenuMessage === '!help') {

        }


        if (contenuMessage === '!présent' || contenuMessage === '!présente') {

        }

        if (contenuMessage === '!liste élève') {

        }

        if (contenuMessage.slice(0, 10) == '!présences') {//si message commence par !présences

        }
        if (contenuMessage.slice(0, 6) == '!cours') {//si message commence par !cours

        }
        if (contenuMessage.slice(0, 5) == '!link') {//si message commence par !link

        }
        if (contenuMessage.slice(0, 7) == '!delete') {//si message commence par !delete

        }

    }







});
