function solution(arr1, arr2) {
    var answer = [[]];
    
    
    const d2Arr = (row, column) => {
        let arr = new Array(arr1.length);
        for (let i =0; i < row; i++) {
            arr[i] = new Array(column);
        }
        return arr;
    }
    
    // 행과 열의 크기가 같은 두 행렬의 같은 행과 같은 열의 값... 자릿수 다를 일은 적어도 없다는 얘기
    // arr1[i][j] + arr2[i][j] 면 좋겠지만, 이차원배열이고 이차원배열의 길이도 예시마다 다르다. 
    // 배열의 각 요소가 또 배열인 셈. 이때 식을 어떻게 짜야 할까?
    
    let arr = d2Arr(arr1.length, arr1[0].length)
    
    
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr1[0].length; j++) {
        arr[i][j] = arr1[i][j] + arr2[i][j]
        }
        
        answer = arr;
    }

    return answer;
}