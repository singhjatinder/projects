const { WebClient } = require('@slack/web-api');
const axios = require('axios');
let qs = require('qs');

const token = process.env.SLACK_TOKEN;

const web = new WebClient(token);

module.exports.jay = async (req, res, next) => {

    let search = req.body.text;
    let text;
    if(search.includes("polycom")){
        text = 'Here you go! '+ req.body.user_name + '\nhttps://wiki.fuze.global/display/HELP/Polycom+and+Yealink+-+Portal+Override+Configurations'
        +'\nhttps://wiki.fuze.global/display/SUPPORTKB/How-to+Download+Polycom+logs'
        +'\nhttps://wiki.fuze.global/display/HELP/Legacy+vs+Large+Handset+Directories?preview=%2F[…]409%2F39454757%2FIntroduction+to+Large+Directory+%282%29.pdf';
    }
    else{
        text="Here you go! "+ req.body.user_name + "\nhttps://wiki.fuze.global/display/~jsingh/Jatinder+Singh%28Jay%29+-+Useful+Info";
    }

    await web.chat.postMessage({
        text: text,
        channel: req.body.channel_id
    });

    res.sendStatus(200);
}

module.exports.swarm = async (req, res, next) => {
    let caseN = req.body.text;

    if(caseN==="" || caseN ===/^\d+$/.test(val) ){

        // Call the conversations.create method using the WebClient
        const result = await web.conversations.create({
          name: caseN
        });

        //
        console.log("Created New Channel: Here are the details:");
        console.log(result);

        await web.conversations.invite({
            channel: result.channel.id,
            users: req.body.user_id
        });


        await web.chat.postMessage({
            text: '/fuze meeting '+caseN,
            channel: result.channel.id
        });
        //POST MESSAGE IN ORIGINAL channel
        await web.chat.postMessage({
            text: "Swarming has started for "+caseN +" by "+req.body.user_name+". Please join channel #"+caseN,
            channel: req.body.channel_id
        });

        res.sendStatus(200);

    }
    else{
        res.send("Incorrect command. Please enter '/swarm CaseNumber' only.");
    }
}

module.exports.oauth = async (req,res, next) => {

    let newCode = req.query.code;
    let c_url;

    let data = qs.stringify({
    'code': newCode,
    'client_id': process.env.SLACK_CLIENT_ID,
    'client_secret': process.env.SLACK_CLIENT_SECRET 
    });
    var config = {
    method: 'post',
    url: 'https://slack.com/api/oauth.v2.access',
    headers: { 
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data : data
    };
    
    await axios(config)
    .then(function (response) {
        c_url = response.data.incoming_webhook.configuration_url;
        console.log(JSON.stringify(response.data.incoming_webhook.configuration_url));
    })
    .catch(function (error) {
    console.log(error);
    });
            

    res.redirect(c_url);
}


//stocks

module.exports.stocks = async (req, res, next) => { 

    let date = req.query.date;
    let stock = req.query.stock;

    let url='https://api.polygon.io/v1/open-close/'+stock+'/'+date+'?unadjusted=false&apiKey='+process.env.STOCKS_TOKEN;

    let config = {
        method: 'get',
        url: url,
    };
    let opened,closed, difference;
    let newDate = formatDate(date);
    await axios(config)
    .then(function (response) {
        opened = response.data.preMarket;
        closed = response.data.afterHours;
        difference = ((closed-opened)/opened)*100;
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
    console.log(error);
    });

    res.render('stocks', {opened: opened, closed: closed, difference: difference, stock:stock, date:date, newDate:newDate});

}

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate()+2),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}