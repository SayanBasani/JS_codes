const play = 60
const authen = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJoYXNfZ3Vlc3QiOmZhbHNlLCJ0eXBlIjoiQUNDRVNTIiwiaXNzIjoiYmx1bSIsInN1YiI6ImQ2NDlmYTZlLTFkN2QtNDA1Yy1hNGQ1LWVjOGUxYTEwNDQxYyIsImV4cCI6MTcyODc1MDk1NywiaWF0IjoxNzI4NzQ3MzU3fQ.WS-rJSpF_0B97PO9aAD8KKLW4IyMULT7f3_MWlvuy2M"
    
async function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function playAndClaimGame() {
  for (let i = 0; i < play; i++) {
    console.log(` - ${i}. Start Play game..`)
    const _points = Math.floor(Math.random() * (120 -80 + 1)) + 110;

    const headers =  {
      'accept': 'application/json, text/plain, */*',
      'accept-language': 'en-US,en;q=0.9',
      'authorization': authen,
      'origin': 'https://telegram.blum.codes',
      'priority': 'u=1, i',
      'sec-ch-ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Microsoft Edge";v="128", "Microsoft Edge WebView2";v="128"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-site',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36 Edg/128.0.0.0'
    }
    delete headers["content-type"]
    const response = await fetch('https://game-domain.blum.codes/api/v1/game/play', {
      method: 'POST',
      headers: headers,
    });
    const responseData = await response.json();
    const gameid = responseData.gameId;
    console.log(` - GameId: ${gameid}`)

    const _sleep = Math.floor(Math.random() * 11 + 50) * 1000
    console.log(` - sleep: ${_sleep/1000}s`)
    await sleep(_sleep)
    headers["content-type"] = 'application/json'
    delete headers["content-length"]
    const claim = await fetch('https://game-domain.blum.codes/api/v1/game/claim', {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        'gameId': gameid,
        'points': _points
      })
    });
    const claimText = await claim.text();
    console.log(` - Play status: ${claimText}. Points: ${_points}`)

    const _sleep2 = Math.floor(Math.random() * 6 + 15) * 1000
    console.log(` - sleep: ${_sleep2/1000}s`)
    await sleep(_sleep2);
  }
  console.log(" - [ DONE ALL ] ")
}

(async () => {
  await playAndClaimGame();
})();