function findSame (s) {
    const location = [];
    let indexNum = 0;

    for (let i = 0; i < s.length; i++) {
        indexNum = -1;
        for (let j = 0; j <= i; j++) {
            if (s[i] === s[j] && i !== j) {
                indexNum = Math.abs(j - i);
            } 
        }
        location.push(indexNum);
    } 
    return location;
}

function solution(s) {
    var answer = [];
    answer = findSame(s);
    return answer;
}