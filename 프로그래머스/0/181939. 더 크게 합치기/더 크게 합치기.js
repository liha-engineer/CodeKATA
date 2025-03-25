const determineBiggerNumber = (a, b) => {
    const afirst = a.toString() + b;
    const bfirst = b.toString() + a;
    
    const bigggerNumber = parseInt(afirst) > parseInt(bfirst) ? parseInt(afirst) : parseInt(bfirst);
    return bigggerNumber;
}

function solution(a, b) {
    return determineBiggerNumber(a, b);
}