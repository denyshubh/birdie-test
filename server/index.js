const app = require('./app')
const port = process.env.PORT || 8000

const server = app.listen(port, () => console.warn(`connect to port ${port}`))
module.exports = server