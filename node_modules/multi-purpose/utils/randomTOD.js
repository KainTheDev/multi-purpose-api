const { default: fetch } = require('node-fetch');
/**
 * [OPTIONS DEFAULT ARE SET TO FALSE]
 * @param {Object} config
 * @param {true | false} config.onlyTruth returns only truth option
 * @param {true | false} config.onlyDare returns only dare option
 * @returns {JSON}
 */
async function randomTOD(config = {onlyTruth: false, onlyDare: false}) {
  const truth = async () => { return await (await fetch('https://api.truthordarebot.xyz/v1/truth')).json()}
  const dare = async () => { return await (await fetch('https://api.truthordarebot.xyz/v1/dare')).json()}
  if(config.onlyTruth === true) return await truth()
  if(config.onlyDare === true) return await dare()
  const list = [await truth(), await dare()]
  return list[Math.floor(Math.random() * list.length)]
}
module.exports = randomTOD;
