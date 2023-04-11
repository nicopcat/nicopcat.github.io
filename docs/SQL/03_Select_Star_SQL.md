---
title: "Chapter 2 - Claims of Innocence"
date: 2023-02-27T17:00:00+08:00
tags: ["SQL"]
draft: false
showToc: false
layout: doc
---
# Chapter 2 - Claims of Innocence


### The COUNT Function

**`COUNT(<column>)`**
 returns the number of **non-null rows** in the column.

### Nulls

`NULL` 意为 空，`0` 或 `“”` 都不属于 NULL。

结合COUNT查找非空的Columns：

```sql
SELECT COUNT(*) FROM 某一张表
```

使用 **`IS`** and **`IS NOT`而不是**  **`=`** and **`!=` 来检查空或非空。**

**CASE WHEN语句**

```sql
CASE
    WHEN <clause> THEN <result>
    WHEN <clause> THEN <result>
    ...
    ELSE <result>
END
```

例子：

```sql
SELECT
    COUNT(
	  CASE 
	  	WHEN county='Harris' THEN 1
      	ELSE NULL 
	  END),
    COUNT(
	  CASE 
	  	WHEN county='Bexar'  THEN 1
        ELSE NULL 
	  END)
FROM executions
```

| COUNT( CASE WHEN county='Harris' THEN 1 ELSE NULL END) | COUNT( CASE WHEN county='Bexar' THEN 1 ELSE NULL END) |
| --- | --- |
| 128 | 46 |

### DISTINC

选择不重复的Column

```sql
SELECT DISTINCT county FROM executions
```