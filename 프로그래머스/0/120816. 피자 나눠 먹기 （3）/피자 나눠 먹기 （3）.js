const countPizza = (slice, n) => {
    const pizza = Math.ceil(n / slice);
    return pizza
}

function solution(slice, n) {
    return countPizza(slice, n);
    
}