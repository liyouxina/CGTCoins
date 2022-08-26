<?php $__env->startSection('title', '充币列表'); ?>

<?php $__env->startSection('page-head'); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-content'); ?>

<div class="layui-fluid">
    <div class="layui-card">
        <div class="layui-form layui-card-header layuiadmin-card-header-auto" lay-filter="layadmin-userfront-formlist">
            <div class="layui-form-item">
                
                <div class="layui-inline">
                        <label class="layui-form-label">币种</label>
                        <div class="layui-input-block" style="width:130px;">
                            <select name="currency_id" >
                                <option value="-1" class="ww">全部</option>
                                <?php $__currentLoopData = $legal_currencies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $currency): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <option value="<?php echo e($currency->id); ?>" class="ww"><?php echo e($currency->name); ?></option>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </select>
                        </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">用户名</label>
                    <div class="layui-input-block">
                        <input type="text" name="account_number" placeholder="请输入" autocomplete="off" class="layui-input">
                    </div>
                </div>
                <div class="layui-inline">
                    <label class="layui-form-label">所属代理</label>
                    <div class="layui-input-block" style="width:130px;">
                        <select name="belong_agent" >
                            <option value="" >全部</option>
                            <?php $__currentLoopData = $son_agents; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $son): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($son->username); ?>"><?php echo e($son->username); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                </div>
                
                <div class="layui-inline">
                    <button class="layui-btn layuiadmin-btn-useradmin" lay-submit lay-filter="LAY-user-front-search">
                        <i class="layui-icon layui-icon-search layuiadmin-button-btn"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="layui-card-body">
            <table id="LAY-user-manage" lay-filter="LAY-user-manage"></table>
            
        </div>
    </div>
</div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>

<script>
    layui.use(['index','table' , 'layer'], function() {
        var $ = layui.$
            ,admin = layui.admin
            ,view = layui.view
            ,table = layui.table
            ,form = layui.form
            
       
     
        
        //充币管理
        table.render({
            elem: '#LAY-user-manage'
            ,method : 'get'
            ,url: '/agent/capital/recharge'
            ,toolbar: true
            ,totalRow: true
            ,cols: [[
                {type: 'checkbox', fixed: 'left'}
                ,{field: 'id', width: 60, title: 'ID', sort: true }
                ,{field: 'name', title: '币种', width: 90}
                ,{field: 'account_number', title: '用户名', width: 120, totalRowText: '小计'}
                ,{field: 'belong_agent_name', title: '所属代理', width: 120}
                ,{field: 'amount', title: '充币数量', width: 150, totalRow: true}
                ,{field: 'status', title: '状态', width: 200,templet:function(d){
                    if(d.status==1){
                        return '审核中'
                    }else if(d.status==2){
                        return '充值通过';
                    }else if(d.status==3){
                        return '充值失败';
                    }
                }}
                // ,{field: 'info', title: '说明', width: 200}
                ,{field: 'created_at', title: '充值时间', width: 170}
                // ,{field: 'updated_at', title: '到账时间', width: 170}
            ]]
            ,page: true
            ,limit: 30
            ,height: 'full-240'
            ,text: '对不起，加载出现异常！'
            
            ,done: function(res) { //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行
                if (res !== 0 ){
                    if (res.code === 1001) {
                        //清空本地记录的 token，并跳转到登入页
                        admin.exit();
                    }
                }
            }
        });

        form.render(null, 'layadmin-userfront-formlist');

        //监听搜索
        form.on('submit(LAY-user-front-search)', function(data){
            var field = data.field;

            //执行重载
            table.reload('LAY-user-manage', {
                where: field
                ,page: {
                    curr: 1 //重新从第 1 页开始
                }
                ,done: function(res){ //这里要说明一下：done 是只有 response 的 code 正常才会执行。而 succese 则是只要 http 为 200 就会执行

                    if (res.code === 1001) {
                        //清空本地记录的 token，并跳转到登入页
                        admin.exit();
                    }

                    if (res.code === 1){
                        layer.msg(res.msg ,{icon : 5});
                    }
                }
            });
        });

    });
</script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('agent.layadmin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>