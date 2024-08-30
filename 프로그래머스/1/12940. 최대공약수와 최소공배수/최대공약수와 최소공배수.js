function maxNum (n, m) {
    let maxnum = Math.max(n, m)
    let minnum = m === maxnum ? n : m ; 

    while (minnum !== 0) {
        let tmp = minnum;
        minnum = maxnum % minnum;
        maxnum = tmp;
    } 

    return maxnum;
}

function solution(n, m) {
    var answer = [];
    
    answer[0] = maxNum(n, m);


    // 최소공배수

    answer[1] = (m * n) / answer[0];

    return answer;
}