
// API http://api.marketstack.com/v1/tickers?access_key=b9a441095845496dd1fb8777012283f3


// const tickerURL = "http://api.marketstack.com/v1/tickers?access_key=b9a441095845496dd1fb8777012283f3"

const searchBar = document.getElementById('search')
const button = document.querySelector('.search-button').addEventListener('click', getTickerData)
const symbol =

  async function getTickerData() {

    try {
      // const inputStock = document.querySelector('input').value
      let response = await axios.get(`http://api.marketstack.com/v1/tickers/${symbol}/eod?access_key=b9a441095845496dd1fb8777012283f3`)
      let tickerData = response.data.data.eod[0]
      console.log(tickerData)
      symbol = response.data.data.eod[0].symbol
      const open = response.data.data.eod[0].open
      const close = response.data.data.eod[0].close
      const high = response.data.data.eod[0].high
      const low = response.data.data.eod[0].low
      const volume = response.data.data.eod[0].volume
      console.log(symbol, open, close, high, low, volume)
    } catch (error) {
      console.error(error)
    }
  }
getTickerData()



