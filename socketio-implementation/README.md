# WebSockets Implementation
This project features a basic Browser Chat Client that uses WebSockets as the communication protocol which is implemented using NodeJS and Socket.IO.
The purpose of this project is to learn the basics of how WebSockets work in general and in JavaScript.

## Tools used
1. NodeJS
2. Socket.IO
3. ExpressJS

## Implementation Method

## Learning Notes
### What are WebSockets?
WebSockets is a communication protocol that allows for *real-time, two-way communications* between *client and server* for a *prolonged period of time*.
Instead of [HTTP (HyperText Transfer Protocol)](https://en.wikipedia.org/wiki/HTTP) that requires a <u>new conection</u> for each request, which forces the browser to require to refresh every time to fetch the new data.

### How do WebSockets work?
Websockets work by establishing a persistent connection between client and server through a single TCP network. Once the connection is established, the client and server can send and receive data in real-time.
There are 2 parts to a WebSocket Protocol:
1. HTTP Handshake
  * used to initiate the WebSocket connection
2. WebSocket Protocol
  * The WebSocket Protocol itself
  * allows for bi-directional communication between *client and server*
  * messages are sent in frames (consists of header and payload)
  * The header consists of information about the message
  * The payload consists of the actual message

### Where are WebSockets commonly implemented?

### Are there alternatives to WebSockets?

### Terminologies
* Socket - A *communication endpoint* that allows processes to communicate over a network

### References
* [What are WebSockets and How Do They Work?](https://www.diffusiondata.com/what-are-web-sockets-and-how-do-they-work/#:~:text=WebSockets%20work%20by%20establishing%20a,between%20the%20client%20and%20server.)
* [Medium: How JavaScript Works: Understanding WebSockets in NodeJS and Socket.io](https://medium.com/sessionstack-blog/how-javascript-works-understanding-websockets-in-nodejs-with-socket-io-24bc9e584eed#:~:text=The%20WebSocket%20API%20enables%20us,data%20flow%20in%20our%20application.)
* [Socket IO Tutorial](https://socket.io/docs/v4/tutorial/step-1)
