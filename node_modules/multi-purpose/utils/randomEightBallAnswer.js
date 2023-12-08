/**
 * @param {Object} config Configure the response
 * @param {"general" | "mixed" | "emoji" | "advanced"} config.answerType Configure response type
 * Types:
 * - general - word-only answers
 * - mixed - emoji + word answers
 * - emoji - emoji-only answers
 * - advanced - more additional answers
 * @param {String[]} config.customAnswers Add your own answers
 * @returns {String}
 */
async function randomEightBallAnswer(config) {
    try {
        config.answerType;
    } catch (e) {
        config = {};
        config.answerType = "general";
    }

    const generalAnswers = ["Yes", "No", "Maybe", "I don't know"];
    const advancedAnswers = [
        "Yes",
        "No",
        "Maybe",
        "I don't know",
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful",
        "Signs point to no"
    ];
    const emojiAnswers = ["✅", "❌", "🤷‍♂️", "⁉"];
    var customAnswers = false;
    if (config.customAnswers) {
        if (typeof config.customAnswers === "object") {
            try {
                if (config.customAnswers.length == 0) throw "config.customAnswers array must atleast contain 1 answer.";
                generalAnswers.push(...config.customAnswers);
                advancedAnswers.push(...config.customAnswers);
                customAnswers = true;
            } catch (error) {
                if (error.includes('config.customAnswers')) {
                    throw error;
                } else {
                    throw "config.CustomAnswers value isn't an array.";
                }
            }
        }
    }
    const answers = { generalAnswers, advancedAnswers, emojiAnswers }
    function getRandomIndex(answerType) {
        const answerTypeObject = answers[`${answerType}Answers`]
        if (answerTypeObject) return Math.floor(Math.random() * answerTypeObject.length)
    }
    switch (config.answerType) {
        case "general":
            console.log(generalAnswers)
            return generalAnswers[getRandomIndex(config.answerType)];
        case "emoji":
            return emojiAnswers[getRandomIndex(config.answerType)];
        case "mixed":
            if (customAnswers) {
                throw "Cannot generate mixed answers since customAnswers is in used.";
            }
            return `${emojiAnswers[getRandomIndex(config.answerType)]} ${generalAnswers[getRandomIndex(config.answerType)]}`;
        case "advanced":
            return advancedAnswers[getRandomIndex(config.answerType)];
        default:
            throw "Invalid answer type";
    }
}
module.exports = randomEightBallAnswer