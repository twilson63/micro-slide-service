const { send } = require('micro')
const parse = require('url').parse
const qs = require('querystring')

module.exports = function(req, res) {
  const urlInfo = parse(req.url)
  const queryParams = qs.parse(urlInfo.query)
  // console.log(queryParams)
  // let url =
  //   'http://creativesoftware.com/sites/default/files/styles/large_blog__900x400_/public/field/image/JavaScript.png?itok=She11sw6'
  send(
    res,
    200,
    `<!doctype html>
<html>
  <head>
    <title>Show Image</title>
    <link rel="stylesheet" href="https://unpkg.com/tachyons" />
    <link rel="stylesheet" hrep="https://unpkg.com/animate.css" />
  </head>
  <body>
    <div class="animated fadeIn vh-100" style="background: no-repeat center/100% url('${queryParams.img}')">

    </div>
  </body>
</html>
  `
  )
}
