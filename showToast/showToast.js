let _compData = {
  'isHide': false,// 控制组件显示隐藏
  'content': ''// 显示的内容
}
let toastPannel = {

  show:function (data) {
    console.log(data);
    let self = this;
    this.setData({ 'isHide': true, 'content': data });
    setTimeout(function () {
      self.setData({ 'isHide': false })
    }, 1500)
  }
}
function ToastPannel() {
  // 拿到当前页面对象
  let pages = getCurrentPages();
  let curPage = pages[pages.length - 1];
  this.__page = curPage;
  Object.assign(curPage, toastPannel);
  curPage.toastPannel = this;
  curPage.setData(_compData);
  return this;
}
module.exports = {
  ToastPannel
}