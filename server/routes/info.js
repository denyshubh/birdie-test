const express = require('express')
const router = express.Router()
const Events = require('../models/info')

router.get('/', async (req, res) => {
	let result = await Events.findAllInfo(req.query.page)
	if (!result) return res.status(404).send('404 No response from server')
	// console.log('Data Received From Server is', JSON.parse(result))
	res.status(200).send(result)
})

router.get('/user/:id', async (req, res) => {
	let result = await Events.getUserDetail(req.query.page, 5, req.params.id)
	if (!result) {
		return res.status(404).send('404 Client Details Not Found');
	}
	// console.log('Data Received From Server is', JSON.parse(result))
	res.status(200).send(result)
})

router.get('/users', async (req, res) => {
	let result = await Events.getCareRecipient();
	if (!result) return res.status(404).send('404 No Clients Found!');
	const users = []
	result.map(e => users.push(e['DISTINCT']))
	// console.log('Data Received From Server is', users)
	res.status(200).send(users);
})

router.get('/event_types', async (req, res) => {
	let result = await Events.getAllEventType();
	if (!result) return res.status(404).send('404 No Clients Found!');
	const event_types = []
	result.map(e => event_types.push(e['DISTINCT']))
	// console.log('Data Received From Server is', event_types)
	res.status(200).send(event_types);
})

router.get('/:userId/:event_type', async (req, res) => {
	let result = await Events.getDetailsOfUserBasedOnEventType(req.params.userId, req.params.event_type)
	if (!result) {
		return res.status(404).send('404 Client Details Not Found');
	}
	// console.log('Data Received From Server is', JSON.parse(result))
	res.status(200).send(result)
})

module.exports = router