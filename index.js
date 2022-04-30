const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const ytdl = require('ytdl-core');
const token = config.token;

client.on('ready', () => {
    console.log('Ready')

    var Songs = [
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
        'https://youtu.be/VoF9HUvYPKs',
        'https://youtu.be/ihGFpjMxNtg',
        'https://youtu.be/hvrn_GWCcXA',
        'https://youtu.be/NlqyBIQ-Cac',
        'https://youtu.be/5D2jyuJaSAU',
        'https://youtu.be/J_zjgZJOFl4',
        'https://youtu.be/n2B4speISdU',
        'https://youtu.be/dIh1eOw0zV8',
        'https://youtu.be/y6-eVOnAnBk',
        'https://youtu.be/Xi_vwyPRxOI',
        'https://youtu.be/qyWVOrgdokA',
        'https://youtu.be/3kLgobhqJ10',
        'https://youtu.be/vA-W_MPg9ec',
        'https://youtu.be/uMszu_VgMfY'
    ]

    let Vchannel = client.channels.cache.get(config.VC_id);

    Vchannel.join().then(connection => {
        const Play = async () => {

            var Song = await Songs[Math.floor(Math.random() * Songs.length)];

                connection.play(ytdl(Song, {highWaterMark: 1<<25})).on('finish', Play)

    ytdl.getInfo(Song).then(info => {

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

        }
        Play()
    });
});

client.login(token);