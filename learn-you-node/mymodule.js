'use strict'
const fs = require('fs')
const path = require('path')

module.exports = function filterFile(dir, ext, callback) {
  fs.readdir(dir, function(err, list) {
    if (err) return callback(err)
    const filtered = list.filter(
      file => path.extname(file) === `.${ext}` 
    )
    callback(null, filtered)
  })
}