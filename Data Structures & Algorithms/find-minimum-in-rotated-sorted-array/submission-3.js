class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {

    if(nums[0] < nums[nums.length - 1] || nums.length === 1) {
        return nums[0]
    }

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
      const mid = Math.floor((right + left) / 2);

      console.log({ left, right, mid });
      if (right - left === 1) {
        return Math.min(nums[left], nums[right]);
      }
      if (nums[left] > nums[mid]) {
        right = mid;
      } else {
        left = mid;
      }
    }

    return 0;
  
    }
}
