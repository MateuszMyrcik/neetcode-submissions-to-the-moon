class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        
    const numToCount = new Map();
    

    nums.forEach((num) => {
        let count = numToCount.get(num) ?? 0;
        let newCount = count + 1;
        numToCount.set(num, newCount)
    })

    const newResult = Array.from(numToCount).sort(((a, b) => {
        const [, valueA] = a;
        const [, valueB] = b;
        
        return valueB - valueA;
    })).splice(0, k).map(([key]) => key)

    return newResult

    }
}
