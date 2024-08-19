function solution(arr, divisor) {
    var answer = [];
    let i = 0;
    
    for (i = 0; i <= arr.length - 1; i++) {
        if(arr[i] % divisor === 0) {
            answer.push(arr[i]);
        } 
    }
    answer = answer.sort((a, b) => a - b);
    
    if(answer.length === 0) {
        return [-1];
    }
    return answer;
}