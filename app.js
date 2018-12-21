const express = require('express')
const app = express()
const request = require('request')
const cheerio = require('cheerio')
// gbk转码（暂时没用到）
const iconv = require("iconv-lite");
// 要爬的网页
const getUrl = 'https://www.jianshu.com/trending/weekly?utm_medium=index-banner-s&utm_source=desktop'
// 要爬的节点
const getQuery = '#list-container .note-list'
app.get('/', (req, res) => {
    // request发送请求
    request(getUrl, function (error, response, body) {
        if(!error&&response.statusCode==200){
        //当前的$拿到了整个body前端选择器
            const $ = cheerio.load(body) 
            let result = $(getQuery).html()
            res.send(result)
         }
    });
})
app.listen(3000, () => console.log('reptile-demo listening on port 3000!'))