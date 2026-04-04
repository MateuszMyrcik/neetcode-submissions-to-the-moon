class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

    const existingCharMap=  {};
    let max = "";
    let localMax = "";
    let minIndex = 0; 

    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (existingCharMap[char]?.[0] && existingCharMap[char][0] < minIndex) {
        console.log(char);
        delete existingCharMap[char];
      }

      if (!existingCharMap[char]) {
        // ADD element that not exist in a map
        localMax = localMax.concat(char);
        existingCharMap[char] = [i];
      } else {
        const duplicatedChar = existingCharMap[char];
        existingCharMap[char] = [i];
        const newStart = localMax.indexOf(char) + 1
        localMax = localMax.slice(newStart).concat(char);
        minIndex = existingCharMap[localMax[0]][0];
      }

      if (localMax.length >= max.length) {
        max = localMax;
      }

      console.log({ localMax, max, char });
    }

    return max.length;
  
  }

    
}
