class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
    const sortedPiles = piles.sort((a, b) => a - b);
    let low = 1;
    let high = sortedPiles[sortedPiles.length - 1];
    let result = 0;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);

      const curH = sortedPiles.reduce((agg, cur) => {
        return Math.ceil(cur / mid) + agg;
      }, 0);


      if (curH <= h) {
        high = mid - 1;
        result = mid
        continue;
      } else {
        low = mid + 1;
      }
    }

    return result;
    }
}
