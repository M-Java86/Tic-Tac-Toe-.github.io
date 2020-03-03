# Part I: React Router

This version of the application should use hard-coded stocks data, which you can find in [`/data/stock-data.json`](./data/stock-data.json).

Your stock tracking app should have the following features...

## 1. Navigation

No matter what route the user is visiting, they should always see a navigation bar at the top of the window. It should contain links to "Home" and "About" pages.

## 2. Dashboard (`/stocks`)

If a user visits `/stocks` or clicks "Home" in the navigation bar, they should be directed to a dashboard page. This page should list all of the stocks that the user is tracking, specifically their `name` and `symbol`. These stocks should be pulled from [`/data/stock-data.json`](/data/stock-data.json).

## 3. Stock (`/stocks/:symbol`)

If a user clicks on one of the stocks listed in the Dashboard view, they should be directed to an individual stock show view. This view should display all of a stock's attributes.

> The resources listed at the bottom of the [readme](README.md) might come in handy when building this out.

## 4. About (`/about`)

If a user clicks on "About" in the navigation bar, they should be directed to an about page. This is just a static page that displays a description of your app.
