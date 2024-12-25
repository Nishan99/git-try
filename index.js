const http = require("http");
const fs = require('fs')
const server = http.createServer((req, res) => {
    const url = req.url
    const data =[]
    // const message = res.data.name

    if(url ==='/'){
        res.write('<html><head><title>Submit form</title></head><body><h1>Form</h1>')
        res.write('<form action="/message" method="POST"><input type="text" name="message"></input><button>send</button></form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }

    if(url==='/message'){
        console.log('data submitted')
        res.statusCode=302;
        res.setHeader('Location','/')
        req.on('data',(chunk)=>{
            data.push(chunk)
            console.log(data)

        })

        req.on('end',()=>{
            const parsedData = Buffer.concat(data).toString()
            console.log(parsedData)

            fs.writeFileSync('data.txt',parsedData.split('=')[1])
        })

        

        return res.end()
    }





 
});


server.listen(4000, () => {
  console.log("server running ....");
});
