class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
         const stack = new Stack();

    for (const token of tokens) {
        if (!isOperator(token)) {
            stack.push(Number(token))
        } else {
            const second = stack.pop();
            const first = stack.pop();

            const result = compute(first, second, token);

            stack.push(result)
        }

    }

    return stack.pop()
    }
}

function isOperator(input) {
    return ['+', '-', '*', '/'].includes(input)
}

function compute(f, s, operator) {
    switch(operator) {
        case '+':
            return f + s;
        case '-':
            return f - s;
        case '/':
            return parseInt(`${f / s}`);
        case '*':
            return f * s;
    }
}


class Stack {
   

    constructor() {
        this.items = []
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        return this.items.pop()
    }
}
