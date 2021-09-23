// CHALLENGE
// It should take two command line arguments: a URL, a local file path
// It should download the resource at the URL to the local path on your machine. 
// Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.

// Use fs to write the file
const fs = require('fs')

const request = require('request');
request('http://www.example.edu', (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});

const argv = process.argv.slice(2);
const url = argv[0];
const download = argv[1];
// const fileSize = 0;

// Get file size
const getFileSize = file => {
  let fileSize = fs.statSync(file).size;
  return fileSize;
}

// const content = 'Some content!'

// Writing files with node
const writeFile = (fileWrite, content) => {
  fs.writeFile(fileWrite, content, err => {
    if (err) {
      console.error(err)
      return
    }
    // file written successfully
    // Completion message
    console.log(`Downloaded and saved ${getFileSize(fileWrite)} bytes to ${download}`);
  })
}

// Use callback to get the file
const getFile = url => {
  request(url, (error, response, body) => {
    if (error) throw error;
    writeFile(download, body)
  })  
}
getFile(url);

// Test
// console.log(`Downloaded and saved ${fileSize} bytes to ${download}`);
console.log(argv[0], argv[1])
