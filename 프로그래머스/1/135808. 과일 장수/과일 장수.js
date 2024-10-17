// 사과의 최대점 k, 상자 당 개수 m, 사과들의 점수 score (아마 배열일) 를 줄때
// score에서 m개만큼 담아 팔아서 얻을 수 있는 최대 이익을 return

const countApples = (k, m, score) => {
    const sortedAppleBox = [];
    let totalScore = 0;
    
    score.sort((a,b) => b-a)
    if (score.length % m !== 0) {
        score.pop();
    }
    
    // 배열을 m개씩 썰어서 사과박스에 넣자
    for (let i = 0; i < score.length; i++) {
        const sortedApple = score.slice(m * i, m * (i+1));
        sortedApple.sort((a,b) => a-b);
        if(sortedApple.length !== m) {
            break;
        }
        sortedAppleBox.push(sortedApple);
    }

        sortedAppleBox.forEach((appleBox, idx) => {
        const appleScore = appleBox[0] * appleBox.length;
        totalScore += appleScore;
        })
    return totalScore;
}


function solution(k, m, score) {
    var answer = countApples(k, m, score);
    return answer;
}