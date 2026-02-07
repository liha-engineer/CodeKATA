/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    if (s.length !== t.length ) return false;

    const sMap = new Map()
    const tMap = new Map()

    for (const letter of s) {
        const sFrequnecy = (sMap.get(letter) ?? 0 ) + 1
        sMap.set(letter, sFrequnecy) 
    }

    for (const letter of t) {
        const tFrequnecy = (tMap.get(letter) ?? 0 ) + 1
        tMap.set(letter, tFrequnecy) 
    }

    for (const [key, value] of sMap) {
        if((tMap.get(key) ?? 0) !== value) return false;
    } 
    return true

};