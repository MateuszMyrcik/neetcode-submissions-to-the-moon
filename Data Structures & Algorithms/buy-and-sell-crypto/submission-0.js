class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = null;
        let min = prices[0];

        for(const price of prices) {
          min = Math.min(min, price)
          const profit =price - min;
          maxProfit = Math.max(profit, maxProfit)
        }

        return maxProfit;
    }
}
