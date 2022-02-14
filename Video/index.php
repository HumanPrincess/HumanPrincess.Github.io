<!--
 ================================
// +----------------------------+
// | Name: 全网VIP影视解析网
// +----------------------------+
// | Domain: www.235w.com
// +----------------------------+
// | Contact: 113814
// +----------------------------+
// | Date: 2021年9月5日
// +----------------------------+
=================================
-->
<?php
session_start();
error_reporting(E_ALL);
date_default_timezone_set("PRC");
header("Content-Type: text/html; charset=UTF-8");
include "config/config.php";
?>
<!DOCTYPE html>
<html lang="zh-cn">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=100%, initial-scale=1"/>
  <title><?php echo $config['name']?></title>
  <link rel="shortcut icon" href="<?php echo $config['tubiao']?>">
  <meta name="keywords" content="<?php echo $config['keywords']?>" />
  <meta name="description" content="<?php echo $config['miaoshu']?>" />
  <link rel="stylesheet" type="text/css" href="style.css" data-for="result">
  <script src="//cdn.bootcss.com/jquery/1.11.3/jquery.min.js"></script>
</head>
<body style="background: url(&quot;<?php echo $config['beijing']?>&quot;);">
<div class="top-1">
	<div class="container clear">
		<div class="logo">
			<a href="https://www.235w.com/"><img src="<?php echo $config['logo']?>"/></a>
		</div>
		<ul>
			<li><a href="https://jq.qq.com/?_wv=1027&k=UaN5LR5I" target="_blank" >加入交流群</a></li>
			<?php echo $config['link']?>
		</ul>
	</div>
</div>
<div class="container clear">
	<div class="cnt-t clear">
		<span>
				<marquee behavior="scroll"><?php echo $config['gonggao1']?></marquee>
		</span>
	</div>
	<div class="cnt-t2 clear">
		<iframe src="ff.html" id="player" width="100%" height="450px" allowtransparency="true" frameborder="0" scrolling="no"></iframe>
	</div>
	<div class="cnt-3 clear">
		 <form method="get" >
		 <div class="cnt-3-1">
				<select class="form-control input-lg" id="jk">
				<?php echo $config['jiekou']?>
				</select>
		</div>
		<div class="cnt-3-2">
			<input class="form-control input-lg" type="search" placeholder="手机直接长按粘贴网址-电脑使用Ctrl+V粘贴网址" id="url" autocomplete="off">
		</div>
		<div class="cnt-3-3">
			<button id="bf" type="button" class="btn" onclick="dihejk()">播放</button>
			
		</div>
		</form>
	</div>
	<div class="cnt-6 clear">
		<ul>
			<li><a href="https://www.235w.com/">赞助广告:</a></li>
			<li><a href="https://www.235w.com/" target="_blank">235资源网</a></li> <!-- 这里放友链也不错 -->
			<?php echo $config['guad']?>
		</ul>	
	</div>
	<div class="cnt-4">
		<div class="cnt-4-1 clear">
			<span>
			<?php echo $config['tishilogg']?>
			</span>
		</div>
	</div>
	<div class="cnt-5">
		<dl><dt><a target="_blank" href="http://www.le.com/" rel="nofollow"><img src="imglogo/letvlogo.png"></a></dt><dd>乐视TV视频</dd></dl>
		<dl><dt><a target="_blank" href="http://v.qq.com/" rel="nofollow"><img src="imglogo/qqlogo.png" width="150" height="35"></a></dt><dd>腾讯视频</dd></dl>
		<dl><dt><a target="_blank" href="http://www.iqiyi.com/" rel="nofollow"><img src="imglogo/iqiyi.png" width="110" height="35"></a></dt><dd>爱奇艺视频</dd></dl>
		<dl><dt><a target="_blank" href="http://www.youku.com/" rel="nofollow"><img src="imglogo/youkulogo.png"></a></dt><dd>优酷视频</dd></dl>
		<dl><dt><a target="_blank" href="http://www.tudou.com/" rel="nofollow"><img src="imglogo/tudoulogo.png"></a></dt><dd>土豆视频</dd></dl>
		<dl><dt><a target="_blank" href="http://www.mgtv.com/" rel="nofollow"><img src="imglogo/hunantvlogo.png"></a></dt><dd>芒果TV视频</dd></dl>
		<dl><dt><a target="_blank" href="http://tv.sohu.com/" rel="nofollow"><img src="imglogo/sohulogo.png"></a></dt><dd>搜狐视频</dd></dl>
		<dl><dt><a target="_blank" href="https://www.235w.com/" rel="nofollow"><img src="imglogo/235w.png" width="110" height="35"></a></dt><dd>235资源网</dd></dl>
		<dl><dt><a target="_blank" href="http://www.acfun.tv/" rel="nofollow"><img src="imglogo/acfun.png" width="110" height="35"></a></dt><dd>Ac弹幕网</dd></dl>
		<dl><dt><a target="_blank" href="http://www.bilibili.com/" rel="nofollow"><img src="imglogo/bilibili.png" width="110" height="35"></a></dt><dd>哔哩哔哩</dd></dl>
		<dl><dt><a target="_blank" href="http://www.fun.tv/" rel="nofollow"><img src="imglogo/fengxing.gif" width="110" height="35"></a></dt><dd>风行网</dd></dl>
		<dl><dt><a target="_blank" href="http://www.wasu.cn/" rel="nofollow"><img src="imglogo/wasulogo.png"></a></dt><dd>WASU华数视频</dd></dl>
		<dl><dt><a target="_blank" href="http://www.56.com/" rel="nofollow"><img src="imglogo/56logo.png"></a></dt><dd>56</dd></dl>
		<dl><dt><a target="_blank" href="http://www.yinyuetai.com/" rel="nofollow"><img src="imglogo/yinyuetailogo.png"></a></dt><dd>音悦台MV</dd></dl>
	</div>
</div>



<div class="foot-1">
	<div class="container clear">
		<div class="foot-1-1">
			<span><?php echo $config['footer']?></span>
			<?php echo $config['guad1']?>
		</div>
	</div>
</div>
<script type="text/javascript">
        document.write('<a style="display:none!important" id="tanx-a-mm_15728610_6186890_158032737"></a>');
        tanx_s = document.createElement("script");
        tanx_s.type = "text/javascript";
        tanx_s.charset = "gbk";
        tanx_s.id = "tanx-s-mm_15728610_6186890_158032737";
        tanx_s.async = true;
        tanx_s.src = "http://p.tanx.com/ex?i=mm_15728610_6186890_158032737";
        tanx_h = document.getElementsByTagName("head")[0];
        if(tanx_h)tanx_h.insertBefore(tanx_s,tanx_h.firstChild);
</script>
</body>
</html>

