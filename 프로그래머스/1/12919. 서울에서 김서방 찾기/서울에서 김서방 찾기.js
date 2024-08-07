function solution(seoul) {
    var answer = '';
    let i = 0;
    
    function findKim (ksb) {
        return ksb == "Kim";
    }
    answer = '김서방은 ' + seoul.findIndex(findKim) + '에 있다';
    
    return answer;
}