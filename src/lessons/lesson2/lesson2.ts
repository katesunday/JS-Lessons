console.log('lesson 2');

// Lexical environment
// http://jsflow.org/docs/lex-env/

//// Closure
// https://learn.javascript.ru/closure
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Closures
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%80%D0%B0%D0%B7-%D0%B8-%D0%BD%D0%B0%D0%B2%D1%81%D0%B5%D0%B3%D0%B4%D0%B0-c211805b6898
// https://www.youtube.com/watch?v=pahO5XjnfLA

//// Сurrying
// https://learn.javascript.ru/currying-partials
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%B5%D0%BC-%D0%BA%D0%B0%D1%80%D1%80%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-%D0%B2-javascript-5ec4a1d88827

// Pattern Module
// https://habr.com/ru/company/ruvds/blog/419997/

// Recursion
// https://learn.javascript.ru/recursion
// https://www.youtube.com/watch?v=Kuq6oIN3PH0


// Task 01
console.log('Task 01')

// Реализовать функцию sum которая суммирует 2 числа следующим образом sum(3)(6) === 9
function sum(arg: number) {
    return function (arg2: number) {
        return arg + arg2
    }
}

console.log('task 01 result =' , sum(3)(6))

// Task 02
console.log('Task 02')
// Реализовать функцию makeCounter которая работает следующим образом:
// const counter = makeCounter();
// counter(); // 1
// counter(); // 2
// const counter2 = makeCounter();
// counter2(); // 1
// counter(); // 3

function makeCounter() {
    let res = 0;
    return function () {
        return res = res + 1
    }
}

const counter = makeCounter();
const counter2 = makeCounter();
console.log('task 02 result should be 1,2,1,3 - ' , counter() , counter() , counter2() , counter())

// Task 03
console.log('Task 03')
// Переписать функцию из Task 02 так, что бы она принимала число в качестве аргумента и это число было стартовым значением счетчика
// и возвращала следующий объект методов:
// increase: +1
// decrease: -1
// reset: установить счетчик в 0;
// set: установить счетчик в заданное значение;
function calc(arg: string) {
    switch (arg) {
        case 'increase':
            return function (num: number) {
                return num + 1
            }
        case 'decrease':
            return function (num: number) {
                return num - 1
            }
        case 'reset':
            return function (num: number) {
                return num = 0
            }
        case 'set':
            return function (num: number) {
                return num
            }
        default:
            return arg
    }
}

// @ts-ignore
console.log('task 03 result should be - 2,0,0,10 --' , calc('increase')(1) , calc('decrease')(1) , calc('reset')(1) , calc('set')(10))


// Task 04*
console.log('Task 04*')
// Реализовать функцию superSum которая принимает число в качестве аргумента, которое указывает на количество слагаемых
// и что бы корректно работали следующие вызовы:
function superSum(ammount: number) {
    if (ammount === 0) return 0
    if (ammount === 1) return (num: number) => num

    let outerParams: number[] = []

    function inner(...nums: number[]) {
        outerParams = [...outerParams , ...nums]
        if (outerParams.length >= ammount) {
            outerParams.length = ammount
            return outerParams.reduce((curr , prev) => curr + prev)
        } else {
            return inner
        }
    }

    return inner
}

console.log('results superSum')
console.log(superSum(0)) //0
// @ts-ignore
console.log(superSum(3)(2)(5)(3)) //10
// @ts-ignore
console.log(superSum(3)(2)(5 , 3))//10
// @ts-ignore
console.log(superSum(3)(2 , 5 , 3))//10
// @ts-ignore
console.log(superSum(3)(2 , 5)(3))//10
// @ts-ignore
console.log(superSum(3)(2 , 5)(3 , 9)) //10

// P.S. типизируйте только аргументы, а при вызове функции используйте @ts-ignore

console.log('Task 05')
// решить все задачи по рекурсии которые даны в конце статьи https://learn.javascript.ru/recursion

// рекурсия

// function sumTo(num: Number) {
//     let res = 0;
//     for (let i = 1; i <= num; i++) {
//         res += i
//     }
//     return res
// }

function sumTo(num: number): number {
    if (num <= 1) return num
    return num + sumTo(num - 1)
}

console.log('1) рекурсия' , sumTo(100))

function factorial(num: number): number {
    if (num === 0) return num
    if (num === 1) return 1

    return num * factorial(num - 1)
}

console.log('2)рекурсия факториал' , factorial(5))

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printList(list:any) {

    console.log((list.value)); // выводим текущий элемент

    if (list.next) {
        printList(list.next); // делаем то же самое для остальной части списка
    }

}

printList(list);

// Task 06
console.log('Task 06')
// написать функцию, которая повторяет функционал метода flat массива на всю глубину.
// Для развёртывания многомерных массивов используем рекурсию, reduce и concat
const arr = [1 , 2 , [3 , 4 , [5 , 6]]];

function flatDeep(arr: any , d = 1) {
    return d > 0 ? arr.reduce((acc: any , val: any) => acc.concat(Array.isArray(val) ? flatDeep(val , d - 1) : val) , [])
        : arr.slice();
};

console.log(flatDeep(arr , Infinity));
// [1, 2, 3, 4, 5, 6]
// just a plug
export default () => {
};