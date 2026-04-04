class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let max = 0;
        let l  = 0;
        let r = h.length - 1;

        while(l < r) {
            const curMax = (r - l) * Math.min(h[l], h[r]);
            console.log(curMax)
            if(curMax > max) {
                max = curMax;
            }


            if(h[l] > h[r]) {
                r--;
                continue;
            }
            if(h[l] < h[r]) {
                l++;
                continue;
            }
            l++;
        }
        return max
    }
}
