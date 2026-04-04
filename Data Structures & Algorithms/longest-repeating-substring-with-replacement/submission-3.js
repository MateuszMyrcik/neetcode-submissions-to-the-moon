class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const charFreq = {}
        let max = 0;
        let windowSize = 0;

        let l = 0;
        let maxWindow = 0;

        for(let r=0; r < s.length; r++) {
            const ch = s[r];
	        charFreq[ch] = (charFreq[ch] || 0) + 1;
            
            let localMax = Object.values(charFreq).reduce((cur, agg) => Math.max(cur, agg), 0);
            

            while((r - l) - localMax + 1 > k) {
                

                charFreq[s[l]] -= 1;
                l++;
            }

            maxWindow = Math.max(r-l + 1, maxWindow)

            
            
        }

        

        return maxWindow
    }

}
