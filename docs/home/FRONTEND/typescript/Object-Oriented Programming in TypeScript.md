---
layout: doc
title: TypeScript 的面向对象编程
---
# TypeScript 的面向对象编程

资料来自 Bird Eats Bug：https://birdeatsbug.com/blog/object-oriented-programming-in-typescript

## Classes
在TypeScript中，类是用来创建对象的**蓝图**或**模板**的一种构造。类定义了一组属性和方法，用于描述对象的行为和状态。类可以看做是一种特殊的数据类型，因为它们可以存储数据，但也可以包含可执行的代码（即方法）。

类可以被看作是面向对象编程的一个核心概念，因为它提供了一种结构化的方式来描述对象的行为和状态，并且可以通过类创建多个具有相同行为和状态的对象。

```ts
class Car {
  model: string;
  year: number;
  price: string;

  drive() {
    console.log('The Car has Started driving');
  }

  stop() {
    console.log('The car has stopped');
  }
}
```

和其他OOP语言一样，TS中使用`new`关键字来实例化一个类。
```ts
const tesla = new Car();
```


## Constructor Functions
构造函数用于`初始化`对象的变量。

TS中使用`constructor`关键字表示构造函数
```ts
class A {
  variable: string;

  constructor(variable: string){
    this.variable = variable
  }
}

const object = new A('value')
```
当从A实例化一个新对象时，类的实例变量的值会被指定为参数。

## Inheritance

继承表示，一个子类从母类继承其所有属性。

子类也可以在自身加入其他属性或方法。

母类
```ts
class Person {
  name: string;
  age: number;

  constructor(name:string, age:number){
    this.name = name;
    this.age = age;
  }

  eat() {
    console.log(`What's for dinner?`);
  }

  speak() {
    console.log(`My name is ${this.name}, I am ${this.age} years old`);
  }
}
```

继承使用关键字`extend`:
```ts
class Chef extends Person {
  occupation: string;

  constructor(name:string, age:number, occupation: string){
    super(name, age)
    this.occupation = occupation;
  }
  
  speak(): void {
    console.log(`I am a ${this.occupation}`);
  }

  cook() {
    console.log(`I am cooking`);
  }
}
```

可以观察到，除了继承了母类`Person`的属性和方法，如`name`，`age`，`speak()`，子类也自己扩展了其他属性：变量`occupation`以及方法`cook`。

有时，子类不需要继承母类一切的属性，只想实现某些功能，那么就可以使用`implements`关键字，而不是`extend`。


## Extends vs Implements
- implements 用于类实现接口，即表示一个类要实现某个接口中定义的属性和方法。
- extends 用于类继承父类，即表示一个类要继承父类中的属性和方法。

简单说区别就是，<mark>如果一个子类不完全实现母类的方法，那么TS就会报错</mark>。

和继承一样，实现也可以扩展自己的属性和方法。

但一定要实现母类（接口）中所有属性和方法。

属性和方法可以重写，但一定要有。



## Overriding and Extending Inherited Properties
子类可以从母类继承属性和方法，这些继承的属性和方法是可以**重写的**。

```ts
class A {
  print() {
    console.log('I am class A');
  }
}

class B extends A {
	//重写print()
  print() {
    console.log('I am class B');
  }
}
```

可以用`super.print()`执行母类的方法，然后再重写。

## Deadly Diamond of Death
TypeScript不支持多重继承所以不会出现死亡菱形问题，它依靠interface实现类似多重继承的功能
## Encapsulation
封装的作用是限制改变对象的属性。在TypeScript中，modifiers就是用于达到这个目的关键字。

默认情况下，class的属性都是public的。

### Access Modifiers
有四种主要的修饰器：

1. `public`: 默认的修饰器。用public修饰的属性可以在该class外读取。
2. `private`: 用private修饰的class，既不能在该class外获取，也不能被子class继承。
3. `protected`: protected修饰的class，与private略微相似，主要区别在于，被它修饰的class能被继承。
4. `static`: stattic修饰的class，只可以直接在本身的class读取，不能从它实例化的对象读取。当然，它们也不能被继承。
5. `readonly`:字面意思是“只读”。被修饰后，属性不能被更改。

### Initializing Instance Variables with Access Modifiers

### Setters and Getters
Setters and getters 用于属性之间的读写。
```ts
class A {
  private _variable: string;

  constructor(variable:string){
    this._variable = variable;
  }

  get variable(): string {
    return this._variable;
  }

  set variable(value: string) {
    if(value === '') throw new Error("Variable cannot be an empty string");
    this._variable = value;
  }
}

const object = new A('string')

//setting the variable
object.variable = 'different string'

//getting the variable
console.log(object.variable)
```

## Polymorphism
多态：多个类继承于同一个母类，例如，一个方法或属性以多种形态存在的能力。

```ts
class A {
  name: string = "Class A"

  print(){
    console.log('I am class A')
  }
}

class B extends A {
  name: string = "Class B"

  print(){
    console.log('I am class B')
  }
}
```

