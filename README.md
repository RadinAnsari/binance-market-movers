# 📉 Binance Dumping Coins Tracker

A simple Node.js script that uses the **Binance API** to identify cryptocurrencies with the biggest price drops over the last 24 hours.

## 🚀 Features

- Fetches 24-hour market data from Binance
- Filters only **USDT trading pairs**
- Finds cryptocurrencies with negative price changes
- Sorts coins by the biggest percentage drop
- Displays the **top 20 falling coins**
- Shows price changes with two decimal places

## 🛠️ Requirements

- [Node.js](https://nodejs.org/)
- npm
- Axios

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/RadinAnsari/DumpingCoinsTracker.git
cd binance-dumping-coins
```

Install dependencies:

```bash
npm install axios
```

## ▶️ Usage

Run the script:

```bash
node dump.js
```

Example output:

```text
Biggest Drops:

LUNAUSDT | -12.45%
ABCUSDT  | -10.83%
XYZUSDT  | -9.72%
```

## ⚙️ How It Works

The script fetches 24-hour ticker data from Binance and processes it in four steps:

1. Filters only trading pairs ending with `USDT`.
2. Removes coins with a positive or zero price change.
3. Sorts the remaining coins by percentage change, from the biggest drop to the smallest.
4. Displays the top 20 coins with the largest losses.

## 📡 API

This project uses the Binance 24-hour ticker API to retrieve market data.

## ⚠️ Disclaimer

This project is intended for **educational and research purposes only**.

The information provided by this tool should not be considered financial or investment advice. Always do your own research before making any financial decisions.

## 📄 License

This project is open-source and available under the MIT License.
