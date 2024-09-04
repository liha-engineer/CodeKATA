// 3진법으로 변환 -> 자릿수 뒤집기 -> 10진법으로 변환 
// 3^0 + 3^1 + 3^2 + 3^3 + 3^4...

function digit3(n) {
    let nStr = n + '';
    let threeNum = '';
    let reverse = [];
    
    threeNum = parseInt(nStr, 10).toString(3);
    
    for (let i = 0; i <= threeNum.length - 1; i++) {
        reverse[i] = threeNum[threeNum.length - 1 - i]
    }
    reverse = reverse.join('')
    return reverse;
}

function digit10(n) {
    let nStr = n + '';
    let decimal = '';
    
    decimal = parseInt(nStr, 3).toString(10);
    return decimal;
}


function solution(n) {
    var answer = 0;
    answer = parseInt(digit10(digit3(n)));
    return answer;
}