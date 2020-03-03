# Overview
## The discussion questions:
5 minutes in groups, then discuss and write on the board

HTML markup:
It is always better to use semantic tags
* Easier to identify the code and for accessibility

* Attributes: inside of a p tag: the "class=editor-note", this is extra informaiton about the element.  a tags by default will always need an attribute as they used to create a link to another page
* Tags: parents and child relationships

## HTLML boilerplate:
* Breakdown each line and what it means
* doctype - declares the the document type is HTML
* head: child of the html tag
    1) meta name="viewport" content="width=device-width, initial-scale=1.0"
    This sets the width of the area in which the content renders (the viewport) to the width of the device and sets the scale to 1. You can read more about this here.

    2) meta http-equiv="X-UA-Compatible" content="ie=edge"
    This is for Internet Explorer to ensure that it uses the highest mode of IE available. You can read more about this here.


* body: child of the html tag

## VALID HTML IN FILE:
*have learners create a file within the sandbox dir
*Exercise: 10 minutes in group then discuss in class for 5minutes - do not use the HTML validator


## ELEMENTS
-header tags, p, tags, lists, images, more on parent and child relationships
-Unorderded lists vs Ordered lists: show an example vs code and/or on the board

## SEMANTIC HTML
* Best use because 
* Easier to identify the code and for accessibility
```
<section>
<content>
<header>
<footer>
<nav>
<main>
```

Build out wireframe: 
* break out into group: and then pick a group to talk about their WF's(one that has a lot of elements listed)



# CSS

* Have students add and link CSS
* Talk about the three ways to write CSS and what will apply over the other
1) In-line
2) Internal (style tags that live inside of the head)
3) External Stylesheet

* On the board: draw out a tag and explain each part, for example 
```
p{
    color:pink
    }
```
# Selectors 

* classes: show an example
* Ids: show an example

-mention psuedo-classes for example: https://www.w3schools.com/cssref/tryit.asp?filename=trycss3_nth-child

## Properties
* Create an example showing fonts, background, text layout, etc


## Box Model
*   Go to inspect elements and show how making changes here, only temporary
* Visual example of margin and padding

Padding: is used to generate space around the element's content
https://www.w3schools.com/css/tryit.asp?filename=trycss_padding_intro

Margin: Margin is used to create space around the element
https://www.w3schools.com/css/tryit.asp?filename=trycss_margin_intro

## Inline vs block elements
* Certain elements have default properties from example, a div tag is a block element by default and an a tag is an in-line element by default.  If we want the an a tag to able to have block properties, we need to change the display to inline-block inside of our stylesheet.

* show an example of this in VS code