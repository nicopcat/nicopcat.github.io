---
title: "Git使用笔记"
date: 2022-03-21T12:29:00+08:00
# lastmod: 2022-03-03T12:29:00+08:00
draft: false
showToc: false
tags: ["Git"]
layout: doc

---
# Git使用笔记

最近发现了一个非常有意思的网站，Github 标星 24.1k。趣味的交互式体验以及丰富的视觉化效果，让学 Git 变得非常轻松。

跟 Git 打过交道的朋友，大概都受过不少的苦，Git 流程不仅概念比较抽象，命令也繁多，让人头大。报错时，我通常就 Google 一下，问题貌似暂时解决了，但这背后的原理还是一知半解的，下次说不定还会发生。这个网站又给了我掌握 Git 的决心！

学习地址：[LearnGitBranching](https://learngitbranching.js.org)  
Github 地址：[LearnGitBranching](https://github.com/pcottle/learnGitBranching)

下面是一些笔记~

# 基础篇

循序渐进地介绍 Git 主要命令

## 1. Git Commit 与 Git Branch

Git 的分支也非常轻量。它们只是简单地指向某个提交纪录 —— 仅此而已。所以许多 Git 爱好者传颂：

> 早建分支！多用分支！

1. 提交分支

```
git commit <branch>
```

2. 切换到新的分支

```
git checkout <branch>
```

3. 如果你想创建一个新的分支同时切换到这个新创建的分支

```
git checkout -b <your-branch-name>
```

> Git 2.23 版本中，引入了一个名为 git switch 的新命令，最终会取代 git checkout，因为 checkout 作为单个命令有点超载（它承载了很多独立的功能）。

## 2. Git Merge

假设有需要一个 bugFix 分支：

```
// 新建并切换到bugFix分支
git checkout -b bugFix

// 保存修改
git commit

// 回到main branch
git checkout main

// 保存修改
git commit
```

将 bugfix `merge`到当前分支 main

```
git merge bugfix
```

## 3. Git Rebase

第二种合并分支的方法是 `git rebase`。Rebase 实际上就是取出一系列的提交记录，“复制”它们，然后在另外一个地方逐个的放下去。

Rebase 的优势就是可以创造更线性的提交历史，这听上去有些难以理解。如果只允许使用 Rebase 的话，代码库的提交历史将会变得异常清晰。

![20220323005810](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323005810.png#center)

假设有一个 bugFix 分支，想要 rebase 到 main 分支上：

```
git checkout bugFix
git rebase main
```

或是直接写：

```
git rebase main bugFix
```

![20220323005612](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323005612.png#center)

---

Evan You 都在推荐多用 rebase 哟
![20220323205925](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323205925.png#center)

# 高级篇

要开始介绍 Git 的超棒特性了，快来吧！

## 1. 分离 HEAD

HEAD 是一个对当前检出记录的符号引用 —— 也就是指向你正在其基础上进行工作的提交记录。

HEAD 总是指向当前分支上最近一次提交记录。大多数修改提交树的 Git 命令都是从改变 HEAD 的指向开始的。

HEAD 通常情况下是指向分支名的（如 bugFix）。在你提交时，改变了 bugFix 的状态，这一变化通过 HEAD 变得可见。分离的 HEAD 就是让其指向了某个具体的提交记录而不是分支名。

### git log

通过指定提交记录哈希值的方式在 Git 中移动不太方便。在实际应用时，并没有像本程序中这么漂亮的可视化提交树供你参考，所以你就不得不用 git log 来查查看提交记录的哈希值。

比较令人欣慰的是，Git 对哈希的处理很智能。你只需要提供能够唯一标识提交记录的前几个字符即可。因此我可以仅输入 fed2 而不是上面的一长串字符。

## 2. 相对引用\(^)

通过哈希值指定提交记录很不方便，所以 Git 引入了**相对引用**。这个就很厉害了!

介绍两个简单的用法：

- 使用 ^ 向上移动 1 个提交记录,表示让 Git 寻找指定提交记录的父提交。
  - `main^` 相当于 `main` 的父节点。
  - `main^^` 是 `main` 的第二个父节点。
  - 可以一直使用 `git checkout HEAD^` 向上移动。
- 使用 \~<num> 向上移动多个提交记录，如 \~3

## 3. 两个父节点

操作符 ^ 与 ~ 符一样，后面也可以跟一个数字。

但是该操作符后面的数字与 ~ 后面的不同，并不是用来指定向上返回几代，而是指定合并提交记录的某个父提交。

Git 默认选择合并提交的“第一个”父提交，在操作符 ^ 后跟一个数字可以改变这一默认行为。

假设有这么这么一个提交流程图，如果只是单纯滴使用

```
git checkout main^
```

HEAD 会回到第一个父提交记录，也就是`C1`
![20220323185528](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323185528.png#center)

但如果在^后增加一个数字，情况就不一样了：它会选择另外一个父提交记录。

```
git checkout main^2
```

![20220323185857](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323185857.png#center)
瞧，居然绕远路来到了 C2 这个父提交。

### 链式操作

Git 还允许你使用链式操作，省去一步步操作的麻烦：
![20220323190016](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323190016.png#center)

考题：如果使用下面这个链式操作，会回到哪个分支呢？

```
git checkout HEAD~^2~2
```

答案是（刮开可看）：<span style="color:transparent">C3</span>

### 直接使用 `-f` 让分支指向另一个提交

将 main 分支强制指向 HEAD 的第 3 级父提交:

```
git branch -f main HEAD~3
```

## 4. 撤销更改

在 Git 里撤销变更的方法很多。和提交一样，撤销变更由底层部分（暂存区的独立文件或者片段）和上层部分（变更到底是通过哪种方式被撤销的）组成。我们这个应用主要关注的是后者。

主要有两种方法用来撤销变更 —— 一是 `git reset`，还有就是 `git revert`。

`git reset`: 对远程分支的更改是无效的  
`git revert`: 提交一个新的更改，然后同步到远程仓库

```
// 假设正在local分支
git rest HEAD^  // 回退local本地分支所有内容到上一个版本
git checkout pushed
git revert HEAD // 回退pushed远程分支所有内容到上一个版本
```

# 移动提交记录

## 1. Git Cherry-pick

如果你想将一些提交复制到当前所在的位置（HEAD）下面的话，可以用 Cherry-pick 命令。

```
git cherry-pick <提交号>...
```

这里有一个仓库, 我们想将 side 分支上的工作复制到 main 分支，你立刻想到了之前学过的 rebase 了吧，也可以很方便地用 cherry-pick 指令实现。

![20220323134949](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323134949.png#center)

```
git cherry-pick c2 c4
```

我们只需要提交记录 C2 和 C4，所以 Git 就将被它们抓过来放到当前分支下了.
![20220323135043](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323135043.png#center)

## 2. 交互式 rebase

但是如果你不清楚你想要的提交记录的哈希值呢? 幸好 Git 帮你想到了这一点, 我们可以利用交互式的 `rebase` —— 如果你想从一系列的提交记录中找到想要的记录, 这就是最好的方法了。

交互式 `rebase` 指的是使用带参数 `--interactive` 的 `rebase` 命令, 简写为 `-i`

如果你在命令后增加了这个选项, Git 会打开一个 UI 界面并列出将要被复制到目标分支的备选提交记录，它还会显示每个提交记录的哈希值和提交说明，提交说明有助于你理解这个提交进行了哪些更改。

当 rebase UI 界面打开时, 你能做 3 件事:

1. 调整提交记录的**顺序**（通过鼠标拖放来完成）
2. **删除**你不想要的提交（通过切换 `pick` 的状态来完成，关闭就意味着你不想要这个提交记录）
3. **合并**提交

例如：

```
git rebase -i HEAD~4  // 执行更改前四个提交记录：采纳与否和它们的顺序
```

`rebase -i`： 表示大概 rebase interactive 界面，然后开始拖拽。  
`HEAD~4`： 表示拖拽的对象为该提交往上的四个父提交。

# 杂项

Git 技术、技巧与贴士大集合

## 1. 只取一个提交记录

### 本地栈式提交

来看一个在开发中经常会遇到的情况：我正在解决某个特别棘手的 Bug，为了便于调试而在代码中添加了一些调试命令并向控制台打印了一些信息。

这些调试和打印语句都在它们各自的提交记录里。最后我终于找到了造成这个 Bug 的根本原因，解决掉以后觉得沾沾自喜！

最后就差把 bugFix 分支里的工作合并回 main 分支了。你可以选择通过 fast-forward 快速合并到 main 分支上，但这样的话 main 分支就会包含我这些调试语句了。你肯定不想这样，应该还有更好的方式……

实际我们只要让 Git 复制解决问题的那一个提交记录就可以了。跟之前我们在“整理提交记录”中学到的一样，我们可以使用

```
git rebase -i
git cherry-pick
```

来达到目的。

### 更改最近一次 git commit

```
git commit --amend
```

## 2. Git Tag

Git 的 tag 可以（在某种程度上 —— 因为标签可以被删除后重新在另外一个位置创建同名的标签）永久地将某个特定的提交命名为里程碑，然后就可以像分支一样引用了。

它们并不会随着新的提交而移动。你也不能切换到某个标签上面进行修改提交，它就像是提交树上的一个锚点，标识了某个特定的位置。

先建立一个标签，指向提交记录 C1，表示这是我们 1.0 版本：

```
git tag v1 c1
```

## 3. Git Describe

由于标签在代码库中起着“锚点”的作用，Git 还为此专门设计了一个命令用来描述离你最近的锚点（也就是标签），它就是 git describe！

Git Describe 能帮你在提交历史中移动了多次以后找到方向；当你用 git bisect（一个查找产生 Bug 的提交记录的指令）找到某个提交记录时，或者是当你坐在你那刚刚度假回来的同事的电脑前时， 可能会用到这个命令。

`git describe` 的 ​​ 语法是：

```
git describe <ref>
```

`<ref>` 可以是任何能被 Git 识别成提交记录的引用，如果你没有指定的话，Git 会以你目前所检出的位置（HEAD）。

它**输出的结果**是这样的：

```
<tag>_<numCommits>_g<hash>
```

`tag` 表示的是离 `ref` 最近的标签， `numCommits` 是表示这个 `ref` 与 `tag` 相差有多少个提交记录， `hash` 表示的是你所给定的 `ref` 所表示的提交记录哈希值的前几位。

当 ref 提交记录上有某个标签时，则只输出标签名称。

来看一下这个例子。
![20220323215900](https://blogpic-1308403500.file.myqcloud.com/markdown/20220323215900.png#center)

`git describe main` 会输出（刮开可看）：<span style="color:transparent">v1_2_gC2</span>  
`git describe side` 会输出（刮开可看）：<span style="color:transparent">v2_1_gC4</span>

# git 初阶使用

## 用户名以及邮箱配置

在操作之前，最好先设置这两个参数，输入：

```
git config --global user.name "Your Name Comes Here"
git config --global user.email you@yourdomain.example.com
```

## 将项目纳入 git 的管理

```
tar xzf project.tar.gz
cd project
git init
```

当看到`Initialized empty Git repository in .git/`时，说明成功初始化 git。

将文件夹内的内容已快照的形式保存在当前的 directory:

```
git add .
```

现在，快照保存在暂时的 staging 区，git 管它叫"index". 若要永久储存 index 的内容，输入：

```
git commit
```

## 做一些修改

假设你修改了一些文件，它们 `add`到 index:

```
git add file1 file2 file3
```

使用 diff 指令查看哪些地方将被执行 commit：

```
git diff --cached
```

(如果不加`---cached`，`git diff`将现实所有修改，无论你有没有将它们`add`到`index`中。)

或用`git staus`查看 git 的工作状态。

```
git status
On branch master
Changes to be committed:
Your branch is up to date with 'origin/master'.
  (use "git restore --staged <file>..." to unstage)

	modified:   file1
	modified:   file2
	modified:   file3
```

继续修改文件吧。完成修改后，你可以再次用`git add `然后`git commit`，你也可以选择执行：

```
git commit -a
```

这个操作会将任何修改的文件，先`add`到`index`，然后一起`commit`，很方便的捷径。

# 其他使用

## git 修改远程仓库地址

1. 直接修改

```
git remote set-url origin [url]
```

2. 先删后加

```
git remote rm origin
git remote add origin [url]
```

3. 不想要远程仓库的内容了，运行强制 push:

```
git push -u origin main -f
```

4. 如果出现报错：

```
fatal: refusing to merge unrelated histories error.
```

可以使用以下指令强制合并无关的分支：

```
git pull origin master --allow-unrelated-histories
```
