// http module

const http = require('http')
console.log(http)

const port = process.env.PORT || 3000


const server = http.createServer( (req , res) =>{

    if(req.url === '/'){
        res.end('Home')
    } else if (req.url=== '/node'){
    res.end(`Hello world from my first node app`)
    }else if (req.url ==='/stlye'){
        res.end(`this is astyle sheet`)
    }else{
        res.end(`<h1 style="color:blue;"> Oops!</h1>Page not found
             <a href='/'>BACK TO HOME PAGE</a>`)
    }
})

server.listen(port, () => {
    console.log(`server listening on ${port}`)
})