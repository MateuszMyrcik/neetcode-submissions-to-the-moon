class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
           const output = [];

    for (let i = 0; i < nums.length; i++) {
        if (i === 0) {
            output[i] = 1
        } else {
            output[i] = output[i - 1] * nums[i - 1];
        }
    }

    let rProd = 1;
    for (let i = (output.length - 1); i >= 0; i--) {
        if (i !== (output.length - 1)) {
            rProd = rProd * nums[i + 1];
            output[i] = output[i] * rProd;
        }
    }

    return output
    }
}
