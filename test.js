const ffi = require('ffi-napi')
const { DIR, NAME } = require('.')

// good enough for testing
process.chdir(DIR)

// just for testing purposes (incomplete & wrong)
const glfw = ffi.Library(NAME, {
  glfwInit: ['void', []],
  glfwCreateWindow: ['void', ['int', 'int', 'string', 'int', 'int']],
  glfwPollEvents: ['void', []]
})

// should show a window and wait two seconds
glfw.glfwInit()
glfw.glfwCreateWindow(200, 100, 'Test', 0, 0)
setInterval(() => glfw.glfwPollEvents(), 30)
setTimeout(() => process.exit(), 2000)
