const express = require('express');

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Node js\n');
});

//App should listen on all interfaces on port 8081
app.listen(8081, '0.0.0.0');
console.log(`Running on http://localhost:8081`);
