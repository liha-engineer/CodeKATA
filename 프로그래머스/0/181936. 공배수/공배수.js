const numberDeterminant = (number, n, m) => {
    const condition = number % n === 0 && number % m === 0;
    const answer = condition ? 1 : 0;
    return answer;
}

function solution(number, n, m) {
    return numberDeterminant(number, n, m)
}