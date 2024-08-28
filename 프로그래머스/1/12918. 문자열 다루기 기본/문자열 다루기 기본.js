function solution(s) {
    var answer = true;
    
    // s.length를 4나 6인지 확인해보고
    // 정규식으로 s를 썰어서 숫자만 걸러보자
    // 이 둘을 모두 만족하면 true, 아니면 false인걸로
    
    function isValidString(s) {
    return /^\d{4}$|^\d{6}$/.test(s);
}

    console.log(isValidString(s));
    answer = isValidString(s);
    return answer;
}