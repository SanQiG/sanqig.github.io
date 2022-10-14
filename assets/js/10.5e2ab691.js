(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{365:function(e,_,v){"use strict";v.r(_);var t=v(44),a=Object(t.a)({},(function(){var e=this,_=e.$createElement,v=e._self._c||_;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("blockquote",[v("p",[e._v("本文主要参考阮一峰大大的"),v("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("这篇文章"),v("OutboundLink")],1)])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071002.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"什么是-flex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是-flex"}},[e._v("#")]),e._v(" 什么是 Flex ？")]),e._v(" "),v("p",[e._v("Flex 是 Flexible Box 的缩写，意为“弹性布局”，用来为盒状模型提供最的灵活性。")]),e._v(" "),v("p",[v("strong",[e._v("任何一个容器都可以指定为 Flex 布局")]),e._v("。")]),e._v(" "),v("p",[e._v("注意："),v("strong",[e._v("设置为 Flex 布局后，子元素的 "),v("code",[e._v("float")]),e._v(" 、"),v("code",[e._v("clear")]),e._v(" 和 "),v("code",[e._v("vertical-align")]),e._v(" 属性将失效。")])]),e._v(" "),v("h2",{attrs:{id:"_1、基本概念"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_1、基本概念"}},[e._v("#")]),e._v(" 1、基本概念")]),e._v(" "),v("p",[e._v("采用 Flex 布局的元素，称为 "),v("strong",[e._v("Flex 容器")]),e._v("（Flex Container），简称“容器”。它的所有子元素自动成为容器成员，称为 "),v("strong",[e._v("Flex 项目")]),e._v("（Flex Item），简称“项目”。")]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png",alt:""}})]),e._v(" "),v("p",[e._v("容器默认存在两根轴：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("水平的主轴（main axis）")]),e._v("：主轴开始位置叫做 "),v("code",[e._v("main start")]),e._v("，结束位置叫做 "),v("code",[e._v("main end")])]),e._v(" "),v("li",[v("code",[e._v("垂直的交叉轴（cross axis）")]),e._v("：交叉轴开始位置叫做 "),v("code",[e._v("cross start")]),e._v("，结束位置叫做 "),v("code",[e._v("cross end")])])]),e._v(" "),v("p",[e._v("项目默认沿主轴排列。单个项目占据的主轴空间叫做 "),v("code",[e._v("main size")]),e._v("，占据的交叉轴空间叫 "),v("code",[e._v("cross size")])]),e._v(" "),v("h2",{attrs:{id:"_2、容器的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_2、容器的属性"}},[e._v("#")]),e._v(" 2、容器的属性")]),e._v(" "),v("p",[e._v("有以下 6 种：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-direction")])]),e._v(" "),v("li",[v("code",[e._v("flex-wrap")])]),e._v(" "),v("li",[v("code",[e._v("flex-flow")])]),e._v(" "),v("li",[v("code",[e._v("justify-content")])]),e._v(" "),v("li",[v("code",[e._v("align-items")])]),e._v(" "),v("li",[v("code",[e._v("align-content")])])]),e._v(" "),v("h3",{attrs:{id:"flex-direction"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-direction"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-direction")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-direction")]),e._v(" 属性决定主轴的方向（即项目排列的方向）。")])]),e._v(" "),v("p",[e._v("它可能有 4 个值：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("row")]),e._v("（默认值）：主轴为水平方向，起点在左端。")]),e._v(" "),v("li",[v("code",[e._v("row-reverse")]),e._v("：主轴为水平方向，起点在右端。")]),e._v(" "),v("li",[v("code",[e._v("column")]),e._v("：主轴为垂直方向，起点在上沿。")]),e._v(" "),v("li",[v("code",[e._v("column-reverse")]),e._v("：主轴为垂直方向，起点在下沿。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071005.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"flex-wrap"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-wrap"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-wrap")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-wrap")]),e._v(" 属性定义，如果一条轴线排不下，如何换行。")])]),e._v(" "),v("ul",[v("li",[v("code",[e._v("nowrap")]),e._v("（默认值）：不换行。\n"),v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071007.png",alt:""}})]),e._v(" "),v("li",[v("code",[e._v("wrap")]),e._v("：换行，第一行在上方。\n"),v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071008.jpg",alt:""}})]),e._v(" "),v("li",[v("code",[e._v("wrap-reverse")]),e._v("：换行，第一行在下方。\n"),v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071009.jpg",alt:""}})])]),e._v(" "),v("h3",{attrs:{id:"flex-flow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-flow"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-flow")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-flow")]),e._v(" 属性是 "),v("code",[e._v("flex-direction")]),e._v(" 属性和 "),v("code",[e._v("flex-wrap")]),e._v(" 属性的简写形式，默认值是 "),v("code",[e._v("row nowrap")])]),e._v("。")]),e._v(" "),v("h3",{attrs:{id:"justify-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#justify-content"}},[e._v("#")]),e._v(" "),v("code",[e._v("justify-content")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("justify-content")]),e._v(" 属性定义了 "),v("code",[e._v("项目")]),e._v(" 在 "),v("code",[e._v("主轴")]),e._v(" 上的对齐方式")]),e._v("。")]),e._v(" "),v("p",[e._v("它可能有 5 个值，具体对齐方式与轴的方向有关。下面假设主轴为从左到右。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v("（默认值）：左对齐。")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v("：右对齐。")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v("：居中。")]),e._v(" "),v("li",[v("code",[e._v("space-between")]),e._v("：两端对齐，项目之间的间隔要相等。")]),e._v(" "),v("li",[v("code",[e._v("space-around")]),e._v("：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"align-items"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-items"}},[e._v("#")]),e._v(" "),v("code",[e._v("align-items")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("align-items")]),e._v(" 属性定义了 "),v("code",[e._v("项目")]),e._v(" 在 "),v("code",[e._v("交叉轴")]),e._v(" 上的对齐方式")]),e._v("。")]),e._v(" "),v("p",[e._v("它可能有 5 个值，具体的对齐方式与交叉轴的方向有关，下面假设交叉轴从上到下。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v("：交叉轴的起点对齐。")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v("：交叉轴的终点对齐。")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v("：交叉轴的中点对齐。")]),e._v(" "),v("li",[v("code",[e._v("baseline")]),e._v("：项目的第一行文字的基线对齐。")]),e._v(" "),v("li",[v("code",[e._v("stretch")]),e._v("（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071011.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"align-content"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-content"}},[e._v("#")]),e._v(" "),v("code",[e._v("align-content")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("align-content")]),e._v(" 属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用")]),e._v("。")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("flex-start")]),e._v("：与交叉轴的起点对齐。")]),e._v(" "),v("li",[v("code",[e._v("flex-end")]),e._v("：与交叉轴的终点对齐。")]),e._v(" "),v("li",[v("code",[e._v("center")]),e._v("：与交叉轴的中点对齐。")]),e._v(" "),v("li",[v("code",[e._v("space-between")]),e._v("：与交叉轴两端对齐，轴线之间的间隔平均分布。")]),e._v(" "),v("li",[v("code",[e._v("space-around")]),e._v("：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。")]),e._v(" "),v("li",[v("code",[e._v("stretch")]),e._v("（默认值）：轴线占满整个交叉轴。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png",alt:""}})]),e._v(" "),v("h2",{attrs:{id:"_3、项目的属性"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#_3、项目的属性"}},[e._v("#")]),e._v(" 3、项目的属性")]),e._v(" "),v("p",[e._v("有以下 6 种：")]),e._v(" "),v("ul",[v("li",[v("code",[e._v("order")])]),e._v(" "),v("li",[v("code",[e._v("flex-grow")])]),e._v(" "),v("li",[v("code",[e._v("flex-shrink")])]),e._v(" "),v("li",[v("code",[e._v("flex-basis")])]),e._v(" "),v("li",[v("code",[e._v("flex")])]),e._v(" "),v("li",[v("code",[e._v("align-self")])])]),e._v(" "),v("h3",{attrs:{id:"order"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#order"}},[e._v("#")]),e._v(" "),v("code",[e._v("order")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("order")]),e._v(" 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071013.png",alt:""}})]),e._v(" "),v("h3",{attrs:{id:"flex-grow"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-grow"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-grow")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-grow")]),e._v(" 属性定义项目的 "),v("code",[e._v("放大")]),e._v(" 比例。默认为 "),v("code",[e._v("0")]),e._v("，即如果存在剩余空间，也不放大。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071014.png",alt:""}})]),e._v(" "),v("p",[e._v("如果所有项目的 "),v("code",[e._v("flex-grow")]),e._v(" 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 "),v("code",[e._v("flex-grow")]),e._v(" 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。")]),e._v(" "),v("h3",{attrs:{id:"flex-shrink"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-shrink"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-shrink")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-shrink")]),e._v("  属性定义了项目的 "),v("code",[e._v("缩小")]),e._v(" 比例。默认为 "),v("code",[e._v("1")]),e._v("，即如果空间不足，该项目将缩小。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071015.jpg",alt:""}})]),e._v(" "),v("p",[e._v("如果所有项目的 "),v("code",[e._v("flex-shrink")]),e._v(" 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的   "),v("code",[e._v("flex-shrink")]),e._v(" 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。")]),e._v(" "),v("p",[e._v("负值对该属性无效。")]),e._v(" "),v("h3",{attrs:{id:"flex-basis"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex-basis"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex-basis")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex-basis")]),e._v(" 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 "),v("code",[e._v("auto")]),e._v("，即项目的本来大小。")])]),e._v(" "),v("p",[e._v("它可以设为跟 "),v("code",[e._v("width")]),e._v(" 或 "),v("code",[e._v("height")]),e._v(" 属性一样的值（比如 350px ），则项目将占据固定空间。")]),e._v(" "),v("h3",{attrs:{id:"flex"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#flex"}},[e._v("#")]),e._v(" "),v("code",[e._v("flex")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("flex")]),e._v(" 属性是 "),v("code",[e._v("flex-grow")]),e._v(", "),v("code",[e._v("flex-shrink")]),e._v("  和  "),v("code",[e._v("flex-basis")]),e._v(" 的简写，默认值为"),v("code",[e._v("0 1 auto")]),e._v("。后两个属性可选。")])]),e._v(" "),v("p",[e._v("该属性有两个快捷值："),v("code",[e._v("auto")]),e._v(" ("),v("code",[e._v("1 1 auto")]),e._v(") 和 "),v("code",[e._v("none")]),e._v(" ("),v("code",[e._v("0 0 auto")]),e._v(")。")]),e._v(" "),v("p",[e._v("建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。")]),e._v(" "),v("h3",{attrs:{id:"align-self"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#align-self"}},[e._v("#")]),e._v(" "),v("code",[e._v("align-self")])]),e._v(" "),v("p",[v("strong",[v("code",[e._v("align-self")]),e._v(" 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖"),v("code",[e._v("align-items")]),e._v("属性。默认值为"),v("code",[e._v("auto")]),e._v("，表示继承父元素的"),v("code",[e._v("align-items")]),e._v("属性，如果没有父元素，则等同于"),v("code",[e._v("stretch")]),e._v("。")])]),e._v(" "),v("p",[v("img",{attrs:{src:"http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png",alt:""}})]),e._v(" "),v("p",[e._v("该属性可能取6个值，除了"),v("code",[e._v("auto")]),e._v("，其他都与 "),v("code",[e._v("align-items")]),e._v(" 属性完全一致。")]),e._v(" "),v("h2",{attrs:{id:"完"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#完"}},[e._v("#")]),e._v(" 完")])])}),[],!1,null,null,null);_.default=a.exports}}]);