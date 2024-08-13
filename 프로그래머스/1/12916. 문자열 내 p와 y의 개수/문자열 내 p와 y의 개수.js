function solution(s){
    var answer = true;

let arr = [...s.toLowerCase()];

let cntp = arr.filter(function(item1) {
    return item1 == 'p';
});

let cnty = arr.filter(function(item2) {
    return item2 == 'y';
});

    if (cntp.length === cnty.length) {
         answer = true;
    } else answer = false;

    return answer;
}