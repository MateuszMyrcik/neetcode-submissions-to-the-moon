class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        const cur =  this.keyStore[key] ?? [];
        cur.push({ value, timestamp})
        this.keyStore[key] = cur;
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        const record = this.keyStore[key] || null;
        if (!record) {
            return "";
        }

        for(let i = record.length - 1; i > -1; i--) {
            if(timestamp >= record[i].timestamp) {
                return record[i]['value']
            }
        }

        return ''
    }
}
