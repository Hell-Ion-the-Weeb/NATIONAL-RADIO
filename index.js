const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const ytdl = require('ytdl-core');
const token = config.token;

client.on('ready', () => {

var Songs2 = [
    'https://youtu.be/G4nqsKeJJ-A',
    'https://youtu.be/l2LXLrs9074',
    'https://youtu.be/29to5lIFUb4',
    'https://youtu.be/AkE-XEwuRtg',
    'https://youtu.be/GW6GSa14xXI',
    'https://youtu.be/pNS63CVU-QQ',
    'https://youtu.be/08-GLriR11k',
    'https://youtu.be/_MR-YdtTdN8',
    'https://youtu.be/9KMaqZ97OBo',
    'https://youtu.be/_yYEEfg59FE',
    'https://youtu.be/Qr0WT-3TiZ4',
    'https://youtu.be/ohr843uGxaE',
    'https://youtu.be/VoF9HUvYPKs'
]

var Song = Songs2[Math.floor(Math.random() * Songs2.length)];

ytdl.getInfo(Song).then(async info => {

    console.log('Ready')

    let Vchannel = client.channels.cache.get(config.VC_id);

    Vchannel.join().then(connection => {
        const Play = async () => {

            var Song = await Songs2[Math.floor(Math.random() * Songs2.length)];

                connection.play(ytdl(Song, {highWaterMark: 1<<25})).on('finish', Play)
        }
        Play()
    });

    const arrayOfStatus = [
        `${info.videoDetails.title}`,
        `Nationalist Radio`
    ];

    let index = 0;
    setInterval(() => {
        if(index === arrayOfStatus.length) index = 0;
        const Status = arrayOfStatus[index];   
        client.user.setActivity(Status, { type: "LISTENING" })
        index++;
    }, 10000)
});

});

client.login(token);