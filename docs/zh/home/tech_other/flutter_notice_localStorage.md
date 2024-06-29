---
title: "flutter 已未读消息存本地"
layout: doc
---
# flutter 已未读消息存本地

## 列表页

`logic.dart` :

```dart
updateState(id){
    state.list.forEach((element) {
      if (element['id'] == id) {
        element['read'] = true;
      }
    });
    update();
 }
```

`view.dart` :

```dart
return GestureDetector(
    behavior: HitTestBehavior.opaque,
		// 点击手势：
    onTap: () async {
		// 传到详情页的请求参数：
      Map<String, dynamic> parameters = {};
      parameters["page"] ="message";
      parameters["relatedId"] = state.list[index]["id"];
		// async await 异步：
      final data = await Get.toNamed("/noticeDetail", arguments: parameters);
     // data为子页面已读请求的回调结果
			if(data){
				// 如果成功，call函数，改写状态
        logic.updateState(state.list[index]["id"]);
      }
    },
	...
)
```

## 详情页

`notice_detail/logic.dart`

```dart
readNotice(){
  state.signUrl = "";
  OkApi.shared.readNotice(ReadNotice(state.noticeId , state.signUrl)).then((res) {
    if (res.code == 200) {
			// 改写isRead 状态
      state.isRead = true;
      update();
    } else {
      state.isRead = false;
      Global.showToast(res.msg);
    }
  });
}
```

`notice_detail/view.dart`

```dart
@override
  Widget build(BuildContext context) {
		// WillPopScope组件，监听返回事件
    return WillPopScope(
      onWillPop: () async {
        print("返回键点击了");
				// 将isRead回传
        Get.back(result: state.isRead);
        return Future.value(true);
      },

		//...
}
```