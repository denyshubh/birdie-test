module.exports = {
	development: {
		host: process.env.DB_HOST,
		database: process.env.DB_NAME,
		username: process.env.DB_USER,
		password: process.env.DB_PASS,
		dialect: 'mysql',
	},
	test: {
		host: 'birdie-test.cyosireearno.eu-west-2.rds.amazonaws.com',
		database: 'birdietest',
		username: 'test-read',
		password: 'xnxPp6QfZbCYkY8',
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
