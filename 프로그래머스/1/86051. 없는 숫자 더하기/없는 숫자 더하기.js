function solution(numbers) {
    var answer = 0;
    for (let i = 9; i > 0 ; i--) {
        if (!numbers.includes(i)) {
            answer += i;
        }
    }
    return answer;
}