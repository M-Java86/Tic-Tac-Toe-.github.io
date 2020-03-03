# Learning Objectives

- Describe what an API is and why we might use one.
- Understand the format of API data.
- Explain the common role of JSON on the web.
- Have a deeper understanding of mounting, unmounting, and updating React components.
- Understand where to place async calls during the React lifecycle.
- Use Axios to make GET requests for data.
- Use Axios' "promise" methods to handle AJAX responses.
- Render new HTML content using data loaded from an AJAX request.
- Perform POST, PUT and DELETE requests to an API to modify data.

* Explain the benefits of using ajax requests
* Draw a basic react lifecycle diagram
* Write an ajax request to GET data from an HTTP server
* Write an ajax request to POST data from an HTTP server
* Write an ajax request to PUT data from an HTTP server
* Write an ajax request to DELETE data from an HTTP server

# Prep

* `lessonClone react-ajax-sample-project`
* `cd react-ajax-sample-project`
* `npm install && npm start`

new terminal

* `cd react-ajax-sample-project/client`
* `npm install && npm start`

# What is AJAX

* Async Javascript And XML
* Allow us to interact with an http server

# Making Requests Based on a Manual "Trigger"

Pull up the docs for axios

* Axios library
* `axios.<verb>()`

# Auto triggering Requests

* `componentDidMount`
