function findDay (a, b) {
    const yoil = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
    const day = new Date(`2016-${a}-${b}`).getDay();
    return yoil[day];
}

function solution(a, b) {
    var answer = '';
    answer = findDay (a, b);
    return answer;
}