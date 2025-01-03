const emailDomains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
let successRequests = 0;
let failedRequests = 0;

function generateRandomData() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    
    function getRandomString(length) {
        let result = '';
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
    }
    
    const firstName = getRandomString(Math.floor(Math.random() * 5) + 3);
    const lastName = getRandomString(Math.floor(Math.random() * 5) + 4);
    const randomEmail = `${firstName}.${lastName}@${emailDomains[Math.floor(Math.random() * emailDomains.length)]}`;
    const randomPhoneNumber = '9' + Math.floor(100000000 + Math.random() * 900000000);
    
    return {
        name: `${firstName} ${lastName}`,
        email: randomEmail,
        phone: randomPhoneNumber
    };
}

async function sendSignInRequest(index) {
    const url = 'https://modernadclicks.info/panel/RegisterProcess';

    const refCode = 'MAC9277134'
    
    const randomData = generateRandomData();

    const payload = new URLSearchParams({
        usponsor: refCode,
        uname: randomData.name,
        umobile: randomData.phone,
        uemail: randomData.email,
        upass: '123456789',
        uconpass: '123456789'
    });

    try {
        await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
                'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                'Referer': `https://modernadclicks.info/panel/Registration?id=${refCode}`,
                'Origin': 'https://modernadclicks.info',
                'DNT': '1',
                'Cache-Control': 'no-cache',
                'Accept-Encoding': 'gzip, deflate, br, zstd',
                'Accept-Language': 'en-US,en-IN;q=0.9,en;q=0.8'
            },
            body: payload.toString()
        });

       
        console.log(`Request ${index} completed. Success: ${++successRequests}`, );

    } catch (error) {
        console.error(`Request ${index} failed: ${++failedRequests}`, );
    }
}

let i = 1

setInterval(() => {

    sendSignInRequest(i);
    i++;
    
}, 2000); 