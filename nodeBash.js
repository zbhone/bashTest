var fs = require('fs')

// default dirName: nodeDemo
var dirName = process.argv[2] ? process.argv[2] : "nodeDemo" // 你传的参数是从第 2 个开始的


let htmlData = `<!DOCTYPE>
<title>Hello</title>
<h1>Hi</h1>`
let jsData = `var string = "Hello World"\nalert(string)`
let cssData = "h1{color: red}"

// 判断目录是否存在
if(fs.existsSync("./" + dirName)) {
    console.log("error: dir exists");
    process.exit(0)
}

 fs.mkdirSync("./" + dirName) // mkdir $1
 
 process.chdir("./" + dirName) // cd $1
 fs.mkdirSync('css') // mkdir css
 fs.mkdirSync('js') // mkdir js
fs.writeFileSync("./index.html", htmlData,{flag:'w',encoding:'utf-8',mode:'0666'},(err)=>{
     if(err) console.log(err);
     console.log("Data has been writed to file")
 })
 fs.writeFileSync("css/style.css", cssData)
 fs.writeFileSync("./js/main.js", jsData)
 process.exit(0)