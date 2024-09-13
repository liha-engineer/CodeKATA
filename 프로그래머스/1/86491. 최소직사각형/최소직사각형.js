// 가로에서 하나, 세로에서 하나를 취해서 지갑의 크기를 구하는 것
// 단순히 가장 큰 길이를 구해 곱해도 되지만, 가로세로를 바꿨을 경우 수납할 수 있다면 그 부분도 고려해야 한다. 
// 모든 가로길이와 세로길이를 size라는 2차원배열로 줄 것이니, 
// 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때 지갑 크기를 return해줘
// 조합으로 풀어볼 수 있을까?

function walletSize(sizes) {
    let maxw = 0
    let maxh = 0;
    let w = [];
    let h = [];
    let walletsize = [];
    
    for (let i = 0; i < sizes.length; i++) {
        w[i] = sizes[i][0];
        h[i] = sizes[i][1];
        if (sizes[i][0] < sizes[i][1]){
            w[i] = sizes[i][1];
            h[i] = sizes[i][0];
            }
    }
    w = w.sort((a,b) => b-a)
    h = h.sort((a,b) => b-a)
    
    maxw = w[0]
    maxh = h[0]
    walletsize = maxw * maxh;
    
    return walletsize;
}

function solution(sizes) {
    var answer = walletSize(sizes);
    return answer;
}