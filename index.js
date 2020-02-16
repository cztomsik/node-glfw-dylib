const VERSION = '3.3.2'

module.exports = {
  VERSION,

  INCLUDE: `${__dirname}/target/glfw-${VERSION}.bin.MACOS/include`,

  // TODO: more platforms
  LIB: `${__dirname}/target/glfw-${VERSION}.bin.MACOS/lib-macos/libglfw.3.dylib`
}
