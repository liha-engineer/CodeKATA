// 숫자문자열 t 부분문자열 중 p와 길이가 같은 것들을 구해서
// 이것의 수가 p와 작거나 같은 횟수를 구한다

function solution(t, p) {
    var answer = 0;
    let partial = [];
    let cnt = 0;
    
    for (let i = 0; i < t.length - p.length + 1; i++) {
        partial[i] = t.slice(i, i + p.length)
        if (partial[i] <= +p) {
            cnt++;
        }
    }
    answer = cnt;
    return answer;
}