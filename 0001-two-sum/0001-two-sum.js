/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    answer = []
    // 답은 한개만 있다고 가정한다. 그리고 같은 원소를 두번 쓰지 않는다
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]
        console.log("need: ", need)
        if(map.has(need)) return [map.get(need), i]
        map.set(nums[i], i)
    }
};