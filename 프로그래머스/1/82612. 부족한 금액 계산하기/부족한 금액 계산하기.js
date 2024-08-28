function solution(price, money, count) {
    var answer = 0;
    let sum = 0;
    let countprice = 0;
    // count 번째 탄다고 할때 가격은 n * price가 되겠다
    // return 대상은 모자란 차액
    
    for (let i = 1; i <= count; i++) {
        countprice = price * i;
        sum += countprice;
        answer = sum - money;
        
        if (answer < 0) {
            answer = 0;
        }
    }
    return answer;
}