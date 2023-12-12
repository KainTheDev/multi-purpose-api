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
    let list;
    list = (await getScrambledWordQuestions(config)).catch(e => res.json({error: e}))
    return res.json(list)
}