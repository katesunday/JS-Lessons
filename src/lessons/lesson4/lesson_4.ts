console.log('lesson 4');

// http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D
// https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/


// setTimeout(()=> console.log(1),0)
// console.log(2);
// (()=>console.log(3))();
// Promise.resolve(console.log(4));
// 2341 -  промис получит в ретурн андефайнд

// new Promise((res,res)=>{
//     console.log(1)
// })
// new Promise((res,res)=>{
//    setTimeout(()=>console.log(2),0)
// })
// Promise.resolve(setTimeout(()=>console.log(2),0) );
// console.log(4)
// Promise.reject(console.log(5));
// 1 4 5 2 3

// (function (){
//     setTimeout(()=> console.log(1),100)
// })();
// console.log(2)
// new Promise((res,res)=>{
//    setTimeout(()=>console.log(3),50)
// });
// function f(){
//     console.log(4)
// }
// Promise.resolve(console.log(5))
// 2 5 3 1

// (function (){
//     setTimeout(()=> console.log(1),100)
// })();
// console.log(2)
// new Promise((res,res)=>{
//    setTimeout(()=>console.log(3),50)
// });
// function f(){
//     console.log(4)
// }
// Promise.resolve(console.log(5)).then(()=>{
//     console.log(6)
// })
// console.log(7)
// 2 5 7 6 3 1

// function f(num:number){
//     console.log(num)
// }
// Promise.resolve(1)
//     .then(f);
// (function (){
//     console.log(2)
// })();
// console.log(3)
// new Promise((res,rej)=>{
//     console.log(4)
// })
// setTimeout(f,0,5)
//  //2 3 4 1 5

// async function sleep(ms:number){
//     return new Promise((res,rej)=>{
//         res()
//         setTimeout(()=>{
//             console.log(ms)
//         },ms*100)
//     })
//
// }
// async function show(){
//     await sleep(3)
//     await sleep(2)
//     await sleep(1)
// }
// show();

// const pr1 = Promise.resolve(10)
// const pr2 = Promise.resolve(0)
// pr1
//     .then(res => {
//         console.log(res)
//         return res + 2
//     })
//     .then(res => {
//         console.log(res)
//         return res + 2
//     })
//     .then(res => {
//         console.log(res)
//         return res + 2
//     })
//
// pr2
//     .then(res => {
//         console.log(res)
//         return res + 1
//     })
//     .then(res => {
//         console.log(res)
//         return res + 1
//     })
//     .then(res => {
//         console.log(res)
//         return res + 1
//     })
// одновременно выполнялись  - 10 0 12 1 14 2

// Task 01
// Создайте промис, который постоянно находиться в состоянии pending.
// В конструкторе промиса выведите в консоль сообщение "Promise is created".
console.log('Task 01')
const promise = new Promise((resolve , reject) => {

})
console.log(promise)


// Task 02
// Создайте промис, который после создания сразу же переходит в состояние resolve
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
console.log('Task 02')
const promise2 = new Promise((resolve , reject) => {
    resolve(10)
})
console.log(promise2)

// Task 03
// Создайте промис, который после создания сразу же переходит в состояние rejected
// и возвращает строку 'Promise Error'
// Получите данные промиса и выведите их в консоль
console.log('Task 03')
const promise3 = new Promise((resolve , reject) => {
    reject('some error')
})
console.log(promise3)

// Task 04
// Создайте промис, который переходит в состояние resolved через 3с.
// (Используйте setTimeout)
// и возвращает строку 'Promise Data'
// Получите данные промиса и выведите их в консоль
console.log('Task 04')
const promise4 = new Promise((resolve , reject) => {
    setTimeout((response) => {
        resolve(response.data)
    } , 3000 , {data: {userName: 'Yo'}})
})
console.log(promise4)

//Task 05 - lesson4.tsx

// Task 06
// Создайте промис, который через 1 с возвращает строку "My name is".
// Создайте функцию onSuccess, которая получает один параметр,
// прибавляет к нему Ваше имя и возвращает новую строку из функции
// Создайте функцию print, которая выводит в консоль значение своего параметра
// Добавьте два метода then и передайте созданные функции.
console.log('task 06')
const promise6 = new Promise<string>((resolve , reject) => {
    setTimeout(() => {
        resolve('My name is')
    } , 1000)
})
promise6
    .then(result => {
            return onSuccess(result)
    })
    .then(result2 => {
        return print(result2);
    })

function onSuccess(string: string) {
    return `${string} Kate`
}

function print(result: string) {
    console.log(result)
}



// Task 07
// Создайте три промиса. Первый промис возвращает объект { name: "Anna" } через 2с,
// второй промис возвращает объект {age: 16} через 3 с, а третий {city: ''} через 4с.
// Получите результаты работы промисов, объедините свойства объектов
// и выведите в консоль {name, age, city}
console.log('Task 07')
const prom7 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
       resolve({name:'Anna'})
   },2000)
})
    .then(res=>{
        // @ts-ignore
        assign(res)
    })
const prom8 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({age:16})
    },3000)
})
    .then(res=>{
        // @ts-ignore
        assign(res)
    })
const prom9 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({city:''})
    },4000)
})
    .then(res=>{
        // @ts-ignore
        assign(res)
    })
let finalObj: {} = {};
function assign(obj:{}){
    finalObj = {...finalObj,...obj}
    if (Object.keys(finalObj).length ===3){
        console.log(finalObj)
    }
}

// just a plug
export default () => {
};