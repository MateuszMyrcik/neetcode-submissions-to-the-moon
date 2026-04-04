class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        this.memo = {}
    }
    climbStairs(n) {
        
    if(n <= 2) { 
        return n;
    }
    if (this.memo[n]) {
        return this.memo[n];
    }

this.memo[n] = this.climbStairs(n-1) + this.climbStairs(n -2 )

    return this.memo[n]

    }
}
