# Intro to the Internet

## Learning Objectives
- Describe how information is stored and transmitted across the internet
- Describe the steps in the request/response cycle between a client and a server
- Define 4 HTTP verbs related to CRUD
- List 3 common HTTP Status codes

## How does the internet work?

Think about how the internet works.  There are 4 high level terms that describe how the entire internet works. Take a few minutes and discuss what these terms mean with the person beside you.

![](https://i.imgur.com/vh2LsEz.jpg)

I'm going to call on a couple of you, but would also like you all to type your own answer into Slack as we discuss!

<br />

### The Conceptual

Trying to define just what the internet is can be difficult.  At its highest level, the internet is just an open network of computers (aka servers) that are able to serve and consume information from other computers.  While this is true, it oversimplifies what the internet actually DOES.  Ever since the first version of 'the internet' was created in 1969, it has revolutionized communication, culture, politics, and more. Take a look at these major world events that have taken place just since Tim Berners-Lee proposed the World Wide Web in 1989.

- **1990**: The World Wide Web comes online.
- **1995**: Craig Newmark creates Craigslist.
- **1995**: Amazon, an online bookstore, opens for business.
- **1998**: Google gets its start as an online search engine.
- **2001**: Wikipedia creates an online, user maintained encyclopedia.
- **2003**: Friendster creates the first online social network.
- **2006**: YouTube debuts it's platform to make it easy to share online videos.
- **2009**: Hundreds of thousands of Iranians use social networks like Twitter to communicate and organize a revolution.

This is just the tip of the iceberg concerning how the internet has changed society as we know it. Despite this impact, the technical concepts can be boiled down to pretty simple terms.

![](https://imgur.com/KelmRFQ.jpg)

1. The **client** (aka the user's computer) sends a **request** out in the form of a URL.

2. The **request** is sent to a DNS server (Domain Name Server) which translates the URL written in English into an IP address.  An IP Address is a unique set of numbers attached to the server that the user is trying to reach. Think of it like a phone number.

3. Once the **request** has made it's way to the **server**, the **server** parses information sent by the **request** and executes code to deliver a **response**.  The **response** can be anything from html/css/js files to images/movies/games/etc.  This step is what we're going to be focusing on during most of this unit.

4. Whenever the **server** is ready to send a **response**, it delivers the data to be served by the client.

5. The **client** receives the **response** and their browser is updated with the files delivered from the **server**.

Let's look at one more example of this: 

![](https://imgur.com/AdJA3h4.jpg)

### Seeing The Internet In Action

*The image below comes from the Chrome developer tools. This is what an actual request looks like:*
![](https://i.imgur.com/TH3R9lv.png)

Open Chrome dev tools, go to the network tab, refresh the page, and you can see all of the requests made for the content. You can see that there is a _lot_ more than just html and css. And if you click on one of those requests, you can then see the headers for it.

<br />

## Sending and Receiving Data

We are not in this class to _just_ demystify the internet.  We are here to learn how to send, receive, and interpret requests and responses to deliver something of value to our end users!

### HTTP verbs (10m)

The act of transmitting data across the internet is described using 7 HTTP verbs. **HTTP** or **Hypertext Transfer Protocol** refers to the way data is sent and received. Requests and responses, as we have been discussing them, are a part of HTTP and are actually very straight forward.

> **EXERCISE**: Take three minutes to think about interactions (hint: think of *verbs*) that you use to engage with the internet and that result in a [persisted change](https://en.wikipedia.org/wiki/Persistence_(computer_science)). Meaning that when you do something on a website, turn your computer off, and then come back to that website the following day, you expect to see that your changes will still exist on the site.

> Write your responses into Slack.

HTTP is made up of seven **HTTP verbs**, though we will just focus on four and today we will only work with one.

- GET, POST, PUT, DELETE are the basic HTTP verbs for CRUD
- Can anyone tell me what CRUD means? 
- Create(POST), Read(GET), Update(PUT), Delete(DELETE) — (CRUD)

If we think about this in terms of a blog: we can ask to see a blog post (Read/GET), we can create blog post and save it (Create/POST), we can then go and edit that blog post (Update/PUT), and if the content becomes out of date, we can delete it (Delete/DELETE).

During Unit One, you likely inadvertently used the GET verb. Can you guess in what context you used it?

<br />

### Request-Response Cycle

So, let's get our hands dirty: what is the easiest way you can come up with to make a **GET** request?

EXERCISE: For the next 10 minutes, complete this [mini-lab](https://git.generalassemb.ly/atl-wdi/wdi-curriculum/blob/master/labs/node/node-lab/curl-lab.md) with a partner. Read through the explanation of cURL and work through the exercises.

EXERCISE: 5 minute breakout session! With your partner, work together to come up with an explanation, in your own words, of how the internet works, HTTP verbs, and the request-response cycle.

<br />

### The Web as _Resources_

What happens if you put 146.115.8.93 instead of www.google.com?

So, what if I wanted to go across the web (or to the grocer) and GET some resource (like coconut oil)? I could find the unique IP address of that computer and make the request, or I could LOCATE its RESOURCES UNIVERSALLY via its **URL** (Uniform Resource Locator):

 ![resource diagram](https://cloud.githubusercontent.com/assets/25366/8561247/75b73966-24d7-11e5-896a-06506648c4fe.png)

### The Elements of a URL

**URL** stands for Uniform Resource Locator, and it ultimately is just a string of text characters used by web browsers, email clients and other software to format the contents of an internet request message.

Let's breakdown the contents of a URL:



```
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         query-string     hash/fragment
```

Element | About
------|--------
protocol | the most popular application protocol used on the world wide web is HTTP. Other familiar types of application protocols include FTP, SSH, GIT, FILE, HTTPS
host/domain name | the host or domain name is looked up in DNS to find the IP address of the host - the server that's providing the resource
path | web servers can organize resources into what is effectively files in directories; the path indicates to the server which file, from which directory the client wants
query-string | the client can pass parameters to the server through the query-string (in a GET request method); the server can then use these to customize the response - such as values to filter a search result
hash/fragment | the URI fragment is generally used by the client to identify some portion of the content in the response; interestingly, a broken hash will not break the whole link - this is not the case for the previous elements that we have discussed

<br />

_The Schema above is from [Tuts +](https://code.tutsplus.com/tutorials/http-the-protocol-every-web-developer-must-know-part-1--net-31177)_

When someone types `http://google.com` in a web browser, a new cycle resulting in an HTTP Request/ Response is initiated.  Essentially, your browser is saying:

_"Hey, there friend.  Please respond with the information located at the web address 'google.com/'."_

<br />
