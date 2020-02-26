# node-glfw-dylib
Downloads binary release from [glfw releases page](https://github.com/glfw/glfw/releases) and unzips the respective dynamic library into the package directory.

**This package does not follow semver so take care when upgrading.**

GLFW currently provides binaries for win32, win64 and macos (those should be downloaded fine)

On linux, it will check `ldconfig` and fail if the lib is not present. You can install it with `--save-optional` if you don't care.

```
npm i glfw-dylib
```

The module exports `NAME` of the lib and the `DIR` to which you can `chdir` before loading it. Or you can just tell your os about the `DIR` somehow.

## License
MIT