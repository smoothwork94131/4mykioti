<?php $__env->startSection('content'); ?>
    <section class="user-dashbord">
        <div class="container">
            <div class="row">
                <?php echo $__env->make('includes.user-dashboard-sidebar', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                <div class="col-lg-8">
                    <?php echo $__env->make('includes.form-success', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                    <div class="user-profile-details">
                        <div class="account-info">
                            <div class="header-area">
                                <h4 class="title">
                                    <?php echo e($langg->lang208); ?>

                                </h4>
                            </div>
                            <div class="edit-info-area">
                            </div>
                            <div class="main-info">
                                <h5 class="title"><?php echo e($user->name); ?></h5>
                                <ul class="list">
                                    <li>
                                        <p><span class="user-title"><?php echo e($langg->lang209); ?>:</span> <?php echo e($user->email); ?></p>
                                    </li>
                                    <?php if($user->phone != null): ?>
                                        <li>
                                            <p><span class="user-title"><?php echo e($langg->lang210); ?>:</span> <?php echo e($user->phone); ?>

                                            </p>
                                        </li>
                                    <?php endif; ?>
                                    <?php if($user->fax != null): ?>
                                        <li>
                                            <p><span class="user-title"><?php echo e($langg->lang211); ?>:</span> <?php echo e($user->fax); ?>

                                            </p>
                                        </li>
                                    <?php endif; ?>
                                    <?php if($user->city != null): ?>
                                        <li>
                                            <p><span class="user-title"><?php echo e($langg->lang212); ?>:</span> <?php echo e($user->city); ?>

                                            </p>
                                        </li>
                                    <?php endif; ?>
                                    <?php if($user->zip != null): ?>
                                        <li>
                                            <p><span class="user-title"><?php echo e($langg->lang213); ?>:</span> <?php echo e($user->zip); ?>

                                            </p>
                                        </li>
                                    <?php endif; ?>
                                    <?php if($user->address != null): ?>
                                        <li>
                                            <p>
                                                <span class="user-title"><?php echo e($langg->lang214); ?>:</span> <?php echo e($user->address); ?>

                                            </p>
                                        </li>
                                    <?php endif; ?>
                                   <!-- <li>
                                        <p>
                                            <span class="user-title"><?php echo e($langg->lang215); ?>:</span> <?php echo e(App\Models\Product::vendorConvertPrice($user->affilate_income)); ?>

                                        </p>
                                    </li> -->
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>



<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.front', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>