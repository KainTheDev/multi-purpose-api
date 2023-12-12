const { default: fetch } = require("node-fetch");

/**
 * @param {string} apiKey 
 * @param {Object} config
 * @param {"firstname" | "surname" | "fullname"} [config.type]
 * @param {Array} config.names_list
 * @returns 
 */
async function randomName(apiKey, config={names_list: [], type: 'fullname'}) {
  if (config.names_list && typeof config.names_list !== "object" && !config.names_list.length) throw console.trace("names_list parameter must be array.");
  const response = await fetch(`https://randommer.io/api/Name?nameType=${config.type}&quantity=5000`, {
    headers: {
      'X-Api-Key': apiKey
    }
  })
  const data = await response.json()
  if (data.status) throw console.trace(data);
  const namesList = data
  for (const name of config.names_list) {
    namesList.push(name)
  }
  return namesList[Math.floor(Math.random() * namesList.length)]
}
module.exports = randomName