const assert = require('assert')
const cp = require('child_process')
const fetch = require('node-fetch')
const fs = require('fs')
const path = require('path')
const AdmZip = require('adm-zip')
const { VERSION, NAME } = require('.')

const log = (...args) => console.log('[glfw]', ...args)

switch (process.platform) {
  case 'linux':
    try {
      assert.ok(cp.execSync('ldconfig -p | grep libglfw || :', { encoding: 'utf-8' }))
      log('ok, system lib found')
    } catch (e) {
      console.warn(e)
      console.warn('You may need to install glfw using your system package manager')
    }
    break

  case 'darwin':
    download('MACOS', 'lib-macos')
    break

  case 'win32':
    download(process.arch === 'x64' ?'WIN64' :'WIN32', 'lib-vc2015')
    break
}

function download(platform, zipPath) {
  const zipName = `glfw-${VERSION}.bin.${platform}`
  const zipUrl = `https://github.com/glfw/glfw/releases/download/${VERSION}/${zipName}.zip`
  const zipFile = `${__dirname}/glfw-release.zip`

  if (fs.existsSync(`${__dirname}/${NAME}`)) {
    log('up-to-date')
    return
  }

  log(`downloading ${zipUrl} to ${zipFile}`)
  fetch(zipUrl).then(res =>
    res.body.pipe(fs.createWriteStream(zipFile)).on('close', () => {
      const zip = new AdmZip(zipFile)

      log(`extracting ${NAME}`)
      zip.extractEntryTo(`${zipName}/${zipPath}/${NAME}`, __dirname, false)
    })
  )
}
