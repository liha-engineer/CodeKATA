function solution(s) {
    var answer = '';
    
    idx = Math.floor(s.length/2)
    
    if (s.length % 2 !== 0) {
        answer = s.slice(idx, idx+1);
    } else {
        answer = s.slice(idx-1, idx+1);
    }
    return answer;
}