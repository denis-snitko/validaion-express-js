const { body } = require("express-validator");

const createUser = [
	body("name").trim().not().isEmpty().withMessage("Name is required"),
	body("email").isEmail().withMessage("Email must be valid"),
	body("password")
		.trim()
		.isLength({ min: 4, max: 20 })
		.withMessage("Password must be between 4 and 20 characters"),
];

module.exports = { createUser };
