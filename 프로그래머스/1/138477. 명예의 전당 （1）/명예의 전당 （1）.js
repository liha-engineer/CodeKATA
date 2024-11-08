function findLeastScore (k, score) {
    const hallOfFame = [];
    const leastScores = [];
    
    score.forEach((el) => {
        if (leastScores.length < k) {
            hallOfFame.push(el);
            hallOfFame.sort((a,b) => b-a);
            leastScores.push(hallOfFame.at(-1));
        } 
        else {
            hallOfFame.push(el);
            hallOfFame.sort((a,b) => b-a);
            hallOfFame.pop();
            leastScores.push(hallOfFame.at(-1));
        }
    });
    console.log('hallOfFame: ', hallOfFame)   
    console.log('leastScores: ', leastScores)
    
    return leastScores;
    
}

function solution(k, score) {
    var answer = [];
    answer = findLeastScore(k, score);
    return answer;
}