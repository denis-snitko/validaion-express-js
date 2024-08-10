const { validationResult } = require("express-validator");

const validationService = (validations) => {
	return async (req, res, next) => {
		await Promise.all(validations.map((validation) => validation.run(req)));
		const errors = validationResult(req);

		if (!errors.isEmpty()) {
			res.status(400).json({
				errors: errors.array().map((error) => ({
					field: error.path,
					message: error.msg,
				})),
			});
		}
		return next();
	};
};

module.exports = { validationService };
