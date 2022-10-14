(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{393:function(t,v,e){"use strict";e.r(v);var _=e(44),a=Object(_.a)({},(function(){var t=this,v=t.$createElement,e=t._self._c||v;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h2",{attrs:{id:"vdom是什么-为什么会存在vdom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vdom是什么-为什么会存在vdom"}},[t._v("#")]),t._v(" VDOM是什么？为什么会存在VDOM？")]),t._v(" "),e("p",[t._v("在React开发模式下，页面的变化都是用数据去驱动的，而数据更新后，到底要去改哪一块的DOM呢？虽然可以先删除那个部分再按照当前新数据重新渲染一个页面或生成那一个部分（jQuery做法），但是这样肯定非常耗费性能。而且JS操作DOM是非常复杂的，JS操作DOM越多，控制与页面的耦合度就越高，代码越难以维护。")]),t._v(" "),e("p",[t._v("虚拟DOM，即"),e("strong",[t._v("用JS对象来描述DOM树结构")]),t._v("，Diff算法则是找旧VDOM与新VDOM的"),e("strong",[t._v("最小差异")]),t._v("，然后再把差异渲染出来。")]),t._v(" "),e("p",[e("strong",[t._v("描述一个DOM节点")]),t._v("：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("tag")]),t._v("标签名")]),t._v(" "),e("li",[e("code",[t._v("attrs")]),t._v("DOM属性键值对")]),t._v(" "),e("li",[e("code",[t._v("children")]),t._v("DOM子节点数组或文本内容")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/huyaocode/webKnowledge/blob/master/img/domtree.png",alt:""}})]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/huyaocode/webKnowledge/blob/master/img/vdon.png",alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("为什么DOM操作慢？因为属性太多了")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://github.com/huyaocode/webKnowledge/blob/master/img/domattr.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"react-diff-算法原理-常考-大厂必考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-diff-算法原理-常考-大厂必考"}},[t._v("#")]),t._v(" React Diff 算法原理（常考，大厂必考）")]),t._v(" "),e("p",[e("strong",[t._v("同层比对")])]),t._v(" "),e("p",[t._v("新旧状态的比对时采用同层对比，当发现某节点不一致了直接替换该节点的子树。而不管它的子树是不是真的改动了。")]),t._v(" "),e("p",[e("strong",[t._v("key值的使用")])]),t._v(" "),e("p",[t._v("在列表循环的时候React会要求"),e("strong",[t._v("每一个列表项有一个独一无二，稳定的key值")]),t._v("，它的目的是为了当状态改变时新旧状态的每一个列表项能够对应起来，方便比对。")]),t._v(" "),e("p",[t._v("key是React用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。Diff算法中React会借助元素的key值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重新渲染。此外，React还需要借助key值来判断元素与本地状态的关联关系。")]),t._v(" "),e("p",[e("strong",[t._v("合并操作")])]),t._v(" "),e("p",[t._v("调用component的setState方法的时候，React将其标记为dirty。到每一个事件循环结束，React检查所有标记dirty的component重新绘制。")]),t._v(" "),e("h2",{attrs:{id:"为什么vdom会提高性能-必考"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么vdom会提高性能-必考"}},[t._v("#")]),t._v(" 为什么VDOM会提高性能？（必考）")]),t._v(" "),e("p",[t._v("VDOM相当于在JS和真实的DOM中间加了一个缓存，利用React Diff算法避免了没有必要的DOM操作，从而提高性能。")]),t._v(" "),e("ol",[e("li",[t._v("用JS对象结构表示DOM树的结构；然后用这个树构建一个真正的DOM树，插到文档当中。")]),t._v(" "),e("li",[t._v("当状态变更的时候，重新构造一棵新的对象树。然后用新的树和旧的树进行比较，记录两棵树差异。")]),t._v(" "),e("li",[t._v("把2所记录的差异应用到步骤1所构建的真正的DOM树上，视图就更新了。")])]),t._v(" "),e("p",[t._v("VDOM的意义在于实现了对DOM的抽象，从而配合Diff算法来比对"),e("strong",[t._v("新旧状态切换时页面需要更新的最小DOM范围")]),t._v("。")])])}),[],!1,null,null,null);v.default=a.exports}}]);