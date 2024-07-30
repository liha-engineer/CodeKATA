function solution(n)
{
    var answer = 0;
    let quote, sum = 0;
    
    let leng = n.toString().length
    
    for (i = leng - 1; i >= 0 ; i--) {
        quote = n / (10 ** i);
        n = n % (10 ** i);
        sum += Math.floor(quote);

        answer = sum;
    }
    return answer;
}