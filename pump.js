const axios = require("axios");

const BINANCE_API_URL = "https://api.binance.com/api/v3/ticker/24hr";
const TOP_COINS = 20;



// 📈 Get biggest gaining coins
async function getPumpingCoins() {
  try {
    const { data } = await axios.get(BINANCE_API_URL);

    const pumpingCoins = data
      .filter((coin) => coin.symbol.endsWith("USDT"))
      .filter((coin) => parseFloat(coin.priceChangePercent) > 0)
      .sort(
        (a, b) =>
          parseFloat(b.priceChangePercent) -
          parseFloat(a.priceChangePercent)
      )
      .slice(0, TOP_COINS);

    console.log("\n📈 Biggest Gains (24h)\n");

    pumpingCoins.forEach((coin, index) => {
      console.log(
        `${index + 1}. ${coin.symbol} | +${parseFloat(
          coin.priceChangePercent
        ).toFixed(2)}%`
      );
    });
  } catch (error) {
    console.error("❌ Error:", error.message);
  }
}

 
getPumpingCoins();