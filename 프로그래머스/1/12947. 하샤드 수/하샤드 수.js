function solution(x) {
    var answer = true;
    let str = x.toString();
    let i = 0;
    let quote = 0;
    let sum = 0;
    
    for (i = str.length - 1 ; i >= 0 ; i--) {
        quote = Math.floor(x / (10 ** i));
        x %= (10 ** i);
        sum += quote;
    }

      if (Number(str) % sum == 0) {
          // 이때 x % sum == 0 으로 쓸 경우 모두 true가 된다 - 위에서 x %= (10 ** i)를 써서 x값이 변했기 때문
          // 그래서 처음 x값을 가지고 있는 스트링인 str에서 숫자를 뽑는 식으로 처음 수를 추출
        answer = true 
    } else 
        answer = false;
    
    return answer;
}