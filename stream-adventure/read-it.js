'use strict'
const { Readable } = require('stream')
const content = process.argv[2]

const stream = new Readable({
  read() {}
})

stream.push(content)
stream.pipe(process.stdout)