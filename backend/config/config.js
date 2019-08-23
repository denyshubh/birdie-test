module.exports = {
	development: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		dialect: 'mysql',
	},
	test: {
		host: process.env.DB_HOST,
		database: 'birdietest',
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		dialect: 'mysql',
	},
	production: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		dialect: 'mysql',
	}
}
