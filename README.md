# webpack 百度模板预编译模块

**安装：**

npm:

```
  npm install baidu-template-loader
```

**使用：**

```
  {
    module: {
      preloaders: [
        { test: /\.tmpl$/, loader: "baidu-template" }
      ]
    }
  }
```

