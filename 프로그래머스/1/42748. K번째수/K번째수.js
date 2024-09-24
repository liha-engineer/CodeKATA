function resortArray(array, commands) {
    let slicedArray = [];
    let arr = [];
    
    for (let i = 0; i < commands.length; i++) {
    slicedArray = array.slice(commands[i][0]-1, commands[i][1]).sort((a, b) => a - b)
    arr.push(slicedArray[commands[i][2] - 1])
    }
    return arr;
}

function solution(array, commands) {
    var answer = [];
    answer = resortArray(array, commands)
    return answer;
}