const app = require('../app')
const request = require('supertest')
const { sequelize } = require('../db')

afterAll(async () => {
	await sequelize.close()
})
describe("data testing", () => {

	it("should get information from database", async () => {
		let res = await request(app).get('/api/info/').query({ page: '1' }).set('Content-Type', 'application/json')
		expect(res.statusCode).toEqual(200)
		expect(res.text).not.toBeNull()
	})

	it('should get all the users in database', async () => {
		let res = await request(app).get('/api/info/users').set('Content-Type', 'application/json')
		expect(res.statusCode).toEqual(200)
		expect(res.text).not.toBeNull()
	})

	it('should get all the event types in database', async () => {
		let res = await request(app).get('/api/info/event_types').set('Content-Type', 'application/json')
		expect(res.statusCode).toEqual(200)
		expect(res.text).not.toBeNull()
	})


	it("should get information of single user from database", async () => {
		let userId = 'df50cac5-293c-490d-a06c-ee26796f850d'
		let res = await request(app).get(`/api/info/user/${userId}`).query({ page: '1' }).set('Content-Type', 'application/json')
		expect(res.statusCode).toEqual(200)
		expect(res.text).not.toBeNull()
	})

	it("should get information of single user from database based on event type", async () => {
		let userId = 'df50cac5-293c-490d-a06c-ee26796f850d'
		let event_type = 'mood_observation'
		let res = await request(app).get(`/api/info/${userId}/${event_type}`).set('Content-Type', 'application/json')
		expect(res.statusCode).toEqual(200)
		expect(res.text).not.toBeNull()
	})


})