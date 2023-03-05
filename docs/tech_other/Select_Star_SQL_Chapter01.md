---
title: "SQL学习 - Select Star SQL 01"
date: 2023-02-27T17:00:00+08:00
tags: ["SQL"]
draft: false
showToc: false
layout: doc
---
# SQL学习 - Select Star SQL 01

>If you'd like a more complete introduction to SQL, try Select Star SQL.  



解决完 SQL Murder Mystery 觉得还不过瘾（？），可以试试另一个学习网站：**[Select Star SQL](https://selectstarsql.com/)**


网址：https://selectstarsql.com/

---


## 用SQL算数
SQL还可以用作**计算器**？确实是可以的，而且不需要使用 FROM 关键字！：

![sql_image](https://nic-gz-1308403500.file.myqcloud.com/gruvbox/Select_Star_SQL_Chapter01-2023-02-27-17-27-09.png)

## 运算符

例子：

```sql
SELECT first_name,last_name,ex_age
FROM executions
WHERE ex_age <= 25;
```

## % 和 _ 通配符

使用 `LIKE` 关键字搭配 `%`和`_` 通配符，可以起到模糊查询的作用。

它俩的区别，主要是_更严格，例如：

## SQL的语法和结构

SQL是一种和数据（主要是table）打交道的语言，它包括：

- SQL关键字（如上文中的`SELECT`和`FROM`）
- 列名（如上文中的name列）
- 表名（如上文中的person表）
- 通配符（如`%`）
- 函数
- 筛选条件
- 等

## SQL关键字

- **SELECT**：从一个或多个数据库表中获取数据，允许指定要检索的列和要从中检索它们的表，也可以使用SUM、COUNT、AVG等函数执行计算和操作数据。
- **FROM**：选择相应的表格，如person表。
- **WHERE**：按特定条件过滤结果。
- **AND**：将多个过滤条件串在一起，只返回符合所有条件的行。
- **OR**：与AND类似，但返回符合任何条件的行。

## SQL运算

有时候并不需要FROM关键字，可以直接进行运算。

## % 和 _ 通配符

使用`LIKE`关键字搭配`%`和`_`通配符，可以进行模糊查询。

```sql
// B_b 可以匹配 Bob, Beb, ..

// B%b 不仅可以匹配 Bob或Beb，还可以匹配 Booob, 或 Bssjseb。
```

## 如何写注释

可以使用单行注释`--`和多行注释`/* ... */`。


```sql
-- 这是单行注释

/* 这是多行注释
看看啊
*/
```

## 当表的名字与关键字重复……？
可以使用反引号

In SQL, strings are denoted by single quotes. Backticks (ie **```**
) can be used to denote column and table names.

```sql
SELECT `from` FROM `where` WHERE ....
```