const combi = function (arr, num) {
    // 이거 자체는 nCr을 구하는 함수 -> 여기서 nCr의 조건이 합이 0이면 된다. 
    const result = [];
    if (num === 1) {return arr.map((element) => [element]);}
    
    arr.forEach((fixed, index, origin) => {
        // 내가 0번째를 fixed 했으면 rest는 1번째부터여야 하니까 내 뒤 인덱스를 써서 썰어주는 것
        const rest = origin.slice(index + 1);
        // 나머지에 대한 nCr 재귀진행
        const combination = combi(rest, num - 1);
        // 돌아온 조합에 떼놓은 값을 다시 붙여 출력
        const attach = combination.map((element) => [fixed, ...element])
        
        result.push(...attach);
    });
    return result;
}


function solution(number) {
    var answer = 0;
    let sum = 0;
    
    const comb3 = combi(number, 3);
    
    for (let i = 0; i <= comb3.length - 1; i++) {
        console.log('내부 한바퀴 돌았을 때의 sum: ', sum)
        console.log('그리고 그때의 answer:', answer)
        sum = 0;
        
        for (let j = 0; j <= comb3[i].length - 1 ; j++) {
            sum += comb3[i][j]
        if ( j === comb3[i].length - 1 && sum === 0) {
            answer++;
        }
            console.log('현재 내부의 comb상태', comb3[i])
        }
    }
    
    console.log ('3개 뽑는 조합: ', comb3);
    return answer;
}