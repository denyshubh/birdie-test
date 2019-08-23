const express = require('express')
const router = express.Router()
const Events = require('../models/info')

router.get('/', async (req, res) => {
	let result = await Events.findInfo(req.query.page)
	if (!result) return res.status(404).send('404 No response from server');
	console.log('Data Received From Server is', JSON.parse(result));
	res.status(200).send(result)
})

module.exports = router