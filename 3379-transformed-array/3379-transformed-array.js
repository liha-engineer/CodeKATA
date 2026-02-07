/**
 * @param {number[]} nums
 * @return {number[]}
 */
const constructTransformedArray = function(nums) {
    const result = new Array(nums.length)

    for (let i = 0; i < nums.length ; i++) {
        if (nums[i] > 0) {
            result[i] = nums[(i + nums[i]) % nums.length]

        } else if (nums[i] < 0) {
            // 음수인 경우 왼쪽으로 이동 
            const k = Math.abs(nums[i])
            const len = nums.length 
            const left = k % len
            const negativeIndex = (i + (len - left)) % len
            result[i] = nums[negativeIndex] 
        }
        if (nums[i] === 0) {
         result[i] = nums[i]   
        }
        console.log(result)
    }
    return result;
};

