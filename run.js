const http = require('http')
const server = http.createServer((req,res)=>{
    const url = req.url
    if(url ==='/'){
        res.write('<html>')
        res.write('<head></head>')
        res.write('<body></body >')
        res.write('</html>')
    }
    if(url==='/homepage'){
        res.write('<html>')
        res.write('<head><title>Homepage</title></head>')     
        res.write('<body><h2>This is homepage url link</h2></body>')   
        res.write('</html>')
    }

    
})