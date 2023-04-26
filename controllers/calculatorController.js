const calculatorModel = require('../models/calculatorModel');


const createOperationHandler = (operation) => (req, res) => {
    const num1 = Number(req.query.num1);
    const num2 = Number(req.query.num2);
    try {
        const result = calculatorModel[operation](num1, num2);
        res.render('index',{'result': result});
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.add = createOperationHandler('add');
exports.subtract = createOperationHandler('subtract');
exports.multiply = createOperationHandler('multiply');
exports.divide = createOperationHandler('divide');