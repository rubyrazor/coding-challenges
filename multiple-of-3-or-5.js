function solution(number) {
    let sum = 0;
    let counter = 1;
    let array = [];
    if (number < 3) {
        return 0;
    }
    function multipleTimes(a) {
        if (a * counter < number) {
            array.push(a * counter);
            counter += 1;
            multipleTimes(a);
        } else {
            counter = 1;
        }
        return;
    }

    multipleTimes(3);
    multipleTimes(5);

    let uniqueArray = array.filter(function (item, pos) {
        return array.indexOf(item) == pos;
    });
    uniqueArray.forEach((elem) => (sum += elem));
    return sum;
}

console.log(solution(6000));
code