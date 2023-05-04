# Jquery图片预览插件

### 一、接入方法：
- 1、引用Jquery文件；
- 2、引用 preview-image.js；
- 3、引用 preview-image.css；
- 4、在需要支持图片预览的外部容器中添加class `preview-image-content`；

### 二、案例代码：

```
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>图片预览插件</title>
    <script src="./js/jquery.min.js"></script>
    <script src="./js/preview-image.js"></script>
    <link rel="stylesheet" href="./css/preview-image.css">
</head>

<body>
    <div class="preview-image-content">
        <img src="./images/1.jpg">
        <img src="./images/2.jpg">
        <img src="./images/3.jpg">
    </div>
</body>

</html>
```
