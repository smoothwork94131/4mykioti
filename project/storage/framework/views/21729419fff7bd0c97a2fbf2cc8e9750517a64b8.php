<div class="mr-table allproduct mt-4">
    <div class="table-responsiv">
        <table id="product_table" class="table table-hover dt-responsive" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th>Name</th>
                <th>Photo</th>
                <th>Type</th>
                <th>Price</th>
                <th style="text-align:center;">Action</th>
            </tr>
            </thead>
            <tbody>
            <?php $__currentLoopData = $prods; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <tr>
                    <td>
                        <?php echo e($prod->showName()); ?>

                    </td>
                    <td>
                        <img style="width:30px; height: 30px;" src="<?php echo e($prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image)); ?>" alt="">
                    </td>
                    <td>
                        <?php echo e($prod->product_type); ?>

                    </td>
                    <td>
                        <?php echo e($prod->showPrice()); ?>

                    </td>
                    <td style="text-align:center;">
                        <div class="dropdown">
                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-primary">
                                <?php if(Auth::guard('web')->check()): ?>
                                    <span class="dropdown-item add-to-wish" data-href="<?php echo e(route('user-wishlist-add',$prod->id)); ?>"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                <?php else: ?>
                                    <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                <?php endif; ?>
                                <span class="dropdown-item quick-view" data-href="<?php echo e(route('product.quick',$prod->id)); ?>" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                <span class="dropdown-item add-to-compare" data-href="<?php echo e(route('product.compare.add',$prod->id)); ?>"><i class="icofont-exchange"></i>&nbsp;&nbsp;Compare</span>
                                <?php if($prod->product_type == "affiliate"): ?>
                                    <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="<?php echo e(route('affiliate.product', $prod->slug)); ?>"><i class="icofont-cart"></i>&nbsp;&nbsp;<?php echo e($langg->lang251); ?></span>
                                <?php else: ?>
                                    <?php if($prod->emptyStock()): ?>
                                        <span class="dropdown-item add-to-cart-btn cart-out-of-stock" href="#"><i class="icofont-close-circled"></i>&nbsp;&nbsp;<?php echo e($langg->lang78); ?></span>
                                    <?php else: ?>
                                        <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="<?php echo e(route('product.cart.add',$prod->id)); ?>"><i class="icofont-cart"></i>&nbsp;&nbsp;<?php echo e($langg->lang56); ?></span>
                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="<?php echo e(route('product.cart.quickadd',$prod->id)); ?>"><i class="icofont-dollar"></i>&nbsp;&nbsp;<?php echo e($langg->lang251); ?></span>
                                    <?php endif; ?>
                                <?php endif; ?>
                            </div>
                        </div>
                    </td>
                </tr>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </tbody>
        </table>
    </div>
</div>