### css动画
-[] 待做一个进度条demo
熟悉一下常用的动画用法，keyframe关键帧之类的from to 并总结一下

### opacity 和rgba里a 透明度的区别
后者单纯对颜色起作用，而有时候比如给一个地方设置opacity透明度，可能文本也一起变淡了，
这个时候就要考虑使用rgba来设置看看是否能达到想要的效果

### transparent

### hsl工业颜色

### text-indent缩进

## web workers
* 概念：
    - 是一项后台处理技术，为网页脚本提供了一种能在后台进程中运行的方法
    》可以理解为把事情交给别人做
* 应用
    - 类似多线程
    - 接收服务器广播的消息，并将其显示在页面上
### 浏览器支持
* IE不支持
* 其它浏览器支持
Firefox 3.5  Opera 10.6  Chrome 3.0  Safari 4.0
* 判断浏览器的支持
if(typeof(Worker)!==“undefined”){
  //支持
}

### 定义主线程
```
 var w=new Worker(url);
    //url为一个javascript文件
 w.postMessage(data);
    //向worker线程发送数据
 w.onmessage=function(e){};
    //绑定事件，接收worker响应的数据
 或w.addEventListener(“message”,fun,true);
  w.terminate()
//终止worker线程执行
```

### 定义worker线程
- 主要是指创建Worker对象时的js文件
- 该js文件为一个onmessage函数，并带一个参数
- 函数内使用postMessage(data)方法向主线程发送数据
- 参数可以使用data属性获取主线程发过来的数据。
//一般的数据运算写在此函数内

### 示例
- 未使用worker时，编写一个脚本计算1+2+3+4+…+n
    - 如果n足够大，会出现停止执行提示
    - 从而影响用户体验
- 使用worker的计算方式

-[] demo做个出来宝贝

## localstorage  sessionstorage
本地存储 会话存储

- 获取对象

window,xxxx

- 相关方法
    - clear() 清除数据
    - setItem(key,value) 设置数据
    - getItem(key) 获取数据
    - key(index)  获取指定索引的key
    - removeItem(key) 移除数据

学会如何使用这些方法

-[] 做一个实验五的关于这个的demo

- 属性
     - length 获取当前存储key/value的数量











