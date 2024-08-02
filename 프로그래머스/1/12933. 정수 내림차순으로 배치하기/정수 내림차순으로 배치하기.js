function solution(n) {
    var answer = 0;
    let str = n.toString();
    let arr = [];
    let i = 0;
    
    for (i = 0; i < str.length ; i++) 
    {  arr[i] = str[i]
     
       arr.sort(function(a, b) {
        if (a < b) return 1;
        if (a == b) return 0;
        if (a > b) return -1;
    });
    }
    answer = Number(arr.join(''));
    return answer;
}