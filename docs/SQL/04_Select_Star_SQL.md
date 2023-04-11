---
title: "Chapter 4 - Execution Hiatuses"
layout: doc
---
# Chapter 4 - Execution Hiatuses


# JOIN

JOIN是一个把多个表拼在一起的关键字。

有以下几种类型：

- `(INNER) JOIN`: Returns records that have matching values in both tables
- `LEFT (OUTER) JOIN`: Returns all records from the left table, and the matched records from the right table
- `RIGHT (OUTER) JOIN`: Returns all records from the right table, and the matched records from the left table
- `FULL (OUTER) JOIN`: Returns all records when there is a match in either left or right table
    
   
    

可以理解为，LEFT或RIGHT的表，保留更多的数据(unmatched)，另外一边的为空；OUTER则保留两边

### INNER JOIN

JOIN默认为“INNER JOIN”, in which unmatched rows are dropped.

 ![img_innerjoin.gif](https://www.w3schools.com/sql/img_innerjoin.gif)

### LEFT JOIN

To preserve all the rows of the left table, we use a **`LEFT JOIN`**
 in place of the vanilla **`JOIN`.**The empty parts of the row are left alone, which means they evaluate to **`NULL`**.

![join_left.png](https://www.w3schools.com/sql/img_leftjoin.gif)

### **RIGHT JOIN**

can be used to preserve unmatched rows in the right table,
![join_left.png](https://www.w3schools.com/sql/img_rightjoin.gif)
### **OUTER JOIN**

can be used to preserve unmatched rows in both.
![join_left.png](https://www.w3schools.com/sql/img_fulljoin.gif)
# Dates

日期的形式根据数据库类型稍有不同：

**MySQL** comes with the following data types for storing a date or a date/time value in the database:

- `DATE` - format YYYY-MM-DD
- `DATETIME` - format: YYYY-MM-DD HH:MI:SS
- `TIMESTAMP` - format: YYYY-MM-DD HH:MI:SS
- `YEAR` - format YYYY or YY

**SQL Server** comes with the following data types for storing a date or a date/time value in the database:

- `DATE` - format YYYY-MM-DD
- `DATETIME` - format: YYYY-MM-DD HH:MI:SS
- `SMALLDATETIME` - format: YYYY-MM-DD HH:MI:SS
- `TIMESTAMP` - format: a unique number

而且，有一些数据库支持日期相减！

wait what ??

比如[教程](https://www.sqlite.org/lang_datefunc.html)使用的SQLite，就有俩特定的写法`julianday`和`unixepoch`。

```sql
SELECT JULIANDAY('1993-08-10') - JULIANDAY('1989-07-07') AS day_difference

-- 返回天数： 1495
```

# Self Joins

A powerful technique for allowing rows to get information from other parts of the same table.

## ref

1. [Select Star SQL - hiatuses](https://selectstarsql.com/hiatuses.html)

2. [SQL Joins - w3schools](https://www.w3schools.com/sql/sql_join.asp)