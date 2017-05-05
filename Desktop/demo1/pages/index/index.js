//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
   var1:"block",
   var2:"none",
   var3:"none"
  },
  abc:function(){
    this.setData({
      var1:"block",
      var2:"none",
      var3:"none"
    })
  },
  abd:function(){
    this.setData({
      var1:"none",
      var2:"block",
      var3:"none"
    })
  },
  abe:function(){
    this.setData({
      var1:"none",
      var2:"none",
      var3:"block" 
    })
  },
 
})
