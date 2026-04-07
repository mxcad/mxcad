<template>
    <div class="side-bar">
        <a href="#" class="icon-chat">WECHAT<div class="chat-tips"><i></i><img style="width:138px;height:138px;"
                    src="/assets/WX-Two-dimensional-code.png" alt="微信"></div></a>
        <a href="mailto:710714273@qq.com" class="icon-mail">mail</a>
    </div>
</template>
<style>
.side-bar a,.chat-tips i {background: url(/assets/right_bg.png) no-repeat;}
.side-bar {width: 66px;position: fixed; bottom: 90px; right: 0;font-size: 0;line-height: 0;z-index: 100;}
.side-bar a {width: 66px;height: 66px;display: inline-block;background-color: #292b30;margin-bottom: 2px;}
.side-bar a:hover {background-color: #669fdd;}
.side-bar .icon-qq {background-position: 0 -62px;}
.side-bar .icon-chat {background-position: 0 -130px;position: relative;}
.side-bar .icon-chat:hover .chat-tips {display: block;}
.side-bar .icon-blog {background-position: 0 -198px;}
.side-bar .icon-mail {background-position: 0 -266px;}
.side-bar .icon-totop {background-position: 0 -334px;}
.chat-tips {padding: 20px; width: 180px;border: 1px solid #d1d2d6;position: absolute;right: 78px;top: -55px;background-color: #fff;display: none;}
.chat-tips i {width: 9px;height: 16px;display: inline-block;position: absolute;right: -9px;top: 80px;background-position:-88px -350px;}
.chat-tips img {width: 138px;height: 138px;}
</style>