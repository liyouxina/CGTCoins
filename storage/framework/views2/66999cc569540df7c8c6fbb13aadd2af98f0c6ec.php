<?php $__env->startSection('page-head'); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-content'); ?>
    <div style="margin-top: 10px;width: 100%;margin-left: 10px;">


        <form class="layui-form layui-form-pane layui-inline" action="">
            <div class="layui-inline">
                <label class="layui-form-label">币种</label>
                <div class="layui-input-inline" style="width: 120px;">
                    <select name="currency">
                        <option value="0">全部</option>
                        <?php $__currentLoopData = $currencies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $value): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <option value="<?php echo e($value->id); ?>"><?php echo e(strtoupper($value->name)); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </select>
                </div>
            </div>
            <!--<div class="layui-inline" style="margin-left: 50px;">-->
            <!--    <label class="layui-form-label">用户名</label>-->
            <!--    <div class="layui-input-inline">-->
            <!--        <input type="text" name="account_number" autocomplete="off" class="layui-input">-->
            <!--    </div>-->
            <!--</div>-->
            <div class="layui-inline">
                <div class="layui-input-inline">
                    <button class="layui-btn" lay-submit="search" lay-filter="search"><i class="layui-icon">&#xe615;</i></button>
                </div>
            </div>




        </form>

    </div>



    <table id="demo" lay-filter="test"></table>
    <script type="text/html" id="barDemo">



    </script>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>

        layui.use(['table','form'], function(){
            var table = layui.table;
            var $ = layui.jquery;
            var form = layui.form;
            //第一个实例
            var data_table= table.render({
                elem: '#demo'
                ,url: "<?php echo e(url('admin/wallet/ztpay/log')); ?>" //数据接口
                ,page: true //开启分页
                ,id:'mobileSearch'
                ,cols: [[ //表头
                    {field: 'id', title: 'ID', width:80, sort: true}
                    ,{field: 'account_number', title: '用户名', width:100}
                    ,{field: 'currency_name', title: '虚拟币', width:80}
                    ,{field: 'amount', title: '数量', minWidth:80}
                    ,{field: 'unique_key', title: '哈希', minWidth:80}
                    ,{field: 'add_from', title: '充值来源', minWidth:100}
                    ,{field: 'add_to', title: '充值地址', minWidth:100}
                    // ,{field: 'address_3', title: '地址TRC', minWidth:100}
                    // ,{field: 'created_time', title: '充币时间', minWidth:180}

                ]]
            });
            form.on('submit(search)', function (data) {
                data_table.reload({
                    where: data.field
                    ,page: {
                        curr: 1 //重新从第 1 页开始
                    }
                });
                return false;
            });
            //监听热卖操作
            // form.on('switch(sexDemo)', function(obj){
            //     var id = this.value;
            //     $.ajax({
            //         url:'<?php echo e(url('admin/product_hot')); ?>',
            //         type:'post',
            //         dataType:'json',
            //         data:{id:id},
            //         success:function (res) {
            //             if(res.error != 0){
            //                 layer.msg(res.msg);
            //             }
            //         }
            //     });
            // });
        })


        //监听提交

    </script>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>