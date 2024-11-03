const http=require('http')
const server=http.createServer((req,res)=>{
    console.log(req.url,req.method)
    if(req.url==='/home'){
        res.write(`<h1>welcome to home page</h1>`)
        return res.end()
    }
    else if(req.url==='/women'){
        res.write(`<h1>welcome to women page</h1>`)
       return res.end()
    }
    else if(req.url==='/men'){
        res.write(`<h1>welcome to men page</h1>`)
       return res.end()
    }
    else if(req.url==='/kids'){
        res.write(`<h1>welcome to kids page</h1>`)
       return res.end()
    }
    res.write(`   
<html lang="en">
<head>
    <title>myntra</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li> <a href="/home">Home</a></li>
                <li><a href="/women">women</a></li>
                <li><a href="/men">men</a></li>
                <li><a href="/kids">kids</a></li>
            </ul>
        </nav>
    </header>
</body>
</html>
`);
        res.end()
})
const port=400
server.listen(port,()=>{
    console.log(`app is running on ${port} port`)
})