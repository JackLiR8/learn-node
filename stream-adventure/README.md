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

# READ IT
To implement a Readable stream, you need to construct an object, or inherit, from stream.Readable class and implement a `_read()` method in it.

    const { Readable } = require('stream')

    const myStream = new Readable({})
    myStream._read = () => {}

or

    const { Readable } = require('stream')

    class MyStream extends Readable {
      _read() {}
    }

> Note: This _read method MUST NOT be called by application code directly. It should be called by the internal Readable class methods only.

## Reading modes
Readable streams operate in one of two modes: ***flowing*** and ***paused***

  » In flowing mode, data is read from the underlying system automatically and provided as quickly as possible.  
  » In paused mode, the `read()` method must be called explicitly to read chunks of data from the stream.

All Readable streams begin in paused mode but can be switched to flowing mode, and also can switch back to paused mode.

## Consuming a Readable Stream
» `readable.pipe(writable)`, attaching Writable stream to the readable, cause it to switch automatically into flowing mode and push all of its data to the attached Writable. 

» `readable.on('readable', ...)`, here the stream (readable) is in paused mode and have to use the read(size) method for start consuming the data. 

» `readable.on('data', ...)`, adding the data event handler switch the stream to a flowing mode. We can pause and resume the stream by using pause() and resume() methods respectively. This is useful when you need to do sometime-consuming action with the stream's data (such as writing to a database)

## Adding data to stream
You can use the `push()` method to add content into the readable internal Buffer.