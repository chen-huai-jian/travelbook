1. 做一款小程序
2. 写一篇文章
3. 结合腾讯云  BASS Backend as service
   大前端  SDK 存
   投中一篇 
- 小程序基本的架构是pages
  右键先建文件夹 .wxml + .wxss + .js + .json
  .js 的架构思路
  ```javascript
    .wxml bindtap
    page({
        startAccounts(){
            wx.showLoading+.hideLoading 小程序的内置API
            .navigateTo
        }
    })

  ```

- background-size 手机端图片 响应式背景方案
    1. 背景图片与盒子大小是有可能不一致的
    2. 等比例缩放  100% 100%  盒子与图片的比例是相等的
    3. cover | contain 

- flex 弹性布局的使用
  元素比较简单，用flex-direction：column 去搞定，是移动端快速搞定的利器
  align-items： 纵轴  水平方向
  margin 炉火纯青   auto  顺时针
  百分比用的很好


- 小程序之所以小，有大小限制   2Mb
  图片不方便放在imges里的
  链接的方式？ 服务器里，
  云开发来解决，存储


- 使用了header footer 代替了div 标签，语义化标签
  HTML 语义化更好地话，对百度的蜘蛛会更友好， 有利于SEO搜索引擎优化

  flex + flex-direction：column    flex：1 主体内容
  弹性的意思是无所谓具体多大，我会分好。
  overflow + overflow-scrolling：touch  滚动顺滑

- vant 框架 解决了开发中常见的问题
  1. 页面布局  row + col
  2. 常用组件 
     pannel button 60% 的都不用写，有框架

- MVVM 思想
  js data 里的数据叫Model
  wxml  view 
  VM {{}} 视图模型层

- 小程序开发指令
  使用wx:if
  wx:for   images
  wx:key 优化  index
  数组要修改的时候
  a = 1  a = 2
  数组[item]  不需要把整个数组都改变，用太多内存 MVVM
  wx:key="index"  给每一行都分配一个id key 
  一定要用，用什么呢
  index 不是最佳