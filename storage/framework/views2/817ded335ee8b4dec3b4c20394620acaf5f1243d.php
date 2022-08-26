<?php $__env->startSection('page-head'); ?>
    <style>
        .layui-form-label {
            width: 150px;
        }
        .layui-input-block {
            margin-left: 180px;
        }
    </style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('page-content'); ?>

    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">地址</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->address); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->private); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址OMNI</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->address_2); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥OMNI</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->private_2); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址TRC</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->address_3); ?>" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥TRC</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="<?php echo e($result->private_3); ?>" disabled>
            </div>
        </div>
    </form>

<?php $__env->stopSection(); ?>

<?php echo $__env->make('admin._layoutNew', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>