const handleRequest = (req, res) => { 
    const url = req.url
    const method = req.method
    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><h1>Hey Welcome to my page</h1></body>')
        res.write('<body><h3>Username</h3><form action="/create-user" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if (url === '/users') {
        res.write('<html>')
        res.write('<head><title>Users</title></head>')
        res.write('<body><ul><li>User 1</li><li>User 2</li></ul></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==='/create-user' && method === 'POST') {
        const body = []
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString()
            console.log(parsedBody)
        })
        res.statusCode = 302
        // res.setHeader('Location', '/')
        return res.end()
    }

}

module.exports=handleRequest