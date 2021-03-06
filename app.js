//引入express 模块
const express = require('express')

const app = express()

//引入路由模块
const windexRouter = require('./router/windex')

//引入请求接收参数模块
const bodyParser = require('body-parser')

//错误处理
app.use(function (err, req, res, next) {
    res.status(500).send({
        error: err.message
    })
})

//挂载路由
app.use(windexRouter)

//监听端口
app.listen(3000, () => console.log('监听3000端口'))
