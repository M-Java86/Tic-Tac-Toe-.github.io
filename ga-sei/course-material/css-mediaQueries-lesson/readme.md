# Responsive Web Design

## Learning Objectives

- Explain the difference between a responsive website and a mobile-specific website.
- Compare mobile-first to desktop-first responsive design
- Use media queries to adjust styles for different viewport sizes.
- Identify and use relative units like `em`, `rem`, `vh`, `vw`, etc..
- List the different media query values and their conditions.
- Use the Chrome Dev tools to debug responsive CSS.

## Opening (5 min)

Ultimately we are trying to answer the question:

>How do we build web applications and sites for an optimal interaction experience on a multitude of devices?

### How we got here

In the beginning, there was no CSS. Every site looked nearly identical. As styling web pages became more common,
developers began structuring their pages with table layouts and fixed-width CSS.

Many designers still ask

>What are the most common dimensions for a website design?

## You tell me! http://screensiz.es (5 min)

## We do: Turn and Talk (5 min)

What makes a design fixed? What makes a design fluid? What makes a site responsive?

Check out [mediaqueri.es](http://mediaqueri.es) for inspiration.

## Mobile Specific Sites (5 min)

One way to create optimal experiences for mobile users is a dedicated mobile site.

You know you're on one when you see `m.` in the url!

Compare https://m.xkcd.com with https://xkcd.com

![](https://imgs.xkcd.com/comics/server_attention_span.png)

Avoid these... please.

## Making an application Responsive: Media Queries

Through media queries, we are able to adjust CSS styles depending on the device's size:

```css
body{
  background: papayawhip;
}

@media (max-width: 400px){
  body{
    background: tomato;
  }
}
```

Using media queries, we can group our css rules according to the size of our expected viewing devises.  This media query says, if our viewport is less than 400px, use the following css rules.

The 400px corresponds to the device's viewport.  A device's viewport is different from both its screen size and resolution.  Check out [this article](http://www.quirksmode.org/mobile/viewports.html) if you're interested in why.

Other possible values include

```
/* these are most commonly used */
min-width | max-width | min-height | max-height

/* these are possible, but less common */
| width | height
| device-width | min-device-width | max-device-width
| device-height | min-device-height | max-device-height
| aspect-ratio | min-aspect-ratio | max-aspect-ratio | max-device-aspect-ratio
| device-aspect-ratio | min-device-aspect-ratio |
| color | min-color | max-color
| color-index | min-color-index | max-color-index
| monochrome | min-monochrome | max-monochrome
| resolution | min-resolution | max-resolution
| scan | grid
```

## You do: Media Queries (15 min)

### Step 1

Working with the example above, create a [jsfiddle](https://jsfiddle.net/), [codepen](http://codepen.io/pen/), or [webpage](http://justinjackson.ca/words.html) that includes at least two media queries.

When the viewport is less than 800px wide, make the background yellow. When the viewport is less
than 400px wide, make the background green.

![](https://dl.dropboxusercontent.com/s/o8xh3hdql9oijo2/mediaqueries.gif?dl=0)

### Step 2

Try out a few of the properties above. You can combine media queries to get several different results.

i.e. what combination of media queries could produce the following grid as the viewport [changes size](http://maximin.tv/srm/)?

| green     | yellow | red    |
|-----------|--------|--------|
| turqouise | green  | purple |

[Like this.](http://recordit.co/UfnuMHQbWa)

## Relative units of measurement

So far, we've been working with pixels (absolute unit of measurement) and percentages (relative unit of measurements)

### You Do: Research the following units (30 min)

Form groups with your tables to research and discuss the following relative units of measurement.

- %
- em and rem (specifically when setting font-size)
- vh and vw (How is this different than %)

## You Do: 007 Exercise (20 min)

Pair Program This Exercise:

[css-mediaQueries-exercise](../css-mediaQueries-exercise)

## Resources

- The post that introduced us to [responsive web design](http://alistapart.com/article/responsive-web-design)
- http://screensiz.es
- http://mediaqueri.es
- Media Query [Logical Operators](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries#Logical_operators)
- [Viewports](http://www.quirksmode.org/mobile/viewports.html)
- Book: Responsive Web Design, Ethan Marcotte
