class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.heap = new MinHeap();
        this.limit = k
        this.init(nums, k);
    }

    init(nums) {
        for (let i = 0; i < nums.length; i++) {
            this.heap.push(nums[i]);
        }
        
        while (this.heap.getSize() > this.limit) {
            this.heap.pop();
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {   
        const root = this.heap.getRoot();
        
        if (val < root) return root;

        this.heap.push(val);
        
        if(this.heap.getSize() > this.limit) {
            this.heap.pop();
        }

        return this.heap.getRoot();

    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    getSize() {
        return this.heap.length;
    }

    getRoot() {
        return this.heap[0]
    }

    parent(i) {
        return Math.floor((i - 1) / 2);
    }

    leftChild(i) {
        return 2 * i + 1;
    }

    rightChild(i) {
        return 2 * i + 2;
    }

    push(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;

        while (i > 0 && this.heap[this.parent(i)] > this.heap[i]) {
            this.swap(this.parent(i), i);
            i = this.parent(i);
        }
    }

    swap(fromIndex, toIndex) {
        const fromValue = this.heap[fromIndex];
        const toValue = this.heap[toIndex];
        this.heap[toIndex] = fromValue;
        this.heap[fromIndex] = toValue;
    }

    pop() {
        this.swap(0, this.heap.length - 1);
        const min = this.heap.pop();
        let i = 0;
        let childIndex = this.getSmallerChildIndex(i);

        while (childIndex !== -1 && this.heap[i] > this.heap[childIndex]) {
            this.swap(i, childIndex);
            i = childIndex;
            childIndex = this.getSmallerChildIndex(i);
        }

        return min;
    }

    getSmallerChildIndex(i) {
        const left = this.leftChild(i);
        const right = this.rightChild(i);
        const heapSize = this.heap.length;

        if (left >= heapSize) return -1;
        if (right >= heapSize) return left;

        return this.heap[left] <= this.heap[right] ? left : right;
    }
}
