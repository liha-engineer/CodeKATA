function solution(s) {
    var answer = '';
    
    let str = s.split(' ');
    
    for (let i = 0; i <= str.length - 1; i++) {
        for (let j = 0; j <= str[i].length - 1; j++) {
            if (j % 2 === 0) {
                answer += str[i][j].toUpperCase(str[i].charAt(j));
            } else {
                answer += str[i][j].toLowerCase(str[i].charAt(j));
            }
        }
        
        if (answer.length === s.length) {
        break;
        }
        
        answer += ' '
        
    }
    
return answer;
}