# Project Overview

## Project Name

OnlyStonks

## Project Description

User is able to search different companies traded on the stock exchange and add different tickers to a favorites list. Information displayed will include opening/closing price, trading volume, historical chart.

## API and Data Sample

[Market Stack](https://marketstack.com/)

    "data": [
        {
            "open": 144.685,
            "high": 146.47,
            "low": 144.58,
            "close": 145.64,
            "volume": 52800323.0,
            "adj_high": null,
            "adj_low": null,
            "adj_close": 145.64,
            "adj_open": null,
            "adj_volume": null,
            "split_factor": 1.0,
            "symbol": "AAPL",
            "exchange": "XNAS",
            "date": "2021-07-29T00:00:00+0000"

## Wireframes

![Mobile wireframe](<https://github.com/myfriendpaul/ticker-tracker/blob/main/Wireframing%20Template%20(5).jpg>)

#### MVP

- Find and use external api
- Search form allows user to search for different stocks using ticker
- Display chosen stock data (high, low, EOD price, etc...)
- Scrolling ticker tape on top above navbar
- Remove current search when next search is input
- Styled with CSS

#### PostMVP

- Favorite page that allows user to save tickers
- Display static historical chart using Chart.js or d3js
- Use second API to get and display financial news related to stock

## Project Schedule

| Day      | Deliverable                                                 | Status     |
| -------- | ----------------------------------------------------------- | ---------- |
| July 30  | Prompt / Wireframes / Priority Matrix / Timeframes          | Complete   |
| August 2 | Project Approval / Core Application Structure (HTML and CSS | Complete   |
| August 3 | Pseudocode / Learn Chart.js or D3js / Code                  | Complete   |
| August 4 | Initial Clickable Model / Code                              | Complete   |
| August 5 | MVP / Post MVP                                              | Complete   |
| August 6 | Presentations                                               | Incomplete |

## Priority Matrix

![Priority Matrix](<https://github.com/myfriendpaul/ticker-tracker/blob/main/Priority%20Matrix%20Template%20(7).jpg>)

## Timeframes

| Component                      | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------------------ | :------: | :------------: | :-----------: | :---------: |
| Finding workable API           |    H     |      3hrs      |     2hrs      |    2hrs     |
| HTML Coded                     |    H     |      3hrs      |     3hrs      |    3hrs     |
| Form and Event listeners       |    H     |      3hrs      |     6hrs      |    6hrs     |
| Create cards                   |    M     |      3hrs      |     2hrs      |    2hrs     |
| Create Graphs                  |    M     |      6hrs      |     12hrs     |    12hrs    |
| Ticker Tape Scroll             |    L     |      3hrs      |     .5hrs     |    .5hrs    |
| Remove previous search         |    H     |      1hrs      |     .5hrs     |    .5hrs    |
| Style and CSS                  |    H     |      8hrs      |     8hrs      |    12hrs    |
| Remind yourself you're awesome | Super H  |       ∞        |       ∞       |      ∞      |

| Total | | 36hrs| 38hrs | 38hrs |

## Code Snippet

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

## Change Log

Moved Favorites Page from MVP to Post MVP

```

```
