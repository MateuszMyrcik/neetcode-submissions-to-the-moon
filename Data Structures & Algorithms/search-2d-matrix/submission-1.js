class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    

    searchMatrix(matrix, target) {
    let l = 0;
    let r = matrix.length - 1;
    let searchRow = null;

    while (l <= r) {
        let mid = Math.floor((l + r) / 2)

        if (matrix[mid][0] > target) {
            r = mid - 1;
            continue;

        }

        if (matrix[mid][matrix[mid].length - 1] < target) {
            l = mid + 1;
            continue
        }

        searchRow = mid;
        break;
    }

    if (searchRow === null) {
        return false
    }



    
    return this.binarySearch(matrix[searchRow], target) > -1
};

binarySearch(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2)

        if (nums[mid] > target) {
            high = mid - 1;
            continue;
        }

        if (nums[mid] < target) {
            low = mid + 1;
            continue;
        }
        return mid

    }

    return -1
}
}
