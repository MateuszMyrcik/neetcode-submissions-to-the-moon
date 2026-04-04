class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            const candidate = nums[i] + nums[j];

            if (candidate === target) {
                return [i, j];
            }
        }
    }
    }
}
