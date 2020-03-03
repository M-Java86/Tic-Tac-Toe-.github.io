You are welcome to use the following as starter HTML templates and styles for your components...

#### Navigation

```html
<div className="nav">
  <div className="nav-item"><span className="nav-logo">iStocks</span></div>
  <div className="nav-item"><Link to="/">Home</Link></div>
  <div className="nav-item"><Link to="/search">Search</Link></div>
  <div className="nav-item"><Link to="/about">About</Link></div>
</div>
```

```css
.nav {
  display: flex;
  align-items: center;
  width: 100vw;
  height: 50px;
  padding: 0 20px;
  background: #6532CB;
}

.nav > * {
  padding-right: 20px;
}

.nav .nav-logo {
  color: #99CC00;
  font-weight: bold;
  font-size: 1.5em;
}

.nav a {
  text-decoration: none;
  color: white;
  font-weight: bold;
}
```

#### Dashboard

```html
<div className="stocks">
  <h2>Stocks</h2>
  <ul className="stocks-list">
    <li>This is a stock.</li>
  </ul>
</div>
```

```css
.stocks a {
  color: #99CC00;
  font-weight: bold;
}
```

#### Stock

```html
<div>
  <h2>Stock Name (Stock Symbol)</h2>
  <ul>
    <li>Current Price: </li>
    <li>Change: </li>
    <li>High: </li>
    <li>Low: </li>
  </ul>
</div>
```

#### Search

```html
<div className="search">
  <h2>Search</h2>
  <form>
    <input type="text" />
    <input type="submit" className="search-btn" value="Search" />
  </form>
  <div className="search-results">
    Search result(s) goes here.
  </div>
</div>
```

```css
.search-results {
  margin-top: 20px;
  padding: 0 20px;
}

.search-btn {
  margin: 0 10px;
  border: 0;
  border-radius: 5px;
  background: #6532CB;
  color: white;
  font-weight: bold;
  cursor: pointer;
}
```
