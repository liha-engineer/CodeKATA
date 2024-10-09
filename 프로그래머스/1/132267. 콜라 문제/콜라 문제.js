// 줘야하는 병수 a, 받는 콜라수 b, 가진 병수 n
function countCoke(a, b, n) {
    let earnedCoke = 0;
    let surplustBottle = 0;
    let answer = 0;
    
    while (n > 0) {
        // 빈병 수 < 나누는 수인데 잉여빈병을 더해 나눌 수 있다면, 잉여빈병에서 그만큼 빼와서 빈병 수에 더해준다
        if(n < a && n + surplustBottle >= a) {
            surplustBottle -= (a - n);
            n += (a - n);
        }
        
        earnedCoke = Math.floor(n / a) * b;
        answer += earnedCoke;
        surplustBottle += n % a;
        n = earnedCoke;
        
        if (n + surplustBottle < a) {
            break;
        }    
    }
    return answer;
}

function solution(a, b, n) {
    var answer = 0;
    answer = countCoke(a,b,n);
    return answer;
}