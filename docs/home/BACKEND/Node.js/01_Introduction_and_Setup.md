---
layout: doc
title: 1 - Introduction & Setup
---

# 1 - Introduction & Setup
## Computer and machine code

编程语言有很多，从下到上，最底层的叫机器码(machine code)，也就是0101001。我觉得很神奇，仅仅两个数字就可以变化出这么多花样。

总之，计算机只听得懂0和1的呼唤。

那么从机器码越往上，机器就越听不懂了，反倒是人越来越容易理解，我们把贴近机器码的语言称为底层一些的语言，在往上就是高级语言。

咱们被诟病的JavaScript再怎么不严谨，也是一门“高级语言”，因为它相当说人话。

上一篇文章提到，Node.js是一种基于Chrome V8 JavaScript引擎构建的开源服务器端运行环境。这个Chrom是浏览器，V8则是谷歌开发的一套引擎，用来把高级语言编译（俗称翻译）成底层语言，简单来说，就是把外语翻译成机器语，计算机才可以执行命令。

Node.js是C++写的，后者也是相对底层的语言。底层语言的好处就是执行速度很快。

Node.js是一个**运行环境**，供JavaScript语言运行。想象Node.js是一间工厂，里面有台叫V8的厉害机器，把JavaScript这个高等食材剁碎切块，最后喂给马吃，马才能动起来干活。

--- 

除了翻译工作，Node.js也具有服务器(server)该有的一些功能：读写文件，连接数据库等等。

相应地，因为在服务端工作，Node.js舍弃掉了一些原本可以在浏览器中使用的属性，例如无法操作DOM。

## what i will learn from this course
- How to install node
- How to read & write filrs on my computer
- How to create a server using Node.js to create a website
- How to create an Express app/website
- How to use MongoDB(a NoSQL database)
- How to use template engines to easily create HTML views
- Put everything together to make a simple blog site

## install
去官网安装Node即可。