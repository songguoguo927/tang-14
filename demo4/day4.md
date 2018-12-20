day4
# h5多媒体技术
>对自己的要求做一个视频音频的播放demo
- 容器
    - 音频，视频就是一个容器文件
    - 包含了轨道和元数据（标题，作者，字幕等）

- 编码器
    - 读取特定的容器格式并对轨道进行解码播放
    - 大多数编码器对原始音频，视频文件进行了压缩
        * 有损压缩
        * 无损压缩

# canvas画布

`<canvas></canvas>`
内容写在闭合标签里，可以自己去了解一下canvas的方法，看看他能做什么

>对自己的要求做一个关于canvas的demo（比如画一个时钟，太阳之类的）

- 为跨平台动画和游戏服务
- 对图像实现像素级操作
- 主要通过JavaScript操作进行渲染

## canvas坐标
**以左上角为原点，横向右为x轴正方向，竖向下为y轴正方向**

> 让我想到我昨天做的那个，显示图标的问题，当一个图标有两种形态时，设计师设计出来的图标
可能在同一张图片上，这时候就要根据具体的图标大小，并将其放入span，将span display：block，
设置可视区域宽高,，再以改图标做背景，设置为不重复平铺
再通过设置**background-position: xpx ypx;**
x y 为坐标，这里的坐标轴是**以左上角为原点，横向右为x轴正方向，竖向上为y轴正方向。**

- 绘制各类图形都基于context对象
    - tangsay-把context当成公公（对没错，老师说的是皇上身边的那个太监）来理解
- 目前只支持2D
- 步骤
>canvas 元素本身是没有绘图能力的。所有的绘制工作必须在 JavaScript 内部完成：
```
<script type="text/javascript">
var c=document.getElementById("myCanvas");//JavaScript 使用 id 来寻找 canvas 元素
var cxt=c.getContext("2d");//然后，创建 context 对象：
//getContext("2d") 对象是内建的 HTML5 对象，拥有多种绘制路径、矩形、圆形、字符以及添加图像的方法
cxt.fillStyle="#FF0000";
cxt.fillRect(0,0,150,75);
</script>
```
- fillStyle属性可以是CSS颜色，渐变，或图案。fillStyle 默认设置是#000000（黑色）。

- fillRect(x,y,width,height) 方法定义了矩形当前的填充方式

**移动坐标空间**
- 将原点坐标移动到相对位置，从指定位置开始绘制

**旋转坐标空间**
**缩放**
**透明**

。。。待补充

日常可用rgba，opacity设置
**渐变（径向**
**绘制文本、图片**