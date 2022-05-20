import React from 'react'
import './lesson_4';

// Task 05
// Создайте литерал объекта handlePromise со следующими свойствами:
// promise, resolve, reject, onSuccess, onError
// Проинициализируйте первые три свойства null,
// а последние два функциями, которые принимают один параметр и выводят
// в консоль сообщения: первая - `Promise is resolved with data: ${paramName}`
// вторая - `Promise is rejected with error: ${paramName}`
// Создайте три обработчика события click для кнопок "Create Promise", "Resolve Promise", "Reject Promise".
// Первый обработчик, создает промис, заполняет первые три свойства,
// описаного выше объекта: свойство promise получает новый созданный промис,
// свойства resolve и reject получают ссылки на соответствующие функции
// resolve и reject. Следующие два обработчика запускают методы resolve и reject.
const handlePromise = {
    promise:null,
    resolve:null,
    reject:null,
    onSuccess(paramName:string){
        // @ts-ignore
        handlePromise.resolve()
        console.log( `Promise is resolved with data: ${paramName}`)
    },
    onError(paramName:string){
        // @ts-ignore
        handlePromise.reject()
        console.log( `Promise is rejected with error: ${paramName}`)
    }
}
const Lesson4 = () => {
    const createPromise = () => {
        console.log(handlePromise.promise)
        const prom = new Promise((resolve, reject)=>{
            // @ts-ignore
            handlePromise.resolve = resolve
            // @ts-ignore
            handlePromise.reject = reject
        })
            .then(res=>{
                // @ts-ignore
                handlePromise.promise = prom
            })
            .catch(e=>{
                console.log('e',e)
            })

    }
    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={()=>handlePromise.onSuccess('tratata')}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={()=>handlePromise.onError('rejected')}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;