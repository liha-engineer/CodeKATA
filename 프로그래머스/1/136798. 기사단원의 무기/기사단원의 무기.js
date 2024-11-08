// 각 기사는 자신의 기사 번호의 약수 개수에 해당하는 공격력을 가진 무기를 구매
// 단, 제한수치 있고 제한수치보다 큰 공격력을 가진 무기를 구매해야 하는 기사는 협약 공격력 무기 구매 강제
// 무기를 모두 만들기 위해 필요한 철의 무게를 구하고 싶음

function getIronMass (number, limit, power) {
    let divisor = 0;
    let totalIronMass = 0;
    for (let i = 1; i <= number; i++) {
        divisor = 0;
        // 약수 갯수를 그냥 구하니 시간초과가 뜬다 - 좀더 간단히 해볼수 없을까?
        for(let j = 1; j <= Math.sqrt(i); j++) {
            if (i % j === 0) 
                ++divisor;
        }
        // 제곱수인 경우 약수가 1, 제곱근, 자기자신이므로 *2 후 1을 빼주어야 함
        Number.isInteger(Math.sqrt(i)) ? divisor = divisor * 2 - 1 : divisor *= 2
        // 약수 갯수가 한계보다 크면 지정된 공격력으로 구매하니 지정공격력만큼의 철 무게 필요
        divisor > limit ? totalIronMass += power : totalIronMass += divisor; 
    }
    return totalIronMass;
}

function solution(number, limit, power) {
    var answer = getIronMass (number, limit, power);
    return answer;
}