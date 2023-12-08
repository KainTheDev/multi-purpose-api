const { customSearch } = require('multi-purpose')
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
  function sendError(object) {
    res.json({
      error: object
    })
  }
  class apiError {
    constructor(type, name) {
      if (type === 'MISSING_PARAMETER') errorString.push({ parameter: name, required: true });
    }
  }
  const parameters = req.query
  const query = parameters.query
  const api_key = parameters.api_key
  const cse_id = parameters.cse_id
  const errorString = []
  const errorType = 'MISSING_PARAMETER'
  if (!query) new apiError(errorType, 'query')
  if (!api_key) new apiError(errorType, 'api_key')
  if (!cse_id) new apiError(errorType, 'cse_id')
  if (errorString.length > 0) return sendError({ type: errorType, message: `Parameters ${errorString.map(error => `'${error.parameter}'`)} are missing.` })
  let safe_search;
  if (safe_search) {
    if (parameters.safe_search === 'true') safe_search = true
    if (parameters.safe_search === 'false') safe_search = false
    if (parameters.safe_search !== 'true' && parameters.safe_search !== 'false') return sendError({ type: 'INVALID PARAMETER VALUE', message: "Parameter 'safe_search' must be true / false." })
  }
  const result = await customSearch(query, api_key, cse_id, { safe_search })
  return res.json(result)
}
