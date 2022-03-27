module.exports = {
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.js', // 主进程入口文件
      rendererProcessFile: 'src/main.js', // 渲染进程入口文件
      mainProcessWatch: ['src/main'] // 检测主进程文件在更改时将重新编译主进程并重新启动
    }
  }
}
