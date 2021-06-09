console.log("Starting the Server")
const http = require('http')

const hostname = 'localhost'
const port = 3000

let server=http.createServer((req, res) => {
    console.log(req.headers)
    res.write("<h1>Hello World</h1>")
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}`)
})