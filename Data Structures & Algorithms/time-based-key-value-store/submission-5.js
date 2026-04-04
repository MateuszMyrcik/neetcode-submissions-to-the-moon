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
        const record = this.keyStore[key];
        
        if (!record) {
            return "";
        }

        let l = 0;
        let r = record.length - 1;
        let result = '';

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);

            if(timestamp >= record[mid].timestamp) {
                result = record[mid].value;
                l = mid + 1;
            } else {
                r = mid - 1;
            }
        }

        // for(let i = record.length - 1; i > -1; i--) {
        //     if(timestamp >= record[i].timestamp) {
        //         return record[i]['value']
        //     }
        // }

        return result
    }
}
