const Joi = require('joi')

module.exports = {
    register (req, res, next) {
        const schema = Joi.object().keys({
        email: Joi.string().email(),
        password: Joi.string().regex(
            new RegExp('^[a-zA-Z0-9]{8,32}$')
        )
        })

        const {error, value} = schema.validate(req.body);
        //const {error, value} = validationSchema.validate

        if(error) {
            switch(error.details[0].context.key) {
                case 'email':
                    res.status(400).send({
                        error: "You must provide a valid email address"
                    })
                    break
                case 'password':
                    res.status(400).send({
                        error: "1- Password must be between 8 to 32 characters long<br>2- Password must contain only letter and number"
                    })
                    break
                default:
                    res.status(400).send({
                        error: "Invalid information"
                    })
            }
        } else {
            next()
        }
    }
}