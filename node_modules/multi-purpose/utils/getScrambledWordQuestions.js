const { default: fetch } = require("node-fetch");

/**
 * Get questions for scrambled words game.
 * @param {object} config Configuration parameter.
 * @param {number} config.words Number of questions that are going to be generated.
 */
async function getScrambledWordQuestions(config = { words: 10 }) {
    if (typeof config.words !== 'number') {
        throw new Error("Parameter 'words' must be a number");
    }

    const wordApiResponse = await fetch(`https://random-word-api.vercel.app/api?words=${config.words}`);
    if (!wordApiResponse.ok) {
        throw new Error(`Failed to fetch words. Status: ${wordApiResponse.status}`);
    }

    const wordsData = await wordApiResponse.json();

    function scrambleWords() {
        const scrambledWords = wordsData.map(word => {
            const scrambled = word.split('').sort(() => Math.random() - 0.5).join('');
            return { original: word, scrambled };
        });
        const filteredWords = scrambledWords.filter(question => question.original !== question.scrambled);
        return filteredWords;
    }

    let finalQuestions;
    while (true) {
        let generatedQuestions = scrambleWords();
        if (config.words > generatedQuestions.length) {
            generatedQuestions = scrambleWords();
        } else {
            finalQuestions = generatedQuestions;
            break;
        }
    }

    return finalQuestions;
}

module.exports = getScrambledWordQuestions;
