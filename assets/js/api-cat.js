const api_key = '?api_key=live_XksD8awTUhN7EJSio8f37G1NL15oDGdKHWrOywdZRf3S3QejhcUGcJmscBRl3wOU';
const request = require('request');
request('https://api.thecatapi.com/v1/breeds'+api_key, function (error, response, data) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log(data); // Print the data.
});
