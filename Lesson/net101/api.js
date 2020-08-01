const request = require('request')
request.post({
  url: 'https://reqres.in/api/login',
  form: {
    "email": "eve.holt@reqres.in",
    // "password": "pistol"
  }
}, function (error, response, body) {
 console.error('error:', error); // Print the error if one occurred
 console.log('statusCode:', response.statusCode)
 console.log(body)
});