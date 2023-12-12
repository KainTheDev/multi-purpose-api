const { getScrambledWordQuestions } = require('multi-purpose');
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
    const parameters = req.query
    let config;
    const words = Number(parameters.words)
    if (words)
        config = { words: isNaN(words) }
    try {
        const list = await getScrambledWordQuestions(config)
        return res.json(list)
    } catch (e) {
        return res.json({ error: `${e}` })
    }
}