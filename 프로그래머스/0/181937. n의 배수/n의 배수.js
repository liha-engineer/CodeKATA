const multiples = (num, n) => {
    const answer = num % n === 0 ? 1 : 0;
    return answer;
}

function solution(num, n) {
    return multiples(num, n);
}