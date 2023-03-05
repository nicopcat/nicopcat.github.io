---
title: "Git拉取远程分支到本地的方法"
date: 2022-06-18T01:00:00+08:00
# lastmod: 2022-03-03T12:29:00+08:00
draft: false
showToc: false
tags: ["Git"]
layout: doc

---
# Git 拉取远程分支到本地的方法
假设这个仓库已经跟远程仓库关联，但只拉取到 main 分支，且目前 checkout 在 main 分支。  

# 查看远程仓库中的所有分支
```
git branch -r
```
<img src="https://nic-gz-1308403500.file.myqcloud.com/posts/git-remote-branch-2022-06-18-01-14-03.png" width="450px">

# 将远程分支拉取到本地(fetch)
```
git fetch origin dev（dev为远程仓库的分支名）
```

# 在本地创建分支 dev 并切换到该分支
```
git checkout -b dev origin/dev
```

# 将某个分支拉取并合并到本地(pull)
```
git pull origin dev
```

![git-pics](https://nic-gz-1308403500.file.myqcloud.com/posts/git-remote-branch-2022-06-18-01-20-21.png)