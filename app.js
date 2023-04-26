const express = require('express');
const calculatorController = require('./controllers/calculatorController');

const app = express();
app.set('view engine','pug');
app.get('/add', calculatorController.add);
app.get('/subtract', calculatorController.subtract);
app.get('/multiply', calculatorController.multiply);
app.get('/divide', calculatorController.divide);


app.listen(3000, () => {
    console.log('Calculator app listening on port 3000');
});
