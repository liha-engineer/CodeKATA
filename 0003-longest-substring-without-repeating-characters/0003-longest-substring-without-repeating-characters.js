/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let left = 0
    const set = new Set()
    let best = 0

    for (let right = 0; right < s.length; right++) {
        while(set.has(s[right])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[right])
        best = Math.max(best, right - left + 1)
    }

    return best;
};