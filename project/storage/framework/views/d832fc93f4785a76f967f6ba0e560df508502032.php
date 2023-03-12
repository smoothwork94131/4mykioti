<?php $__env->startSection('content'); ?>

    <div class="content-area">

        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                            <?php echo $__env->make('includes.admin.form-error', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                            <form id="geniusformdata" action="<?php echo e(route('admin-shipping-create')); ?>" method="POST"
                                  enctype="multipart/form-data">
                                <?php echo e(csrf_field()); ?>


                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Title')); ?> *</h4>
                                            <p class="sub-heading"><?php echo e(__('(In Any Language)')); ?></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="input-field" name="title"
                                               placeholder="<?php echo e(__('Title')); ?>" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Duration')); ?> *</h4>
                                            <p class="sub-heading"><?php echo e(__('(In Any Language)')); ?></p>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="input-field" name="subtitle"
                                               placeholder="<?php echo e(__('Duration')); ?>" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Price')); ?> *</h4>
                                            <p class="sub-heading">(<?php echo e(__('In')); ?> <?php echo e($sign->name); ?>)</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="number" class="input-field" name="price"
                                               placeholder="<?php echo e(__('Price')); ?>" required="" value="" min="0" step="0.01">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Trigger Price')); ?> *</h4>
                                            <p class="sub-heading">(<?php echo e(__('In')); ?> <?php echo e($sign->name); ?>)</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="number" class="input-field" name="triggerprice"
                                               placeholder="<?php echo e(__('Trigger Price')); ?>" required="" value=""
                                               min="0" step="0.01">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <button class="addProductSubmit-btn" type="submit"><?php echo e(__('Create')); ?></button>
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
<?php echo $__env->make('layouts.load', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>