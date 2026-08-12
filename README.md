# 📊 Binance Market Movers

A simple Node.js project that uses the **Binance API** to track the cryptocurrencies with the biggest price movements over the last 24 hours.

The project can identify both:

- 📉 **Dumping Coins** — cryptocurrencies with the biggest price drops
- 📈 **Pumping Coins** — cryptocurrencies with the biggest price increases

## 🚀 Features

- Fetches real-time 24-hour ticker data from Binance
- Filters only **USDT trading pairs**
- Finds the biggest price drops
- Finds the biggest price gains
- Sorts cryptocurrencies by percentage change
- Displays the top 20 market movers
- Simple and lightweight Node.js implementation

## 📁 Project Structure

```text
binance-market-movers/
│
├── dumping.js       # 📉 Biggest price drops
├── pumping.js       # 📈 Biggest price gains
├── package.json
└── README.md
```

## 🛠️ Requirements

- [Node.js](https://nodejs.org/)
- npm
- Axios

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/YOUR_USERNAME/binance-market-movers.git
cd binance-market-movers
```

Install dependencies:

```bash
npm install axios
```

## 📉 Dumping Coins

To find the cryptocurrencies with the biggest price drops:

```bash
node dumping.js
```

Example output:

```text
📉 Biggest Drops (24h)

1. BTCUSDT | -12.45%
2. ETHUSDT | -10.83%
3. SOLUSDT | -9.72%
4. XRPUSDT | -8.64%
```

The script:

1. Fetches Binance 24-hour ticker data.
2. Filters only `USDT` pairs.
3. Selects coins with a negative `priceChangePercent`.
4. Sorts them from the biggest loss to the smallest loss.
5. Displays the top 20 results.

## 📈 Pumping Coins

To find the cryptocurrencies with the biggest price gains:

```bash
node pumping.js
```

Example output:

```text
📈 Biggest Gains (24h)

1. DOGEUSDT | +15.82%
2. XRPUSDT  | +12.41%
3. ADAUSDT  | +10.73%
4. SOLUSDT  | +9.85%
```

The script:

1. Fetches Binance 24-hour ticker data.
2. Filters only `USDT` pairs.
3. Selects coins with a positive `priceChangePercent`.
4. Sorts them from the highest gain to the lowest gain.
5. Displays the top 20 results.

## 📡 Binance API

This project uses the Binance 24-hour ticker endpoint to retrieve market data.

The data includes information such as:

- Trading pair
- Price change
- Price change percentage
- Last price
- Trading volume
- High and low price

## 🔧 Configuration

The number of displayed coins can be changed by modifying:

```js
const TOP_COINS = 20;
```

For example, to display the top 10:

```js
const TOP_COINS = 10;
```

## ⚠️ Disclaimer

This project is for **educational and research purposes only**.

The information provided by this project should **not** be considered financial or investment advice.

Cryptocurrency markets are highly volatile. Always do your own research and understand the risks before making any investment decisions.

## 📄 License

This project is open-source and available under the MIT License.
