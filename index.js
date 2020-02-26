const VERSION = '3.3.2'

const NAME = process.platform === 'darwin' ?'libglfw.3.dylib' :process.platform === 'win32' ?'glfw3.dll' :'libglfw.so.3'


module.exports = {
  VERSION,
  NAME,

  DIR: __dirname
}
