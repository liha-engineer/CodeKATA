/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
const sMap = new Map()
const tMap = new Map()

if (s.length !== t.length) return false;

for (let i = 0; i < s.length; i++) {
    const sFreq = (sMap.get(s[i]) ?? 0) + 1
    const tFreq = (tMap.get(t[i]) ?? 0) + 1
    sMap.set(s[i], sFreq)
    tMap.set(t[i], tFreq)
}

if (sMap.size !== tMap.size) return false;

for (let i = 0; i < s.length; i++) {
    console.log(sMap.get(t[i]), tMap.get(t[i]))
    if(sMap.get(t[i]) !== tMap.get(t[i])) return false
}
return true
};