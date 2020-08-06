# MEET PIPE
## what are streams?
A stream is an abstract interface for working with streaming data in Node.js.

That means you can consume data as is loaded or produced, chunk by chunk(or piece by piece), instead get all in memory.

Streams can be readable, writable, or both.

There are four types of streams:

  » Readable stream, which data can be read.  
  » Writable stream, which data can be written.  
  » Duplex stream, which is both Readable and Writable.  
  » Transform stream, which is a Duplex stream that can modify or transform the data as it is written and read.

Streams are present in many Node.js modules, for example `http.request()`, `zlib.createGzip()`, `fs.createReadStream()`, `process.stdout` ... all of these return streams.

## The `pipe` method
The pipe method allow you to connect the output of the readable stream as the input of the writable stream

    `readable.pipe(writable)`

If you pipe into a duplex stream you can chain to other stream.

    `readable.pipe(duplex).pipe(writable)`