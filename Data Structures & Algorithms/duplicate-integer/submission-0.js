class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
         const numSet = new Set();
    
    const hasDuplicate = nums.some((num) => {
        if(numSet.has(num)) {
            return true;
        } 
        
        numSet.add(num);
        return false
    })

    return hasDuplicate;
    }
}
