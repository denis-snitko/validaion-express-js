const createUser = async (data) => {
	return {
		id: Math.random().toString(36).substr(2, 9),
		...data,
	};
};

module.exports = {
	createUser,
};
