const stonkResults = document.querySelector('.stonk-results')


async function getTickerData(e) {
  removeElement(stonkResults)
  try {
    e.preventDefault()
    let { search } = e.target
    let response = await axios.get(`http://api.marketstack.com/v1/tickers/${search.value}/eod?access_key=b9a441095845496dd1fb8777012283f3`)
    const tickerData = response.data.data.eod[0]
    const tickerDataYear = response.data.data.eod


    const stonkDiv = document.createElement('div')
    stonkResults.appendChild(stonkDiv)

    const symbol = response.data.data.eod[0].symbol
    const symbolElement = document.createElement('h2')
    symbolElement.textContent = `${symbol}`
    symbolElement.classList.add('symbol-style')
    stonkDiv.appendChild(symbolElement)

    const open = response.data.data.eod[0].open
    const openElement = document.createElement('p')
    openElement.textContent = `Open: $${open}`
    openElement.classList.add('open-style')
    stonkDiv.appendChild(openElement)

    const close = response.data.data.eod[0].close
    const closeElement = document.createElement('p')
    closeElement.textContent = `Close: $${close}`
    closeElement.classList.add('close-style')
    stonkDiv.appendChild(closeElement)

    const high = response.data.data.eod[0].high
    const highElement = document.createElement('p')
    highElement.textContent = `High: $${high}`
    highElement.classList.add('high-style')
    stonkDiv.appendChild(highElement)

    const low = response.data.data.eod[0].low
    const lowElement = document.createElement('p')
    lowElement.textContent = `Low: $${low}`
    lowElement.classList.add('low-style')
    stonkDiv.appendChild(lowElement)

    const volume = response.data.data.eod[0].volume
    const volumeElement = document.createElement('p')
    volumeElement.textContent = `Volume: ${volume}`
    volumeElement.classList.add('volume-style')
    stonkDiv.appendChild(volumeElement)

    displayChart(tickerDataYear)
  } catch (error) {
    console.error(error)
  }

}

const form = document.querySelector('form')
form.addEventListener('submit', getTickerData)

function removeElement(element) {
  while (element.lastChild) {
    element.removeChild(element.lastChild)
  }
}


function displayChart(tickerData) {
  removeElement(document.querySelector('#chart'))
  let timeData = tickerData
    .map((ticker) => {
      return {
        time: ticker.date.split("T")[0],
        open: parseFloat(ticker.open.toFixed(2)),
        high: parseFloat(ticker.high.toFixed(2)),
        low: parseFloat(ticker.low.toFixed(2)),
        close: parseFloat(ticker.close.toFixed(2)),
      };
    })
    .reverse();

  let chart = LightweightCharts.createChart(document.querySelector("#chart"), {
    width: 600,
    height: 300,
    layout: {
      backgroundColor: "#171b26",
      textColor: "rgba(255, 255, 255, 0.9)",
    },
    grid: {
      vertLines: {
        color: "rgba(197, 203, 206, 0.5)",
      },
      horzLines: {
        color: "rgba(197, 203, 206, 0.5)",
      },
    },
    crosshair: {
      mode: LightweightCharts.CrosshairMode.Normal,
    },
    priceScale: {
      borderColor: "rgba(197, 203, 206, 0.8)",
    },
    timeScale: {
      borderColor: "rgba(197, 203, 206, 0.8)",
    },
  });

  let candleSeries = chart.addCandlestickSeries({
    upColor: "#1ba59a",
    downColor: "#931621",
    borderDownColor: "#931621",
    borderUpColor: "#1ba59a",
    wickDownColor: "#931621",
    wickUpColor: "#1ba59a",
  });

  candleSeries.setData(timeData);

}