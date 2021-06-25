const { validationResult } = require('express-validator');

const validarCampos = (req, res, next) => {
    //checks to see if there are any errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next(); //next tells the middle ware to go to the next one so it continues
}

module.exports = {
    validarCampos
}