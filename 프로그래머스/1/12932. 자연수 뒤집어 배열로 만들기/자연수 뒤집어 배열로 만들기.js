function solution(n) {
    var answer = [];
    let leng = n.toString().length
    let quote = 0;
    
    for (i = leng - 1 ; i >= 0 ; i--) {
        quote = n / ( 10 ** i);
        n = n % ( 10 ** i);
        quote = Math.floor(quote);
        
      answer[i] = quote;
    }
    
    return answer;
}