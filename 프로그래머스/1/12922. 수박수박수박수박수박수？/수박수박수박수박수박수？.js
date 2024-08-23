function solution(n) {
    var answer = '';
    const s = '수';
    const b = '박';
    for (let i = 0; i < n; i++) {
        if (i % 2 !== 0) {
            answer += b;
        } else {
            answer += s;
        }
    }
    return answer;
}