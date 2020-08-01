const http = require('http');

const server = http.createServer(function (req, res) {
  console.log(req.url)
  if (req.url === '/404') {
    res.writeHead(404, {
      'you': 'suck'
    })
    res.end()
    return
  }
  if (req.url === '/301') {
    res.writeHead(302, {
      'Location': '/123123123'
    })
  }

  res.write('123123')
  res.end()
})

server.listen(5500)