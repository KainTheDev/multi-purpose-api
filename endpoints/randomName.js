const { randomName } = require("multi-purpose");
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
    const nameType = req.query.nameType
    const amount = req.query.amount
    const apiKey = req.query.apiKey

    const errorList = []
    if(!nameType) new apiError('MISSING PARAMETERS', 'nameType')
    if(!amount) new apiError('MISSING PARAMETERS', 'amount')
    if(!apiKey) new apiError('MISSING PARAMETERS', 'apiKey')

    if (errorList.length > 0) return sendError({ type: errorType, message: `Parameters ${errorList.map(error => `'${error.parameter}'`)} are missing.` })
    const config = {}
    const name = await randomName(apiKey, config)
    return res.json(name)
}