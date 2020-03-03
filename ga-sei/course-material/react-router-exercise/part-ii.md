# Part II: Adding APIs

In this portion of the lab, your stock tracking app will be communicating with two APIs...
  1. [GA Stocks API](https://ga-stocks.herokuapp.com/stocks). This will be used store stocks the user wants to track.
  1. The [AlphaVantage API](https://www.alphavantage.co/), a robust api for fetching info about stocks.

Alpha Vantage has a lot of detailed information included in its responses, which contain nested objects. It also requires a relatively painless and fast sign-up for an API key.

Your API calls to Alphavantage will look something like this `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&interval=15min&outputsize=compact&apikey=YOUR_API_KEY_HERE`


Check out the docs [here](https://www.alphavantage.co/documentation/#intraday) for more info about how to tweak the query parameters

This version of the stock tracking app should see the following additional functionalities...

## 1. Dashboard (`/stocks`)

Instead of listing the hard-coded stocks, this page should retrieve all stocks from the local Rails API (i.e., `https://ga-stocks.herokuapp.com/stocks`) and display them on the page.


## 2. Stock (`/stocks/:symbol`)

The stock information beyond name and symbol (e.g., `Current Price`, `Change`) should no longer be pulled from hard-coded data. Instead, this information should be pulled from the Alphavantage API.

When this view loads, a call will be made to the external API that returns a JSON representation of the stock in question.

If the API call is successful, that stock's information should be displayed on the page.

## Bonus: Search (`/search`)

#### Update Navigation

Add a "Search" link to the navigation bar.

#### Search for a Stock

If a user visits `/search` or clicks on "Search" in the navigation bar, they should be directed to a search page with a single-input form. If a user submits a stock symbol (e.g., `AAPL`) through the form, a call will be made to the external API you've chosen, Markit On Demand or Alpha Vantage.

If the API call is successful, the app should display the name and symbol of that stock below the search form. To the right of this information, there should be a "Track Stock" button.

##### Alpha Vantage

[Alpha Vantage Docs](https://www.alphavantage.co/documentation/)

You may use Axios to interact with this API. Its responses contain nested objects like this...

```js
{
  "Meta Data": {
    "1. Information": "Intraday (1min) prices and volumes",
    "2. Symbol": "MSFT",
    "3. Last Refreshed": "2017-07-11 16:00:00",
    "4. Interval": "1min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern"
  },
  "Time Series (1min)": {
    "2017-07-11 16:00:00": {
      "1. open": "70.0700",
      "2. high": "70.1250",
      "3. low": "69.9900",
      "4. close": "69.9900",
      "5. volume": "2311827"
    },
    "2017-07-11 15:59:00": {
      "1. open": "70.0650",
      "2. high": "70.0700",
      "3. low": "70.0500",
      "4. close": "70.0650",
      "5. volume": "115405"
    },
    ... //and so so forth
  }
}
```

**IMPORTANT INFO**: The alphavantage API response is built in a pretty strange way. Since it has spaces and numbers in it's JSON keys, we are unable to use dot notation.  Instead, use bracket syntax... for example `res.data["Meta Data"]["2. Symbol"]` will return `MSFT`

There is a very new Object method in Javascript that can be very useful when dealing with responses like this, `Object.values()`. It can extract all of the values in an object and place them into an array. See [documentation here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values); it's an 'experimental' feature and isn't supported in IE at all.

See also [Object.keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys).


#### Track a Stock

When the user clicks on a stock's "Track Stock" button, the following should happen...
- A `POST` request is made to the GA API. If successful, it will add the newly-tracked stock to the database.
- The user is redirected to the dashboard view. The tracked stock should now be visible
