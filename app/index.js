const express = require('express');

const app = express();
const port = 2000;

app.use(express.json());

app.get('/',(req,res) => {
    const name = req.query.name ;
    res.send(`Hello, ${name}!`);
});

app.post('/',(req,res) => {
    const body = req.body ;
    res.json(`Hello, ${body.name}!`);
});

app.listen(port, () => {
    console.log(`Express server running at http://localhost:${port}/`)
});