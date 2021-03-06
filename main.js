function fibonacciShort(num) {
    let arr = [];
    let a = 0,
        b = 1;
    for (let i = 0; i < num; i++) {
        arr[i] = a;
        [a, b] = [b, a + b];
    }
    alert(arr);
}
var num;
num = prompt('Введите число для цикла Фибонччи: ');
console.log(fibonacciShort(num));