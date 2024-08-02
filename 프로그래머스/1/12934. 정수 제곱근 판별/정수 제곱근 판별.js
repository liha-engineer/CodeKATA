function solution(n) {
    var answer = 0;
    let x = 0;
    if (n % (Math.sqrt(n)) == 0) {
        x = Math.sqrt(n);
        answer = ( x + 1 ) ** 2;
    } else {
        answer = -1;
    }
    return answer;
}