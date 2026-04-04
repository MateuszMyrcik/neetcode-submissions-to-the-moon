class Solution {


    constructor() {
        this.stack = []
    }

    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const result = Array.from({ length: temperatures.length }, () => 0)

        for (const [index, temp] of temperatures.entries()) {
        const topStackItem = this.stack[this.stack.length - 1] ?? null;

        let curTemp = topStackItem?.val;

        while (curTemp !== null && curTemp < temp) {
            const item = this.stack.pop();

            if (item) {
            result[item.index] = index - item.index;
            }

            curTemp = this.stack[this.stack.length - 1]?.val ?? null
        }

        this.stack.push({ val: temp, index })
        }
        return result
    }
}
