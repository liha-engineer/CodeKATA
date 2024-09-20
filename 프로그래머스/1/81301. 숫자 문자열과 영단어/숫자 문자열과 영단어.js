// 문자열 s는 영어로 바뀌었거나 바뀌지않고 그대로 숫자일 수도 있다
// 걸러내는 법은 정규식이 있을 것 같은데, 위치를 모른다는게 문제

function applyRegExp(s) {
    let filteredS = '';
    
    const engNum = [/zero/ig, /one/ig, /two/ig, /three/ig, /four/ig, /five/ig, /six/ig, /seven/ig, /eight/ig, /nine/ig]
    
    for (let i = 0; i < engNum.length; i++) {
        filteredS = (s.replaceAll(engNum[i], i))
        s = filteredS;
    }
    return filteredS;
}

function solution(s) {
    let answer = parseInt(applyRegExp(s))
    
    return answer;
}