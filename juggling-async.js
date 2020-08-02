'use strict'
const http = require('http')
const urls = process.argv.slice(2, 5)

makeRequest(urls)

async function makeRequest(urls) {
  const promises = urls.map(url => fetchData(url))

  for (const promise of promises) {
    try {
      const res = await promise
      console.log(res)
    } catch (error) {
      console.error(error)
    }
  }
}

async function fetchData(url) {
  return new Promise((resolve, reject) => {
    http.get(url, response => {
      let data = ''
      response.setEncoding('utf8')
      response.on('error', err => reject(err))
      response.on('data', chunk => data += chunk)
      response.on('end', () => resolve(data))
    })
  })
}

/* =========================================================== 
/*                      official solution

'use strict'
const http = require('http')
const bl = require('bl')
const results = []
let count = 0

function printResults () {
  for (let i = 0; i < 3; i++) {
    console.log(results[i])
  }
}

function httpGet (index) {
  http.get(process.argv[2 + index], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err)
      }

      results[index] = data.toString()
      count++

      if (count === 3) {
        printResults()
      }
    }))
  })
}

for (let i = 0; i < 3; i++) {
  httpGet(i)
}                     
=========================================================== */
