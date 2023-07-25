---
title: "Chapter 3 -The Long Tail"
layout: doc
---
# Chapter 3 - The Long Tail


## GROUP BY Block

写法：**`GROUP BY <column>, <column>, ...`**

它用于分组，跟在`WHERE`关键词后面。

```sql
SELECT
  county,
  COUNT(*) AS county_executions
FROM executions
GROUP BY county
```

`AS` 右边为左边的**别名，**一定程度上简化引用。

## HAVING Block

- `HAVING`：对`GROUP BY`之后的结果进行查询。
- `HAVING` 放在 `GROUP BY` 之后

> The `HAVING`clause was added to SQL because the `WHERE`
 keyword cannot be used with aggregate functions.
> 

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition
ORDER BY column_name(s);

-- 实战：
SELECT county 
FROM executions 
WHERE ex_age >= 50 
GROUP BY county
HAVING COUNT(*) > 2
```

## Nested Queries

`SELECT`语句可以嵌套使用，比如：

```sql
SELECT first_name, last_name
FROM executions
WHERE LENGTH(last_statement) =
    (SELECT MAX(LENGTH(last_statement))
     FROM executions)
```

选择列：first_name, last_name

从：executions表

符合的行：last_statement的长度 = (选择：最长的(遗言的长度))