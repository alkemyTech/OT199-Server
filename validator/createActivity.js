let { check } = require('express-validator')

module.exports =[
    check('name')
    .notEmpty()
    .withMessage('The name field must not be empty'),

    check('content')
    .notEmpty()
    .withMessage('The content field must not be empty'),
]