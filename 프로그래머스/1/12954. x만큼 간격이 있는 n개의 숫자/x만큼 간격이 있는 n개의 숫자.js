function solution(x, n) {
    let answer = [];
    for ( i = 0 ; i < n ; i++) {
        answer[i] = x * ( i + 1)
    }
    return answer;
}