---
title: "codewars练习"
layout: doc
lastUpdated: true
---
# codewars练习
开个帖子记录一下解题和方法。


## Break camelCase
**Details**  
> Complete the solution so that the function will break up camel casing, using a space between words.
 
**Example**
```
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
```
### 学到的
*新知识*   
1. 正则表达式的 `$1 - $9`   
2. 正则表达式之***先行断言***   
3. `str.replace()`的参数   

*复习*   
1. `replace()`   
2. `charCodeAt()`   

### my solution
思路：用正则拿到大写，再用`split(..)`以大写字母为界切开，然后在头部加上大写字母，然后拼接在一起。  
使用的方法: 正则 `match(/[A-Z]/g)`, `split`, `slice`, `concat`, `join`, `push`  ...  
~~我真的想得太复杂了~~  
```js
function breakCamel(words) {
  if (words === "") {
    return ''
  } else {
    // 得出这组字符串中大写字母 [] 
    let uppercase = words.match(/[A-Z]/g);
    // 如果存在目标大写字母
    if (uppercase) {
      // 将数组按照大写字母切分 存于 []
      // 单词已分组 但从第二组开始 缺乏开头大写
      let arr = words.split(/[A-Z]/g);
      let newArr = [];
      // 大写拼接小写 成为完成的一组字符 如 [.., 'Camel']
      for (i = 0; i < uppercase.length; i++) {
        let a = uppercase[i] + arr[i + 1];
        newArr.push(a);
      }
      let arr_ = arr.slice(0, 1);
      return arr_.concat(newArr).join(' ');
    } else {
      return words;
    }
  }
}
```

### other solutions
#### 解法1
在我的思路基础上，简化为使用`' ' + 大写字母`替换原来的大写字母。  

确实……这样写很简单
```js
// 答案
function solution(string) {
  string = string.split('').map(function (el) {
    if (el === el.toUpperCase()) {
      el = ' ' + el
    }
    return el
  })
  return string.join('')
}
```  

也可以用 `charCodeAt()` 查找然后替换：
```js
if(s.charCodeAt(0) >= 65 && s.charCodeAt(0) <= 90)
```

#### 解法2
`$1-$9`正则静态属性（非标准）  

解答：
```js
function solution(string) {
  return(string.replace(/([A-Z])/g, ' $1'));
}
``` 
好家伙，虽然非标准，但一行就解决问题捏，连IE也兼容 😂👏

先来看下 `replace()` 方法：   
该方法返回替换后的新字符串。  
参数为 (*regexp|substr, newSubStr|function*)，即参数1接收**正则或字符串**作为**被替换值**，而参数2则为**替换值**或由函数生成的替换值。  
```js
const str = 'Hello 被替换值!'

console.log(str.replace('被替换值', '替换值'));
// Hello 替换值!
```   

再来看看 [`$1-$9`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)：  

它们是正则表达式的一些只读属性，它需要结合正则表达式使用。这些属性可以在`String.replace`方法中替换字符串. 在这种情况下, 不用在前面加上RegExp。在替换文本里, 用 `$1` 和 `$2` 表示正则表达式中的括号匹配项的结果。  

本题中，这个正则`/([A-Z])/g`表示全局匹配到的大写字母作为被替换值，`$1`表示正则查找到的第一个值即第一个大写字母，于是`replace(/([A-Z])/g, ' $1'))` 表示由`空格+大写字母`替换掉`大写字母`。  

下面的解法是上面解法的变体，用`$1`和`$2`匹配`aA`，在其中加入空白再进行替换。
```js
function solution(string) {
  return string.replace(/([a-z])([A-Z])/g, '$1 $2');  
}
```

下面的解法利用“`replace()`的参数2可以是一个函数”这一属性：
```
function solution(string) {
  return string.replace(/\B[A-Z][a-z]+/g, function(v) { return ' ' + v});
}
```

#### 解法3：正则之先行断言
> `x(?=y)` 匹配'x'仅仅当'x'后面跟着'y'，这种匹配叫做先行断言。

非常符合该题的情景呢，就camelCasing为例，利用`x(?=y)`，查找'**任意字符后面紧紧跟着大写**'这样的模式，然后使用空白拼接。这个解法也很聪明，前提是要了解正则……
```js
function solution(text) {
  return text.split(/(?=[A-Z])/).join(' ');
}
```
总之，正则表达式在查找特定字符和替换的情景中真的超有用。


## The Supermarket Queue
**Details**    
> There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!   

**input**  
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.   

**output**   
The function should return an integer, the total time required.   

**Examples**
```
queueTime([5,3,4], 1)
// should return 12
// because when there is 1 till, the total time is just the sum of the times

queueTime([10,2,3,3], 2)
// should return 10
// because here n=2 and the 2nd, 3rd, and 4th people in the 
// queue finish before the 1st person has finished.

queueTime([2,3,10], 2)
// should return 12
```
### 学到的
*新知识*  
1. 快速求数组最大（最小值）：ES6 Spread syntax `Math.max(...arr)`  
2. 快速给一个新数组填充初始值：`Array(n).fill(0)`  
3. 遍历数组对象也可以用 for..of..    
  
*复习*   
1. `arr.findIndex(..)`  
2. `arr.slice(..)`  

### my solution
~~又是巨冗长~~
```Js
function queueTime(customers, n) {
  if (customers.length > 0) {
    let total = customers.reduce((p, s) => p + s);
    if (n === 1) {
      return total;
    }
    else if (customers.length <= n) {
      return Math.max(...customers);
    } else {
      let arr = customers.slice(0, n);
      for (let i = n; i < customers.length; i++) {
        let index = arr.findIndex(n => n === Math.min(...arr));
        arr[index] = arr[index] + customers[i]
      }
      return Math.max(...arr)
    }
  } else {
    return 0;
  }
}
```

其实我也不知道什么要考虑三种情况……于是refactoring了一番：
```js
function queueTime(customers, n) {
  let arr = customers.slice(0, n);
  for (let i = n; i < customers.length; i++) {
    let index = arr.findIndex(n => n === Math.min(...arr));
    arr[index] = arr[index] + customers[i]
  }
  return customers.length === 0 ? 0 : Math.max(...arr)
}

// 清爽多了
```
### other solutions
#### 最高票答案
```js
function queueTime(customers, n) {
  var w = new Array(n).fill(0);
  for (let t of customers) {
    let idx = w.indexOf(Math.min(...w));
    w[idx] += t;
  }
  return Math.max(...w);
}
```
后半截跟我思路差不多，高明之处在于用了`Array(n).fill(0)`初始化数组。

#### heap
盲猜这个答案跟堆/栈算法有关……看得很懵
```js
function queueTime(customers, n) {
    var heap = Array.apply(Array, {length: n}).map(() => 0);
    for (var customer of customers) {
        heap[0] += customer;
        let parentIdx = 0, childIdx;
        while ((childIdx = (parentIdx + 1) * 2 - 1) < heap.length) {
            if (childIdx + 1 < heap.length && heap[childIdx] > heap[childIdx + 1]) {
                childIdx += 1;
            }
            if (heap[parentIdx] <= heap[childIdx]) {
                break;
            }
            [heap[childIdx], heap[parentIdx]] = [heap[parentIdx], heap[childIdx]];
            parentIdx = childIdx;
        }
    }
    return Math.max.apply(Math, heap);
}
```

#### 指针？
```js
function queueTime(customers, n) {
  var minutes = 0;
  while (customers.length > 0){
    var t = n;
    for (var i = 0; i < t && i < customers.length;i++){
        if (--customers[i] === 0){customers.splice(i--,1);t--;}
    }
    minutes++;
  }
return minutes;
}
```

---
2022/6/8

## 求 1~n 内互质与n互质的数组
来自 codewars [Coprimes up to N](https://www.codewars.com/kata/59e0dbb72a7acc3610000017/train/javascript)
example:
```
2 -> [1]
6 -> [1, 5]
10 -> [1, 3, 7, 9]
20 -> [1, 3, 7, 9, 11, 13, 17, 19]
30 -> [1, 7, 11, 13, 17, 19, 23, 29]
```
思路：欧几里得算法（辗转相除法）求最大公约数
```js
function coprimes(n) {
  // 1. 创建1~n的数组
  let arr = [...Array(n).keys()].map(n=>n+1);
  // 2. 互质 意思是两个共同的被除数只有1
  // 3. 使用欧几里得算法 可求最大公约数
  // 4。若最大公约数为1 则互质呗
  return arr.filter(item=> {
    function f(a, b) {
      return b === 0 ? a : f(b, a % b);
    }
    return f(n,item) === 1;
  })
};
```