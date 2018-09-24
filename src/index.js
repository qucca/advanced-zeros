module.exports = function getZerosCount(number, base) {
    let j = base;
    let zeros = number;
    for (let i = 2; i <= base; i++) {
        if (j % i === 0) {
            let p = 0;
            while (j % i === 0) {
                p++;
                j /= i;
            }
            let count = 0;
            let k = number;
            while (k / i) {
                count += Math.floor(k / i);
                k /= i;
            }
            zeros = min (zeros, Math.floor(count/p));
        }
    }
    return zeros;

    function min(x, y) {
        return (x < y) ? x : y;
    }
}