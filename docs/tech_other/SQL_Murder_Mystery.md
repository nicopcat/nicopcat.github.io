---
title: "SQL学习 - SQL Murder Mystery"
date: 2023-02-27T16:00:00+08:00
tags: ["SQL"]
draft: false
showToc: false
layout: doc
---
# SQL学习 - SQL Murder Mystery
一直想学写SQL查询语句，有一天，我发现一个颇好玩的SQL学习网页：  
**SQL Murder Mystery**

这是由芝加哥西北大学Knight Lab开源的SQL学习网站，故事主题是一起凶杀案，学习者将使用SQL语句找出线索，锁定嫌疑人。

听起来挺带感的哈。

网站： https://mystery.knightlab.com/walkthrough.html

![web_img](https://nic-gz-1308403500.file.myqcloud.com/gruvbox/Lets_Learn_SQL_01-2023-02-27-16-47-41.png)

## Learning SQL To-do List
通过Notion的AI，试着生成了一份学习SQL的to-do list:
- [x]  Start with the basics of SQL, including syntax and structure.  
- [x]  Learn how to create and manipulate tables in a database using SQL commands.  
- [x]  Practice writing SQL queries to extract data from tables.  
- [x]  Understand how to use functions and operators in SQL commands.  
- [x]  Explore advanced SQL concepts, such as subqueries and joins.  
- [ ]  Learn how to use SQL to perform data analysis and generate reports.  
- [ ]  Practice using SQL in a real-world scenario, such as solving a murder mystery with SQL Murder Mystery.  
- [ ]  Challenge yourself to continually improve your SQL skills by taking on new projects and practicing regularly.  

 
## 基本概念
**SQL**: 

Structured Query Language， 是和数据（主要是table）打交道的一种语言。


**ERD**

**: Entity Relationship Diagram**, **实体关系图表**，表格展示的一种形式，另外两种是List和Detail

![schema](https://mystery.knightlab.com/schema.png)


**Primary Key:** 

Primary Key 是 SQL 表中用于唯一标识每个记录的列。它的值必须唯一且不能为 NULL。


**Foreign Key:**

Foreign Key是SQL表中的一种列属性，它指向了另一张表格中的Primary Key，用于表格之间的关联和连接。


## query 

**query是**从table中获取想要的数据的命令语句，包含

- SQL keywords (like the `SELECT` and `FROM` above)  
- Column names (like the name column above)  
- Table names (like the person table above)  
- Wildcard characters (such as `%`)  
- Functions  
- Specific filtering criteria  
- Etc  


## SQL Keywords
**SELECT:**

`SELECT <column>, <column>, ...`

SQL 的 SELECT 关键字用于从一个或多个数据库表中grab数据。它允许您指定要检索的列和要从中检索它们的表。您还可以使用 SELECT 关键字使用诸如 SUM、COUNT、AVG 等函数执行计算和操作数据。


**FROM：**

`FROM <table>`

选择相应的表格，如 person 表。当然也可以选择多个表，但需要 `JOIN` 关键字。


**WHERE：**

filter results by specific criteria.

例子：

```sql
SELECT * FROM person WHERE name = 'Kinsey Erickson'
```


**AND：**

string together multiple filtering criteria so that the filtered results meet each and every one of the criteria.


**OR：**

Same as AND, but returns rows that match any of the criteria

## 解谜环节
### 原始线索：

You vaguely remember that the crime was a **murder** that occurred sometime on **Jan.15, 2018** and that it took place in **SQL City**.

### 线索1：
Security footage shows that there were 2 witnesses. The first witness lives at **the last house** on **"Northwestern Dr"**. The second witness, named **Annabel**, lives somewhere on **"Franklin Ave"**.

想查看 住在 **"Franklin Ave"** 的 **Annabel**

```sql
SELECT *
FROM person
WHERE name = "Annabel" AND address_street_name = "Franklin Ave";

// No data returned
```

错误：**Annabel只是名字，要用模糊查找**

更正：

```sql
SELECT * FROM person WHERE name LIKE '%Annabel%'
```

找到第二证人Annabel的信息。

| id | name | license_id | address_number | address_street_name | ssn |
| --- | --- | --- | --- | --- | --- |
| 16371 | Annabel Miller | 490173 | 103 | Franklin Ave | 318771143 |

找到第一个证人：

```sql
SELECT * 
FROM person 
WHERE address_street_name = "Northwestern Dr" 
ORDER BY address_number 
DESC
LIMIT 10;
```

| id | name | license_id | address_number | address_street_name | ssn |
| --- | --- | --- | --- | --- | --- |
| 14887 | Morty Schapiro | 118009 | 4919 | Northwestern Dr | 111564949 |

## 3. Morty Schapiro证词

```sql
SELECT * 
FROM interview
WHERE person_id = "14887";
```

| person_id | transcript |
| --- | --- |
| 14887 | I heard a gunshot and then saw a man run out. He had a "Get Fit Now Gym" bag. The membership number on the bag started with "48Z". Only gold members have those bags. The man got into a car with a plate that included "H42W". |

## 4. Annabel Miller证词

| person_id | transcript |
| --- | --- |
| 16371 | I saw the murder happen, and I recognized the killer from my gym when I was working out last week on January the 9th. |

## 5. 调查 Get Fit Now Gym

```sql
SELECT * 
FROM get_fit_now_member gfnm 
JOIN get_fit_now_check_in gfnci
ON gfnm.id = gfnci.membership_id
WHERE id LIKE "48Z%"
AND membership_status = "gold"
AND check_in_date LIKE "201801%";
```

| id | person_id | name | membership_start_date | membership_status | membership_id | check_in_date | check_in_time | check_out_time |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 48Z7A | 28819 | Joe Germuska | 20160305 | gold | 48Z7A | 20180109 | 1600 | 1730 |
| 48Z55 | 67318 | Jeremy Bowers | 20160101 | gold | 48Z55 | 20180109 | 1530 | 1700 |

根据车牌查到两个嫌疑人

```sql
SELECT * 
FROM drivers_license
WHERE plate_number LIKE "%H42W%";
```

| id | age | height | eye_color | hair_color | gender | plate_number | car_make | car_model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 423327 | 30 | 70 | brown | brown | male | 0H42W2 | Chevrolet | Spark LS |
| 664760 | 21 | 71 | black | black | male | 4H42WR | Nissan | Altima |

| id | name | license_id | address_number | address_street_name | ssn |
| --- | --- | --- | --- | --- | --- |
| 67318 | Jeremy Bowers | 423327 | 530 | Washington Pl, Apt 3A | 871539279 |

初步锁定嫌疑人为Jeremy Bowers

## 5. Jeremy Bowers的供词

| person_id | transcript |
| --- | --- |
| 67318 | I was hired by a woman with a lot of money. I don't know her name but I know she's around 5'5" (65") or 5'7" (67"). She has red hair and she drives a Tesla Model S. I know that she attended the SQL Symphony Concert 3 times in December 2017. |

从演唱会得出两人：

**person_id为24556或99716**

| ssn | annual_income | id | name | license_id | address_number | address_street_name | ssn | id | age | height | eye_color | hair_color | gender | plate_number | car_make | car_model |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 987756388 | 310000 | 99716 | Miranda Priestly | 202298 | 1883 | Golden Ave | 987756388 | 202298 | 68 | 66 | green | red | female | 500123 | Tesla | Model S |
 

 此时，基本可以确定，嫌疑人Jeremy供词中的有钱BOSS就是这个id为310000的Miranda Priestly。