<?php $__env->startSection('content'); ?>

    <div class="content-area">

        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                        <div class="row">
                                <div class="col-lg-12">
                                    <div class="mr-table allproduct">
                                        <div class="table-responsiv">
                                            <form action="<?php echo e(route('admin-tempcart-update',$data->id)); ?>" method="POST">
                                            <?php echo e(csrf_field()); ?>

                                                <table class="table table-hover dt-responsive" cellspacing="0"
                                                width="100%">
                                                <thead>
                                                <tr>
                                                    <th><?php echo e(__('Name')); ?></th>
                                                    <th><?php echo e(__('Image')); ?></th>
                                                    <th><?php echo e(__('Price')); ?></th>
                                                    <th><?php echo e(__('Weight')); ?></th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                <?php $__currentLoopData = $cart->items; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key=>$prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>    
                                                <tr>
                                                    <td><?php echo e($prod->item->name); ?></td>
                                                    <td>
                                                        <img src="<?php echo e($prod->item->photo ? asset('assets/images/products/'.$prod->item->photo):asset('assets/images/noimage.png')); ?>"
                                                         alt="">
                                                    </td>
                                                    <td>
                                                        <?php echo e($prod->item->price); ?> * <?php echo e($prod->qty); ?>

                                                    </td>
                                                    <td>
                                                        <?php if($prod->item->file): ?>
                                                        <?php echo e($prod->item->file); ?>

                                                        <?php else: ?>
                                                        <input type="number" name="<?php echo e($key); ?>" required>
                                                        <?php endif; ?>
                                                    </td>
                                                </tr>
                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </tbody>
                                                </table>
                                                <button type="submit">Add Weights and Notify User</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>