(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{404:function(v,_,t){"use strict";t.r(_);var s=t(44),r=Object(s.a)({},(function(){var v=this,_=v.$createElement,t=v._self._c||_;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("h2",{attrs:{id:"冯诺依曼体系结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#冯诺依曼体系结构"}},[v._v("#")]),v._v(" 冯诺依曼体系结构")]),v._v(" "),t("p",[v._v("将程序（指令序列的集合）和数据存放在同一存储器的不同地址的电脑设计概念结构。")]),v._v(" "),t("h2",{attrs:{id:"死锁的四个必要条件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#死锁的四个必要条件"}},[v._v("#")]),v._v(" 死锁的四个必要条件")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("互斥条件")]),v._v("：一个资源每次只能被一个进程使用")]),v._v(" "),t("li",[t("strong",[v._v("请求与保持条件")]),v._v("：一个进程因请求资源而阻塞时，对已获得的资源保持不放")]),v._v(" "),t("li",[t("strong",[v._v("不可剥夺条件")]),v._v("：进程已获得的资源，在未使用完之前，不能强行剥夺")]),v._v(" "),t("li",[t("strong",[v._v("循环等待条件")]),v._v("：若干进程之间形成一种头尾相接的循环等待资源关系")])]),v._v(" "),t("h2",{attrs:{id:"arq-自动重传请求-协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arq-自动重传请求-协议"}},[v._v("#")]),v._v(" ARQ（自动重传请求）协议")]),v._v(" "),t("p",[v._v("自动重传请求（Automatic Repeat-reQuest，ARQ）是OSI模型中数据链路层和传输层的错误纠正协议之一。它通过使用"),t("strong",[v._v("确认")]),v._v("和"),t("strong",[v._v("超时")]),v._v("这两个机制，在不可靠的服务的基础上实现可靠的信息传输。如果在发送方发送一段时间之内没有收到确认帧，它通常会重新发送。ARQ可能包括"),t("strong",[v._v("停止等待ARQ协议")]),v._v("和"),t("strong",[v._v("连续ARQ协议")]),v._v("，错误检测、正面确认、超时重传和负面确认及重传等机制。")]),v._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"停止等待arq协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#停止等待arq协议"}},[v._v("#")]),v._v(" 停止等待ARQ协议")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("正常传输过程")])])]),v._v(" "),t("p",[v._v("只要A向B发送一段报文，都要停止发送并启动一个定时器，等待对端回应，在定时器时间内接收到对端应答就取消定时器并发送下一段报文。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("当报文丢失或出错")])])]),v._v(" "),t("p",[v._v("报文传输过程中丢包：这时候超过定时器设定的时间就会再次发送丢包的数据直到对端响应，所以需要每次都备份发送的数据。")]),v._v(" "),t("p",[v._v("传输过程中报文出错：对端会抛弃该报文并等待A端重传。")]),v._v(" "),t("p",[v._v("PS：一般定时器设定的时间都会大于一个RTT（Round-Trip Time）的平均时间")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("ACK超时或丢失")])])]),v._v(" "),t("p",[v._v("对端传输的应答也可能出现丢失或超时的情况。那么超过定时器时间A端照样会重传报文。这时候B端收到相同序号的报文会丢弃该报文并重传应答，直到A端发送下一个序号的报文。")]),v._v(" "),t("p",[v._v("这个协议的缺点就是传输效率低，在良好的网络环境下每次发送报文都得等待对端的ACK。")])]),v._v(" "),t("li",[t("h3",{attrs:{id:"连续arq协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#连续arq协议"}},[v._v("#")]),v._v(" 连续ARQ协议")]),v._v(" "),t("p",[v._v("在连续ARQ中，发送端拥有一个发送窗口，可以在没有收到应答的情况下持续发送窗口内的数据，这样相比停止等待ARQ协议来说减少了等待时间，提高了效率。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("累计确认")])])]),v._v(" "),t("p",[v._v("连续ARQ中，接收端会持续不到收到报文。如果和停止等待ARQ中接收一个报文就发送一个应答一样，就太浪费资源了。通过累计确认，可以在收到多个报文以后统一回复一个应答报文。报文中的ACK可以用来告诉发送端这个序号之前的数据已经全部接收到了，下次请发送这个序号+1的数据。")]),v._v(" "),t("p",[v._v("但是累计确认也有一个弊端。在连续接收报文时，可能会遇到接收到序号5的报文后，并未接到序号6的报文，然而序号7以后的报文已经接收。遇到这种情况，ACK只能回复6，这样会造成发送端重复发生数据，这种情况下可以通过Sack来解决。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("滑动窗口")])])]),v._v(" "),t("p",[v._v("上面讲到了发送窗口。在TCP中，两端都维护着窗口：分别为"),t("strong",[v._v("发送端窗口")]),v._v("和"),t("strong",[v._v("接收端窗口")]),v._v("。")]),v._v(" "),t("p",[t("strong",[v._v("发送端窗口包含已发送但未收到应答的数据和可以发送但是未发送的数据")]),v._v("。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://github.com/huyaocode/webKnowledge/raw/master/img/slideWindow.png",alt:""}})]),v._v(" "),t("p",[v._v("发送端窗口是由接收窗口剩余大小决定的。接收方会把当前接收窗口的剩余大小写入应答报文，发送端收到应答后根据该值和当前网络拥塞情况设置发送窗口大小，所以发送窗口的大小是不断变化的。")]),v._v(" "),t("p",[v._v("当发送端接收到应答报文后，会随之将滑动窗口进行滑动。")]),v._v(" "),t("p",[t("strong",[v._v("滑动窗口实现了流量控制")]),v._v("。接收方通过报文告知发送方还可以发送多少数据，从而保证接收方能够来得及接收数据。")]),v._v(" "),t("ul",[t("li",[t("strong",[v._v("Zero窗口")])])]),v._v(" "),t("p",[v._v("在发送报文的过程中，可能会遇到对端出现零窗口的情况。在该情况下，发送端会停止发送数据，并启动persistent timer。该定时器会定时发送请求给对端，让对端告知窗口大小。在重试次数超过一定次数后，可能会中断TCP连接。")])])]),v._v(" "),t("h2",{attrs:{id:"拥塞控制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞控制"}},[v._v("#")]),v._v(" 拥塞控制")]),v._v(" "),t("p",[v._v("拥塞控制和流量控制不一样，流量控制是作用于接收方，保证接收方来得及接收数据。而拥塞控制是作用于网络，防止过多的数据拥塞网络，避免出现网络负载过大的情况。")]),v._v(" "),t("p",[v._v("拥塞控制包括了四个算法："),t("strong",[v._v("慢开始")]),v._v("，"),t("strong",[v._v("拥塞避免")]),v._v("，"),t("strong",[v._v("快重传")]),v._v("，"),t("strong",[v._v("快恢复")]),v._v("。")]),v._v(" "),t("ul",[t("li",[t("h3",{attrs:{id:"慢开始"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#慢开始"}},[v._v("#")]),v._v(" 慢开始")]),v._v(" "),t("p",[v._v("慢开始，顾名思义，就是在传输开始时将发送窗口从1开始指数级扩大，从而避免一开始就传输大量数据导致网络拥塞。")]),v._v(" "),t("p",[v._v("慢开始算法步骤具体如下：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("连接初始设置拥塞窗口cwnd（congestion window）为1个MSS（一个分段的最大数据量）")])]),v._v(" "),t("li",[t("p",[v._v("每过一个RTT（往返时延）就将窗口大小乘2")])]),v._v(" "),t("li",[t("p",[v._v("指数级增长肯定不能没有限制，所以有一个阈值ssthresh限制，当窗口大小大于阈值时就会启动拥塞避免算法。ssthresh的用法如下：")]),v._v(" "),t("p",[v._v("​\t当cwnd<ssthresh时，使用慢开始算法；")]),v._v(" "),t("p",[v._v("​\t当cwnd>ssthresh时，改用拥塞避免算法；")]),v._v(" "),t("p",[v._v("​\t当cwnd=ssthresh时，慢开始与拥塞避免算法任意。")])])])]),v._v(" "),t("li",[t("h3",{attrs:{id:"拥塞避免"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#拥塞避免"}},[v._v("#")]),v._v(" 拥塞避免")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20130801220438375?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2ljb2ZpZWxk/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),v._v(" "),t("p",[v._v("拥塞避免算法在每过一个RTT窗口大小只加一，这样能够避免指数级增长导致拥塞，慢慢将大小调整到最佳值。")]),v._v(" "),t("p",[v._v("在传输过程中可能出现定时器超时的情况，这时候TCP会认为网络拥塞了，会马上进行以下步骤：")]),v._v(" "),t("ul",[t("li",[v._v("拥塞窗口cwnd初始化为1个报文段，慢开始阈值ssthresh初始值为16")]),v._v(" "),t("li",[v._v("执行慢开始算法，指数规律增长到第4轮，即cwnd=ssthresh=16，改为执行拥塞避免算法，拥塞窗口按线性规律增长")]),v._v(" "),t("li",[v._v("假定cwnd=24时，网络出现超时（拥塞），则更新后的ssthresh=12，cwnd重新设置为1，并执行慢开始算法。当cwnd=ssthresh=12时，改为执行拥塞避免算法。")])]),v._v(" "),t("p",[t("strong",[v._v("关于乘法减小和加法增大")]),v._v("：")]),v._v(" "),t("p",[v._v("乘法减小指的是无论是在慢开始阶段还是在拥塞避免阶段，只要发送方判断网络出现拥塞，就把慢开始门限ssthresh设置为出现拥塞时的发送窗口大小的一半，并执行慢开始算法，所以当网络频繁出现拥塞时，ssthresh下降的很快，以大大减少注入到网络中的分组数。加法增大是指执行拥塞避免算法后，使拥塞窗口缓慢增大，以防止过早出现拥塞。")])]),v._v(" "),t("li",[t("h3",{attrs:{id:"快重传"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快重传"}},[v._v("#")]),v._v(" 快重传")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://img-blog.csdn.net/20130801220556750?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvc2ljb2ZpZWxk/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast",alt:""}})]),v._v(" "),t("p",[v._v("快重传要求接收方在收到一个"),t("strong",[v._v("失序的报文段")]),v._v("后就立即发出重复确认（为的是使发送方尽早知道有报文段没有到达对方，可提高网络吞吐量约20%）而不要等待自己发送数据时捎带确认。快重传算法规定，发送方只要"),t("strong",[v._v("一连收到三个重复确认")]),v._v("就应当立即重传对方尚未收到的报文段，而不必继续等待设置的重传计时器时间到期。")])]),v._v(" "),t("li",[t("h3",{attrs:{id:"快恢复"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#快恢复"}},[v._v("#")]),v._v(" 快恢复")]),v._v(" "),t("p",[v._v("快重传配合使用的还有快恢复算法，有以下两个要点：")]),v._v(" "),t("p",[v._v("当发送方持续收到三个重复确认时，就执行乘法减小算法，把ssthresh门限值减半（为了预防网络发生拥塞）。但是接下去"),t("strong",[v._v("并不执行慢开始算法")]),v._v("。")]),v._v(" "),t("p",[v._v("考虑到如果网络出现拥塞的话就不会受到好几个重复确认，所以发送方现在认为网络可能没有出现拥塞。所以此时不执行慢开始算法，"),t("strong",[v._v("而是将cwnd拥塞窗口设置为ssthresh门限值减半后的值，然后执行拥塞避免算法，使cwnd缓慢增大")]),v._v("，如下图：TCP Reno版本是目前使用最广泛的版本。")]),v._v(" "),t("p",[t("img",{attrs:{src:"https://pic4.zhimg.com/80/v2-5f4034bc11c3a48a1d1a115f9ee0259b_hd.jpg",alt:""}})]),v._v(" "),t("p",[v._v("注意：在采用快恢复算法时，慢开始算法只是在TCP连接建立时和网络出现超时时才使用。")])])]),v._v(" "),t("h2",{attrs:{id:"什么是用户态与内核态-什么情况下会发生转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是用户态与内核态-什么情况下会发生转换"}},[v._v("#")]),v._v(" 什么是用户态与内核态？什么情况下会发生转换？")]),v._v(" "),t("ul",[t("li",[v._v("内核态：控制计算机的硬件资源，并提供上层应用程序运行的环境。")]),v._v(" "),t("li",[v._v("用户态：上层应用程序的活动空间，应用程序的执行必须依托于内核提供的资源。")])]),v._v(" "),t("p",[v._v("用户态切换为内核态的三种情况：")]),v._v(" "),t("ul",[t("li",[v._v("系统调用")]),v._v(" "),t("li",[v._v("异常事件")]),v._v(" "),t("li",[v._v("外围设备的中断")])]),v._v(" "),t("p",[t("strong",[v._v("系统调用的本质其实也是中断")]),v._v("，相对于外围设备的硬中断，这种中断称为软中断。从触发方式和效果上来看，这三种方式是完全一样的，都相当于执行了一个中断响应过程。但是从触发的对象来看，"),t("strong",[v._v("系统调用是进程主动请求切换的，而异常和硬中断则是被动的")]),v._v("。")]),v._v(" "),t("h2",{attrs:{id:"进程上下文与中断上下文"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#进程上下文与中断上下文"}},[v._v("#")]),v._v(" 进程上下文与中断上下文")]),v._v(" "),t("p",[v._v("程序在执行过程中通常有内核态和用户态两种状态，CPU对处于内核态根据上下文环境进一步细分，因此有了以下三种状态：")]),v._v(" "),t("ol",[t("li",[t("p",[v._v("内核态，运行于进程上下文，内核代表进程运行于内核空间。")])]),v._v(" "),t("li",[t("p",[v._v("内核态，运行于中断上下文，内核代表硬件运行于内核空间。")])]),v._v(" "),t("li",[t("p",[v._v("用户态，运行于用户空间。")])])]),v._v(" "),t("p",[t("strong",[v._v("进程上下文")]),v._v("，可以看作是用户进程传递给内核的这些参数以及内核要保存的那一整套的变量寄存器值和当时的环境等。")]),v._v(" "),t("p",[t("strong",[v._v("中断上下文")]),v._v("，可以看作是硬件传递过来的这些参数和内核需要保存的一些其他环境。")]),v._v(" "),t("h2",{attrs:{id:"线程和进程的区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#线程和进程的区别"}},[v._v("#")]),v._v(" 线程和进程的区别")]),v._v(" "),t("p",[t("strong",[v._v("进程是资源分配的最小单位，而线程是程序代码执行的最小单位。")])]),v._v(" "),t("ol",[t("li",[t("p",[v._v("简而言之，一个程序至少有一个进程，一个进程至少有一个线程")])]),v._v(" "),t("li",[t("p",[v._v("线程的划分尺度小于进程，使得多线程应用程序的并发性高")])]),v._v(" "),t("li",[t("p",[v._v("进程在运行过程中拥有独立的内存单元，而多个线程共享内存，极大地提高了程序的运行效率")])]),v._v(" "),t("li",[t("p",[v._v("每个独立的线程有一个程序运行的入口、顺序执行序列和程序的出口。但是线程不能独立运行，必须依存在应用程序中，由应用程序提供多个线程执行控制")])]),v._v(" "),t("li",[t("p",[v._v("从逻辑角度来看，多线程的意义在于一个应用程序中，有多个执行部分可以同时执行。但操作系统并没有将多个线程看作是多个独立的应用，来实现进程的调度和管理以及资源分配")])])]),v._v(" "),t("h2",{attrs:{id:"常用的内存管理方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的内存管理方式"}},[v._v("#")]),v._v(" 常用的内存管理方式")]),v._v(" "),t("ul",[t("li",[t("p",[v._v("段式存储管理：每次分配大小不固定")])]),v._v(" "),t("li",[t("p",[v._v("页式存储管理：每次分配大小固定")])]),v._v(" "),t("li",[t("p",[v._v("段页式管理：整体分页，页内分段（或者整体分段，段内分页）。")])])])])}),[],!1,null,null,null);_.default=r.exports}}]);