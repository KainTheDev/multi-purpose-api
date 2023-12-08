const { default: fetch } = require('node-fetch');
/**
 * 
 * @param {String} query query to search
 * @param {{safe_search: boolean}} config configure other options. More information: https://developers.google.com/custom-search/v1/reference/rest
 * @param {String} apiKey API key from googleapis
 * @param {String} searchEngineId search engine ID from googleapis
 * @returns {JSON}
 */
async function customSearch(query, apiKey, searchEngineId, config = {}) {
  let safeSearchOption;
  if(config['safe_search'] === true) safeSearchOption = '&safe=active'
  if(config['safe_search'] === false) safeSearchOption = '&safe=off'
  if(config['safe_search'] === undefined) safeSearchOption = ''
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${query}${safeSearchOption}`;
  return fetch(apiUrl)
    .then(async response => {
      const data = await response.json()
      data.url = apiUrl
      return data;
    })
    .catch(error => {
      console.trace('Error fetching image search results: ' + error.message), process.exit(0);
    });
}
module.exports = customSearch