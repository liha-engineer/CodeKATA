// 내번호 lottos, 당첨번호 win_nums. 당첨가능한 최고, 최저등수를 담은 배열을 return해줄 것

function findLotteryPlace(lottos, win_nums) {
    const atari = [];

    // lottos[i]와 win_nums[j]가 일치하는지 보고싶다 -> 순서는 안 맞을 것이다. 그냥 둘이 포함관계가 있는지만 보면 ok
    let samecnt = 0;
    const zerocnt = lottos.filter((v) => v === 0).length

    for(let i = 0; i < lottos.length; i++) {
        for (let j = 0; j < win_nums.length; j++) {
            if(lottos[i] === win_nums[j]) {
                samecnt++;
            }
        }
    }

    samecnt === win_nums.length ? 
    atari.push(1, 1) : 
    samecnt === 0 ? 
    zerocnt === 0 ?
    atari.push(6, 6) :
    atari.push(7 - (samecnt + zerocnt), 6 - samecnt) : 
    atari.push(7 - (samecnt + zerocnt), 7 - samecnt)

    return atari;
}

function solution(lottos, win_nums) {
    var answer = [];
    answer = findLotteryPlace(lottos, win_nums)
    return answer;
}