## XML

## JSON

### `Promise` es6

一个用于存储异步变量的容器。一个存储未来变量的容器
承诺——可执行可拒绝——承诺对象创建时回调函数变量为 resolve,reject，函数解决使用 resolve(xxx)，括号中为当满足时该 promise 返回的的内容；同样的 reject(xxx)返回当拒绝时返回的内容

- 承诺周期
  1. pending 未决：在异步变量可用（完成异步操作）之前
  2. settled 完成
     1. fulfilled 兑现：成功完成操作获得返回值
     2. rejected 拒绝：异步任务出现错误
- 函数

  - `fetch(input[, init])`
    - 全局的 **`fetch()`** 方法用于发起获取资源的请求。它返回一个 promise，这个 promise 会在请求响应后被 resolve，并传回 [`Response`](https://developer.mozilla.org/zh-CN/docs/Web/API/Response) 对象。
    - `input`：一个 [`USVString`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 字符串，包含要获取资源的 URL 或一个 [`Request`](https://developer.mozilla.org/zh-CN/docs/Web/API/Request) 对象。
    - `init`：可选参数：`method`请求方法 GET、POST；`headers`：请求头信息；`body`：请求 body 信息
  - `Promise.prototype.then(onFulfilled, onRejected)`
    - 用于 `Promise` 兑现和拒绝情况的回调函数。它立即返回一个等效的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise) 对象，允许你链接到其他 Promise 方法，从而实现[链式调用](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Using_promises#链式调用)。
  - `Promise.prototype.catch()`

    - [`onRejected`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#onrejected)

      一个在此 Promise 对象被拒绝时异步执行的函数。它的返回值将成为 `catch()` 返回的 Promise 对象的兑现值。此函数被调用时将传入以下参数：

      - [`reason`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/catch#reason)

        Promise 对象的拒绝值。

    - 返回一个新的 [`Promise`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，无论当前的 promise 状态如何，这个新的 promise 在返回时总是处于待定状态。如果 `onRejected` 方法抛出了一个错误或者返回了一个被拒绝的 promise，那么这个新的 promise 也会被拒绝；否则它最终会被兑现。

  - `Promise.prototype.finally()`

    - 当 promise 结束时，不论实现或拒绝都会运行 finally

  - `throw expression`

    - 使用`throw`语句来抛出一个异常。当你抛出异常时，`expression` 指定了异常的内容。下面的每行都抛出了一个异常：

    - ```js
      throw "Error2"; // 抛出了一个值为字符串的异常
      throw 42; // 抛出了一个值为整数 42 的异常
      throw true; // 抛出了一个值为 true 的异常
      throw new Error("wrong");
      ```

    -

- ```js
  console.log("Test start");
  setTimeout(() => console.log("0 sec timer"), 0);
  Promise.resolve("Resolved promise 1").then((res) => console.log(res));
  Promise.resolve("Resolved promise 2").then((res) => {
    for (let i = 0; i < 1000000000; i++) {}
    console.log(res);
  });
  console.log("Test end");
  /*
  Test start
  
  Resolved promise 1
  Resolved promise 2
  0 sec timer
  */
  ```

-
