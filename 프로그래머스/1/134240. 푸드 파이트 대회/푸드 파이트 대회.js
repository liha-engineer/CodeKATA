function foodFormation(food) {
    const foodNum = [];
    let foodString = [];
    
    food.forEach((item, index, arr) => {
        let foodCount = Math.floor(arr[index] / 2)
            foodNum.push(foodCount)
    })
    
    for (let i = 1; i < foodNum.length; i++) {
        for (let j = 1; j <= foodNum[i]; j++) {
            foodString.push(i)
        }
    }
    const answer = foodString.join('') + 0 + foodString.reverse().join('')
    return answer;
}


function solution(food) {
    var answer = '';
    answer = foodFormation(food);
    return answer;
}