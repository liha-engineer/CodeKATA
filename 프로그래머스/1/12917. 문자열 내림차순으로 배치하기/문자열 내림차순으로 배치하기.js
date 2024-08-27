function solution(s) {
    var answer = '';
    
    //배열에 charCodeAt() 이라는 메서드가 아스키 번호를 반환해준다
    // 아스키는 대문자 먼저 소문자 나중이라 소문자가 번호가 더 큰게 맞다
    // 그냥 s.charCodeAt을 쓰니 소문자 s의 번호를 리턴해주니까,
    // str = s.slice(0) 으로 모든 글자를 낱개로 썰자
    // 썰어서 for문돌려 아스키코드 비교해서 자리바꾸기 돌리자
    
    let arr = s.split('');
    let tmp = '';
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
         if (arr[j] < arr[j+1]){
            tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
             }
        }
    }

        
    
    
    answer = arr.join('');
    console.log(answer)

    return answer;
}