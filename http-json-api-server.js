const http = require('http')
const port = process.argv[2]

const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${port}`)
  const iso = url.searchParams.get('iso')
  const route = url.pathname
  
  switch (route) {
    case '/api/parsetime':
      const resObj = parseTime(new Date(iso))
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify(resObj))
      break;

    case '/api/unixtime':
      const unixtime = new Date(iso).getTime()
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ unixtime }))
      break;

    default:
      res.writeHead(404)
  }
})

server.listen(Number(port))

function parseTime(date = new Date()) {
  if (!date instanceof Date)
    return
  const h = date.getHours(),
        m = date.getMinutes(),
        s = date.getSeconds()
  return { hour: h, minute: m, second: s }
}

/* =========================================================== */
/*                      official solution                      */
/* =========================================================== */
/* 
'use strict'
const http = require('http')

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
  return { unixtime: time.getTime() }
}

const server = http.createServer(function (req, res) {
  const parsedUrl = new URL(req.url, 'http://example.com')
  const time = new Date(parsedUrl.searchParams.get('iso'))
  let result

  if (/^\/api\/parsetime/.test(req.url)) {
    result = parsetime(time)
  } else if (/^\/api\/unixtime/.test(req.url)) {
    result = unixtime(time)
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result))
  } else {
    res.writeHead(404)
    res.end()
  }
})
server.listen(Number(process.argv[2]))

*/