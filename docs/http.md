# Hypertext Transfer Protocol (HTTP)
## URL Diagraming
Hypertext Transport Protocol (HTTP) is the primary protocol used to transfer data for web pages and web-related technologies. It is a simple, reliable, stateless protocol, which allows for a client to request a piece of data from a server specified by a Uniform Resource Locator, or URL. The server then responds with one of several well-known status codes, indicating if the request was successful or otherwise.

The most basic request from the client consists of a verb (such as ‘GET’, ‘POST’, ‘PUT’, ‘DELETE’, etc.), and a route to the resource the client is trying to retrieve in the form of a URL. While several verbs are defined in the HTTP specification, ‘GET’ and ‘POST’ are the traditional methods used by a web browser to retrieve and send content. The additional verbs tend to be used by relatively newer web applications which use REST-based principles, which will be explained later.

There are a number of ways the client may attach additional to the request to the server. One of these methods are query parameters. Query parameters are appended to the end of the URL, starting with a question mark (‘?’), followed by key pairs separated by ampersands (‘&’). For example, a request might look like:

GET [http://colorado.edu/somepage.html?key1=value1&key2=value2](http://colorado.edu/somepage.html?key1=value1&key2=value2)

Additionally, the client may send additional pieces of information to the server as attributes, which are key-value pairs containing arbitrary strings of data. There are several common attributes which are sent by browsers by default, such as the ‘user-agent’ attribute, indicating to the server which type of browser is being used.

Following the attributes, the client may also send a ‘body’ of content. For many of the HTTP verbs which are mainly intended for information retrieval (such as ‘GET’), the body is empty, and the request is essentially just the verb, the URL, and some attributes set in the header, with no additional information. However, verbs which are intended to send data to the server (such as ‘POST’ or ‘PUT’), may include large quantities of data intended to be stored on a server. For example, when uploading a file.

After the request has been made to the server, the server responds in a matter similar to how the request was made. The first part of the message includes a set of attributes, including information such as the type of web server responding to the request, various information about the type of content being returned, and the status of the request. The status code is a vital piece of information, which is described in a later section.

After the attributes, assuming the request was successful, the body of the response will typically contain whichever piece of content was requested by the client.

## Versions
The primary version of HTTP in use today is HTTP/1.1, which has been the workhorse of the Internet for several decades at this point, with the official specification being released in 1997. It is implemented on top of TCP, and is largely built around the idea of one request and one response per connection.

HTTP/2 was ratified in 2015, in an attempt to improve efficiency of the original standard, allowing more intelligent ways of sending multiple requests and responses in parallel over a single connection, along with stricter security and various other features. While it is supported by all modern browsers, adoption has been very slow among web servers, and sees very little practical use on public systems.

HTTP/3 is the next proposed standard, currently in development. HTTP/3 is a major departure from earlier standards, as it uses UDP rather than TCP for the underlying protocol. Early support is built in to some browsers, but it is not yet finalized, and not suitable for production systems.

## Status Codes
HTTP defines five broad categories of status codes which may be returned by a server.
** 1xx **
These are informational status codes which may be sent by the server. However, these are largely used in special cases not seeing during normal use by clients.
** 2xx **
2xx codes indicate a successful request. While there are several 2xx code, the most common is 200, indicating ‘OK’. The most common response to a standard client request is simply ‘200’.
** 3xx **
3xx codes have to do with redirection. That is, the server is telling the client that the resource has moved to a different location. The most common variants are 301 (‘Moved Permanently’) and 302 (‘Moved Temporarily’). In these cases the response will have an empty body, but will have a ‘location’ attribute indicating where the new home of the resource has been relocated to.
Typically, as a client making a request, 3xx codes will be handled transparently. The browser will take care of interpreting the redirect message, and re-request the resource from the newly indicated location.
** 4xx **
4xx codes indicate a client error of some kind. 404 is likely the most famous of these codes, indicating that the resource that was requested does not exist according to the server. Several other codes exist indicating permission problems, unallowed HTTP verbs, and several technical problems. Regardless, if a client requests something and receives a 4xx code rather than 200, it is safe to assume it didn’t work.
** 5xx **
5xx codes indicate a server-side error. These generally indicate something is broken on the web server, including misconfiguration, networking problems, infinite loops, and so on. The difference between 4xx and 5xx errors essentially point out whether the client or the server is at fault.
[https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)
## REST
Representational State Transfer, or REST, is a methodology for designing interfaces for web applications. Rather than using web servers simply to serve human-readable web pages, REST is based around using the full set of HTTP verbs to manipulate objects which can be referred to using logically-designed URLs.
For example, an interface for managing users might expose a URL at ‘/users’. A client which wants to retrieve the list of users would then issue the request ‘GET /users’, resulting in a response containing the list of users. If they want additional information about the third user, they might use something like ‘GET /users/3’. If they want to remove that user, they might use ‘DELETE /users/3’. Unlike with typical web page browsing, the full set of HTTP-defined verbs such as ‘PUT’, ‘DELETE’, ‘PATCH’, and so on are used to create, retrieve, modify, and delete resources.
The details of the format of the data being returned varies wildly, but a number of best practices have emerged in an attempt to stop reinventing the wheel. Javascript Object Notation (or JSON) is commonly used for payloads between clients and servers. Frameworks such as JSON-API, GraphQL, and OpenAPI attempt to further define standard ways of interacting with APIs, reducing the amount of reimplementation needed between web applications.
‘REST’ refers to a fairly specific naming convention as to how resources should be organized and manipulated. However, in practice, many people use it to refer to any web API which makes use of several verbs. For example, JSON-API can be used with REST systems, but GraphQL technically doesn’t meet the definition. It is largely a technicality in practice.
[https://en.wikipedia.org/wiki/Representational_state_transfer](https://en.wikipedia.org/wiki/Representational_state_transfer)
## Cookies
As mentioned before, HTTP is inherently a stateless protocol on its own. Cookies are used to store persistent client-side information, often used to help maintain state a client and a server. For example, a common use is to store a session identifier on the client, which is then sent to the server with every HTTP request. This allows the server to know who it is talking to, and can be used to associate data stored on the server with a specific client it is talking to.
The architecture behind cookies is fairly straightforward, and is done using standard HTTP headers. When the client makes a request, if it has cookie data for a site, it is sent in a ‘Cookie’ header, allowing the server to access it. When the server responds, it may send a ‘Set-Cookie’, letting the client know that it should update the cookie for the site with the new data.
Cookies present several security options and concerns, such as which parts of a site may access data which may have been set by a different part. As mentioned above, it's important to remember that the entirety of the cookie is sent to the server with every request, making them less ideal for storing large quantities of data.
[https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)
## Storage
While cookies have been used for local storage for a long while (largely due to being the only choice), additional methods have been added to modern browsers through the Web Storage API. These provide larger, local data stores with better defined behavior. Unlike with cookies, these are more suitable for storing larger sets of data, as they are not automatically sent to the server with every client request.
sessionStorage and localStorage are the main local data stores. sessionStorage is intended for data which is valid for a given session, while localStorage is intended to persist between starting and stopping the browser. These forms of storage can both be accessed through client-side scripting.
[https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API)

## GET vs. POST
Web pages have traditionally sent data to servers using a 'FORM' tag, with an option to use either the GET verb or the POST verb. There are a number of practical concerns when choosing which to use, two of which are the size of the data to be transmitted, and the aesthetics of how the URL looks in a browser.
POST is generally used when you are making a request to permanently change a resource of the server, while GET is intended to pass options via query parameters indicating options related to the data you’re requesting. In practice, there is nothing technology-wise preventing people from designing systems however they like.
Since GET is passing data using query parameters, there is a practical size limit of how large a URL a browser is willing to pass, or for a server to accept. While this varies between browsers and servers, a client shouldn’t rely on more than a couple kilobytes of data to work successfully. POST does not have this restriction, and can send essentially unlimited amounts of data via the body.

Aesthetically-pleasing URLs are more common these days, leading to people avoiding passing large ugly query parameter-filled addresses around. On the other hand, query-parameter-based URLs can be bookmarked. For example, [https://some.site/productlist?sorting=alphabetical](https://some.site/productlist?sorting=alphabetical) is a potentially useful form of a GET-based URL.

## SSL/Certificates
Nearly all modern sites are designed with encryption in mind. HTTP is typically used in its secure form, HTTPS, which is HTTP wrapped in a Transport Layer Security transport protocol. This is sometimes referred to as ‘SSL’, however this is just a holdover in terminology. The actual SSL protocol is out of date and insecure. Up-to-date servers should be using TLS 1.2 or 1.3. Anything lower than TLS 1.2 is considered insecure.

Modern browsers and search engines are continuing to add more aggressive motivators for sites to support HTTPS by default, such as important-looking warning screens for unencrypted content, or lower page rankings among search results.

Part of setting up a web server which supports HTTPS involves public-key cryptography certificates. Certificates are a way to verify that a client is talking to the authentic server it should be connecting to, and not a malicious server which has been set up to intercept traffic.

Certificate verification is done via a three-way handshake between the client, the server, and the Certificate Authority who created the certificate for the server.

In a browser, the domain name in the address bar will typically show up with a lock symbol of some kind to indicate that the connection is secure.