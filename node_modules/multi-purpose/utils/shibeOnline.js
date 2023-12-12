const {default: fetch} = require("node-fetch")
/**
 * @param {String} option options for which type of image / json data will be fetched. Available options: shibes, birds, cats.
 * @param {Number} amount amount of images will be fetched
 * @returns {Array}
 */
async function shibeOnline (option, amount) {
  const options = ["shibes", "birds", "cats"]
  if(!option) throw new Error("Missing paremeter: option.");
  else if(!option in options) {
    throw new Error("Invalid option provided. Available options:\n- "+options.join(", "));
  }
  return fetch(`http://shibe.online/api/${option}?count=${amount}&urls=true&httpsUrls=true`)
  .then(response => response.text())
}
module.exports = shibeOnline