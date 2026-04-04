class MinStack {
    constructor() {
        this.items = []
        this.min = null
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        this.items.push(val);

        if(!this.minStack.length) {
            this.minStack.push(val)
            return
        }

        if(this.minStack[this.minStack.length - 1] >= val) {
            this.minStack.push(val);
            return
        }
    }

    /**
     * @return {void}
     */
    pop() {
        
        if(this.minStack[this.minStack.length - 1] === this.items[this.items.length - 1]) {
            this.minStack.pop()
        }
        
        this.items.pop()
    }

    /**
     * @return {number}
     */
    top() {
        return this.items[this.items.length - 1];
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.minStack[this.minStack.length - 1]
    }
}
