//加载express框架
const express = require('express')

//引入控制器
const windexController = require('../controllers/windexController')

//引入路由模块
const router = express.Router()

//首页数据获取
router.post('/windex', windexController.windex)

//导出路由
module.exports = router
