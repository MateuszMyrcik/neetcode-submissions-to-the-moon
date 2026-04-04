class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
    if (nums.length === 1) {
      return nums[0] === target ? 0 : -1;
    }

    let l = 0;
    let r = nums.length - 1;

    while (l < r) {
        const lV = nums[l];
      const rV = nums[r];
      const m = Math.floor((l + r) / 2);
      const mV = nums[m];

      if (lV === target) {
        return l;
      }

      if (rV === target) {
        return r;
      }

      if (mV === target) {
        return m;
      }

    if ((target < mV && target > lV) || (lV > mV && lV > target && mV > target)) {
        r = m - 1;
      } else {
        l = m + 1;
      }
    }

    return -1;
    }
}
