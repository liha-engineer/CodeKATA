// card1, card2가 있고 둘을 다 써서 goal이 되면 Yes, 안되면 No를 반환
function combineCards (cards1, cards2, goal) {
    while (goal.length > 0) {
         if(cards1[0] === goal[0]) {
             cards1.shift();
             goal.shift();
         } else if (cards2[0] === goal[0]) {
             cards2.shift();
             goal.shift();
         } 
        
        if (cards1[0] !== goal[0] && cards2[0] !== goal[0]) {
            break;
        }
    }
    return goal.length === 0 ? "Yes" : "No";
}

function solution(cards1, cards2, goal) {
    var answer = '';
    answer = combineCards (cards1, cards2, goal);
    return answer;
}