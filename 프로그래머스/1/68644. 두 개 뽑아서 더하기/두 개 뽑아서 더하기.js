function picktwonum(arr, select) {
    const result = [];
    let sum = [];
    let realsum = [];
    if (select === 1) return arr.map((el) => [el]);
    
    arr.forEach((fixed, index, origin) => {
      const rest = [...origin.slice(0, index), ...origin.slice(index+1)] 
      // 해당하는 fixed를 제외한 나머지 배열 
      const permutation = picktwonum(rest, select - 1); 
      // 나머지에 대해서 순열을 구한다.
      const attached = permutation.map((el) => [fixed, ...el]); 
      //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
      result.push(...attached); 
      // 배열 spread syntax 로 모두다 push
    });
    
    for (let i = 0; i < result.length; i++){
        for (let j = 0; j < 1; j++) {
            sum[i] = result[i][j] + result[i][j+1]
        }
        const sumSet = new Set(sum);
        realsum = [...sumSet].sort((a,b) => a-b);
    } 
    return realsum;
}

function solution(numbers) {
    var answer = [];
    answer = picktwonum(numbers, 2)
    return answer;
}