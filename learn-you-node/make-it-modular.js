const filterFile = require('./mymodule')

const dir = process.argv[2]
const ext = process.argv[3]
function handleFile(err, data) {
  if (err) return console.error(err)
  for (const name of data) {
    console.log(name)
  }
}
filterFile(dir, ext, handleFile)