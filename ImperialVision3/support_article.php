<?php include 'include/index-head.html';?>


<div class="page-support_download page-banner">
  技术支持
</div>
<div class="container">

  <div class="row">
    <div class="hidden-xs col-sm-3">
      
      <div class="doc_list_title" data-target="#doc_list1"><!--data-toggle="collapse"-->
        <a href="#"><i class="fa fa-fw fa-angle-down"></i>iOS使用文档</a>
      </div>
      <ul class="collapse in doc_list" id="doc_list1">
        <li><a href="#">快速开始</a></li>
        <li class="on"><a href="#">SDK集成</a></li>
        <li><a href="#">API接口说明</a></li>
      </ul>
      <div class="doc_list_title" data-target="#doc_list2"><!--data-toggle="collapse"-->
        <a href="#"><i class="fa fa-fw fa-angle-down"></i>Android使用文档</a>
      </div>
      <ul class="collapse in doc_list" id="doc_list2">
        <li><a href="#">快速开始</a></li>
        <li><a href="#">SDK集成</a></li>
        <li><a href="#">API接口说明</a></li>
      </ul>
    </div>
    <div class="col-xs-12 col-sm-9">
      <ol class="breadcrumb">
        <li><a href="#">技术支持</a></li>
        <li><a href="#">文档</a></li>
        <li><a href="#">iOS使用文档</a></li>
        <li class="active">快速开始</li>

        <div class="pull-right"><a href="#"><返回</a></div>
      </ol>
      <h3><a href="#">快速开始</a></h3>
      <article>
        <div  style="font-size:16px;line-height:30px;">
        1.1.  注册开发者账号<br>
        ·    在官方网站上，点击右上角的【控制台】链接，进入登录界面。<br>
        ·    如果已经是 IVImageSR 的用户，可以直接进行登录操作，如果您不是我们的用户，请进行账号的注册。<br>
        ·    在注册界面填写邮箱、用户名、手机号等信息，然后点击注册。<br>
        ·    注册成功后，邮箱会收到一封验证邮件。请按照邮件说明进行验证，完成邮箱绑定操作。成功验证后，账户即可登录使用。<br>
        <br>
        1.2.  获取开发密钥<br>
        ·    进【控制台】，点击进入「我的应用」中的「应用管理」选项。<br>
        ·    点击「创建应用」，按要求填写应用名称和应用描述，并选择对应的应用类型。<br>
        ·    创建完成后，点击应用列表界面右上角的「创建应用版本」选项，填写应用包名，并选择应用平台。需要注意的是：包名(AppID) 和 应用名称 一定要一一对应 ， 填写完毕后进行提交。<br>
        ·    系统会自动为每个应用生成一个唯一的密钥，即SDK初始化时要填写的DevKey。密钥与应用是一一对应的，更换应用包名时，系统也会自动生成新的密钥。一个账户可以创建若干应用。<br>
        <br>
        1.3.  下载SDK <br>
        ·    登录开发者账号，在【下载】页面，点击 IVImageSR for iOS 。<br>
        ·    点击「下载示例程序源码」下载 Demo 的源代码，以方便从 Demo 中借鉴 SDK 的用法。<br>
        ·    点击「下载 SDK」下载 SDK 相关文件，以便在将来将 SDK 跟项目进行集成。<br>
        ·    下载 SDK 并解压文件，文件夹内包含：IVImageSR.framework<br>
        <br>
        <br>
        </div>
      </article>
    </div>
  </div>
</div>

<?php include 'include/index-foot.html';?>