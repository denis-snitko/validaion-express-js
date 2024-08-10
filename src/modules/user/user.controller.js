const express = require("express");
const { validationService } = require("../validation/validation.service");
const userService = require("./user.service");
const { createUser } = require("./user.validation");

const router = express.Router();

router.post(
	"/register",
	validationService(createUser),
	async (req, res, next) => {
		try {
			const user = await userService.createUser(req.body);
			res.status(201).json(user);
		} catch (error) {
			return next(error);
		}
	}
);

module.exports = router;
