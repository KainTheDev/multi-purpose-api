let { default: fetch } = require("node-fetch")
class Database {
    /**
     * 
     * @param {string} id 
     */
    constructor(id) {
        if(id) {
            this.id = id
        }else{
            console.trace("Missing ID."), process.exit(0);
        }
    }
    /**
     * @private
     */
    async execute(method, key, value) {
        let response = await fetch(`https://database-api.soulviral.repl.co/${method}${key ? `?key=${key}` : ""}${value ? `&value=${value}` : ""}&id=${this.id}`)
        let data = await response.json()
        return data
    }
    /**
     * @param {String} key key of the data
     * @param {Number} value value of the data
     * @returns {any}
     **/
    async get(key) {
        let data = await this.execute(this.get.name, key)
        if(data.error) data = false
        return data.value;
    }
    /**
     * @returns {object | {error: string}}
     */
    async get_all() {
        let data = await this.execute(this.get_all.name.replace("_", "/"))
        if(data.error) data = false
        return data;
    }
    /**
     * @param {String} key key of the data
     * @param {Number} value value of the data
     * @returns {any}
     **/
    async set(key, value) {
        let data = await this.execute(this.set.name, key, value)
        if(data.error) data = false
        return data;
    }
    /**
     * @param {String} key key of the data
     * @param {Number} value value of the data
     * @returns {any}
     **/
    async delete(key) {
        let data = await this.execute(this.delete.name, key)
        if(data.error) data = false
        return data;
    }
    /**
     * 
     * @returns {void | {error: string}}
     */
    async delete_all() {
        let data = await this.execute(this.delete_all.name.replace("_", "/"))
        if(data.error) data = false
        return data;
    }
}
module.exports = Database