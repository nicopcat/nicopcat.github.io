---
layout: doc
title: Vue 过渡动画效果
---
# Vue 过渡动画效果
一般来说，动画可以由CSS完成，Vue也提供了一系列帮助过渡和动画的工具。

# 仅用CSS控制动画
## 直接定义属性
假设有一个正方形block。
动画效果：.5秒后，向左移动80像素，背景颜色变为royalblue:
```css
.animate {
  background-color: royalblue;
  transform: translateX(-80px);
  transition: all 0.5s ease-out;
}
```
效果：
![squere-animation-1](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-1.gif)


## 使用animation + @keyframes实现复杂的动画效果
用`@keyframes`可以实现动画在不同帧数时的表现
``` css
.animate {
  animation: slide-scale 2.8s ease;
}

@keyframes slide-scale {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-120px);
    background-color: royalblue;
  }
  50% {
    transform: translateX(0px);
    background-color: limegreen;
  }
  75% {
    transform: translateX(120px);
    background-color: lightgreen;
  }

  100% {
    transform: translateX(0px);
    background-color: orange;
  }
}
```
效果：
![squere-animation-2](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-2.gif)


## 单元素/组件的过渡
用`<transition></transition>`包裹目标元素或组件，可以添加进入或离开过渡效果
- 条件渲染 (使用 v-if)
- 条件展示 (使用 v-show)
- 动态组件
- 组件根节点
- 被`<transition>`包裹的组件或元素，只可以有一个direct child element （除了一个例外）

### Vue 提供的几个过渡 class
在进入/离开的过渡中，会有 6 个 class 切换。

**进入过渡class**
1. `v-enter-from`: 定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。
2. `v-enter-active`: 定义进入过渡生效时的状态。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。
3. `v-enter-to`：定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 v-enter-from 被移除)，在过渡/动画完成之后移除。

**离开过渡class**

4. `v-leave-from`:定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。
5. `v-leave-active`:定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。
6. `v-leave-to`:离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 v-leave-from 被移除)，在过渡/动画完成之后移除。

![20220305005421](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/20220305005421.png#center)

注意：如果没有在`<transition>`组件里指定`name`属性，那么以上列举的就是默认的class名；但如果指定了`name`属性，假设`name="para"`，那么上述过渡class需要把前缀修改一下，如`.para-enter-from`。

### CSS 过渡
例子：
```html
<div class="container">
    <button @click="togglePara">Toggle Paragraph</button>
    <transition name="para">
      <p v-if="papaIsVisible">Visible or not?</p>
    </transition>
</div>
```

```css
.para-enter-from,
.para-leave-to {
  opacity: 0;
}
.para-enter-active {
  transition: all 1s ease;
}

.para-leave-active {
  transition: all 1s ease;
}

.para-enter-to,
.para-leave-from {
  opacity: 1;
}
```

效果:
![squere-animation-3](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-3.gif#center)

也可以把`.para-enter-from`,`.para-leave-to`等省略，而定义一个`@keyframes`函数，在`para-leave-active`内写成animation的形式：
```css
.para-enter-active {
  animation: para 1s ease-out;
}

.para-leave-active {
  animation: para 1s ease-in reverse;
}

@keyframes para {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

### 自定义过渡 class 类名

如果想引入第三方动画库，需要更改class name，可以用指定`enter-to-class="自定义值"`
Vue官网举出的例子：
```html
<transition
  name="custom-classes-transition"
  enter-active-class="animate__animated animate__tada"
  leave-active-class="animate__animated animate__bounceOutRight"
>
```

### JavaScript 钩子
可以完全使用JavaScript写动画，而不需要任何的CSS，需要 Vue 中的JavaScript 钩子来完成。

可以在 attribute 中声明 JavaScript 钩子：
```html
<div class="container">
    <button @click="togglePara">Toggle Paragraph</button>
    <transition
      name="para"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
      :css="false"
    >
      <p v-if="papaIsVisible">Visible or not?</p>
    </transition>
</div>
```
钩子自带一个`el`参数，将`el`打印，结果是被`<transition>`组件包裹的元素。  
如`<p class="">Visible or not?</p>`


下面是一个例子
```javascript
export default {
  methods: {
      // 定义进入之前的过渡效果
      beforeEnter(el) {
          console.log('beforeEnter');
          console.log(el);
          el.style.opacity = 0;
          },

      // 定义进入时的过渡效果
      // 使用了一个enterInterval控制opacity的渐变效果
      // done是一个提示Vue，该动画已经完成的回调函数
      enter(el, done) {
          console.log('enter');
          let round = 1;
          this.enterInterval = setInterval(() => {
              el.style.opacity = round * 0.05;
              round++;
              if (round > 20) {
              clearInterval(this.enterInterval);
              done();
              }
          }, 20);
          },

      // 定义进入后的过渡效果
      afterEnter(el) {
          console.log('afterEnter');
          console.log(el);
  }
}
```

注意：
> 当只用 JavaScript 过渡的时候，在 `enter` 和 `leave` 钩子中**必须**使用 done 进行回调。否则，它们将被同步调用，过渡会立即完成。

## 多个元素之间的过渡
可以通过 `v-if`/`v-else` 来完成元素之间的过渡。

### 过渡模式
由于`<transition>`的默认行为——进入和离开同时发生，非常可能会造成进入和离开动画同时被render的可能。Vue提供了一个非常好用的工具，叫**过渡模式**来防止这样的事情发生。
- in-out: 新元素先进行进入过渡，完成之后当前元素过渡离开。
- **out-in(最常用): 当前元素先进行离开过渡，完成之后新元素过渡进入。**

我觉得这个动画的顺序就像乘坐电梯一样，得先让里面的人出来，再让外面的人进去，这样才能保证有序。

- 当我们**没有使用**过渡模式时，动画的效果：
![squere-animation-4](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-4.gif#center)

这个效果看起来并不是很聪明👆。

- 当我们**使用了**过渡模式时，动画的效果：
![squere-animation-5](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-5.gif#center)

显然，后者更符合渐进消失的动画要求。

## 多个组件之间的过渡
直接用  `<transition></transition>` 包裹住动态组件即可。
Vue官网举出的例子：
```html
<div id="demo">
  <input v-model="view" type="radio" value="v-a" id="a"><label for="a">A</label>
  <input v-model="view" type="radio" value="v-b" id="b"><label for="b">B</label>
  <transition name="component-fade" mode="out-in">
    <component :is="view"></component>
  </transition>
</div>
```

## 列表过渡

在使用 `v-for` 的场景下，我们可以使用 `<transition-group>` 组件。在我们深入例子之前，先了解关于这个组件的几个特点：

- 默认情况下，它不会渲染一个包裹元素，但是你可以通过 tag attribute 指定渲染一个元素。
- 过渡模式不可用，因为我们不再相互切换特有的元素。
- 内部元素总是需要提供唯一的 key attribute 值。
- CSS 过渡的类将会应用在内部的元素中，而不是这个组/容器本身。

### 列表的移动过渡
其实很简单，用`<transition-group>`把渲染的列表一包裹就行了，也要注意，包裹的根元素只能有一个，否则不起作用。

例子：
有这样一个简单的用户列表，可以增加和删掉用户：
```html
<template>
  <transition-group tag="ul" name="list">
    <li v-for="user in userList" :key="user" @click="removeUser(user)">
      {{ user }}
    </li>
  </transition-group>
  <div>
    <input type="text" ref="userNameInput" />
    <button @click="addUser">Add a user</button>
  </div>
</template>
```
在使用过渡动画之前，增加或删除的表现都是非常生硬的：
![squere-animation-6](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-6.gif)

但若使用了过渡动画，情况会改观非常多。
```css
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.list-enter-active {
  transition: all 0.8s ease-in;
}

.list-leave-active {
  transition: all 0.8s ease-out;
  position: absolute;
}

.list-enter-to,
.list-leave-from {
  opacity: 1;
  transform: translateX(0px);
}

.list-move {
  transition: transform 0.8s ease;
}
```
效果如下：
![squere-animation-7](https://blogpic-1308403500.cos.ap-shanghai.myqcloud.com/markdown/squere-animation-7.gif)

### 列表的移动过渡
`<transition-group>`组件还有一个特殊之处。除了进入和离开，它还可以为定位的改变添加动画。只需了解新增的 `v-move` 类就可以使用这个新功能，它会应用在元素改变定位的过程中。像之前的类名一样，它的前缀可以通过 name attribute 来自定义，也可以通过 move-class attribute 手动设置。
```css
/* 添加 v-move */
.user-list-move {
  transition: transform 0.8s ease;
}
```


