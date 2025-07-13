var length = 16; // 数字字面量赋值
var points = x * 10; //表达式字面量赋值
var lastName = "Johnson"; //String
var cars = ["Saab", "Volvo", "BMW"]; // Array
var person = {firstName:"John", lastName:"Doe"} // Object

document.getElementById("person").innerHTML = "hello World";

/*
多行注释
 */

/* 可以使用 var 来声明变量 用于函数作用域*/
var x=5;
var y=10;
var z=x+y;
/* 以字母或_或$开头 */

/* 使用 let 来定义 用于块级作用于域 */
let city = "beijing";
let age= 10;
console.log(city, age);

/* const 定义常量 不可重新赋值 */

/* JS值类型（基本数据类型）:
String、Number、Boolean、Null、Undefined、Symbol
引用数据类型（对象类型）：
Object, Array, Function
特殊对象：
RegExp正则, Date日期
 */

/* 查看变量数据类型 type of
typeof "John";
 */

/* JS 数组 */
var cars = new Array();
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";
/* 方式2: condensed array: */
var cars = new Array("Saab", "Volvo");
/* 方式3: Literal array */
var cars = ["Saab", "Volvo", "BMW"];

/* JS 对象 花括号分隔*/
var person={
    firstName:"Johnson",
    lastName:"Doe"}
/* 寻址方式 */
name = person.lastName;
name = person["lastName"];

/* Undefined、Null
Undefined这个值表示变量不含有值
设置Null来清空变量 */
cars=null;
person=null;

/* 变量声明类型 */
var carname = new String;
var x = new Number;
var y = new Boolean;
var cars = new Array;
var person = new Object;


/* JavaScript 对象
JavaScript对象是拥有属性和方法的数据
对象｜属性｜方法
 */
var car = {name:"Fiat", model:500, color:"white"};

/* 对象定义 */
var person = {
    firstName:"Johnson",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"};

/* 对象属性 */
lastName = person.lastName;
lastName = person["lastName"];

/* 对象方法
ObjectName.methodName()*/


/* 向未声明的JavaScript变量分配值
该变量将被自动作为window的一个属性
 */


/* HTML中的全局变量
    HTML中，全局变量是window对象
    所以window对象可以调用函数内的未声明（未加var）的局部变量
    所有全局变量都属于window对象
 */

var attribute1; /* 全局变量 */
attribute2 = 1; /* 全局属性，即window属性*/

/* 在作用域内，变量可以暂时覆盖 */
/* 闭包
    允许内部函数访问外部函数的局部变量
    即使外部函数执行完成后，
    其局部变量仍然可以被内部函数引用
 */


/* JavaScript事件
*   HTML事件是发生在HTML元素上的事情
*   当在HTML页面中使用JavaScript时，
*   JavaScript可以触发这些事件*/

/* HTML事件 可以是浏览器行为 也可以是用户行为
    HTML页面完成加载
    HTML input字段改变时
    HTML按钮被点击
 */

/* 在HTML元素中添加事件属性
单引号：<some-HTML-element some-event='JavaScript代码'>
双引号：<some-HTML-element some-event="JavaScript代码'>
 */

/* 常见HTML事件
    onchange HTML元素改变
    onclick 用户点击HTML元素
    onmouseover 鼠标指针移动到指定的元素上时发生
    onkeydown 用户按下键盘按键
    onload 浏览器已完成页面的加载
 */


/* JS字符串
*   字符串有索引
*   字符串长度string.length*/

/* 字符串属性
    constructor 返回创建字符串属性的函数
    length 返回字符串的长度
    prototype 允许您向对象添加属性和方法
 */

/* JavaScript 模板字符串 ``*/


/*  JavaScript运算符
    字符串也可以用+连接
    如果把数字与字符串相加，结果将是字符串
 */


/* JavaScript比较和逻辑运算符
    == 等于
    === 绝对等于（值和类型都相等）
    != 不等于
    !== 严格不等于（值和类型有一个不想等即不想等）
    >
    <
    >=
    <=
 */

/* 逻辑运算符
* && and
* || or
* ! not
* */

/* 条件运算符
    (condition)?value1:value2
 */


/* 条件语句
if (condition){

}
else if (condition){

}
else{

}
 */

/* switch 语句
switch(n){
case 1:
    ...
    break;
case 2:
    ....
    break;
default:
    所有都不匹配时的执行结果
}
 */


/* JS循环
    for 循环代码块一定的次数
    for/in 循环遍历对象的属性
    while 当指定条件为true时循环指定的代码
    do/while 同样当指定条件为true时循环指定代码
 */

/* JS标签
通过标签引用，break可以跳出多个循环
 */
outerloop:
    for (var i = 0; i < 10; i++)
    {
        innerloop:
            for (var j = 0; j < 10; j++)
            {
                if (j > 3)
                {
                    break;
                }
                if (i == 2)
                {
                    break innerloop;
                }
                if (i == 4)
                {
                    break outerloop;
                }
                document.write("i=" + i + " j=" + j + "");
            }
    }


/* JavaScript typeof */
/* 返回值类型：
undefined 未定义
boolean 布尔值
number 数字类型
string 字符串
object 对象、数组、null
function 函数
symbol ES6新增符号类型
bigint ES2020新增大整数类型
 */

/* null和undefined的值相等，但是类型不等 */


/* JS数据类型
6种数据类型：string，number，boolean，object，function，symbol
3种对象类型：Object，Date，Array
2个不包含任何值的数据类型：null，undefined
 */

/* constructor属性返回所有JavaScript变量的构造函数
*   也可用于判断JS变量类型*/

/* JS类型转换
String() 转换成字符串
 */

/* Number()
数字转换为数字
空字符串转换为0
其他字符串转换为NaN
 */

/* 一元运算符
+可以用于将变量转换为数字
 */

/* 自动转换类型
5 + null 返回 5
"5" + null 返回“5null”
"5" + 1 返回“51”
"5" - 1 返回4
 */

/* toString() 自动转换为字符串 */


/* JavaScript正则表达式 */
/* 正则表达式通常用于两个字符串方法：
    search()
        用于检索字符串中指定的子字符串
        或检索与正则表达式相匹配的子字符串
        并返回子串的起始位置
    replace()
        用于在字符串中用一些字符串替换另一些字符串，
        或替换一个与正则表达式匹配的子串。
 */

/* search()方法使用正则表达式 */
var str = "Visit Runoob!";
var n = str.search(/Runnoob/i);
// return 6

// search() 方法使用字符串
var str = "Visit Runoob!";
var n =  str.search("Runoob");
// 字符串参数会转换为正则表达式

// replace方法使用正则表达式
var str = document.getElementById("demo").innerHTML;
var txt = str.replace(/microsoft/i,"Runoob");
// 将不区分大小写把Microsoft替换为Runoob

// replace方法使用字符串
var str = document.getElementById("demo").innerHTML;
var txt = str.replace("Microsoft","Runoob");

// 正则表达式代替字符串使得搜索功能更加强大。

/* 正则表达式修饰符
i：执行对大小写不敏感的匹配
g：执行全局匹配 查找所有匹配而非在找到第一个匹配后停止
m：执行多行匹配
 */

/* 正则表达式模式
[abc] 查找方括号之间的任何字符
[0-9] 查找任何从0至9的数字
(x|y) 查找任何以｜分隔的选项
\d 查找数字
\s 查找空白字符
\b 匹配单词边界
\uxxxx 查找以16进制数xxxx规定的Unicode字符
n+ 匹配任何包含至少一个n的字符串
n* 匹配任何包含零个或多个n的字符串
n? 匹配任何包含零个或一个n的字符串
 */

// 使用RegExp对象
// RegExp对象是一个预定义了属性和方法的正则表达式对象

// 使用test() 正则表达式方法
/* 用于检测一个字符串是否匹配某个模式
    如果字符串中含有匹配的文本 则返回true 否则返回false
 */
var patt = /e/;
patt.test("The best things in life are free!");
// 相同的效果
/e/.test("The best things in life are free!")

/* 使用exec() 正则表达式方法
    用于检索字符串中的正则表达式的匹配
    该函数返回一个数组，其中存放匹配的结果
    若未找到匹配，则返回为null
 */


/* Js 错误
try语句测试代码块的错误
catch语句处理错误
throw语句创建自定义错误
finally 无论是否有触发异常该语句都会执行
 */


/* JavaScript调试
* console.log()打印JavaScript的值
* 调试窗口设置断点
* debugger关键字，与设置断点的效果相同*/


/* JavaScript声明提升：变量可以在使用后声明
    初始化不会提升，只有声明的部分会提升
 */


/* JavaScript严格模式 use strict
    即在严格的条件下运行
 */
// 通过在脚本或函数的头部添加use strict表达式来声明

/* 为什么使用严格模式
    消除语法的一些不合理、不严谨之处，减少一些怪异行为
    消除代码运行的一些不安全之处，保证代码运行的安全
    提高编译器效率，增加运行速度
    为未来新版本的JavaScript做好铺垫
 */

/* 严格模式具体要求
    不允许使用未声明的变量，包括对象
    不允许删除变量或对象
    不允许删除函数
    不允许变量重名
    不允许使用八进制
    不允许使用转义字符
    不允许对只读属性赋值
    不允许对一个使用getter方法读取的属性进行赋值
    不允许删除一个不允许删除的属性
    变量名不能使用eval字符串
    变量名不能使用arguments字符串
    在作用域eval()创建的变量不能被调用
 */


/* JavaScript 表单
表单验证
数据验证
约束验证
 */