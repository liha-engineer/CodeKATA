/**
 * @param {number[]} nums
 * @return {number[]}
 */
const constructTransformedArray = function(nums) {
    let moving, answer = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            moving = (i + nums[i]) % nums.length
            answer.push(nums[moving])
        } else if (nums[i] < 0) {
            moving = ((i - Math.abs(nums[i])) % nums.length + nums.length) % nums.length
            answer.push(nums[moving]) 
        } else if (nums[i] === 0) {
            answer.push(nums[i])
        }
    }
    return answer;
};