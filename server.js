const express = require("express");
const ejs = require("ejs");
const config = require("config");

const layouts = require("express-ejs-layouts")

const routes = require("./routes");

// 設定の読み込み
const port = config.server.port
const host = config.server.host

console.log(port)
console.log(host)

// expressを作成
const app = express()

// EJSを有効にする
app.set('view engine', 'ejs')
app.set("layout", "layouts/layout")
app.use(layouts)

// ミドルウェア設定
app.use(express.json())

app.use(express.urlencoded({ extended: true }))

app.use(express.static(__dirname + '/public'))

app.use(routes)



app.listen(port, host, () => {
    console.log(`app Listen: http://${host}:${port}`);
});

