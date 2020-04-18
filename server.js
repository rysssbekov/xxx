const express = require('express');
const os = require('os');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

app.listen(process.env.PORT || 8080, () => console.log(`Listening on port ${process.env.PORT || 8080}!`));

app.get('/api/pizzas', (req, res) => {
    fs.readFile(path.resolve(__dirname, "./server/pizzas.json"), 'utf8', (err,data) => {        
        if(err) {
            throw err;
        }        
        res.send(JSON.parse(data));
    });    
})
app.get('/api/confirm', (req, res) => {
    fs.readFile(path.resolve(__dirname, "./server/order.json"), "utf8", (err, data) => {
        if(err) {
            throw err;
        }
        res.send(JSON.parse(data));
    })
})