function solution(strings, n) {
    var answer = [];
    
    // 배열로 나오는군
    // strings[i][i]를 찍으니 뭐가 잘 찍힌다. -> 얘는 2차원배열이구나
    // 각 단어를 n번째 문자로 strings를 정렬하고 싶다.
    // n번째 문자가 동일하다면 사전 순으로 앞선 문자열이 앞쪽에 위치하게 배치하고 싶다 
    // 문자는 localeCompare로 정렬하면 된다
    
    let sorted = strings.sort((a,b) => {
        if (a[n] === b[n]) { 
            return a.localeCompare(b);}
        else {
            return a[n].localeCompare(b[n]);}
    });
        answer = sorted;
        return answer;
    }