class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
         const stack = new Stack()
    const characters = s.split('')

    console.log(characters)

    if (characters.length % 2 === 1) {
        return false
    }

    for (const c of characters) {
        if (isOpeningBracket(c)) {
            stack.push(c);
        } else {
            const top = stack.pop();

            if (!isMatchingBracket(top, c)) {
                return false
            }
        }

    }

    

    return stack.isEmpty()
    }
}


function isOpeningBracket(s) {
    return ['{', '[', '('].includes(s)
}

function isMatchingBracket(openB, closeB) {
    return (openB === '{' && closeB === '}') || (openB === '(' && closeB === ')') || (openB === '[' && closeB === ']')

}


class Stack {
    

    constructor() {
        this.items = []
    }

    pop() {
        return this.items.pop()
    }

    push(item) {
        return this.items.push(item)
    }

    isEmpty() {
        return !this.items.length
    }
}
