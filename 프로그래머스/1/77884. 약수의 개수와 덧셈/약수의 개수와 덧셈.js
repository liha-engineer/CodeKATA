// 약수가 짝수면 더하고 홀수면 뺀다
// 힌트 - 약수가 홀수인 수는 제곱수밖에 없다고. 1, 제곱근, 자신

function solution(left, right) {
    var answer = 0;
    
    let dividors = 0;
    for (let i = left; i <= right; i++) {
            dividors = i;
        if(Number.isInteger(Math.sqrt(i))) {
            dividors = -i;
        }
        answer += dividors;
        console.log(dividors)
    }
    return answer;
}