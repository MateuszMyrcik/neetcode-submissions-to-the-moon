class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
          
    const orderedNums = nums.sort((a, b) => a - b);
    const results= []
    const matchingSolutions = {}
    

    for (let i = 0; i < orderedNums.length; i++) {
        if (i > 0 && orderedNums[i] === orderedNums[i - 1]) continue;



      let left = i;
      let right = orderedNums.length - 1;
      const candidate = orderedNums[i] * -1;


      while (left < right) {
        if (left === i) {
          left++;
          continue;
        }

        if (right === i) {
          right--;
          continue;
        }

        const leftValue = orderedNums[left];
        const rightValue = orderedNums[right]
        // console.log({ leftValue, rightValue, candidate })

        if (leftValue + rightValue < candidate) {
          left++;
          continue;
        }

        if (leftValue + rightValue > candidate) {
          right--;
          continue;
        }

        if (leftValue + rightValue === candidate) {
            // console.log(left, i, right)
            results.push([leftValue, rightValue, orderedNums[i]])
            

            while (left < right && orderedNums[left] === orderedNums[left + 1]) left++;
  while (left < right && orderedNums[right] === orderedNums[right - 1]) right--;
  
  left++;
  continue;
        }
      }

    }

    return results
    }
}
