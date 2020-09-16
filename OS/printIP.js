const os = require('os')

function printIP() {
  const netInterfaces = os.networkInterfaces()
  for (const interface of Object.keys(netInterfaces)) {
    const netArr = netInterfaces[interface]
    for (const net of netArr) {
      if (
        net.family === 'IPv4' &&
        !net.internal
      ) {
        console.log(net.address)
        return net.address
      }
    }
  }
}

printIP()
