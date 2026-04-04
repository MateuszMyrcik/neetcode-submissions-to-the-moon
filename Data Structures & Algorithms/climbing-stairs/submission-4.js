class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    constructor() {
        // this.memo = {}
    }
    climbStairs(n) {
        
//     if(n <= 2) { 
//         return n;
//     }
//     if (this.memo[n]) {
//         return this.memo[n];
//     }

// this.memo[n] = this.climbStairs(n-1) + this.climbStairs(n -2 )

//     return this.memo[n]


 if (n <= 2) {
        return n;
    }

    let prev2 = 1;
    let prev1 = 2;
    
    for (let i = 3; i <= n; i++) {
        const cur = prev1 + prev2;
        prev2 = prev1;
        prev1 = cur;
        
    }

    return prev1; 

    }
}
