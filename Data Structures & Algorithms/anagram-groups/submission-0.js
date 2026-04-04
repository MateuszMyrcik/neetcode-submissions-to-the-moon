class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
 const sortedStringToAnagrams = new Map();

    strs.forEach(str => {
        const sortedString = str.split('').sort().join('');
        
        sortedStringToAnagrams.set(sortedString, [...(sortedStringToAnagrams.get(sortedString) ?? []), str])
    })

    return [...sortedStringToAnagrams.values()]


    }
    
}
