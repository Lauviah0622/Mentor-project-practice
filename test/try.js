let json = `{
  "name": "emailBot",
  "version": "1.0.0",
  "main": "index.js",
  "license": "MIT",
  "dependencies": {
    "mailgun-js": "^0.22.0"
    "request": "^2.88.2"
  },
  "scripts": {
    "start": "node emailBot.js"
  }
}`

function name(params) {
  let i = 0;
  try {
    i = JSON.parse(json)
  } catch (err){
    console.log('its wrong!!')
  }
  console.log(i)
  return {
    a: 123,
    b: 234,
    c: 123
  }
}

const test = () => [
  213, 
  123,
  123
]

console.log(
  test()
)