const axios = require("axios");

const BINANCE_API_URL = "https://api.binance.com/api/v3/ticker/24hr";
const TOP_COINS = 20;

async function getDumpingCoins() {
  try {
    const { data } = await axios.get(BINANCE_API_URL);

    const dumpingCoins = data
      // Only USDT trading pairs
      .filter((coin) => coin.symbol.endsWith("USDT"))

      // Only coins with negative price change
      .filter((coin) => parseFloat(coin.priceChangePercent) < 0)

      // Sort from biggest drop to smallest drop
      .sort(
        (a, b) =>
          parseFloat(a.priceChangePercent) -
          parseFloat(b.priceChangePercent)
      )

      // Get top 20
      .slice(0, TOP_COINS);

    console.log("\n📉 Biggest Drops (24h)\n");

    dumpingCoins.forEach((coin, index) => {
      const change = parseFloat(coin.priceChangePercent);

      console.log(
        `${String(index + 1).padStart(2, " ")}. ${coin.symbol.padEnd(
          15
        )} ${change.toFixed(2)}%`
      );
    });

    console.log("");
  } catch (error) {
    console.error("❌ Error fetching Binance data:");

    if (error.response) {
      console.error(
        `Status: ${error.response.status} - ${error.response.statusText}`
      );
    } else {
      console.error(error.message);
    }
  }
}

getDumpingCoins();