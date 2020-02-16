// download glfw binaries & extract the dylib into `target/`

const assert = require('assert')
const os = require('os')
const fetch = require('node-fetch')
const fs = require('fs')
const AdmZip = require('adm-zip')
const { VERSION } = require('.')

// TODO: others
assert.equal(os.platform(), 'darwin', 'Only macos is supported ATM')

const DIR = `${__dirname}/target`
const ZIP_FILE = `${DIR}/glfw.zip`
const URL = `https://github.com/glfw/glfw/releases/download/${VERSION}/glfw-${VERSION}.bin.MACOS.zip`

if (!fs.existsSync(DIR)) {
  fs.mkdirSync(DIR)
}

if (fs.existsSync(ZIP_FILE)) {
  return console.log('up-to-date')
}

console.log(`downloading ${URL}`)
fetch(URL).then(res =>
  res.body.pipe(fs.createWriteStream(ZIP_FILE)).on('close', () => {
    const zip = new AdmZip(ZIP_FILE)

    console.log(`extracting to ${DIR}`)
    zip.extractAllTo(DIR, true)
  })
)
