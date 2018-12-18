# day2

### 基础小知识点

AM

* 列表标记
1. ol-(order list)
2. ul

type有i、I、a、A、1

eg：`<ol type="1"></ol>`
* 容器标记
1. div-块级，透明
2. span-行内，透明


* 盒子模型
*相关内容*
1. margin
2. border
3. padding
4. content

* 表单标记
1. form

>注意下面一段代码，form给了一个id号，然后尽管name为username和pwd不在表单from的闭合标签里，但作用与写在闭合标签里不用from属性是一样的。
```
<body>
<form action="http://www.baidu.com" method="get" id="myform">
    <input type="submit" value="提交">
</form>
    <input type="text" name="username" form="myform">
    <input type="text" name="pwd" form="myform">
</body>
```
*属性*

 - action
 - method 值有get/post(get明文传输，post密文传输且有文件大小限制)
 - target
 
2. input

*属性*

- type
常用值有：text,password,button,radio,checkbox

submit,url,number,image,hidden,file,search,email,pregress,date,datetime
- name
- value
- placeholder

ps：\(^o^)/~（这表情什么鬼）

>h5新增属性，有些可以完成填写验证
>表单元素在被不支持h5的浏览器解析时，会把type解析为text

---
PM

*MVC-html css js*

### css
>也很重要，对页面优化（里面学问也很多啊）

**选择器**
- html标签选择器
- id选择器 id唯一标识，使用样式
- class选择器  
>myadd 各自权重

权重计算规则
第一等：代表内联样式，如: style=””，权值为1000。
第二等：代表ID选择器，如：#content，权值为0100。
第三等：代表类，伪类和属性选择器，如.content，权值为0010。
第四等：代表类型选择器和伪元素选择器，如div p，权值为0001。
通配符、子选择器、相邻选择器等的。如*、>、+,权值为0000。
继承的样式没有权值。
--------------------- 

**媒体查询**
media queries

**link增加请求次数**
>每个link会每次增加同步请求次数，（myadd 会影响页面性能）

**display属性**
值有：
- inline
- block
- inline-block——行内块状即让元素与其他内容显示在同一行，同时具有块级元素的属性（让元素显示为行内元素，同时具有块级元素的特征。即可以为元素的四条边设置width,height,margin,padding等属性。
- none
>myadd 涉及到visibllity:hidden;与display:none;的区别
前者还保留空间位置，只是视觉上的不可见，后者不保留，且看不见。
