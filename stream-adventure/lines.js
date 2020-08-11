const split = require('split')
const through2 = require('through2')

let lineNum = 1
process.stdin
  .pipe(split())
  .pipe(through2(function(buf, _, next) {
    const line = buf.toString()
    this.push(
      lineNum % 2 === 1
        ? line.toLowerCase() + '\n'
        : line.toUpperCase() + '\n'
    )

    lineNum++
    next()
  }))
  .pipe(process.stdout)
