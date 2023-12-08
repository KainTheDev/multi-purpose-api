const {default: fetch} = require("node-fetch")
/**
 * @param {String} option options for which type of image / json data will be fetched. Available options: shibes, birds, cats.
 * @param {Number} amount amount of images will be fetched
 * @returns {Array}
 */
async function shibeOnline (option, amount) {
  const options = ["shibes", "birds", "cats"]
  if(!option) console.trace("Missing paremeter: option."), process.exit(0);
  else if(!option in options) {
    console.trace("Invalid option provided. Available options:\n- "+options.join(", ")), process.exit(0);
  }
  return fetch(`http://shibe.online/api/${option}?count=${amount}&urls=true&httpsUrls=true`)
  .then(response => response.text())
}
module.exports = shibeOnline