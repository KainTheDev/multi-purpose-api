const { default: fetch } = require('node-fetch');
/**
 * @returns {JSON}
 */
async function randomWUR() {
  return await (await fetch('https://api.truthordarebot.xyz/v1/truth')).json()
}
module.exports = randomWUR;
