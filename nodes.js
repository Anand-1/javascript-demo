/*
First Class Functions: 
When funtions can be treated like any other variable then those fuctions are first class functions.Now because of this function can be passed as a param to another function(callback) or a function can return another function(higher-order function). map() and filter() are higher-order functions that are popularly used.

NodeJS: Node.js is a virtual machine that uses javascript as its scripting language and runs on Chorme's V8 Javscript engine .
- Event Driven architechture where I/O runs asynchronously making it lightweight and efficient.

Fork in node JS:
A fork in general is used to spawn child processes. In node it is used to create a new instance of v8 engine to run multiple workers to execute the code.

var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('Hello World\n');
}).listen(3000);

Two arguments that async.queue takes as input?
1.Task Function
2.Concurrency Value

Purpose of module.exports:
This is used to expose functions of a particular module or file to be used elsewhere in the project. This can be used to encapsulate all similar functions in a file which further improves the project structure.
const getSolutionInPython = async ({
 problem_id
}) => {
...
};
module.exports = { getSolutionInJavaScript, getSolutionInPython }

Event loop involves different phases with specific tasks such as timers, pending callbacks, idle or prepare, poll, check, close callbacks with different FIFO queues. Also in between iterations it checks for async I/O or timers and shuts down cleanly if there aren't any.

Differentiate between process.nextTick() and setImmediate()?
Both can be used to switch to an asynchronous mode of operation by listener functions. 

process.nextTick() sets the callback to execute but setImmediate pushes the callback in the queue to be executed. So the event loop runs in the following manner

timers–>pending callbacks–>idle,prepare–>connections(poll,data,etc)–>check–>close callbacks

In this process.nextTick() method adds the callback function to the start of the next event queue and setImmediate() method to place the function in the check phase of the next event queue.

Node.js streams:
Streams are instances of EventEmitter which can be used to work with streaming data in Node.js. They can be used for handling and manipulating streaming large files(videos, mp3, etc) over the network. They use buffers as their temporary storage.

There are mainly four types of the stream:

Writable: streams to which data can be written (for example, fs.createWriteStream()).
Readable: streams from which data can be read (for example, fs.createReadStream()).
Duplex: streams that are both Readable and Writable (for example, net.Socket).
Transform: Duplex streams that can modify or transform the data as it is written and read (for example, zlib.createDeflate()).

The server is responsible for initializing the routes, middleware, and other application logic whereas the app has all the business logic which will be served by the routes initiated by the server. This ensures that the business logic is encapsulated and decoupled from the application logic which makes the project more readable and maintainable.

Cors - cross origin resource sharing

Helmet;





*/