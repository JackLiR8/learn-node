const http = require('http')
const url = process.argv[2]
http.get(url, function(response) {
  response.setEncoding('utf8')
  let rawData = ''

  response.on('error', console.error)
  response.on('data', function(chunk) {
    rawData += chunk
  })
  response.on('end', function() {
    console.log(rawData.length)
    console.log(rawData)
  })
}).on('error', console.error)