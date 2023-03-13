<?php $__env->startSection('content'); ?>

    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages parts-by-model-title">
                        <li>
                            <a href="<?php echo e(route('front.index')); ?>">
                                <?php echo e($langg->lang17); ?>

                            </a>
                        </li>
                        <li>
                            <a href="javascript:location.reload();">
                                Tractors
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->

    <input type="hidden" id="isSchematics" value="1">

    <section class="faq-section">
        <div class="container">
            <div class="row justify-content-center m-block-content">
                    <?php $__currentLoopData = $eccategories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php $__currentLoopData = $product->where('product', $product->product)->select('series')->distinct()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $series): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="col col-md-3 col-sm-4">
                                <div class="m-block" data-type="model"
                                                data-series="<?php echo e($series->series); ?>"
                                                data-url="<?php echo e(route('front.groups')); ?>" 
                                                data-status="0" data-token="<?php echo e(csrf_token()); ?>">
                                                <?php echo e($series->series); ?>

                                </div>
                                
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </div>
    </section>
    <!-- faq Area End-->

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.front', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>