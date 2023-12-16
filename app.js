const http = require('http')
const fetchData = require('./server')
const ReadyServer = http.createServer(fetchData)

ReadyServer.listen(3000)