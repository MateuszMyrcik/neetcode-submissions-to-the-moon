class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */

    // 1. Naive solution with hash set
    // findDuplicate(nums) {
    //     const numApperance = new Set(); 

    //     return nums.find(num => {
    //         if(numApperance.has(num)) {
    //             return true;
    //         }

    //         numApperance.add(num);
    //         return false
    //     })
    // }

    // // 2. Slow and fast pointer
    // findDuplicate(nums) {
    //     let slow = 1;
    //     let fast = 2;

    //     let duplicate = null;

    //     while(!duplicate) {
    //         console.log({ duplicate })
    //         if(nums[slow] === nums[fast]) {
    //                    console.log(nums[slow])
    //             duplicate = nums[slow]
    //             return
    //         }
    //         slow = (slow + 1) % nums.length;
    //         fast = (fast + 2) % nums.length;

    //     }

    //     console.log(duplicate)
    //     return duplicate
    // }


    // 3. suggestion from 2nd hint that mutates original array
  findDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        const idx = Math.abs(nums[i])

        if(nums[idx] < 0) {
            return idx
        }

        nums[idx] *= -1;
    }
}
}
