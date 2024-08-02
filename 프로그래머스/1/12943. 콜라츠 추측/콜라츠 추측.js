function solution(num) {
    var answer = 0;
    let i = 0;
    
    for (i = 1; i <= 500 ; i++ ) {        
        if (num == 1) {
            break;
            answer = i;
            return answer;
        } 
        
        if (num % 2 == 0) {
        num /= 2;
        } else {
        num = num*3 + 1;
        }
        answer = i;
    }
    
         if (i > 500) {
            answer = -1
        } 
    return answer;
}