import React  from 'react';


const Lecture3 = () => {
    return (
        <div>

        </div>
    );
};

export default Lecture3;

// Promise.resolve(10)
//     .then(console.log)
//     .catch(console.log)
//     .finally(() => {
//         console.log('finally')
//     })

// async function f(){ //f = async()=>{}
//     //остановится и будет ждать резолв
//     try{
//         console.log('start F')
//         const response = await new Promise((res,rej)=>{
//             rej('!!!')
//         })
//     }
//     catch (e) {
//         console.log(e,'!!!')
//     }
// }

// let button = document.querySelector('.btn')
// button.addEventListener("click", () => {
//     alert('Click')
// })

// let block_btn = document.querySelector('.block_btn')
// block_btn.addEventListener("click", () => {
//     while (true) {

//     }
// })

// setInterval(function timeout() {
//     console.log(1)

// }, 4000);

// setInterval(function timeout() {
//     console.log(2)
// }, 1000);





// setTimeout(() => {
//     console.log(1)
// }, 1)


// new Promise((resolve, reject) => {
//     console.log(2)
//     resolve()
// }).then(() => {
//     console.log(3)
// })

// console.log(4);



// setTimeout(function () {
//     console.log("s1")
// }, 1);

// setTimeout(function () {
//     console.log("s2")
// }, 1000);

// new Promise(function (resolve) {
//     console.log("p1");
//     resolve();
//     console.log("p2");
// }).then(function () {
//     console.log("p3");
// });

// console.log("w1");

// async function test1() {
//     console.log("a1");
//     await test2();
//     console.log("a2");
//     console.log("lala")
// }

// async function test2() {
//     console.log("a3");
// }

// test1();

// console.log("w2")


// console.log(1);

// setTimeout(() => {
//     console.log(2);
//     Promise.resolve()
//     .then(() => {
//         console.log(3)
//     });
// });

// new Promise((resolve, reject) => {
//     console.log(4)
//     resolve(5)
// }).then((data) => {
//     console.log(data);

//     Promise.resolve()
//         .then(() => {
//             console.log(6)
//         })
//         .then(() => {
//             console.log(7)

//             setTimeout(() => {
//                 console.log(8)
//             }, 0);
//         });
// })

// setTimeout(() => {
//     console.log(9);
// })

// console.log(10);

//1 4 10 5 6 7 2 3 9 8




// console.log("Start")

// setTimeout(function timeout() {
//     console.log('timeout');
// }, 2);

// let p = new Promise(function (resolve, reject) {
//     console.log('Create promise');
//     resolve();
// });

// p.then(function () {
//     console.log('Handle promise');
// });

// console.log('End');



// console.log(1);
//
// setTimeout(() => console.log(2));
//
// Promise.resolve().then(() => console.log(3));
//
// Promise.resolve()
//     .then(() => setTimeout(() => console.log(4)))
//     .then(() => console.log(5))
//
// Promise.resolve().then(() => console.log(6));
//
// Promise.resolve().then(() => console.log(7));
//
// setTimeout(() => console.log(8));
//
// console.log(9);

//1 9 3 5 6 7 2 8 4
