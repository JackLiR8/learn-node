'use strict'
const fs = require('fs')
const path = require('path')

const folder = process.argv[2]
const ext = '.' + process.argv[3]

fs.readdir(folder, function (err, files) {
  if (err) return console.error(err)
  files.forEach(function (file) {
    if (path.extname(file) === ext) {
      console.log(file)
    }
  })
})

/* const fs = require('fs')
const path = process.argv[2]
const endfix = process.argv[3]

fs.readdir(path, function(err, list) {
  if (err) {
    return console.log(err)
  }

  const filtered = list.filter(
    file => file.indexOf(`.${endfix}`) > -1
  )
  for (const name of filtered) {
    console.log(name)
  }
}) */
