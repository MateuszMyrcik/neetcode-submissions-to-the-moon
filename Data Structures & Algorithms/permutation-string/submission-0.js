class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {


          const mainSetFreq= {};
    const subSetFreq = {};
    let l = 0;

    for (const char of s1) {
      subSetFreq[char] = (subSetFreq[char] || 0) + 1;
    }

    for (const [r, char] of [...s2].entries()) {
      mainSetFreq[char] = (mainSetFreq[char] || 0) + 1;

      if (r + 1 < s1.length) {
        continue;
      }

      const isEqual = Object.entries(subSetFreq).every(
        ([char, freq]) => mainSetFreq[char] === freq,
      );

      if (isEqual) {
        return true;
      }

      mainSetFreq[s2.charAt(l)] -= 1;
      l++;
    }
    return false;

    }
}
