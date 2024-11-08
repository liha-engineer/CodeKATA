// 길이 n미터인 벽, 롤러의 길이 m미터, 페인트칠 구역번호 배열 section
// 롤러의 길이는 항상 같지 않다 
// section 간 떨어져있는 거리보다 롤러가 짧으면 칠해야 할 횟수가 늘어날 것
function getPaintingArea(n, m, section) {
    let paintingCnt = 0;
    let distance = 0;
    
    for (let i = 0; i < section.length; i++) {
        if (section[i] <= distance) continue;
        
        distance = section[i] + m - 1;
        paintingCnt++;
    }
    
    return paintingCnt;
}

function solution(n, m, section) {
    var answer = 0;
    answer = getPaintingArea(n, m, section)
    return answer;
}