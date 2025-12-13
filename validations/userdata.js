const Joi = require("joi");

exports.registerValidation = Joi.object({
    name: Joi.string().min(6).required().messages({
        "any.required": "Name is required",
        "string.min": "Name must be at least 6 characters long",
    }),
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Email must be a valid email address",
    }),
    password: Joi.string().min(6).required().messages({
        "any.required": "Password is required",
        "string.min": "Password must be at least 6 characters long",
    }),
    age: Joi.number().optional().messages({ "any.optional": "Age is number" }),
    gender: Joi.string().required().messages({
        "any.required": "Gender is required",
    }),
    city: Joi.string().required().messages({
        "any.required": "City is required",
    }),
});


exports.loginValidation = Joi.object({
    email: Joi.string().email().required().messages({
        "any.required": "Email is required",
        "string.email": "Email must be a valid email address",
    }),
    password: Joi.string().min(6).required().messages({
        "any.required": "Password is required",
        "string.min": "Password must be at least 6 characters long",
    }),
});