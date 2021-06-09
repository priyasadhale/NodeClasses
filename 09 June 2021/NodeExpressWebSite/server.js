const express = require('express')
const http = require('http')
const bodyParser=require('body-parser')
const logger = require('morgan')

const dishRouter = require('./routes/dishRouter')

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(logger('dev'))
app.use(bodyParser.json())

app.use('/dishes', dishRouter)
//REST - path and the method combination
// app.get('/dishes', (req, res, next) => {
//   res.end("Here are the available dishes....")
// })
/**
 * json
 * {
 * "name":"AamPapad",
 * "description":"prepared by alphanso mangoes"
 * "pic": ""
 * }
 */

// app.get('/dishes/:dishId', (req, res, next) => {
//   res.end(`Showing details of ${req.params.dishId}`)
// })

// app.post('/dishes/:dishId', (req, res, next) => {
//   res.statusCode = 403;
//   res.end('POST operation not supported on /dishes/'+ req.params.dishId);
// })

// app.put('/dishes/:dishId', (req, res, next) => {
//   res.write('Updating the dish: ' + req.params.dishId + '\n');
//   res.end('Will update the dish: ' + req.body.name + 
//         ' with details: ' + req.body.description);
// })

// app.delete('/dishes/:dishId', (req, res, next) => {
//     res.end('Deleting dish: ' + req.params.dishId);
// })

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});