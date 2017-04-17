var http = require('http')
var querystring = require('querystring')
var postData = querystring.stringify({
    'content':'期待期待期待',
    'mid':6700
})
console.log(postData)

var options = {
    hostname:'www.imooc.com',
    port:80,
    path:'/course/docomment',
    method:'POST',
    headers:{
        'Accept':'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding':'gzip, deflate',
        'Accept-Language':'zh-CN,zh;q=0.8',
        'Connection':'keep-alive',
        'Content-Length':postData.length,
        'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
        'Cookie':'imooc_uuid=100a6fda-aa3b-4245-8c40-d24073b0f804; imooc_isnew_ct=1484135558; PHPSESSID=utc7o4hfd5g13rn6dil67mron0; loginstate=1; apsid=EzYmU2YjAzMjU3ODQ3Y2VjOWQzNTQyYTNhYTg0OWIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANTE3ODAzNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NDU3MzA1NThAcXEuY29tAAAAAAAAAAAAAAAAAAAAAGZiMzljMzkxMjZjNGExZDdkNGJkNTNhYWJkMGQwM2IxqfXsWKn17Fg%3DOT; last_login_username=445730558%40qq.com; IMCDNS=0; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1491636453,1491728266,1491825673,1491921403; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1491924909; imooc_isnew=2; cvde=58ece8806d903-107',
        'Host':'www.imooc.com',
        'Origin':'http://www.imooc.com',
        'Referer':'http://www.imooc.com/video/6700',
        'User-Agent':'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/57.0.2987.133 Safari/537.36',
        'X-Requested-With':'XMLHttpRequest'
    }
}

var req = http.request(options,function(res) {
    console.log('Status: ' + res.statusCode)
    console.log('headers: ' + JSON.stringify(res.headers))

    res.on('data',function(chunk) {
        console.log(Buffer.isBuffer(chunk))
        console.log(typeof chunk)
    })

    res.on('end',function() {
        console.log('评论完毕！')
    })

})

    req.on('error',function(e) {
        console.log('Errow ' + e.message)
    })

    req.write(postData)

    req.end()











