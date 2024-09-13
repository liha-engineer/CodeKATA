// 대문자 아스키 : 65~90, 소문자 아스키 : 97~122
// 문자의 아스키번호 반환: charCodeAt()
// 아스키번호의 문자 반환 : String.fromCharCode(번호)

function solution(s, n) {
    var answer = '';
    let pushed = '';
    
    for (let i = 0; i < s.length; i++) {
     pushed = String.fromCharCode(s[i].charCodeAt() + n)
        if(s[i].charCodeAt() === 32) {
        pushed = s[i];
        }
        // 아스키코드 + n 하면 대소문자 z를 넘어가버리는 경우, a쪽으로 다시 돌려줘야함
        if ((s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90 && s[i].charCodeAt() + n > 90) || 
            (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122 && s[i].charCodeAt() + n > 122)) {
        pushed = String.fromCharCode(s[i].charCodeAt() + n - 26);
        }
        answer += pushed;
    }
    return answer;
}