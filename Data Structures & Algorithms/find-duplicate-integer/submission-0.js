class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        const numApperance = new Set();

        return nums.find(num => {
            if(numApperance.has(num)) {
                return true;
            }

            numApperance.add(num);
            return false
        })
    }
}
