
const http = require('http')
const app = require('./app')
const port = process.env.PORT || 3000

// app.use(cors())



server = http.createServer(app)

server.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`);
})