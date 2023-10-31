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

  - `await`
    - 等待一个 Promise 兑现并获取它兑现之后的值。
    - `then`:promise 兑现后将结果作为 then 回调函数的传入参数进行处理
    - `await`:直接获得 promise 兑现后的结果
    - es2022 后可用直接用于有 module tag 的 js 中
  - `async`函数
    - 使用 async 关键字声明的函数。async 函数是 AsyncFunction 构造函数的实例，并且其中允许使用 await 关键字
    - 注意！异步函数只能返回 promise 不能直接获取返回的值。需要用`.then(resp=>)`来获取
    - 异步函数中即使出现错误最终也会返回 fulfilled，可以通过再 catch 中再添加一个`throw`来解决
  - `try-catch`
    - 语句标记要尝试的语句块，并指定一个出现异常时抛出的响应。async 函数中无法使用`.catch()` `.finally()`。可使用`try-catch`和`throw`
    - ```js
      try {
        try_statements
      }
      [catch (exception_var_1 if condition_1) { // non-standard
        catch_statements_1
      }]
      ...
      [catch (exception_var_2) {
        catch_statements_2
      }]
      [finally {
        finally_statements
      }]
      ```
  - `Promise.all(promise1,pro2,...)`
    - 接受一个 Promise 可迭代对象作为输入，并返回一个 Promise。
    - 当所有输入的 Promise 都被兑现时，返回的 Promise 也将被兑现（即使传入的是一个空的可迭代对象），并返回一个包含所有兑现值的数组。
    - 如果输入的任何 Promise 被拒绝，则返回的 Promise 将被拒绝，并带有第一个被拒绝的原因(promise 短路)。
  - `Promise.race([pro])`

    - 接受一个 promise 可迭代对象作为输入，并返回一个 Promise。这个返回的 promise 会随着第一个 promise 的敲定而敲定。
    - 如果第一个敲定的 promise 被兑现，那么返回的 promise 也会被兑现；如果第一个敲定的 promise 被拒绝，那么返回的 promise 也会被拒绝。
    - 例：设置请求超时事件，将它加入 race 中，如果超过该时间仍为兑现就返回 error

      ```js
      const waitRace = function (sec) {
        return new Promise(function (_, reject) {
          setTimeout(() => {
            reject(new Error("Request time out"));
          }, sec * 1000);
        });
      };
      ```

  - `Promise.allSettled([pro])`(es2020)
    - 将一个 Promise 可迭代对象作为输入，并返回一个单独的 Promise。
    - 当所有输入的 Promise 都已敲定时（包括传入空的可迭代对象时），返回的 Promise 将被兑现，并带有描述每个 Promise 结果的对象数组。
  - `Promise.any([pro])`(es2021)
    - 将一个 Promise 可迭代对象作为输入，并返回一个 Promise。
    - 当输入的任何一个 Promise 兑现时，这个返回的 Promise 将会兑现，并返回第一个兑现的值。

### 异步操作

- JS 引擎是单线程的，异步操作包括添加事件监听都是在 web api 中完成的
- 当完成事件/fetch 完成后，回调函数进入回调队列，异步操作 promise 进入微任务队列 microtasks queue。微任务队列优先级大于回调队列。队列首部进入系统堆栈进行操作

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
  Test end
  Resolved promise 1
  Resolved promise 2
  0 sec timer
  */
  ```

-
