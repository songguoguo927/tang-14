# day1
### 基础小知识点

### H5

>通过标记来表示网页

**html**
特点：简易型，可扩展性，平台无关性，通用性
**h5新内容**
- 语义化
- 多媒体支持
 - 视频 
 - 音频

 **编辑器**
> tang-say

webstrom hbuild(第一次听) 又听了个phpstrom（暂时把webstrom用熟来）
cocos creator开发游戏

>myadd: vscode atom sublime

**<!doctype html>**
>可以理解为h5声明

**meta**

属性
- name
  比较重要的值，keyword，description，author,generator(应该是表示用什么编辑器写的，)
- content
  （与上面的那么对应，--，-----------，------，editplus）如editplus

**超链接**

推荐`<a href="#" target="_blank></a>"`

target的值有:self（默认）, _blank, 框架名称， _parent

**单位**
- px
- em（推荐使用）倍数单位，通常以16px=1em，其他按照倍数计算具体的px
- %（用%作单位一定要注意父容器的大小，因为百分号是相当于父容器而言）

**页面布局**
>要有对页面的整体把控能力，有全局观，分层，分列来看布局是一个比较不错的思维方式

- 表格布局
```
<table>
    <tr>
        <td></td>
    </tr><!--tr行，td列，列包含在行里-->
</table>

```
- 层布局
- div+css布局

>myadd 表格布局已过时，但其中的思想值得品味，因为后面出现的flex布局，栅格布局，感觉还是有相通点的

*零碎点解读*

align="center"对内容的修饰(会使图像居中,img作为li的内容）;200无单位，（tangsay：标签属性里无单位，样式里才有）
```
<li align="center">
<img src="#" width=200>
</li>
```