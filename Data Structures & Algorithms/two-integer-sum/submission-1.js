class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    const sorted = [...nums].sort((a, b) => a - b)

    let l = 0;
    let r = sorted.length - 1;
    let lValue;
    let rValue;
    let result;

    while (l < r) {
        result = sorted[l] + sorted[r];

        if (result === target) {
            lValue = sorted[l];
            rValue = sorted[r];
            break;
        }

        if (result < target) {
            l++;
        }

        if (result > target) {
            r--;
        }
    }


    const lIndex = nums.indexOf(lValue)
    const rIndex = nums.findIndex((value, index) => value === rValue && index !== lIndex)
 
    return [lIndex, rIndex]
    }
}
