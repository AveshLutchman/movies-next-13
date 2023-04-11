# Movies - Next 13

This project was made to test and increase my understanding in Algolia as well as db indexing solutions of the like.

During my creation of it, Next 13.3.0 was released with the capabilities for _parallel_ and _interceptor_ routes, so I also tossed them into it.

It demonstrates the following:
* Algolia Instant Search
* Algolia Autocomplete
* Infinite Scroll with Algolia
* Next13's parallel routes
* Next13's interceptor routers
* The combination of both of the above
* Next 13's Dynamic Routes
* Next 13's app router for Dynamic Routes

Learnings:
* It's pretty easy to setup a search solution with Algolia versus implementing it yourself, this goes for every aspect of search, infinite search, instant search and autocomplete search. I haven't tried other solutions yet, but I assume the simplicity the setup will be along the same lines.
* Following up from the simplicity, the responsiveness of the search using Algolia is so much better compared to using a self-implementation. There are other DB's with text search built-in like Xata that I'm yet to try, maybe those will also be as performant, but as I'm using MongoDB for this example, Algolia seems like a very good choice.
* Parallel interceptor routes make modal creation easy. I've always wanted to create modals with similar functionality to Reddit, and these new Next13 features make it child's play. It took me a day to figure it out though, reminder to clear your build folders and do a fresh install when updating major versions.

