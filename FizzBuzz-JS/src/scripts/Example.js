export function fizzBuzz(a) {
    let array = a.toString().split('');

    return (a % 3 == 0 || array.find(i => i == 3)?'fizz':a % 5 == 0 || array.find(i => i == 5)?'buzz':a);
}
// export function fizzBuzz(a) { return (a % 3 == 0?'fizz':a % 5 == 0?'buzz':a)}