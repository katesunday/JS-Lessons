console.log('Lesson 5');

// Keyword - this
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/this
// https://learn.javascript.ru/object-methods
// https://habr.com/ru/company/ruvds/blog/419371/
// https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// А тут заходим и ставим лайк!!!
// https://www.youtube.com/watch?v=T1vJ8OdJq0o

// https://www.youtube.com/watch?v=xY-mwUzDjsk

// Keyword - new. Function-constructor
// https://learn.javascript.ru/constructor-new
// https://metanit.com/web/javascript/4.5.php
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/new

// Call, Apply, Bind
// https://learn.javascript.ru/call-apply-decorators
// https://medium.com/@stasonmars/%D0%BF%D0%BE%D0%B4%D1%80%D0%BE%D0%B1%D0%BD%D0%BE-%D0%BE-%D0%BC%D0%B5%D1%82%D0%BE%D0%B4%D0%B0%D1%85-apply-call-%D0%B8-bind-%D0%BD%D0%B5%D0%BE%D0%B1%D1%85%D0%BE%D0%B4%D0%B8%D0%BC%D1%8B%D1%85-%D0%BA%D0%B0%D0%B6%D0%B4%D0%BE%D0%BC%D1%83-javascript-%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D1%87%D0%B8%D0%BA%D1%83-ddd5f9b06290

// let obj = {name: 'Eugene'}
// let obj2 = {name: 'Julia'}
//
// function f() {
//     // @ts-ignore
//     console.log('this in f' , this)
// }
//
// // @ts-ignore
// obj.f = f;
// // @ts-ignore
// obj2.f = obj.f
// // @ts-ignore
// obj2.f() // сошлется на юлю
//потому что Ф это фанкш декларейшн(даже если фанкшн икспрешн по типу ф.декл)!!, значит правило this равен объекту до точки

//Function expression by type named function declaration
//переменна тест будет доступна только внутри ф2 для рекурсии
// let count = 0;
// // @ts-ignore
// let f2 = function test() {
//     if (count === 1) return;
//     count++
//     console.log('count' , count)
//     return test()
//     //return f()
// }
// let v = f2;
// // @ts-ignore
// f2 = null;
// v()//will be error

// let obj = {
//     name:'masha',
//     f(){
//         console.log(`this in f`, this);
//         (function inner(){
//             // @ts-ignore
//             console.log(`this in inner`, this)
//         })()
//     }
// }
// let obj2 = {
//     name:'sasha'
// }
// obj.f()// this1 = obj, this2 = window

// let obj = {
//     name:'masha',
//     f(){
//         console.log(`this in f`, this);
//         return function inner(){
//             // @ts-ignore
//             console.log(`this in inner`, this)
//         }
//     }
// }
// let obj2 = {
//     name:'sasha'
// }
// // @ts-ignore
// obj2.f = obj.f(); // obj masha
// // @ts-ignore
// obj2.f() //sasha

// let obj = {
//     name:'masha',
//     f(){
//         console.log(`this in f`, this);
//         return function inner(){
//             // @ts-ignore
//             console.log(`this in inner`, this)
//         }
//     }
// }
// let obj2 = {
//     name:'sasha'
// }
// // @ts-ignore
// const outer = obj.f(); // obj masha
// // @ts-ignore
// outer() //window

// let obj = {
//     name:'masha',
//     f(){
//         console.log(`this in f`, this);
//         return function inner(){
//             // @ts-ignore
//             console.log(`this in inner`, this)
//         }
//     }
// }
// let obj2 = {
//     name:'sasha'
// }
// let obj3 = {
//     name:'sasha',
//     innerObj:{
//         name:'Bla'
//     }
// }
// // @ts-ignore
// obj3.innerObj.f =  obj.f(); // obj masha
// // @ts-ignore
// obj3.innerObj.f() //bla

// let obj = {
//     name:'Eugene',
// }
// let obj2 = {
//     name: 'Julia' ,
//     a() {
//         return () => {
//             console.log(`this in arrow` , this)
//         }
//     }
// }
// //@ts-ignore
// obj.a  = obj2.a() //obj.a = рельзультату вызова obj2.a
// //а this срелочной функции определился в момент ее объявления
// //а объявлена она на 142 строке
// //@ts-ignore
// obj.a();

//Если в ф. конструкторе указать явный return [smth], то вернется объект из ретурна

// Task 01
// Дан объект someObj, реализуйте функцию greeting и присвойте ее ключу объекта с аналогичным именем.
// Функция должна вернуть строку `My name is ${name}. I am ${age}`, где name и age берутся из свойств объекта

type someObjType = {
    name: string;
    age: number;
}

let someObj: someObjType = {
    name: 'Eugene' ,
    age: 32
}

function greeting() {
    // @ts-ignore
    return `My name is ${this.name}. I am ${this.age}`
}

// @ts-ignore
someObj.greeting = greeting
// @ts-ignore
console.log(`Task 1: ` , someObj.greeting())


// Task 02
// реализовать счетчик counter в виде объекта со следующими методами:
// get current count; - выводит текущее значение счетчика
// increment; - увеличивает значение счетчика на 1
// decrement; - уменьшает значение счетчика на 1
// set current count; - принимает и присваивает значение счетчику
// rest current count - устанавливает значение счетчика равным 0
// все методы должны ссылаться на сам объект
let counter = {
    count: 0 ,
    getCurrentCount() {
        return this.count
    } ,
    increment() {
        return this.count += 1
    } ,
    decrement() {
        return this.count -= 1
    } ,
    setCurrentCount(num: number) {
        return this.count = num
    } ,
    restCurrentCount() {
        return this.count = 0
    }
}
console.log(`Task 2 set: ` , counter.setCurrentCount(4))
console.log(`Task 2 get: ` , counter.getCurrentCount())
console.log(`Task 2 decr: ` , counter.decrement())
console.log(`Task 2 incr: ` , counter.increment())
console.log(`Task 2 rest: ` , counter.restCurrentCount())


// Task 03
// переделайте код из Task 02, что бы сработал следующий код:
// counter.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount() // 12
let counter2 = {
    count: 0 ,
    getCurrentCount() {
        return this.count
    } ,
    increment() {
        this.count += 1
        return this
    } ,
    decrement() {
        this.count -= 1
        return this
    } ,
    setCurrentCount(num: number) {
        this.count = num
        return this
    } ,
    restCurrentCount() {
        this.count = 0
        return this
    }
}
console.log(`Task 3 //12 : ` ,
    counter2.setCurrentCount(10).increment().increment().increment().decrement().getCurrentCount())

// Task 04
// Написать функцию конструктор myFirstConstructorFunc которая принимает 2 параметра name и age
// и возвращает объект
// у которого будут эти свойства и метод greeting из Task 01
 function MyFirstConstructorFunc(name:string,age:number){
     // @ts-ignore
     this.name = name
     // @ts-ignore
     this.age = age
     // @ts-ignore
     //this.greeting = greeting
     // @ts-ignore
     return this
 }
MyFirstConstructorFunc.prototype.greeting = greeting;
// @ts-ignore
let newObj  = new MyFirstConstructorFunc('olga',14)
console.log(`Task4: `,  newObj, newObj.greeting())
console.log(newObj instanceof MyFirstConstructorFunc)

// Task 05 есть 2 объекта One и Two. С помощью bind и метода sayHello заставьте поздороваться объект One

let One = {name: 'One'};
let Two = {
    name: 'Two' ,
    sayHello: function () {
        console.log(`Hello, my name is ${this.name}`)
    }
};
console.log(`Task 05: `)
Two.sayHello.bind(One)()
Two.sayHello.call(One)

// Task 06
// создайте объект helperObj у которого есть следующие методы:
// changeName - меняет значение у свойства name объекта на полученное значение
// setAge - устанавливает полученное значение в свойство age объекта
// greeting - используется функция sayHello из Task 05
// можно использовать @ts-ignore

let helperObj = {
    // @ts-ignore
    changeName(name:string){
        // @ts-ignore
        return this.name = name
    },
    // @ts-ignore
    setAge(age:number){
        // @ts-ignore
        return this.age = age
    },
   // greeting: Two.sayHello
}
// @ts-ignore
helperObj.greeting = Two.sayHello
console.log(`Task 6: `, helperObj.changeName('masha'))
// @ts-ignore
helperObj.greeting()

// Bind
// 1) Дана функция sumTwoNumbers, реализовать функцию bindNumber которая
// принимает функцию sumTwoNumbers и число, и
// возвращает другую функцию, которое также принимает число и возвращает
// сумму этих чисел. Замыкание использовать нельзя
function sumTwoNumbers(a: number , b: number): number {
    return a + b
};
function bindNumber(foo:(a: number , b: number)=>number,x:number){

    const someFunc:(y:number)=>number = (y)=>{
      return  y+x
    }
    return   someFunc
    //someFunc.bind(x)


}
const f = bindNumber(sumTwoNumbers,5)
const sum = f(1)
// @ts-ignore
console.log('sum',sum)


// 2) Напишите функцию которая принимает первым аргументом объект One, а вторым helperObj. Данная функция
// возвращает другую функцию которая принимает строку в качестве аргумента и устанавливает
// ее свойству name объекта One



console.log('additional task 2',helperObj.changeName.call(One,'dima'))
// @ts-ignore
//???????????????

console.log('apply task 2',helperObj.changeName.apply(One,['zina']),One)
     //One.name  = helperObj.changeName.bind(One,'dima')
// @ts-ignore
console.log('additional task 2',One, One.name)

// 3) Одной строкой установить с помощью helperObj объекту Two поле age в значение 30
console.log('additional task 3',helperObj.setAge.call(Two,30),Two)
// 4) Создать метод hi у объекта One, который всегда вызывает метод greeting
// объекта helperObj от имени Two

console.log('add task 4')
// @ts-ignore
helperObj.greeting.call(Two)


// @ts-ignore
//One.hi()
// Реализовать задачи 2-4 из Bind с помощью Call


// just a plug
export default () => {
};