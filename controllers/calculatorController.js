const calculatorModel = require('../models/calculatorModel');

const createOperationHandler = (operation) => {
    return (req, res) => {
        const num1 = Number(req.query['num1']);
        const num2 = Number(req.query['num2']);
        try {
            const result = calculatorModel[operation](num1, num2);
            res.json(result);
        } catch (error) {
            res.status(400).send(error.message);
        }
    };
};

module.exports = {
    add: createOperationHandler('add'),
    subtract: createOperationHandler('subtract'),
    multiply: createOperationHandler('multiply'),
    divide: createOperationHandler('divide')
};
