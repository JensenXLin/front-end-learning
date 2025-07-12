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