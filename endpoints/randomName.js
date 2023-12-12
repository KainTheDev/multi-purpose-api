const { randomName } = require("multi-purpose");
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
    const nameType = req.query.nameType
    const customNamesList = req.query.customNamesList
    const apiKey = req.query.apiKey

    const errorList = []
    if (!apiKey) errorList.push('apiKey')
    if (errorList.length > 0) return res.status(400).json({ error: `Parameters ${errorList.map(error => `'${error}'`)} are missing.` });
    try {
        const name = await randomName(apiKey, {type: nameType || 'fullname', names_list: customNamesList || []})
        return res.json({name})
    } catch (e) {
        console.log(e)
        return res.json({ error: `${e}` })
    }

}