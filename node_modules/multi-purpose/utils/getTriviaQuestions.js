const { decode } = require("he")
const { default: fetch } = require("node-fetch")
/**
 * @param {Object} config
 * @param {"Any" |
 * "General Knowledge" | 
 * "Entertainment: Books" | 
* "Entertainment: Film" | 
* "Entertainment: Music" | 
* "Entertainment: Musicals & Theatres" | 
* "Entertainment: Television" | 
* "Entertainment: Video Games" | 
* "Entertainment: Board Games" | 
* "Science & Nature" | 
* "Science: Computers" | 
* "Science: Mathematics" | 
* "Mythology" | 
* "Sports" | 
* "Geography" | 
* "History" | 
* "Politics" | 
* "Art" | 
* "Celebrities" | 
* "Animals" | 
* "Vehicles" | 
* "Entertainment: Comics" | 
* "Science: Gadgets" | 
* "Entertainment: Japanese Anime & Manga" | 
* "Entertainment: Cartoon & Animations"} config.filter_category Filter out a specific category [DEFAULT: "Any"]
* @returns {Array} 
*/

async function getTriviaQuestions(config = { filter_category: "Any" }) {
    const { filter_category } = config
    const response = await fetch(`https://opentdb.com/api.php?amount=200`)
    const data = await response.json()
    const results = data.results.map(JSON => {
        JSON.question = decode(JSON.question)
        JSON.incorrect_answers = JSON.incorrect_answers.map(string => decode(string))
        JSON.correct_answer = decode(JSON.correct_answer)
        return JSON
    })
    switch (filter_category) {
        case "Any":
            return results
        case "General Knowledge":
        case "Entertainment: Books":
        case "Entertainment: Film":
        case "Entertainment: Music":
        case "Entertainment: Musicals & Theatres":
        case "Entertainment: Television":
        case "Entertainment: Video Games":
        case "Entertainment: Board Games":
        case "Science & Nature":
        case "Science: Computers":
        case "Science: Mathematics":
        case "Mythology":
        case "Sports":
        case "Geography":
        case "History":
        case "Politics":
        case "Art":
        case "Celebrities":
        case "Animals":
        case "Vehicles":
        case "Entertainment: Comics":
        case "Science: Gadgets":
        case "Entertainment: Japanese Anime & Manga":
        case "Entertainment: Cartoon & Animations":
            filteredResults = results.filter(result => result.category === filter_category)
            return filteredResults
        default:
            return results
    }
}
module.exports = getTriviaQuestions