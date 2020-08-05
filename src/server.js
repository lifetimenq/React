require('@babel/register')();

const express = require('express');
const app = express();




const render = require('./render').default;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Project_React</title>
    </head>
    <body>
        <div id="root">${render()}</div>
        <script src="index.js"></script>
    </body>
    </html>
  `)
});
app.listen(3000, () => console.log('Server start on port 3000'));