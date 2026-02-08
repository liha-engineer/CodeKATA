/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    if (!strs || strs.length === 1) return [strs];
    const map = new Map()

    for (word of strs) {
        const sorted = word.split("").sort().join("")
        if(!map.has(sorted)) map.set(sorted, [])
        map.get(sorted).push(word)
    }
    return [...map.values()]
};