
const http = require('http');

http.get('http://localhost:5000', (res) => {
  console.log("Server works");
  process.exit(0);
}).on('error', () => {
  process.exit(1);
});
