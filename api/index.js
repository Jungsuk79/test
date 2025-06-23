// <project root>/api/index.js
const express = require('express')
// express 인스턴스 생성
const app = express()
app.use(express.json())

// 동적 요청에 대한 응답을 보낼 때 etag 생성을 하지 않도록 설정
app.set('etag', false)
// 정적 요청에 대한 응답을 보낼 때 etag 생성을 하지 않도록 설정
const options = { etag: false }
app.use(express.static('public', options))

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
// GET
app.get('/get', function(req, res) {
  console.log('GET', req.query)
  res.send(req.query)
})
// post
app.post('/post', function (req, res) {
  console.log('POST', req.body)
  res.send(req.body)
})

// 모듈로 사용할 수 있도록 export
// 앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app 인스턴스에게 전달된다.
module.exports = {
  path: '/api',
  handler: app
}
