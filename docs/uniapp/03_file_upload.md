---
layout: doc
title: （三）图片/文件上传 
---
# （三）图片/文件上传
### base64上传
1. 使用组件选择图片
2. 组件返回二进制file和图片的相关信息
3. 将file转为base64或其他格式再上传到接口
4. 后端返回图片线上地址

template:
```html
<uni-forms-item class="items" labelWidth="100px" label="照片" name="photoPath">
  <uni-file-picker v-model="imageValue" file-mediatype="image" mode="grid" file-extname="png,jpg" :limit="1"
    @progress="progress" @success="success" @fail="fail" @select="select($event, 'image')" />
</uni-forms-item>
```

method:
```js
// 获取上传状态
select(e) {
  console.log("选择文件：", e);
  // 回显
  this.imageValue.push({
    id: this.$utils.getUuid(),
    url: e.tempFiles[0].url,
    name: e.tempFiles[0].name,
    extname: e.tempFiles[0].extname,
  });

  // 转为base64
  this.$utils.imgToBase64(e.tempFiles[0].url)
    .then((res) => {
      let imageData = {
        fileName: e.tempFiles[0].name,
        content: res,
      };
      this.uploadImg(imageData);
    })
    .catch((err) => {
      console.log(err);
    });
},
async uploadImg(imageDta) {
  try {
    const res = await this.$api.upload(imageDta);
    if (res.data.code == 200) {
      // 后端返回地址
      this.formData.photoPath = res.data.data.url;
    }
  } catch (error) {
    console.log(error);
  }
},

// 上传失败
fail(e) {
  console.log("上传失败：", e);
},
```

图片转base64：
```js
imgToBase64(url) {
  return new Promise((resolve, reject) => {
    let image = new Image();
    image.onload = function () {
      let canvas = document.createElement('canvas');
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;
      // 将图片插入画布并开始绘制
      canvas.getContext('2d').drawImage(image, 0, 0);
      // result
      let result = canvas.toDataURL('image/png');
      var image64 = result.replace(/^data:image\/\w+;base64,/, '');
      resolve(image64);
    };
    image.crossOrigin = 'Anonymous';
    // image.setAttribute('crossOrigin', 'Anonymous');
    image.src = url;
    // 图片加载失败的错误处理
    image.onerror = () => {
      reject(new Error('imgToBase64 error'));
    };
  });
},
```