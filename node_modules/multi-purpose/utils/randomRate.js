const randomRateConfig = {
    gay_rate: 100,
    peepee_rate: 35,
    simp_rate: 100,
    humour_rate: ['Dark', 'L', 'Emo', 'Depressed', 'Disabled', 'Forbidden', 'Stupid', 'Horny', '9/11', 'Schoolshooter', 'WTF', 'Creative', 'Best', 'W', 'Legendary'],
    IQ_rate: 300,
    horny_rate: 100,
    fat_rate: 1400,
    tall_rate: 8.11,
    relationship_rate: 100,
    gender_rate: 100,
    looks_rate: 10,
    grade_rate: [
        { letter: "A+", min: 97, max: 100 },
        { letter: "A", min: 93, max: 96 },
        { letter: "A-", min: 90, max: 92 },
        { letter: "B+", min: 87, max: 89 },
        { letter: "B", min: 83, max: 86 },
        { letter: "B-", min: 79, max: 82 },
        { letter: "C+", min: 77, max: 79 },
        { letter: "C", min: 73, max: 76 },
        { letter: "C-", min: 70, max: 72 },
        { letter: "D+", min: 67, max: 69 },
        { letter: "D", min: 65, max: 66 },
        { letter: "D-", min: 25, max: 64 },
        { letter: "F", min: 0, max: 24 }
    ],
    mixed_rate: 5
}
/**
 * @param {"gay" | "peepee" | "simp" | "humour" | "IQ" | "horny" | "fat" | "tall" | "relationship" | "gender" | "looks" | "grade" | "mixed"} type
 * @param {{ gay_rate: number, peepee_rate: number, simp_rate: number, humour_rate: string[], IQ_rate: number, horny_rate: number, fat_rate: number, tall_rate: number, relationship_rate: number, gender_rate: number, looks_rate: number, grade_rate: Array.<{letter: string, min: number, max: number}>, mixed_rate: number}} config
 * @return {{type: string, result: {string: string, number: number, differenceString: string, differenceNumber: number, maxString: string, maxNumber: number}}}
 */
async function randomRate(type, config = randomRateConfig) {

    const randomizeNumber = (number) => Math.floor(Math.random() * number)
    const randomRange = (min, max) => Math.floor(Math.random() * (max - min) + min)
    function regularRate() {
        randomValue = randomizeNumber(config[`${type}_rate`])
        return {
            type: `${type}_rate`,
            result: {
                string: `${randomValue}%`,
                number: randomValue,
                differenceString: `${config[`${type}_rate`] - randomValue}%`,
                differenceNumber: config[`${type}_rate`] - randomValue,
                maxString: `${config[`${type}_rate`]}%`,
                maxNumber: config[`${type}_rate`]
            }
        }
    }
    const rateFunctions = {
        simp_rate: function simpRate(type) {
            return regularRate(type);
        },
        gay_rate: function gayRate(type) {
            return regularRate(type);
        },
        horny_rate: function hornyRate(type) {
            return regularRate(type);
        },
        relationship_rate: function relationship_rate(type) {
            return regularRate(type);
        },
        peepee_rate: function peepeeRate(type) {
            const randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `3${"=".repeat(Number(randomValue))}> (${randomValue} in.)`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} in.`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} in.`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        },
        humour_rate: function humourRate(type) {
            number = randomizeNumber(config[`${type}_rate`].length)
            return {
                type: `${type}_rate`,
                result: {
                    string: `${config[`${type}_rate`][number]} humour`,
                    number: number,
                    differenceNumber: config[`${type}_rate`].length - 1 - number,
                    differenceString: `${config[`${type}_rate`].length - 1 - number} away from the best`,
                    maxString: `${config[`${type}_rate`][config[`${type}_rate`].length - 1]} humour`,
                    maxNumber: config[`${type}_rate`].length
                }
            }
        },
        IQ_rate: function IQRate(type) {
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} IQ`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} IQ`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} IQ`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        },
        fat_rate: function fatRate(type) {
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} lb (${Math.floor(randomValue / 2.2046)} kg)`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} lb (${Math.floor((config[`${type}_rate`] - randomValue) / 2.2046)} kg)`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} lb (${Math.floor(config[`${type}_rate`] / 2.2046)} kg)`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        },
        tall_rate: function tallRate(type) {
            randomValue = randomRange(1.79, config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue} ft (${Math.floor(randomValue * 30.48)} cm)`,
                    number: randomValue,
                    differenceString: `${Math.floor(config[`${type}_rate`] - randomValue)} ft (${Math.floor((config[`${type}_rate`] - randomValue) * 30.48)} cm)`,
                    differenceNumber: Math.floor(config[`${type}_rate`] - randomValue),
                    maxString: `${config[`${type}_rate`]} ft (${Math.floor(config[`${type}_rate`] * 30.48)} cm)`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        },
        gender_rate: function genderRate(type) {
            const masculinePercentage = Math.floor(Math.random() * config[`${type}_rate`]);
            const femininePercentage = Math.floor(Math.random() * config[`${type}_rate`]);
            const differencePercentage = Math.abs(masculinePercentage - femininePercentage);

            return {
                type: `${type}_rate`,
                result: {
                    string: `Total percentage: ${masculinePercentage + femininePercentage}%, result: ${masculinePercentage > femininePercentage ? 'masculine' : 'feminine'} (${masculinePercentage > femininePercentage ? masculinePercentage : femininePercentage}%)`,
                    number: masculinePercentage + femininePercentage,
                    differenceString: `${masculinePercentage}% masculine, ${femininePercentage}% feminine, distant by ${differencePercentage}%`,
                    differenceNumber: differencePercentage,
                    maxString: `${config[`${type}_rate`]}%`,
                    maxNumber: config[`${type}_rate`],
                },
            };
        },
        looks_rate: function looksRate(type) {
            randomValue = randomizeNumber(config[`${type}_rate`])
            return {
                type: `${type}_rate`,
                result: {
                    string: `${randomValue}/${config[`${type}_rate`]}`,
                    number: randomValue,
                    differenceString: `${config[`${type}_rate`] - randomValue} points`,
                    differenceNumber: config[`${type}_rate`] - randomValue,
                    maxString: `${config[`${type}_rate`]} points`,
                    maxNumber: config[`${type}_rate`]
                }
            }
        },
        grade_rate: function gradeRate(type) {
            const maxScore = config[`${type}_rate`][0].max
            randomValue = randomizeNumber(maxScore)
            let result;
            for (const grade of config[`${type}_rate`]) {
                if (grade.min <= randomValue && grade.max >= randomValue) {
                    result = grade
                }
            }
            return {
                type: `${type}_rate`,
                result: {
                    string: `Grade ${result.letter} (${randomValue}/${maxScore})`,
                    number: randomValue,
                    differenceString: `${maxScore - randomValue} away from highest score`,
                    differenceNumber: maxScore - randomValue,
                    maxString: `${maxScore} points`,
                    maxNumber: maxScore
                }
            }
        }
    };
    switch (type) {
        case "gay":
            return rateFunctions[`${type}_rate`](type)
        case "peepee":
            return rateFunctions[`${type}_rate`](type)
        case "simp":
            return rateFunctions[`${type}_rate`](type)
        case "humour":
            return rateFunctions[`${type}_rate`](type)
        case "IQ":
            return rateFunctions[`${type}_rate`](type)
        case "horny":
            return rateFunctions[`${type}_rate`](type)
        case "fat":
            return rateFunctions[`${type}_rate`](type)
        case "tall":
            return rateFunctions[`${type}_rate`](type)
        case "gender":
            return rateFunctions[`${type}_rate`](type)
        case "looks":
            return rateFunctions[`${type}_rate`](type)
        case "grade":
            return rateFunctions[`${type}_rate`](type)
        case "relationship":
            return rateFunctions[`${type}_rate`](type)
        case "mixed":
            const mixedRateLimit = config[`${type}_rate`];
            const rates = Object.keys(config).filter(key => key !== 'mixed_rate');
            const max = rates.length;
            const results = [];

            if (mixedRateLimit > max) {
                throw new Error(`'mixed_rate' value must be under ${max}`);
            } else {
                const selectedRates = new Set();
                while (results.length < mixedRateLimit) {
                    const randomIndex = Math.floor(Math.random() * max);
                    if (!selectedRates.has(randomIndex)) {
                        selectedRates.add(randomIndex);
                        const rate = rates[randomIndex];
                        const func = rateFunctions[rate];
                        if (func) {
                            results.push(func(rate.split("_")[0]));
                        }
                    }
                }
                return results;
            }
        default:
            throw new Error('Invalid type.');
    }
}

module.exports = randomRate