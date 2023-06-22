---
layout: doc
title: 把jeecg j-date改造成年份选择器
editLink: true
head:
  - - meta
    - name: 把jeecg j-date改造成年份选择器
      content: 把jeecg j-date改造成年份选择器
  - - meta
    - name: keywords
      content: jeecg vue j-date year-selector
---
# {{ $frontmatter.title }}

这个组件只能选择年月日或者年月日时分秒，需求是只选择年份，于是改造开始！！

效果：

![year-selector](https://nic-gz-1308403500.file.myqcloud.com/vitepress/011_j_date_year_selector-2023-06-05-10-55-34.png)

### 把JDate的内容拷贝到自定义的组件YearSelector中

ctrl c ctrl v



### 添油加醋

```html
<template>
  <a-date-picker
    dropdownClassName="j-date-picker"
    :disabled="disabled || readOnly"
    :placeholder="placeholder"
    @change="handleDateChange"
    :value="momVal"
    :showTime="showTime"
    :format="dateFormat"
    :getCalendarContainer="getCalendarContainer"

    :mode="mode"
    :open="yearShowOne"
    @openChange="openChangeOne"
    @panelChange="panelChangeOne"
  />
</template>
```

`mode`: 传入`'year'`时，a-date-picker转为年份选择

`open`: 控制年份选择是否打开的属性

`@openChange`: 年份panel 打开时的回调事件

`@panelChange`: 年份被点击时的回调事件

组件全貌：

```html
<template>
  <a-date-picker
    dropdownClassName="j-date-picker"
    :disabled="disabled || readOnly"
    :placeholder="placeholder"
    @change="panelChangeOne"
    :value="momVal"
    :showTime="showTime"
    :format="dateFormat"
    :getCalendarContainer="getCalendarContainer"
    :mode="mode"
    :open="yearShowOne"
    @openChange="openChangeOne"
    @panelChange="panelChangeOne"
  />
</template>
<script>
  import moment from 'moment'
  export default {
    name: 'JDate',
    props: {
      mode:{
        type: String,
        default: 'date',
        required: false
      },
      placeholder:{
        type: String,
        default: '',
        required: false
      },
			//...
    },
    data () {
      let dateStr = this.value;
      return {
        decorator:"",
        momVal: !dateStr ? null : moment(dateStr, this.dateFormat),
        yearShowOne:false,
      }
    },
    watch: {
      value (val) {
        if(!val){
          this.momVal = null
        }else{
          this.momVal = moment(val,this.dateFormat)
        }
      }
    },
    methods: {
      moment,
      openChangeOne(status) {
        this.yearShowOne = status
      },
      panelChangeOne(value) {
        this.yearShowOne = false;
        let yyyy = '';
        if (!!value) {
          yyyy = (value.format('YYYY')).toString();
        } else {
          yyyy = '';
        }
        this.$emit('change', yyyy);
    },
      // handleDateChange(mom, dateStr) {
      //   this.$emit('change', dateStr);
      // }
    },
    model: {
      prop: 'value',
      event: 'change'
    }
  }
</script>
```

使用：

```html
<year-selector placeholder="请输入年份" v-decorator="['year', validatorRules.year]" :trigger-change="true" mode="year" dateFormat="YYYY"  style="width: 100%"/>
```