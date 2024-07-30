function solution(n) {
    var answer = 0;
    let sum = 0; 
    
    for (i = 0; i <= n ; i++ ) {
        if ( n % i == 0) {
            sum += i;
        }
        answer = sum;
    }
    
    
    return answer;
}