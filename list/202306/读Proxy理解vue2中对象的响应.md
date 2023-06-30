# 读Proxy理解vue2中对象的响应




```
const target = new Date();

const proxy = new Proxy(target, {});

console.log(proxy instanceof Date); // true
proxy.getDate(); // TypeError: this is not a Date object.

```










[返回主页](../../README.md)