const { readdirSync } = require("fs")

module.exports = (req, res) => {
    const endpoints = readdirSync('endpoints').map(endpoint => endpoint.split(".")[0])
    res.json({endpoints: endpoints})
}