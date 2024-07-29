function solution(n) {
    let answer = 0;
    let even = 0;
    
    for (i = 0 ; i <= n ; i++) {
        if (i%2 == 0) {
        even = i;
        answer += even;    
        }
    }
    return answer;
}