'use strict'
const net = require('net')

const add0 = num => num < 10 ? `0${num}` : num
function getTime(date = new Date()) {
  const [y, m, d, h, mi] = [
    date.getFullYear(),
    add0(date.getMonth() + 1),
    add0(date.getDate()),
    add0(date.getHours()),
    add0(date.getMinutes())
  ]

  return `${y}-${m}-${d} ${h}:${mi}`
}

const server = net.createServer(socket => {
  socket.end(getTime() + '\n')
})

server.listen(Number(process.argv[2]))

/* ================================================================ */
/*                         OFFICIAL SOLUTION                        */
/* ================================================================ */
const net = require('net')

function zeroFill (i) {
  return (i < 10 ? '0' : '') + i
}

function now () {
  const d = new Date()
  return d.getFullYear() + '-' +
    zeroFill(d.getMonth() + 1) + '-' +
    zeroFill(d.getDate()) + ' ' +
    zeroFill(d.getHours()) + ':' +
    zeroFill(d.getMinutes())
}

const server = net.createServer(function (socket) {
  socket.end(now() + '\n')
})

server.listen(Number(process.argv[2]))
