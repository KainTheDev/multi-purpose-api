const { default: fetch } = require("node-fetch");

/**
 * 
 * @param {Array} Your_names_list custom names list
 * @returns {String}
 */
async function randomName (Your_names_list, type) {
  if(Your_names_list && typeof Your_names_list !== "object") console.trace("Your_names_list must be array."), process.exit(0);
  const response = await fetch("")
  const nameList = (await response.json()).split("\n")
  return nameList[Math.floor(Math.random()*nameList.length)]
}
module.exports = randomName