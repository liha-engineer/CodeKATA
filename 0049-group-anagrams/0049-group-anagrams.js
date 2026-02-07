/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
    if (!strs || strs.length === 0 || strs.length === 1) return [strs];

    const map = new Map()

    for (const word of strs) {
        const key = word.split("").sort().join("")

        if(!map.has(key)) map.set(key, [])
        map.get(key).push(word)
    }

    const answer = Array.from(map.values())
    return answer

};