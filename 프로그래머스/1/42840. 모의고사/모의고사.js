// answers랑 비교해서 몇개나 맞췄는지 알고싶은 것. 동점인 인원이 있다면 return 값은 오름차순
const randomPickNumber = (answers) => {
    const supo1 = [1,2,3,4,5]
    const supo2 = [2,1,2,3,2,4,2,5]
    const supo3 = [3,3,1,1,2,2,4,4,5,5]
    
    // 모든 경우의 수를 복잡하게 비교하기 보다는, 가장 높은 점수를 찾고 그 점수와 같은 값을 가진 모든 수포자들을 결과 배열에 넣는 방식
    
    const studentAnswer = new Array(3).fill(0);
    answers.forEach((answer, i) => {
        if (answer === supo1[i % supo1.length])
            studentAnswer[0]++;
        if (answer === supo2[i % supo2.length])
            studentAnswer[1]++;
        if (answer === supo3[i % supo3.length])
            studentAnswer[2]++;
    });

    const mostPickedPeople = []
    studentAnswer.forEach((v, i) => {
        v === Math.max(...studentAnswer) ? mostPickedPeople.push(i+1) : null;
    });
    mostPickedPeople.sort((a,b) => a-b);
    
    return mostPickedPeople;    
}

function solution(answers) {
    var answer = [];
    answer = randomPickNumber(answers);
    return answer;
}