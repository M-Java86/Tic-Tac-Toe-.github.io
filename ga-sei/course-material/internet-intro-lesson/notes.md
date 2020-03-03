## Learning Objectives

- Describe how information is stored and transmitted across the internet
- Describe the steps in the request/response cycle between a client and a server
- Define 4 HTTP verbs related to CRUD
- List 3 common HTTP Status codes

# Server Client Model

Tin can telephones

1. Client sends request
1. Server handles request
1. Server sends response
1. Client handles response

# Request Data

## Urls

Where the request goes

```
    http://www.example.org/hello/world/foo.html?foo=bar&baz=bat#footer
    \___/  \_____________/ \__________________/ \_____________/ \____/
  protocol  host/domain name        path         query-string     hash/fragment
```

## HTTP Verbs

What's supposed to happen to the data.

* POST (C)
* GET (R)
* PUT (U)
* DELETE (D)

Play with `curl` and httpbin

# Response Data

## Status Codes

* 404 - resource not found
* 403 - permission denied
* 500 - error while processing the request data
