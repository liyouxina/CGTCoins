<?php $__env->startSection('page-head'); ?>
<link rel="stylesheet" type="text/css" href="<?php echo e(URL("layui/css/layui.css")); ?>" media="all">
<link rel="stylesheet" type="text/css" href="<?php echo e(URL("admin/common/bootstrap/css/bootstrap.css")); ?>" media="all">
<link rel="stylesheet" type="text/css" href="<?php echo e(URL("admin/common/global.css")); ?>" media="all">
<link rel="stylesheet" type="text/css" href="<?php echo e(URL("admin/css/personal.css")); ?>" media="all">
<?php $__env->stopSection(); ?>
<?php $__env->startSection('page-content'); ?>
	<form class="layui-form" method="POST">
		<input type="hidden" name="id">
		<?php echo e(csrf_field()); ?>

		<div class="layui-form-item">
			<label class="layui-form-label">标题</label>
			<div class="layui-input-block">
				<input class="layui-input newsName" name="title" lay-verify="required" placeholder="请输入标题" type="text" value="<?php if(isset($news['title'])): ?><?php echo e($news['title']); ?><?php endif; ?>">
			</div>
		</div>
		<div class="layui-form-item layui-form-text">
			<label class="layui-form-label">logo</label>
			<div class="layui-input-block">
				<button class="layui-btn" type="button" id="upload_test">选择图片</button>
				<br>
				<img src="<?php if(!empty($news->thumbnail)): ?><?php echo e($news->thumbnail); ?><?php endif; ?>" id="img_thumbnail" class="thumbnail" style="display: <?php if(!empty($news->thumbnail)): ?><?php echo e("block"); ?><?php else: ?><?php echo e("none"); ?><?php endif; ?>;max-width: 200px;height: auto;margin-top: 5px;">
				<input type="hidden" name="thumbnail" id="thumbnail" value="<?php if(!empty($news->thumbnail)): ?><?php echo e($news->thumbnail); ?><?php endif; ?>">
			</div>
		</div>
		<div class="layui-inline">		
			<label class="layui-form-label">发行总量</label>
			<div class="layui-input-inline">
				<input class="layui-input newsTime" lay-verify="required|date" name="amount" type="text" >
			</div>
		</div>
		<div class="layui-inline">		
			<label class="layui-form-label">发行价格</label>
			<div class="layui-input-inline">
				<input class="layui-input newsTime" lay-verify="required|date" name="price" type="text" >
			</div>
		</div>
		<div class="layui-inline">		
			<label class="layui-form-label">开始时间</label>
			<div class="layui-input-inline">
				<input class="layui-input newsTime" lay-verify="required|date" name="start_time" type="text" >
			</div>
		</div>
    	<div class="layui-inline">		
			<label class="layui-form-label">结束时间</label>
			<div class="layui-input-inline">
				<input class="layui-input newsTime" lay-verify="required|date" name="end_time" type="text">
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">内容摘要</label>
			<div class="layui-input-block">
				<textarea placeholder="请输入内容摘要" class="layui-textarea" name="summary"></textarea>
			</div>
		</div>
		<div class="layui-form-item">
			<label class="layui-form-label">文章内容</label>
			<div class="layui-input-block">
				<script id="news_content" name="content" type="text/plain" style="width:100%; height:300px;"></script>
			</div>
		</div>
		<div class="layui-form-item">
			<div class="layui-input-block">
				<button class="layui-btn" lay-submit="" lay-filter="submit">立即提交</button>
				<button type="reset" class="layui-btn layui-btn-primary">重置</button>
		    </div>
		</div>
	</form>
<?php $__env->stopSection(); ?>
<?php $__env->startSection('scripts'); ?>
<script type="text/javascript" src="<?php echo e(URL('vendor/ueditor/1.4.3/ueditor.config.js')); ?>"></script>
<script type="text/javascript" src="<?php echo e(URL('vendor/ueditor/1.4.3/ueditor.all.js')); ?>"> </script>
<script type="text/javascript" src="<?php echo e(URL('vendor/ueditor/1.4.3/lang/zh-cn/zh-cn.js')); ?>"></script>
<script type="text/javascript" src="<?php echo e(URL("/admin/js/newsFormSubmit.js?v=").time()); ?>"></script>
<script>
	layui.use('upload', function(){
		var upload = layui.upload;

		//执行实例
		var uploadInst = upload.render({
			elem: '#upload_test' //绑定元素
			,url: '<?php echo e(URL("api/upload")); ?>?scene=admin' //上传接口
			,done: function(res){
				//上传完毕回调
				if (res.type == "ok"){
					$("#thumbnail").val(res.message)
					$("#img_thumbnail").show()
					$("#img_thumbnail").attr("src",res.message)
				} else{
					alert(res.message)
				}
			}
			,error: function(){
				//请求异常回调
			}
		});

		//执行实例
		var uploadInst1 = upload.render({
			elem: '#img_cover_btn' //绑定元素
			,url: '<?php echo e(URL("api/upload")); ?>?scene=admin' //上传接口
			,done: function(res) {
				console.log(res);
				//上传完毕回调
				if (res.type == "ok"){
					$("#cover").val(res.message)
					$("#img_cover").show()
					$("#img_cover").attr("src",res.message)
				} else{
					alert(res.message)
				}
			}
			,error: function(){
				//请求异常回调
			}
		});
	});
</script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>