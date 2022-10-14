(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{389:function(e,t,v){"use strict";v.r(t);var r=v(44),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h2",{attrs:{id:"mvc"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvc"}},[e._v("#")]),e._v(" MVC")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020105.png",alt:"MVC"}})]),e._v(" "),v("p",[e._v("M（Model）：数据保存")]),e._v(" "),v("p",[e._v("V（View）：用户页面")]),e._v(" "),v("p",[e._v("C（Controller）：业务逻辑")]),e._v(" "),v("p",[e._v("所有通信都是单向的。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("View传指令到Controller。")])]),e._v(" "),v("li",[v("p",[e._v("Controller完成业务逻辑后，要求Model改变状态。")])]),e._v(" "),v("li",[v("p",[e._v("Model将新的数据发送到View，用户得到反馈。")])])]),e._v(" "),v("h2",{attrs:{id:"mvp"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvp"}},[e._v("#")]),e._v(" MVP")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020109.png",alt:"MVP"}})]),e._v(" "),v("p",[e._v("M（Model）是业务逻辑层，主要负责数据，网络请求等操作")]),e._v(" "),v("p",[e._v("V（View）是视图层，负责绘制UI元素、与用户进行交互")]),e._v(" "),v("p",[e._v("P（Presenter）是View与Model交互的中间纽带，处理与用户交互的逻辑")]),e._v(" "),v("p",[e._v("MVP模式将Controller改名为Presenter，同时改变了通信方向。")]),e._v(" "),v("ol",[v("li",[v("p",[e._v("各部分之间的通信，都是双向的。")])]),e._v(" "),v("li",[v("p",[e._v("View与Model不发生联系，都通过Presenter传递。")])]),e._v(" "),v("li",[v("p",[e._v("View非常薄，不部署任何业务逻辑，称为“被动视图”，即没有任何主动性，而Presenter非常厚，所有业务逻辑都部署在那里。")])])]),e._v(" "),v("h2",{attrs:{id:"mvvm"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvm"}},[e._v("#")]),e._v(" MVVM")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015020110.png",alt:"MVVM"}})]),e._v(" "),v("p",[e._v("MVVM是"),v("code",[e._v("Model-View-ViewModel")]),e._v("的缩写。MVVM是一种设计思想。Model层代表数据模型，也可以在Model中定义数据修改和操作的业务逻辑；View代表UI组件，它负责将数据模型转换成UI展现出来，ViewModel是一个同步View和Model的对象。")]),e._v(" "),v("p",[e._v("在MVVM架构下，View和Model之间并没有直接的联系，而是通过ViewModel进行交互，Model和ViewModel之间的交互是双向的，因此View数据的变化会同步到Model中，而Model数据的变化也会立即反应到View上。")]),e._v(" "),v("p",[e._v("ViewModel通过"),v("strong",[e._v("双向数据绑定")]),e._v("把View层和Model层连接了起来，而View和Model之间的同步工作完全是自动的，无需人为干涉，因此开发者只需关注业务逻辑，不需要手动操作DOM，不需要关注数据状态的同步问题，复杂的数据状态维护完全由MVVM来统一管理。")]),e._v(" "),v("h2",{attrs:{id:"mvvm和mvc的区别"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#mvvm和mvc的区别"}},[e._v("#")]),e._v(" MVVM和MVC的区别？")]),e._v(" "),v("p",[e._v("MVC也是一种设计思想，主要就是MVC中的Controlled演变成MVVM中的ViewModel。MVVM主要解决了MVC中大量的DOM操作使页面渲染性能降低，加载速度变慢，影响用户体验。和当Model频繁发送变化，开发者需要主动更新到View。")]),e._v(" "),v("h2",{attrs:{id:"数据的双向绑定"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#数据的双向绑定"}},[e._v("#")]),e._v(" 数据的双向绑定")]),e._v(" "),v("p",[v("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/10/23/166a031209fc8da5?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"数据的双向绑定"}})]),e._v(" "),v("p",[e._v("利用"),v("code",[e._v("Object.defineProperty()")]),e._v("对数据进行劫持，设置一个监听器"),v("code",[e._v("Observer")]),e._v("，用来监听所有属性，如果属性上发生变化了，就需要告诉订阅者"),v("code",[e._v("Watcher")]),e._v("去更新数据，最后指令解析器"),v("code",[e._v("Compile")]),e._v("解析对应的指令，进而会执行对应的更新函数，从而更新视图，实现双向绑定。")])])}),[],!1,null,null,null);t.default=o.exports}}]);