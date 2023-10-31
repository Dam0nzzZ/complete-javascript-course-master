# JavaScript

## 编程基础

### 编程语言和标记语言的区别

- 编程语言：有很强的逻辑和行为能力，if、G	else、for，等具有逻辑性和行为能力的指令，主动
- 标记语言html：不用于向计算机发出指令，常用于格式化和链接，它的存在是用来被读取的，被动
- 解释型语言和编译型语言
  - 编译型：在代码执行前进行编译，生成中间代码文件，再运行，先编译再运行
  - 解释型：在代码运行时及时进行解释，并立即执行，边编译边运行


## 初识

- JavaScript是什么
  - 高级+面向对象+多范式语言
    - 高级：无需担心内存管理等

  - 是一种运行在客户端的脚本语言
  - 脚本语言：不需要编译，运行过程中由js解释器（js引擎）**逐行**进行解释并执行
  - 可以基于Node.js 技术进行服务器端编程

- Javascript的作用
  - 最初：表单动态校验（密码强度检测
  - 网页动态
  - 服务端开发Node.js
  - 桌面程序Electron
  - App（Cordova）
  - 控制硬件-物联网（Ruff）
  - 游戏开发（cocos2d-js）
- 浏览器执行js
  - 浏览器分为两部分：渲染引擎、js引擎
    - 渲染引擎：用来解析html和css，俗称内核，如chrome内核blink
    - js引擎：也称为js解释器，用于读取网页中的JavaScript代码，对其处理后运行，如chrome浏览器的v8
      - 浏览器本身并不会执行js代码，是通过内置JavaScript引擎（解释器）来执行js代码。
      - js引擎执行代码时逐行解是每一句源码（转换为机器语]言），然后由计算机去执行，所以JavaScript语言归为脚本语言，会逐行解释执行
- JS的组成
  - ECMAScript
    - JavaScript语法
  - DOM
    - 页面文档对象模型（Document Object Model。DOM）是W3C组织推荐的处理可扩展标记语言的标准编程接口。通过DOM提供的接口可以对页面上的各种元素进行操作（大小、位置、颜色）
  - BOM
    - 浏览器对象模型
- js的书写位置：行内、内嵌和外部（与css类似）
  - 行内`<input type="button" value="click" onclick="alert('hello world')"/>`
  - 内嵌`<script></script>`
  - 外部`<script src="xx.js"></script>`


## 输入输出

- 方法

  | 方法             | 说明                           | 归属   |
  | ---------------- | ------------------------------ | ------ |
  | alert(msg)       | 浏览器弹出警示框               | 浏览器 |
  | console.log(msg) | 浏览器控制台打印输出信息       | 浏览器 |
  | prompt(info)     | 浏览器弹出输入框，用户可以输入 | 浏览器 |

## 变量

1声明变量2赋值

- 声明变量

  - `var age;//声明一个名称位age的变量`

  - var是一个js关键字，用于声明变量variable

  - 初始化

    ```html
    var name='zhi'
    var age=prompt('input your age')
    alert(age)
    ```

  - 可同时声明多个变量，用逗号隔开

    `var name=1,age=2,gz=111;`

  - 声明变量特殊情况

    - 只声明不赋值——undefined
    - 不声明不赋值——报错
    - 不声明只赋值——正常

- 赋值

  - `age=10`

- 变量命名规范

  - 字母、数字、下划线、美元$组成
  - 严格区分大小写
  - 不能以数字开头

## 数据类型

JavaScript是一种弱类型或者说动态语言，不用以前声明变量的类型

- 声明方式
  - `const`：es6 常量，值不可更改，声明时需赋值
  - `let`：es6 变量，块作用域
  - `var`：old 少用，函数作用域

- js把数据类型分为两类
  - NaN数据类型
    - Number：数字型包括整型和浮点型，默认0
      - 八进制前加0，十六进制前加0x
      
      - 数值最大值`Number.MAX_VALUE，Number.MIN_VALUE `
      
      - 无穷大无穷小非数值：`Infinity -Infinity  NaN`Not a Number
      
        - Infinity 无穷大，大于任何数 
      
          当输入`console.log(Number.MAX_VALUE * 2)`将会显示Infinity
      
        - 函数：isNaN()，判断括号中的是否为数字
      
          - 若为数字返回false，若不是数字返回True
      
    - Boolean：布尔型true、false，默认false
    
      - 假值：0，'' ，NaN，undefined，null
    
    - String：字符串，默认’ ‘
    
      - 单双引号均可，推荐使用’ ‘ ，因为HTML中使用的双引号
    
      - 可以单双引号嵌套，内单外双或者内双外单 
    
      - **转义符**：必须以`/`开头，\n换行 \t缩进tab  \b空格blank
    
      - 方法length：str.length显示字符串长度
    
      - 字符串拼接
        - 多个字符串之间可以使用+ 进行拼接，拼接方式为：字符串+任何类型=拼接后的新字符串
        
        - 只要有字符串和其他类型拼接，最终都得到字符串
        
        - 如果是变量可以和字符串拼接
        
        - 使用占位符`${变量名}`进行声明，如
        
          ```js
          const name=`I'm ${firstName} ${lastName}`; 
          ```
        
      - 多行输出
    
        ```js
        console.log('String with\n\
        multiple \n\
        lines');
        console.log(`String with
        multiple
        lines`);
        ```
    
        
    
    - Undefined：声明变量但没赋值，此时类型位Undefined
    
      - 和字符串相加 undefinedstr
      - 和数字相加，NaN
    
    - Null：var a=null，声明了a为空，默认null
    
      - 和字符串相加 nullstr
      - 和数字相加，null+ 1 =1
    
    - Symbol(ES2015)
    
    - BigInt(ES2020)
    
  - 复杂数据类型
  
  - 函数typeof：显示变量类型
  
    - 用法：typeof var
    - `typeof num`———>number
  
- 字面量

  - 在源代码中一个固定值的表示法，就是字面量表示如何表达这个值

- 数据类型转换

  - 转为字符串

    | 方式                       | 说明           | 案例                           |
    | -------------------------- | -------------- | ------------------------------ |
    | toString()                 | toString方法   | var num=1; alert(num.toString) |
    | String()强制转换           | String函数     | var num=1; alert(String(num))  |
    | 加号拼接字符串（隐式转换） | 和空字符串拼接 | var num=1; alert(num+'')       |

  - 转换为数字型

    | 方式                  | 说明                                   | 案例                            |
    | --------------------- | -------------------------------------- | ------------------------------- |
    | parseInt(string)函数  | 将string转换为整数，自动去掉小数、单位 | parseInt('78')                  |
    | parseFloat(sting)     | 将string转为浮点数                     | parseFloat('42.12')             |
    | Number() 强制转换函数 | 强制转换为数值型                       | Number('12')，若不为数字返回NaN |
    | js隐式转换( - * / )   | 利用算术运算隐式转换为数值型           | '12' - 0                        |

  - 转换为布尔型

    | 方法 | 说明 | 案例 |
    | ---- | ---- | ---- |
    | Boolean()函数 | 其他类型转为布尔型 | Boolean('true') |

    - 代表空、否定的值会被转化为false，如’‘、0。NaN、null、undefined
    - 其余值都为true
    
  

## 运算符

- 算术运算符：+ - * / %(取余) ** 幂运算 (2**3=2\*2\*2)

- 递增运算符
  - ++n：先自加再参与运算
  - n++：先原值运算再自加
  
- 比较运算符
  - == 判等号，默认转换数据类型，会把字符串转为数字型 14==‘14’ -> true
  - === / !\== 全等，要求值和数据类型都一致
  
- 逻辑运算符
  - && 逻辑与 and
  
    - 从第一个表达式开始，若表达式为真，则判断下一个表达式；若表达式为假，则返回该表达式。直到最后一个表达式，直接返回
  
    - 可用于修改`if`语句（不推荐
  
      ```js
      if(isExsit){countNum();}
      isExsit && countNum();
      ```
  
      
  
  - || 逻辑或 or
  
    - 表达式1 || 表达式2
  
    - 如果第一个表达式的值为真，则返回表达式1；若为假，返回表达式2
  
    - 若有多个`||`链，如果为假则到下一个表达式，直到表达式为真或为最后一个表达式，返回该表达式的值
  
    - 可用于设置默认值
  
      ```js
      const ans= restaua.Count() || 10;//若函数为空则返回10
      ```
  
    - es2020后又加入了`??`逻辑符，与逻辑或及其相似
  
      - `??`只会将`null`和`undefined`视为假，其他包括`0`和`''`都是真值
      - 当表达式结果可能为`0`或`''`时，需要用`??`代替`||`
  
  - ! 逻辑非 not
  
  - 扩展符`...` （在等号右侧）
  
    - 可将数组中的所有元素拆解
  
    - ```js
      const arr=[1,2,3];
      const newArr=[6,5, ...arr];
      console.log(newArr);//[6,5,1,2,3]
      ```
  
    - 所有的可迭代对象都可以使用扩展符（数组array、字符串string、映射maps、集合set，不包含对象object）,es2018后object可以
  
    - 也可作为输入的函数参数
  
    - ```js
      const arr=[1,2,3];
      one.fun(arr[0],arr[1],arr[2]);
      one.fun(...arr);
      ```
  
    - 可利用扩展符实现对象的深拷贝
  
    - ```js
      const objOld={time.......};
      const objNew={...objOld};
      ```
  
  - rest聚合/压缩符`...`（在等号左侧）
  
    - 可将剩余元素聚合为一个数组
  
    - ```js
      const [a,b,...others]=[1,2,3,4,5];
      console.log(a,b,others);//a=1,b=2,others=[3,4,5]
      ```
  
    - 收集所有剩余元素进数组
    
  - 可选链接符号`?.`(**es2020**)
  
    - ```js
      console.log(obj.obj1,obj2?.item);
      const open=resp.openHour[day]?.open ?? 'close';
      console.log(restp.order?.(0,1)??'method does not exist');
      ```
  
      - 当obj2存在时输出item的内容，否则返回`undefined`(如果item为undefined或null)
      - 也可使用在方法中
  
      

## 流程控制-分支

- if

  - ```js
    if(条件表达式){
    	//代码
    }else if(条件2){
        //语句2
    }else{
        //
    }
    ```

- 三元表达式

  - `条件表达式 ? 表达式1: 表达式2`

  - 如果条件表达式为真，返回表达式1，否则返回2

  - 例：把输入的数字0~59，统一变为两位

    - ```js
      var time=prompt('please input a number betwenn 0 and 59')
      var result=time <10 ? '0'+time: time;
      ```

- switch

  - ```js
    switch(表达式){
        case value1:
            code1;
            break;
        case value2:
            code2;
            break;
        default:
            //没找到匹配的value
            final code;
    }
    ```

  - 注意点

    1. 表达式与value关系是全等 ===，值与类型都要相同
    2. 当前case中没有break，则继续运行下一个case

- for

  - ```js
    for(var i=1;i<=12;i++){
        code;
    }
    ```
    
  - `for-of`

    - ```js
      for (const item of menu)console.log(item);//将menu中元素逐个输出
      for (const item of menu:entries()) console.log(item);//以 [0,"xxx"] 索引+值的形式逐个输出
      for (const [i,elem] of menu.entries()) console.log(`${i+1}:${elem}`);
      for (const day of Object.keys(objName)) console.log(day);//输出objName属性中的元素
      ```
      
      - 本质上`Object.keys(objName)`会将objName的所有键`key`转换为数组，不包含值
      - `Object.values(objName)`将objName的所有值转换为数组，不包含键
      - `Object.entries(objName)`将objName对象的所有内容转为数组

- while

  - ```js
    while(条件){
        code;
    }
    ```

  - 先判断再运行，重复这个过程

- do-while

  - ```js
    do{
        code;
    }while(条件表达式)
    ```

  - 先执行一次do代码块，再判断条件，若为真，继续循环

  - dowhile至少会执行一次循环体代码

## 字符串 String

- 属性
  - `.length`
- 方法
  - `.indexOf(string)`：寻找string字符串第一次出现时首字符的索引
  - `.lastIndexOf(char)`：寻找从后往前string第一次出现时首字符的索引
  - `string[index]`：可通过索引访问字符
  - `.slice(start,end)`：将字符串从第start个前到第end个前切片并返回，如果没有end参数则从start到串尾。同时不改变原字符串
  - `.toLowerCase()`/ `.toUpperCase()`：将字符串中英文字母全部转为小写/大写
  - `.trim()`：去除字符串首尾的空格和终端控制符`\n`等
  - `.replace(strFind,strReplace)`：用strReplace替换从头开始第一个找到的strFind，不改变原字符串
  - `.replaceAll(find,replace)`：替换所有find字符串(**es2021**)，也可用正则表达式`.replace(/string/g,replace)`，`//g`指代全局
  - `.includes(str)`：判断字符串中是否存在str子串
  - `.startsWith(str)/.endsWith(str)`：判断字符串开头/结尾是否为str
  - `.split(str,limit)`：切割字符串为数组，切除str子串，只切除limit-1次，也就是返回的数组有limit个元素 
  - `.padEnd(num,str) / .padStart(num,str)`：填充字符串达到num长度，用str填充
  - `.repeat(time)`：将字符串重复time次
  - `string.at(key)`：返回索引key对应的字符，key可以为负数

## 数组 Array

- 创建数组

  - 利用new创建

    - ```js
      var 数组名= new Array();
      var arr=new Array();
      ```

  - 利用数组字面量创建数组

    - ```js
      var 数组名=[ ] ;
      var 数组名=['x','v'];
      ```

    - 数组元素的类型可以是任意

    - 如果访问的key越界了，value为undefined
    
  - ```js
    //字面量生成
    var arr=[1,2,3]
    //new Array()
    var arr1 = Array()//创建一个空数组
    var arr2 = new Array(2)//创建一个长度为2的空数组
    var arr3 = Array(3,4)//创建一个[3,4]的数组
    const jonas = [firstName, "shecje", 23, 12-1, arr1]//与python类似
    ```
    
  - `Array.from(iterables,function(value,key))`

    - 例：生成一个长度为10，从1开始递增2的数组`Array.from({length:10},(_,i)=>2*i+2)`
    - `iterables`为可迭代对象。如string、maps、sets

- 有关函数/方法

  - ![JS_array_method](D:\OneDrive\Picture\JS_array_method.png)
  - `array.length`，返回数组长度
  - `array.join(str)`：将数组组装为字符串，用str将每个元素分隔
  - `array.push(value)`
    - 将value插入数组末尾。返回插入后数组长度
  - `array.unshift(value)`
    - 将value插入数组首部。返回插入后数组长度
  - `array.pop()`
    - 将数组尾部值删除。返回删除的值
  - `array.shift()`
    - 将数组首部值删除，返回删除的值
  - `array.indexOf(value)`
    - 寻找数组中value的下标，并返回
  - `array.includes(value)`（es6）
    - 寻找数组中是否包含value（严格相等），返回true/false。
  - `array.slice(start,end)`
    - 切片，将第start个前和end个前切开，返回切出的数组，不改变原数组。
    - 如果slice后不加任何参数则会返回原数组，可以以此进行浅拷贝，类似于`[...arr]`
  - `array.splice(start,deleteCount)`
    - 从start个前开始删除deleteCount个
    - 与slice类似，但会改变原数组，失去了切片的空间。常用于删除数组内元素
  - `array.reverse()`
    - 反转数组，改变原数组
  - `array1.concat(array2)`
    - 将array1和array2拼接，与`[...array1,...array2]`相同
    - 不会改变两个原数组
  - `array.at(key)`（es2020)
    - `array[2]===array.at(2)`
    - 其优势在于key可以为负数但方括号中不能为负数，at可以轻松取到最后一个元素
  - `array.find(function(value){return value>0})`
    - 寻找数组中第一个满足要求（布尔值为真）的元素
  - `array.some(value=>value>0)`
    - 判断数组中是否存在元素满足回调函数返回值为真
  - `array.fill(value,start,end)`
    - 将value填充入array，从索引start个前开始，end前结束
  - `Array.from(iterables,callBackFn())`
    - iterables可迭代对象包括strings、maps、sets。也可以为`document.querySelector()`

- 重要的三个方法

  - `array.map(function(value,index,array){return newElement})` 
    - 映射函数，将原数组每个元素进行某种运算后返回一个新数组
    - 新数组中的每个元素通过回调函数return获得值

  - `array.filter(function(value){return value>0})`
    - 过滤函数，将原数组每个元素进行筛选，返回一个新数组
    - 例如返回array中大于零的元素

  - `array.reduce(function(acc,value,index,array){return newAcc},initAcc)`
    - 将原数组转换为一个值
    - 每次返回一个更新的累加器acc

- 新增元素

  1. 修改length长度，强行改变数组元素个数，新增的元素为undefined
  2. 修改数组索引，直接追加不存在的key，添加元素

- 数组遍历

  - `for(let i=0;i<array.length;i++)`

  - `for(const elem of array)`

    - 获取索引

      ```js
      for(const [i,elem] of array.entries()){}
      ```

  - `array.forEach(function(para,index,array){})`

    - 将array中的元素依次作为变量para传入函数中，此处回调函数
    - 函数的三个参变量必须依次为变量(元素)、索引、数组
    - 无法使用`continue`和`break`！！


## 集合 Set

- 定义(**es6**)

  - ```js
    const orderSet=new Set(['Pasta','Pizza']);
    const littSet=new Set('John');//{'J','o','h','n'}
    ```

- 性质

  - 可迭代、无序、不可重复

  - 不能用下标索引，集合没有索引

  - 可用于消除数组中的重复元素

    - ```js
      const staff=['John','Damon']
      ```

- 属性/方法

  - `.size`：与数组的`.length`类似，size为元素的种类。length为元素的数量
  - `.has(name)`：检查name元素是否在集合中
  - `.add(value)`：添加value元素
  - `.delete(value)`：删除value元素
  - `.clear()`：清除所有元素
  - 遍历：只能用`for-of`

## 图 Map

- 定义（**es6**）

  - 键值之间的映射，键key可以是数组、图、数字等等，比对象中的键值对范围更大

- 性质

  - 若键key为数组，不能简单抄写，应该定义数组名，用数组名作为键。因为当简单抄写时，他们在内存中指向的不是同一个值

    ```js
    rest.set([1,2],'test');
    console.log(rest.get([1,2]));//undefined
    const arr[1,2];
    rest.set(arr,'test');
    console.log(rest.get(arr));//test
    ```

- 方法/属性

  - `new Map()`：定义

    1. ```js
       const ques=new Map([
           [1,'what is question'],
           [2,'this is a question'],
           ['how','what']
       ]);
       ```
  
    2. `.set`
  
    3. 用`Object.entries()`转换
  
       ```js
       console.log(Object.entries(game.scored));
       const newMap=new Map(Object.entries(game.scored));
       ```

  - `.set(key,value)`：向图中添加键值对，返回该图。

    - 可以一直set下去
  
      ```js
      respMap.set('manu',['Pizza','Rice']).set(1,12)
      	.set(true,12)
      	.set(false,'WE are CLose');
      respMap.set(document.querySelector('h1'),'heading');//可以选中网页中的内容
      ```
  
  - `.get(key)`：返回键对应的值
  
  - `.delete(key)`：删除键值对
  
  - `.has(key)`
  
  - `.size`：返回键值对个数
  
  - `.clear()`：清除所有元素
  
  - `.entries()`、`.keys()`、`.values()`
  
  - 遍历：用`for-of`
  
    ```js
    for(const [key,value] of quesMap)
    ```
  
  - 转换为数组
  
    ```js
    [...questMap]
    ```
  
    

## 函数 Function

- 关键字function（可以先调用再定义

  - ```js
    function 函数名(形参){
        code;
        return result;
    }
    函数名(实参);
    ```

  - 当实参多余形参：多余的参数被忽略

  - 当实参少于形参：剩下的形参传入undefined

  - 函数的封装：把一个或多个功能通过函数的方式封装

  - return返回一个值，如果想返回多个，可以使用数组，如果函数没有return，则返回undefined

  - 另一种声明方式：匿名函数/函数表达式（必须先定义再调用

    - ```js
      var fun=function(num){
          code;
      }
      fun(12);
      //fun是变量名不是函数名
      ```

    - 可视作一个变量里存了一个函数
    
  - es6：`=>`声明

    - ```js
      const calcAge = function(birthYear){
          return 2023-birthYear;
      }
      const calcAge = birthYear => 2023-birthYear;
      const yearbirth = (birthYear,firstName)=>{
          const age=2021-birthYear;
          return ...;
      }
      ```

    - 省略了function、return关键字

    - 没有this关键字

- arguments

  - 当不确定有多少个参数传递时，可以用arguments来获取。arguments时当前函数的一个内置对象，所有函数都内置了一个arguments对象。**arguments对象中存储了传递的所有实参**
  
  - arguments展示形式是一个伪数组，因此可以进行遍历
  
  - 具有length属性，按索引方式存储数据
  
  - 不具有数组的pop、push方法
  
  - 只有常规函数才有arguments对象**（非`=>`）**
  
    ```js
    function getMax(){
        var max=arguments[0];
        for(var i=1;i<arguments.length;i++){
            if(arguments[i]>max){
                max=argumens[i];
            }
        }
        return max;
    }
    console.log(getMax(1,2,4));
    console.log(getMax(1,2,4,423,4));
    console.log(getMax(1,2,4,65if));
    ```
    
  
- 作用域

  - es6之前
    - 全局作用域：整个script标签，或是一个单独的js文件，作用范围全局
    - 局部作用域（函数作用域）：函数内部
    - 全局变量：在全局作用于下声明的变量，全局、函数中都可以使用；注意：如果在函数内部没有声明直接赋值的变量也属于全局变量
    - 局部变量：
    - 从执行效率来看全局变量和局部变量
      - 全局变量只有浏览器关闭的时候才会销毁，比较占用内存资源
      - 局部变量当程序执行完毕时就会销毁，借阅内存资源

    - 作用域链：内部函数访问外部函数的变量，采取的是链式查找的方式来决定取哪个值
      - 简单来说就是**就近**找上一级
  - es6之后
    - 新增块级作用域{ }
    - 也就是说es6以前，在if{}等代码块之外都可以使用代码块内声明的变量
  
- 原始类型和引用类型在函数中

  - 原始类型：函数中传入的原语是拷贝，不会改变原值

    ```js
    const str='Lh1223';
    const check=function(num)num='ab223';
    check(str);
    console.log(str);//Lh1223
    ```

  - 对象：函数传入指针，函数中改变会改变原值
  
- 高等函数和回调函数callback

  - 高等函数：将其他函数作为参数的函数。被设为参数的函数称为回调函数

- 方法

  - `fn.call(this,arguments)`：this为该函数指定的`this`对象，后接传入的函数参数。需要call方法是因为函数中包含了`this`关键字，因此在调用时需要主动说明this的对象
  - `fn.apply(this,argumentsArray)`：与call方法类似，指定`this`对象，但是用数组传入参数
  - `fn.bind(this,arguments)`：将this以及各参数与函数绑定，返回一个新函数，新函数的this和参数已经绑定
    - 如果不需要绑定this则用null替代，`.bind(null,arguments)`
  
- 立即调用函数：调用一次后函数被释放，不能再次被调用

  - ```js
    (function(){
        console.log(xxx);
        const isPrivate=1;
    })();//xxx
    console.log(isPrivate);//error
    (()=>console.log(xxx))();
    ```

  - 同时作用域内的变量也同时释放(`let`、`const`)

  - 现在很少用到，因为有let、const的加入，只需一个代码块block即可

- 闭包

  - 闭包中变量优先级高于作用域链
  - 闭包允许子函数可以访问任何父函数中的变量，甚至在父函数释放之后。
  - 函数保持对其外部范围的引用，即使外部范围已经消失
  - 函数会记住它生成地的变量，即使生成地已经消失
  - 无法直接访问闭包中的变量，可以通过`console.dir(function)`输出函数的所有信息，其中包含了闭包closure内容
    - 属性中的双中括号包含的是内部属性，无法直接访问`[[closure]]`

  - 闭包中变量优先级高于外界作用域





## 预解析

- JavaScript解析器在运行js代码时分为两步：预解析和代码执行

  - 预解析会将js中所有的var和function提升到当前作用域的最前面
  - 代码执行：按代码书写顺序从上往下执行

- 预解析分为：变量预解析（变量提升）、函数预解析（函数提升）

  - 变量提升：把所有变量声明提升到当前作用域最前，不提升赋值操作
  - 函数提升：把所有的函数声明（函数一整块）提升到最前，不调用

- 例题

  - ```js
    f1();
    console.log(c);
    console.log(b);
    console.log(a);
    function f1(){
        var a=b=c=9;
        console.log(c);
    	console.log(b);
    	console.log(a);
    }
    ```

  - 提升后得到代码

    ```js
    function f1(){
        var a=9;//b、c直接赋值，相当于全局变量
        b=9;//如要集体声明，var a=9,b=9,c=9;
        c=9;
        console.log(c);
    	console.log(b);
    	console.log(a);
    }
    f1();
    console.log(c);
    console.log(b);
    console.log(a);
    ——————————————————————————————————
    9
    9
    9
    9
    9
    a is not defined
    ```

## 对象 Object

- 在js中，对象是一组无序的相关属性和方法的集合

  - 属性：事物的特征
  - 方法：事物的行为

- 创建对象

  - 用字面量创建对象

    - 对象字面量{ }，包含了表达这个对象的属性和方法

    - ```js
      const John = [//value,有顺序
          'John',
          'student',
          16,
          ['Chinese','Math','English']
      ];
      
      var obj={//key:value,无顺序
          name:'John',
          sex:'male',
          sayHi:function(){
              console.log('HI');
          }
          calcAge:function(){
              console.log(this);
          }
      }
      ```
      
    - 属性和方法采用**键值对**的形式，多个属性、方法之间用逗号隔开
    
    - 方法冒号后跟匿名函数
    
    - this为调用者，例如`obj.calcAge()`则会输出obj对象
    
    - 使用对象
    
      - 调用对象属性：`对象名.属性名`或`对象名['属性名']`
        - 后者的key可以是表达式，而前者则不行
      - 调用对象方法：`对象名.方法名()`
    
  - 用new关键字
  
    - 通过new关键字创建空对象
  
    - ```js
      var obj=new Object();
      obj.name='John';
      obj.age=19;
      obj.sex='male';
      obj.sayHi=function(){
          code;
      }
      ```
  
    - 利用**等号**赋值
  
  - 构造函数创建
  
    - 当创建多个类似的对象时，有很多属性和方法是大量相同的，因此我们可以利用函数的方法，重复这些相同代码，称为构造函数
  
    - ```js
      function 构造函数名(){
          this.属性名=值;
          this.方法=function(){}
      }
      new 构造函数名();
      ```
  
    - 例
  
      ```js
      function Star(name,age,sex){
          this.name=name;
          this.age=age;
          this.sex=sex;
          this.sing=function(){
              code;
          }
      }
      var ldh=new Star('ldj',19,'male');
      var zxy=new Star('zm',12,'man');
      ```
  
    - 方法属性前比较用this'
  
    - 构造函数类似于java中的class，new一个对象等于对象实例化
  
    - new执行过程
  
      1. 在内存中创建一个新的空对象
      2. 让this指向这个新对象
      3. 执行构造函数里的代码，给这个新对象添加属性和方法
      4. 返回这个新对象
  
- 遍历对象属性

  - 使用for in

    - ```js
      for (var k in obj){
          console.log(k);//k 属性名
          console.log(obj[k]);//obj[k] 属性值
      }
      //for in中的变量值我们通常用k或key
      ```
  
- 字面量和对象的赋值

  - 字面量（number、string、etc）：与其他语言相同

  - 对象（obj）：赋值后指针指向同一堆栈，堆栈中内存地址相同，类似于指针

    - ```js
      const Jonas={
          name:"Jonas",
          age:30
      }
      const John=Jonas;
      John.age=30;
      console.log(Jonas,John);//completely same
      ```

    - 如果相要复制对象，则需使用`John = Object.assign({},Jonas)`，该方法本质上是将两个对象合并生成一个新的对象。但是仅为浅克隆，如果该对象内还含有其他对象，复制后仍指向同一对象

- 加入对象（**es6**）

  - ```js
    const hour={
        open:'9:00',
        close:'20:00'
    };
    const resturant{
        seat:{},
        name:'yyy',
        hour
    }
    ```

- 函数声明（**es6**）

  - ```js
    const hour={
        openStore(openTime,closeTime){};
        //openStore:function(openTime,closeTime){};
        //省略了:function
    }
    ```

- 定义(**es6**)

  - ```js
    const weekdays=['mon','tue','wed','thu','fri'];
    const openHour={
        [weekdays[0]]:{
            open:12,close:20,
        },
        [weekdays[2]]:{},
        [`day-${2+3}`]:{},
    }
    ```

- `setter`和`getter`

  - ```js
    const account={
        owner:'Jonas',
        movements=[21,431,1,2],
        get latest(){
            return ....;
        }
    	set latest(mov){
           	this.movements.push(mov);
        }
    }
    console.log(account.latest);//直接作为属性返回get函数值
    account.late=50;//直接作为传入参数传入set函数
    ```

  - 

- `Object.keys(objName)`会将objName的所有键`key`转换为数组，不包含值

- `Object.values(objName)`将objName的所有值转换为数组，不包含键

- `Object.entries(objName)`将objName对象的所有内容转为数组



## 内置对象

- JavaScript中的对象分为3种：自定义对象、内置对象、浏览器对昂
  - 前二是JS基础内容，属于ECMAScript
  - 第三是JS独有的
  - 内置对象是JS自带的一些对象，供开发者使用，提供了一些常用的属性和方法

### Number对象

- JS中数字默认为浮点数存储
- 一些方法
  - `+` === `Number()`
    - 可以用+string强制转换类型，`+'23'===Number(23)`
  - `Number.parseInt(string,radix)`
    - 解析string中的开头数字部分，例如`23e41`只能识别23
    - `radix`为进制基数。十进制为10。函数会用此进制识别数字。最后返回转回十进制的数字
  - `Number.parseFloat(string)`
    - 解析string中开头的浮点数部分
- 新特性
  - 数字分割符（es2021
    - 如`32472895`可写作`3_2472_895`，不影响数字大小
    - 一处分割只能用一个下划线
    - 如果用含_的数字字符串转为数字，则显示NaN

  - `BigInt`（es2020
    - js的number类型最大存储`2*53-1`
    - BigInt类型可存储任意大小的数字，只需在数字后加`n`，例如`console.log(231241231n*2312314451n)`
    - 注意只能用BigInt同类型进行算数运算，与number时需要用BigInt转换类型。
    - 除法为整除，number为正常触发


### Math对象

- Math对象不是一个构造函数，不需要new来调用

- 例

  ```
  console.log(Math.max(12,4,2,-1,0));//12
  console.log(Math.PI);//3.141592653589793
  console.log(Math.max('12',2));//NaN
  Math.floor();//向下取整
  Math.ceil();//向上取整
  Math.round();//四舍五入，就近取整，-3.5-—-3，.5往大了取
  Math.abs();//绝对值
  Math.max/min();//最大、最小值
  ```

- 一些方法

  - `Math.max(num1,num2,num3,..)`
  - `Math.abs(num)`
    - num如果为字符串'-12' ，也能强制转换为数字
  - `Math.random()`
    - 返回一个`0 <= x < 1`的浮点数
  - `Math.trunc(num)`
    - 返回num的整数部分
  - `NumObj.toFixed(digits)`
    - 将数组转换为带digits位小数的字符串

### Date对象

- 方法

  - `new Date(year,month,day,hour,ms)`
    - 例`console.log(new Date(2091, 9, 23, 18, 29));`=>`Tue Oct 23 2091 18:29:00 GMT+0800 (中国标准时间)`。注意month变量从0开始，所以此处9为Oct
    
  - `DateObj.getFullYear/getMonth/getDate/getDay/getHours/getMinutes/getSeconds`
    - 返回日期对象的年/月/日/星期
    
  - `DateObj.setFullYear...`
    - 设置日期对象的年月日
    
  - `DateObj.toISOString`
    - 转换为ISO国际标准化组织的字符串，例如`2091-10-23T10:29:00.000Z`
    
  - `DateObj.getTime`
    - 获得从1970.1.1零点到DateObj时间经历的毫秒。同时也可以用`new Date(ms)`返回距1970此ms毫秒的时间戳
    
  - `Date.now()`
    - 可直接返回现在的时间戳
    
  - `new Intl.DataTimeFormat(locales,options).format(date)`

    - 直接获取当前地区locales以option方式的时间date

    - `locales`：语言代码与国家地区对照表，例如en-us，zh-tw等

      - 可使用`local=navigator.language`获取当前位置信息

    - `options`：时间内容的对象，例如

      ```js
      options={   
          hour:'numeric',
          day:'2-digit',//两位
          month:'long',//完整显示月份单词
          year:'numeric',
          weekday:'short'//简称
      }
      ```

### Intl对象

- `Intl`对象是ECMAScript国际化API的一个命名空间，它提供了精确的字符串对比、数字格式化和日期时间格式化
- 一些方法/属性
  - `Intl.DateTImeFormat(locales,option).format(time)`
    - 将时间转换为locales地区的显示形式
  - `Intl.NumberFormat(locales,option).format(number)`
    - 使数字在特定的语言环境下格式化
    - `option`：style属性：currency货币、percent；unit单位属性：运动、长度单位等，currency货币属性：规定货币单位


## 解构

- es6后可以将数组、对象等数据结构解构为更小的数据结构

- ```js
  const arr=[2,3,4];
  let [x,y,z]=arr;
  console.log(x,y,z);//x=2,y=3,z=4
  const [a,,c]=arr;//a=2,c=4
  ```

- 类似的可以用来交换两元素值（左边的式子可直接使用不声明）

  ```js
  [main , second] = [ second , main ];
  ```

- 数组嵌套

  ```js
  const nest=[1,2,[3,4,5]]
  const [i,,[j,k]] = nest;
  console.log(i,j,k);//i=1,j=3,k=4
  ```

- 当等号左边元素多于右边时，可采取以下写法

  ```js
  const [p=1, q=1, r=1] = [8,9];
  console.log(p,q,r);//p=8,q=9,r=1
  ```

- 对象的解构方法相似

  ```js
  const Noodles={
      name:'noddles',
      address:'1231',
      openHour:'9:00-20:00',
      seat:{
          thu:{
              open:12,
              close:10
          },
          fri:{
              open:10,
              close:12
          }
      }
      order:function(){
          xxx;
      }
  }
  
  const {openHour,seat} = Noodles;
  const {openHour:hour,name:resturantName} = Noodles;
  const {manu = [],address:addr = []};
  const {thu:{open,close}}= seat;
  ```
  
  - 用`{}`声明，类似于数组，可用原对象中的属性名存储；也可设置新的属性名，用`key:value`的方式
    - 对象中的属性是无序的，所以不用注意顺序
    - 可提前设置默认值，如对象中没有此属性则返回默认值，否则将返回`undefined`
    - 如有嵌套对象则再`{}`即可
  - 注意如果变量已提前声明，则需在解构时加入`()`
  
  ```js
  let a=111,b=123;
  const num={
      a:12,b:22,c:43
  };
  ({a,b}=num);
  console.log(a,b);//a=12,b=22
  ```
  
  - 对象解析常用于函数
  
    ```js
    const obj={
        name:'John',
        orderDelivery:function({starterIndex,index,time,address}){
            xxxx;
        }
    };
    
    obj.orderDelivery({
        time:'22.12',
        address:'Value Stress #21',
        index:2,
        starterIndex:2321
    });
    ```
  
    
  


## 数据类型

- JS分为两种数据类型：简单类型又称基本数据类型或值类型，复杂类型又称引用类型
  - 值类型：存储时变量中存储的是值本身
    - 例外：简单类型null，返回的是空对象object，所以当我们声明对象时可以先赋值null
    - 存放在栈中
    - 形参会重新分配一个栈空间
  - 引用类型：存储时变量存储的是地址（引用）
    - 如：通过new创建的对象（系统对象，自定义对象）Object、Array、Date
    - 存放在堆中


## 查文档

- 学习一个内置对象，只需学会其常用成员的使用即可，可以通过MDN/W3C查询`https://developer.mozilla.org/zh-CN/`
  - 查询类型、用法、功能、参数、返回值
  - `[ ]`代表可有可无

## 作用域

- 全局作用域

- 局部作用域（函数）

- 块级作用域（**es6**）
  - 例如`if{} for{}`
  - 只限于`let`和`const`，也就是说`var`如果出现在块级作用域中，他的作用域在此块上一级
  - 函数也属于块级作用域（仅限于`strict mode`）
  
- `this`关键字

  - ```js
    const jonas={
        firstName:'Jonas',
        birthYear:1979,
        calcAge: function(){
            console.log(2034-this.birthYear);
        },
        //solution 1
        //连续跨两级
        const self=this;
        const isMillenial=function(){
            console.log(self);
            console.log(self.birthYear>2000);
        };
    	
    	//solution 2
    	const isMillenial=()=>{
            console.log(this);
            console.log(this.birthYear>2000);
        };
    	
    	isMillenial();
    }
    ```

  - `this`为所在块的父级块对象。注意只父一级。但`=>`函数视为与父级块对象一体。

## DOM

Web API：DOM页面文档对象模型、BOM浏览器对象模型

API：Application Programming Interface，是一些预先定义的函数，目的是提供应用程序与开发人员基于某软件或硬件得以访问一组例程的能力，而又无需访问源码，或理解内部工作机制的细节

Web API：浏览器提供的一套操作浏览器功能和页面元素的API(BOM和DOM)

DOM：Document Object Model，处理可标记语言HTML或XML的标准编程接口

- DOM树
  - <img src="..\Picture\JS DOM树.png" alt="JS DOM树" style="zoom:50%;" />
  - 文档：一个页面就是一个文档，DOM中使用document表示
  - 元素：页面中的所有标签都是元素，用element表示
  - 节点：网页中的所有内容都是节点（标签、属性、文本、注释等），用node表示
  - DOM把以上内容视作对象
  - 所有节点/元素会继承他父结点的方法和属性
  
- EventTarget（abstract type
  
  ```js
  .addEventListener()//可以在每种类型的节点上调用此二方法
  .removeEventListener()
  ```
  
  - Node
    - .....
  - Windows
  
- Node

  ```js
  .textContent
  .childNodes
  .parentNode
  .cloneNode()
  ```

  - Element——**<p>**Paragraph**<p>**

    ```js
    .innerHTML/.classList/.children/.parentElement
    .append()/.remove()
    .insertAdjacentHTML()
    .querySelector()
    ```

    - HTMLElement
      - HTMLButtonElement
      - HTMLDivElement

  - Text——<p>**Paragraph**<p>

  - Comment——<!--Comment-->

  - Document

    ```js
    .querySelector()
    .createElement()
    .getElementById()
    ```

### HTML DOM API

- `serInterval(handler,timeout,...arguments)`
  - 重复调用一个handler函数。每次调用之间具有固定 的时间间隔
- `clearInterval(intervalID)`
  - 取消先前通过`setInterval`设置的重复定时任务

### 获取元素

- 通过ID查找

  - ```js
    <div id="time">2012-1-1</div>
    var timer=document.getElementById('time');//输入id字符串。返回一个元素对象
    console.log(timer);//<div id="time">2012-1-1</div>
    console.log(typeof timer);//object
    console.dir(timer);//打印timer中的所有属性方法
    ```

- 通过标签查找

  - ```js
    var lis=document.getElementsByTagName('xx');
    //返回获取元素对象的集合(元素为对象的列表)，以伪数组的方式存储
    var li2=element.getElementsByTagName('li')
    //指定在element父标签中的子标签
    console.log(lis[1]);
    //若为空返回空的伪数组
    ```

  - 可以两个叠加使用，先用id确定某个大标签，再用tag选择子标签

- 通过类名查找 //H5新增

  - ```js
    var lis=document.getElementsByClassName('Class');
    ```

- 通过指定选择器返回第一个元素对象 //H5新增

  - ```js
    document.querySelector('.box');'#red'//类加. id加#
    document.querySelector('.box').style.backgroundcolor='#123456';
    ```
    
  - 通常使用。修改的css格式本质上是在标签中加入了内联式style语句

- 根据指定的选择器返回所有满足的对象

  - ```js
    document.querySelectorAll('选择器');//根据指定选择器返回 列表
    ```

  - 只有这两个需要加符号

- 获取body元素

  - ```js
    var bogyELe=document.body;
    ```

- 获取html元素

  - ```js
    var htmlEle=document.documentElement;
    ```
  
- 总结

  - ```js
    document.querySelector('selector')
    .querySelectorAll()//最常用，选择器前加符号
    .getElementById()
    .getElementsByTagName()//返回NodeList
    .getElementByClassName()//返回HTMLCollection
    ```


### 创建/插入/删除元素

- `element.insertAdjacentHTML(position,text)`插入text进入element的position位置
- `const element=document.createElement(tagName[,options])`
  - 创建并返回一个由标签名称tagName指定的HTML元素
  - `tagName`：如div、p等
  - 随后可用`.innerHTML/.classList.add()`等添加元素信息
- `parentElement.prepend/.append/.after/.before(element)`
  - 将元素加入父元素中
- `element.remove()`
  - 删除元素element

### 事件

- 事件概述

  - JavaScript让我们有能力创建动态页面，事件是可以被JS侦测到的行为

  - 触发——响应机制

- 事件的三要素

  - 事件源

    - 事件被触发的对象，如按钮

    - ```js
      <button id="btm">this is me</button>
      var btn=document.getElementById('btn');
      ```

  - 事件类型

    - 事件如何触发，如鼠标点击(onclick)、键盘按下

    - 常见鼠标事件

      | 鼠标事件    | 触发条件         |
      | ----------- | ---------------- |
      | onclick     |                  |
      | onmouseover | 鼠标经过触发     |
      | onmouseout  | 离开触发         |
      | onfocus     | 获得鼠标焦点触发 |
      | onblur      |                  |
      | onmousemove | 鼠标移动触发     |
      | onmouseup   | 鼠标谈起触发     |
      | onmousedown | 鼠标按下触发     |

      

  - 事件处理程序

    - 通过一个函数赋值的方式完成

    - ```js
      btn.onclick = function(){
          alert('yeahh');
      }
      ```

- 执行事件的步骤

  1. 获取事件源
  2. 注册事件（绑定事件）
  3. 添加事件处理程序（函数）

### 事件流

DOM事件流分为三阶段

1. 事件捕获阶段
   - 从Document元素开始一级一级到目标元素，可触发`addEventListener(true)`
2. 处于目标阶段
3. 事件冒泡阶段
   - 从目标元素一级一级返回Document元素，触发默认`addEventListener`

- 应用
  - 当一个父元素中有多个子元素需要添加事件监听，可以对父元素添加一个事件监听，使用`e.target`获得事件来源。

### 操作元素

DOM操作可以改变页面内容、结构和样式

#### 属性

- `element.style`
  - 返回元素内联式的样式对象
  
- `element.alt/src/...`

  - 返回元素标签(html)内的标准属性，src为绝对地址

  - ```js
    console.log(logo,logo.className);
    //<img src="img/logo.png" alt="Bankist logo" class="nav__logo" id="logo"/>
    //'nav__logo'
    ```

- `element.dataset`

  - 返回元素标签内以data开头的属性。`data-one-two(css)=>element.dataset.oneTwo`。去除data，其他单词以小驼峰聚合
  - 例如`data-version-number`版本号，可以用`element.dataset.versionNumber`获取。
  
- `element.childNodes`

  - 返回包含指定节点的子节点的集合，该集合为即时更新的集合（live collection）

- `element.children`

  - 一个只读属性，返回 一个 Node 的子[`elements`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) ，是一个动态更新的 [`HTMLCollection`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)

- `element.parentNode`

  - 返回指定的节点在 DOM 树中的父节点。

- `node.nextSibling/previousSibling`

  - 返回其父节点的 [`childNodes`](https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes) 列表中紧跟在其后面/前面的节点，如果指定的节点为最后一个节点，则返回 `null`。



#### 方法

- `getComputedStyle(element)`
  
  - 返回元素外链式(css)的样式对象
  
- `element.addEventListener(type, listener, useCapture)`
  
  - 方法将指定的监听器注册到 [`EventTarget`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget) 上，当该对象触发指定的事件时，指定的回调函数就会被执行。事件目标可以是一个文档上的元素 [`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)、[`Document`](https://developer.mozilla.org/zh-CN/docs/Web/API/Document) 和 [`Window`](https://developer.mozilla.org/zh-CN/docs/Web/API/Window)，也可以是任何支持事件的对象（比如 [`XMLHttpRequest`](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)）
  - `type`：表示监听[事件类型](https://developer.mozilla.org/zh-CN/docs/Web/Events)的大小写敏感的字符串。
  - `listener`：当所监听的事件类型触发时，会接收到一个事件通知（实现了 [`Event`](https://developer.mozilla.org/zh-CN/docs/Web/API/Event) 接口的对象）对象。`listener` 必须是一个实现了 [`EventListener`](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener) 接口的对象，或者是一个[函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Functions)。有关回调本身的详细信息，请参阅[事件监听回调](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#事件监听回调)。并且会默认传入消息参数e
  
- `document.documentElement.style.setProperty(propertyName,value)`

  - 改变css文件中propertyName属性的值为value

- `element.getAttribute(attributeName)`
  - 返回元素标签内的属性（含自定义属性）
  - attribute为src时为相对地址

- `element.setAttribute(name,value)`
  - 设置指定元素上的某个属性值。如果属性已经存在，则更新该值；否则，使用指定的名称和值添加一个新的属性。

- `element.classList.add/remove/toggle/contains(className)`
  - 添加/移除/改变/判断包含元素标签中的类名

- `element.getBoundingClientRect()`

  - 返回一个 [`DOMRect`](https://developer.mozilla.org/zh-CN/docs/Web/API/DOMRect) 对象，其提供了元素的大小及其相对于[视口](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)的位置。

  - `window.scrollX/scorllY`返回视窗目前相对于网页左端/顶端的位移距离

  - 三种将页面移至某元素的方法

    ```js
    const s1record=section1.getBoundingClientRect();
    window.scrollTo(section1.offerLeft,section1.offsetTop); window.scrollTo(s1record.left+scrollX,s1record.top+scrollY);
    window.scrollTo({
        left:s1record.left+scrollX,
        top:s1record.top+scrollY,
        behavior:'smooth'//添加平滑移动特效
      }); section1.scrollIntoView({behavior:'smooth'});//现代浏览器方法
    ```

- `var closestElement = targetElement.closest(selectors)`

  - 用来获取：匹配特定选择器且离当前元素targetElement最近的祖先元素（也可以是当前元素本身）。如果匹配不到，则返回 `null`。




#### 改变元素内容

- ```js
  element.innerText
  //从起始位置到终止位置的内容，去除html标签，去除空格换行
  element.innerHTML
  //起始到终止位置的全部内容
  ```

- 例：点击按钮显示时间

  ```js
  var btn=document.querySelector('button');
  var div=document.querySelector('div');
  btn.onclick= function(){
      div.innerText='2001-1-1';
  }
  ```

- 例：改变显示图片

  ```js
  <button id='ldh'>刘德华</button>
  <button id='zxy'>张学友</button>
  <img scr="../images/ldh.jpg" alt="">
      var ldh=document.getElementById('ldh');
  var zxy=document.getElementById('zxy');
  var img=document.querySelector('img');
  zxy.onlick=function(){
      img.scr="iamge..."
  }
  //直接通过元素.属性修改
  
  ```

#### 修改表单内容

- 例：点击按钮后表单

  ```js
  btn.onclick=function(){
      input.value='onclick';
      btn.disabled=true;
      this.disabled=true;
      //this指向函数的调用者
  }
  ```


#### 改变样式属性

- ```js
  element.style 行内样式操作
  element.className 类名样式操作
  ```

- ```js
  div.onclick=function(){
  	this.style.backgroundColor='red';
      this.style.width='200px';
  }
  ```

- JS修改style样式操作，产生的是行内样式，css权重比较高

#### 排他思想

如果有同一组元素，我们想要某一个元素实现某种样式，需要用到循环的排他思想算法

1. 所有元素全部清除样式
2. 给当前元素设置样式
3. 顺序不能变

例：一系列button，点击一个颜色变化，其他颜色为默认

```js
var btns=document.getElementByTagName('button');//获取元素
for(var i=0;i<btns.length;i++){
    btns[i].onclick=function(){
        for(var i=0;i<btns.length;i++){
            btns[i].style.backgroundColor='';//去掉所有背景颜色
        }
    }
    this.style.backgroundColor='pink';
}

```

#### 表格隔行变色

1. 鼠标经过onmouseover，离开onmouseout
2. 鼠标经过tr行，当前的行背景颜色变，离开后去掉当前的背景颜色
3. thead行不要变，变得是tbody

### Intersection Observer API

**`IntersectionObserver`** 接口提供了一种异步观察目标元素与其祖先元素或顶级文档[视口](https://developer.mozilla.org/zh-CN/docs/Glossary/Viewport)（viewport）交叉状态的方法。其祖先元素或视口被称为根（root）。

当一个 `IntersectionObserver` 对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦 `IntersectionObserver` 被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。

### 构造函数

- `var observer = new IntersectionObserver(callback[, options]);`

  - 构造器创建并返回一个[`IntersectionObserver`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)对象。

  - `callback`：当元素可见比例超过指定阈值后，会调用一个回调函数，此回调函数接受两个参数：

    - `entries`：一个[`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry)对象的数组，每个被触发的阈值，都或多或少与指定阈值有偏差。
    - `observer`：被调用的[`IntersectionObserver`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)实例。

  - `options` ：一个可以用来配置 observer 实例的对象。如果`options`未指定，observer 实例默认使用文档视口作为 root，并且没有 margin，阈值为 0%（意味着即使一像素的改变都会触发回调函数）

    - `root`

      监听元素的祖先元素[`Element`](https://developer.mozilla.org/zh-CN/docs/Web/API/Element)对象，其边界盒将被视作视口。目标在根的可见区域的的任何不可见部分都会被视为不可见

      `rootMargin`

      一个在计算交叉值时添加至根的边界盒 ([bounding_box (en-US)](https://developer.mozilla.org/en-US/docs/Glossary/Bounding_box)) 中的一组偏移量，类型为字符串 (string) ，可以有效的缩小或扩大根的判定范围从而满足计算需要。语法大致和 CSS 中的[`margin`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin) 属性等同; 可以参考 [intersection root 和 root margin](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#the_intersection_root_and_root_margin) 来深入了解 margin 的工作原理及其语法。默认值是"0px 0px 0px 0px"。

      `threshold`

      规定了一个监听目标与边界盒交叉区域的比例值，可以是一个具体的数值或是一组 0.0 到 1.0 之间的数组。若指定值为 0.0，则意味着监听元素即使与根有 1 像素交叉，此元素也会被视为可见。若指定值为 1.0，则意味着整个元素都在可见范围内时才算可见。可以参考[阈值](https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API#thresholds)来深入了解阈值是如何使用的。阈值的默认值为 0.0。

### 实例方法

- `IntersectionObserver.observe(targetElement);`
  - 向 IntersectionObserver 对象监听的目标集合添加一个元素。当指定元素的可见区域超过监听者的可见区域阈值之一时（阈值列表[`IntersectionObserver.thresholds` (en-US)](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/thresholds)），监听者的回调会被传入代表当前发生的交叉变化[`IntersectionObserverEntry`](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry)并执行。
  - 注意，这种设计允许通过调用一次回调，给回调传入 IntersectionObserverEntry 对象数组，来实现同时处理多个被监听元素的交叉变化。

### 页面加载顺序

1. `document.addEventListener('DOMContentLoaded',functoin(){})`
2. `window.addEventListener('load',function(){})`

![image-20231013213819411](C:\Users\12604\AppData\Roaming\Typora\typora-user-images\image-20231013213819411.png)

- `regular`常规
  - head：解析html——等待js获取/执行——结束html解析——DOM加载结束
  - body end：解析html——js获取/执行
  - 速度较慢，但老浏览器只支持这样
- `async`异步`<script async src='script.js'>`
  - head：：解析html同时获取js——执行js——结束html解析
  - DOM会在html解析完成时加载结束，也就是说如果获取js事件超过了html解析事件，可能会以错误的顺序执行js
  - 当使用第三方库并且顺序不重要时
- `defer`推迟 `<script defer src='script.js>`
  - head：解析html同时获取js——执行js
  - DOM会在js执行后完成加载
  - 最好的方法

## OOP面向对象

- 四个原则
  - 抽象：省略细节
  - 继承：子类继承父类
  - 封装：保留一些属性和类内部的私有方法使他们无法访问从类外
  - 多态：覆盖重写
  
- JS中的继承
  - `Prototype`原型继承——`object`：链接到原型的对象可以使用原型定义的属性和方法。也可称为委托
  
  - ```js
    const Person = function (firstName, bitrhYear) {
      this.firstName = firstName;
      this.bitrhYear = bitrhYear;
    };
    
    const jonas = new Person('Jonas', 1991);
    console.log(jonas);
    console.log(jonas instanceof Person);
    
    Person.prototype.calcAge = function () {
      console.log(2023 - this.bitrhYear);
    };
    Person.prototype.height = 180;
    //用于在原型中定义新属性/方法
    //所有继承该类型的对象都会共享此新属性/方法 
    jonas.calcAge();
    
    console.log(Person.prototype);
    console.log(jonas.__proto__);//二者===
    //原型.prototype===子类型.__proto__
    
    console.log(jonas.height);
    ```
  
  - ![JS原型继承](C:\Users\12604\OneDrive\Picture\JS原型继承.png)
  
    - 当调用对象中的方法时，如果对象中不存在此方法则在`__proto__`对象即该对象的原型中寻找此方法
    - 该策略大大降低了内存开销，
  
- 原型链

  - ![JS原型链](C:\Users\12604\OneDrive\Picture\JS原型链.png)
  - 可以理解为找不到该属性/方法就在他的`__proto__`中寻找，直到`Object`对象（根对象）

## 类 Class (es6)

- es6中class类为一种特殊的函数

- class不能被吊起。也就是说必须先声明再使用

- class以严格模式执行

- 例：

  - ```js
    class PersonCL {
        //构造函数
      constructor(firstName, bitrhYear) {
        this.firstName = firstName;
        this.bitrhYear = bitrhYear;
      }
      calcAge() {
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        this.age = year - this.bitrhYear;
        console.log(year, this.age);
      }
    }
    
    const John = new PersonCL('John', 2001);
    John.calcAge();
    ```

- 声明定义

  1. class expression 类表达式

     `const PersonCl=class()`

  2. class declaration 类定义食

     `class PersonCl{}`

- `getter`和`setter`

  - 新定义的属性名前加`_`以表示为临时变量

## 
