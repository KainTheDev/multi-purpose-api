const { randomRate } = require('multi-purpose')
/**
 * 
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
module.exports = async (req, res) => {
    const defaultConfig = {
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
    const type = req.query.type
    const config = req.headers
    const configKeys = Object.keys(defaultConfig)
    for (const configKey of configKeys) {
        const data = config[configKey]
        if (data) {
            if (!['humour_rate', 'grade_rate'].includes(configKey)) {
                const configValue = Number(config[configKey])
                if (isNaN(configValue)) return res.status(400).json({ error: `'${configKey}' header parmeter must be a number.` });
                defaultConfig[configKey] = configValue;
            } else {
                try {
                    const configValue = JSON.parse(config[configKey])
                    if (Boolean(configValue.length)) {
                        for (const settings of configValue) {
                            const settingKeys = Object.keys(settings)
                            const errorsList = []
                            if (!settingKeys.includes('letter')) errorsList.push('letter');
                            if (!settingKeys.includes('min')) errorsList.push('min');
                            if (!settingKeys.includes('max')) errorsList.push('max');
                            if (errorsList.length > 0) return res.status(400).json({ error: `The JSON body of '${configKey}' is missing 3 properties: '${errorsList.join("', '")}'` })
                        }
                        defaultConfig[configKey] = configValue
                    } else {
                        return res.status(400).json({ error: `The JSON body of '${configKey}' header parameter must not be empty!` })
                    }
                } catch (e) {
                    console.log(e)
                    return res.status(400).json({ error: `Invalid JSON body for header parameter: '${configKey}'. Remember to use JSON.stringify(JSON_BODY).` })
                }
            }
        }
    }
    const errorsList = []
    if (!type) errorsList.push('type')
    if (errorsList.length > 0) return res.status(400).json({ error: `Parameters ${errorsList.map(error => `'${error}'`)} are missing.` });
    try {
        const result = await randomRate(type, defaultConfig)
        return res.json(result)
    } catch (e) {
        return res.status(400).json({ error: `${e}` });
    }
}
