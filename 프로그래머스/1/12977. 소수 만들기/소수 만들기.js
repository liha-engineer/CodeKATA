// 서로 다른 3개를 고른다 -> 조합으로 뽑아야 함 (순서가 상관없기 때문에 얘네가 다른걸로 인식되면 안됨)

// 조합 뽑는 함수
const getCombination = (arr, select) => {
    const result = [];
    if (select === 1)  return arr.map((el) => [el])
    
    arr.forEach((fixed, index, origin) => {
        const rest = origin.slice(index + 1)
        const combination = getCombination(rest, select -1);
        const attached = combination.map((el) => [fixed, ...el])
        result.push(...attached)
    });
    return result;
}

// 소수 찾는 함수
function findPrimeNumber (nums) {
    const pickedNumbers = getCombination(nums, 3);
    const sum = [];
    let primeNums = 0;

    // 세 수를 뽑았으니 더하기 위해 reduce 사용, 뽑은 수가 배열로 나오기 때문에 배열 순회용으로 forEach 사용
    const pickedSum = pickedNumbers.forEach((v,i) => {
        const addnum = pickedNumbers[i].reduce((a,b) => a + b, 0)
        sum.push(addnum)

    })
    // 1부터 자기 자신까지 약수 구하기
    let cnt = 0;
    sum.forEach((v) => {
        cnt = 0;
        for(let i = 1; i <= v; i++) {
            if (v % i === 0) {
            cnt++;
            }
        }
        if (cnt === 2) {
        primeNums++;
        }
    });
    return primeNums;
}

function solution(nums) {
    var answer = -1;
    answer = findPrimeNumber(nums)
    
    return answer;
}