/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = function(nums) {
    const duplicateMap = new Map()

    for (const n of nums) {
        const frequency = (duplicateMap.get(n) ?? 0 ) + 1
        duplicateMap.set(n, frequency)
        if (frequency >= 2) return true;
    }
    return false;
};