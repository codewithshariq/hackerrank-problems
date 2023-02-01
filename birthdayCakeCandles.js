function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  let count = 0;
  candles.map((candle) => {
    candle === max && count++;
  });
  return count;
}

module.exports = birthdayCakeCandles;
