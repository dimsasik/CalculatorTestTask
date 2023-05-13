const express = require('express');
const calculatorController = require('./controllers/calculatorController');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/add', calculatorController.add);
app.get('/subtract', calculatorController.subtract);
app.get('/multiply', calculatorController.multiply);
app.get('/divide', calculatorController.divide);

app.listen(3000, () => {
    console.log('Calculator app listening on port 3000');
});
