<?php $__env->startSection('content'); ?>
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading"><?php echo e(__('Site Mode')); ?></h4>
                    <ul class="links">
                        <li>
                            <a href="<?php echo e(route('admin.dashboard')); ?>"><?php echo e(__('Dashboard')); ?> </a>
                        </li>
                        <li>
                            <a href="javascript:;"><?php echo e(__('General Settings')); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('admin-gs-solo')); ?>"><?php echo e(__('Site Mode')); ?></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                            <div class="gocover" style="background: url(<?php echo e(asset('assets/images/'.$gs->admin_loader)); ?>) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>
                            <form action="<?php echo e(route('admin-gs-solo-save')); ?>" id="geniusform" method="POST" enctype="multipart/form-data">
                                <?php echo e(csrf_field()); ?>


                                <?php echo $__env->make('includes.admin.form-both', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Site Mode')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select data-menu="solo" name="solo_mode" class="process select droplinks <?php if($gs->solo_mode == 0): ?> drop-danger <?php elseif($gs->solo_mode == 1): ?> drop-warning <?php else: ?> drop-success <?php endif; ?>">
                                                <option data-val="0" value="0" <?php echo e($gs->solo_mode == 0 ? 'selected' : ''); ?>><?php echo e(__('Normal Mode')); ?></option>
                                                <option data-val="1" value="1" <?php echo e($gs->solo_mode == 1 ? 'selected' : ''); ?>><?php echo e(__('Solo Mode')); ?></option>
                                                <option data-val="2" value="2" <?php echo e($gs->solo_mode == 2 ? 'selected' : ''); ?>><?php echo e(__('Smart Mode')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center"  id="submit_area" style="display: <?php echo e($gs->solo_mode == 1? 'flex': 'none'); ?>">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__("Category")); ?>*</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <select name="category" id="category" <?php if($gs->solo_mode == 1): ?> required="" <?php endif; ?>>
                                            <option value=""><?php echo e(__("Select Category")); ?></option>
                                            <?php $__currentLoopData = $cats; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <?php if($gs->solo_mode == 1): ?>
                                                    <option value="<?php echo e($cat->id); ?>" <?php echo e($gs->solo_category == $cat->id ? 'selected' : ''); ?>><?php echo e($cat->name); ?></option>
                                                <?php else: ?>
                                                    <option value="<?php echo e($cat->id); ?>"><?php echo e($cat->name); ?></option>
                                                <?php endif; ?>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </select>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <button class="addProductSubmit-btn" type="submit"><?php echo e(__('Save')); ?></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>

<script type="text/javascript">
    $(".droplinks").on('change', function() {
        var solo_mode = $(this).find(':selected').attr('data-val');
        if(solo_mode == 1) {
            $("#submit_area").show();
            $("#category").attr("required", "");
        }
        else {
            $("#category").attr("required", false);
            $("#submit_area").hide();
        }
    })
</script>
<?php $__env->stopSection(); ?>   
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>