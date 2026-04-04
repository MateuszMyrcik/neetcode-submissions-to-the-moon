class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {


            if(s.length !== t.length) {
        return false;
    }
    
    // return s.split("").sort().join("") === t.split("").sort().join("")


    const letterToCount = new Map()
    
    s.split("").forEach((letter) => {
        const counter = letterToCount.get(letter) ?? 0;
        letterToCount.set(letter, counter + 1)
    })

    t.split("").forEach((letter) => {
        const counter = letterToCount.get(letter) ?? 0;
        letterToCount.set(letter, counter - 1)
    })

    letterToCount.forEach(letter => {
        if (letter !== 0) {
            return true
        }
    })

    for (const value of letterToCount.values()) {
        if (value !== 0) {
            return false
        }
    }

    return true
    }
}
