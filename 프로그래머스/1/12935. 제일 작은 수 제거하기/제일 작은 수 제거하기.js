function solution(arr) {
    var answer = [];
    
    // 가장 작은 값을 찾는 로직이 필요하고
    // 그 값을 원래 배열에서 뺀 새로운 배열을 반환하는 로직이 필요하다
    // 원하는 것만 빼고 나머지를 반환하는 메소드는 splice(인덱스번호, 뺼 갯수) 쓰면 된다
    
    let min = arr[0];
    
    for (let i = 0; i <= arr.length - 1; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
      }
    console.log("min:", min);

    let cnt = 0;
    for (let i = 0; i <= arr.length -1; i++) {
       if (arr[i] === min) {
           continue;
       }
        answer[cnt++] = arr[i];
    }
    
    if (arr.length === 1) {
        answer = [-1];
    }
    return answer;
}