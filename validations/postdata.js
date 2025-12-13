const Joi = require("joi");
exports.postValidation = Joi.object({
    contain: Joi.string().required().messages({
        "any.required": "Content is required",
    }),
    image: Joi.string().required().messages({
        "any.required": "Image is required",
    }),
    user_id: Joi.string().required().messages({
        "any.required": "User is required",
    }),
});