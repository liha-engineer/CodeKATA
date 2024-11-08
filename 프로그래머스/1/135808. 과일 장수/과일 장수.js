const countApples = (k, m, score) => {
    let answer = 0;
    const sortedScore = score.sort((a, b) => a - b).slice(score.length % m);
  
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}

function solution(k, m, score) {
    var answer = countApples(k, m, score);
    return answer;
}