const app = require('../app')
const request = require('supertest')
const { sequelize } = require('../db')

afterAll(async () => {
	await sequelize.close()
})
describe("data testing", () => {

	it("should get information from database", async () => {
		let res = await request(app).get('/api/info/').query({ page: '1' }).set('Content-Type', 'application/json')
		res = JSON.parse(res.text);
		expect(res.text).not.toBeNull()
	})

})