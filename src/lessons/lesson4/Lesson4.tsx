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
type handlePromiseType = {
    promise: null | Promise<any>,
    resolve: null | Function,
    reject: null | Function,
    onSuccess: (paramName: string) => void
    onError: (paramName: string) => void
}
const handlePromise: handlePromiseType = {
    promise: null ,
    resolve: null ,
    reject: null ,
    onSuccess(paramName: string) {
        console.log(`Promise is resolved with data: ${paramName}`)
    } ,
    onError(paramName: string) {
        console.log(`Promise is rejected with error: ${paramName}`)
    }
}
const createPromise = () => {
    handlePromise.promise = new Promise((resolve , reject) => {
        handlePromise.resolve = resolve
        handlePromise.reject = reject
    })
    handlePromise.promise
        .then(handlePromise.onSuccess)
        .catch(handlePromise.onError)
}
const resolvePromise = () => {
    handlePromise.resolve && handlePromise.resolve('Success')
}
const rejectPromise = () => {
    handlePromise.reject && handlePromise.reject('Error')
}
//@ts-ignore
window.testObj = handlePromise
const Lesson4 = () => {

    return (
        <div>
            <button id='btn-create-promise' onClick={createPromise}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromise}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromise}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;