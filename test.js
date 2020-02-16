const ffi = require('ffi')
const { LIB } = require('.')

// just for testing purposes (incomplete & wrong)
const glfw = ffi.Library(LIB, {
  glfwInit: ['void', []],
  glfwCreateWindow: ['void', ['int', 'int', 'string', 'int', 'int']],
  glfwPollEvents: ['void', []]
})

// should show a window and wait two seconds
glfw.glfwInit()
glfw.glfwCreateWindow(200, 100, 'Test', 0, 0)
setInterval(() => glfw.glfwPollEvents(), 30)
setTimeout(() => process.exit(), 2000)
