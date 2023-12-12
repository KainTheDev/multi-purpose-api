const { writeFileSync, readFileSync } = require("fs")
class textDatabase {
    /**
     * 
     * @param {string} databaseName 
     */
    constructor(databaseName) {
        this.filePath = databaseName+".txt"
        if(!databaseName) throw new Error("Missing argument 'databaseName'");
        let data;
        try {
            data = JSON.parse(readFileSync(this.filePath, 'utf-8'))
            if (typeof data !== 'object') {
                writeFileSync(this.filePath, '{}')
            }
        } catch (e) {
            writeFileSync(this.filePath, '{}')
            data = JSON.parse(readFileSync(this.filePath, 'utf-8'))
        }
        this.data = data
    }
    /**
     * 
     * @param {string} key 
     * @returns {any}
     */
    async get(key) {
        return this.data[key]
    }
    /**
     * @param {string} key 
     * @param {any} value 
     */
    set(key, value) {
        this.data[key] = value
        writeFileSync(this.filePath, JSON.stringify(this.data, null, '\t'))
    }
    /**
     * @returns {...{key: string, value: string}}
     */
    async getAll() {
        const list = []
        const keys = Object.keys(this.data)
        const values = Object.values(this.data)
        for (const index in keys) {
            list.push({key: keys[index], value: values[index]})
        }
        return list
    }
    deleteAll() {
        writeFileSync(this.filePath, "{}")
    }
    /**
     * 
     * @param {string} key 
     */
    delete(key) {
        delete this.data[key]
        writeFileSync(this.filePath, JSON.stringify(this.data, null, '\t'))
    }
}
module.exports = textDatabase