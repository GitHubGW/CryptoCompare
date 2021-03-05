const coinList=[
  "ABBC~USD",
  "BTC~KRW",
  "BTC~USD",
  "BTC~USDT",
  "BZRX~USD",
  "DASH~KRW",
  "DASH~USDT",
  "EOS~KRW",
  "EOS~USDT",
  "ETH~KRW",
  "ETH~USD",
  "ETH~USDT",
  "TMTG~USD",
  "USDT~KRW",
  "XRP~KRW",
  "XRP~USDT"
];

let coinData=[];

for(let i=0; i<coinList.length; i++){
  coinData.push(`5~CCCAGG~${coinList[i]}`);
}

export const coinValue=coinData;