fcc: url shortener
============================

FreeCodeCamp API Basejump: URL Shortener Microservice

User stories:

- I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
- When I visit that shortened URL, it will redirect me to my original link.

URL checking: 
- if http or https is present
- if : is present
- if . is present

Example creation usage:

https://shorten-url2.glitch.me/https://www.google.com
https://shorten-url2.glitch.me//http://foo.com:80

Example creation output
{ "original_url":"http://foo.com:80", "short_url":"https://little-url.herokuapp.com/8170" }
Usage:
https://shorten-url2.glitch.me/

Will redirect to:
https://www.google.com/
