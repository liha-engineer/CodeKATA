function solution(arr) {
    var answer = 0;
    let leng = arr.length;
    let sum = 0;
    
    for (let i = 0; i < leng ; i++) {
        sum += arr[i];
    }
    answer = sum / leng;
    return answer;
}