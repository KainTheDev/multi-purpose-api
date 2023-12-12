const { customSearch } = require('multi-purpose')
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
  const parameters = req.query
  const query = parameters.query
  const api_key = parameters.api_key
  const cse_id = parameters.cse_id
  const errorList = []
  const errorType = 'MISSING_PARAMETER'
  if (!query) errorList.push('query')
  if (!api_key) errorList.push('api_key')
  if (!cse_id) errorList.push('cse_id')
  if (errorList.length > 0) return res.status(400).json({error: `Parameters ${errorList.map(error => `'${error.parameter}'`)} are missing.` })
  let safe_search;
  if (safe_search) {
    if (parameters.safe_search === 'true') safe_search = true
    if (parameters.safe_search === 'false') safe_search = false
    if (parameters.safe_search !== 'true' && parameters.safe_search !== 'false') safe_search = true
  }
  const result = await customSearch(query, api_key, cse_id, { safe_search })
  return res.json(result)
}
