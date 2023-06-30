# 读Proxy理解vue2中对象的响应

## 对象操作

### 一、基本操作
- 值：改

```
let obj = {
    a: 1,
    b: true
}

obj.a = 2
obj.b = false

// 打印：obj 得出 { a: 2, b: false }
```

- 属性：增、删

```
let obj = {
    a: 1,
    b: true
}

obj.c = "增加属性c"
delete obj.a

// 打印：obj 得出 { b: true, c: "增加属性c" }
```

### 二、属性描述

#### 1.查看属性描述

```
let obj = {
    a: 1,
    b: true
}

const res = Object.getOwnPropertyDescriptor(obj, "a")

// 打印：res 得出 { value: 1, writable: true, enumerable: true, configurable: true }
```

#### 2.设置属性描述

```
const person = {
  name: 'jack.ma',
  age: 58,
};

Object.defineProperty(person, "name", {
  value: "tony.ma",
  writable: true,
  configurable: true,
  enumerable: true,
});

// 打印：person.name 得出 "tony.ma"

备注：可以通过此方法锁住对象的某个属性，不让修改
```

### 三、属性监听

```
const target = new Date();

const proxy = new Proxy(target, {});

console.log(proxy instanceof Date); // true
proxy.getDate(); // TypeError: this is not a Date object.

```



[返回主页](../../README.md)