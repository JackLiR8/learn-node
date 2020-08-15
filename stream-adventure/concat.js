'use strict'
const concat = require('concat-stream')

process.stdin
  .pipe(concat(text => {
    const s = text.toString().split('').reverse().join('')
    process.stdout.write(s)
  }))