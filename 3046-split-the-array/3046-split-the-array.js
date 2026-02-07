/**
 * @param {number[]} nums
 * @return {boolean}
 */

const isPossibleToSplit = function(nums) {
    const duplicateMap = new Map()
    let answer = false

    // 같은 번호가 두번 이상 나오는 것은 안됨
    for (const n of nums) {
        const frequency = (duplicateMap.get(n) ?? 0 ) + 1
        if (frequency > 2) return answer;
        duplicateMap.set(n, frequency)
    }
    answer = true;
    return answer;
};