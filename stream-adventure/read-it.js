'use strict'
const { Readable } = require('stream')
const content = process.argv[2]

const stream = new Readable({
  read() {}
})

stream.push(content)
stream.pipe(process.stdout)


/* 
const { Readable } = require('stream')

class ReadableStream extends Readable {
  constructor (content, options = {}) {
    super(options)
    this.content = content
  }

  _read (size) {
    if (!this.content) return this.push(null)

    this.push(this.content.slice(0, size))
    this.content = this.content.slice(size)
  }
}

const stream = new ReadableStream(process.argv[2])
stream.pipe(process.stdout)

*/