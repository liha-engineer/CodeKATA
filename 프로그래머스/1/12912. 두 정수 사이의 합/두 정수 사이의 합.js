function solution(a, b) {
    var answer = 0;
    let i = 0;
    let sum = 0;

        if( a > b )  {
            for (i = b; i <= a ; i++) { sum += i; }
            answer = sum;
            return answer;
        }
        else if ( a < b ) {
            for (i = a; i <= b; i++) { sum += i; }
            answer = sum;
            return answer;
        }
    
        else (a == b) 
            answer = a;
            return answer;
        

    return answer;
}