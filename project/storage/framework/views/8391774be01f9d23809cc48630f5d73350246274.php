<?php $__env->startSection('content'); ?>

    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading"><?php echo e(__('Vendor Product View')); ?> </h4>
                    <ul class="links">
                        <li>
                            <a href="<?php echo e(route('admin.dashboard')); ?>"><?php echo e(__('Dashboard')); ?> </a>
                        </li>
                        <li>
                            <a href="javascript:;"><?php echo e(__('Product View Setting')); ?> </a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('admin-productview-vendor')); ?>"><?php echo e(__('Vendor Product View')); ?> </a>
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
                            <form id="geniusform" action="<?php echo e(route('admin-productview-vendor-store')); ?>" method="POST">
                                <?php echo e(csrf_field()); ?>


                                <?php echo $__env->make('includes.admin.form-both', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>

                                <div class="row">
                                    <div class="col-lg-4 col-md-6">
                                        <div class="prod-style-title" style="display:flex; align-items: center; justify-content: space-between">
                                            <div class="form-group">
                                                <label class="control-label" for="productview-1"><?php echo e(__('Style 1')); ?></label>
                                                <input type="radio" name="productview" id="productview-1" value="0" <?php if(json_decode($gs->product_view)->product == 0): ?> checked <?php endif; ?>>
                                            </div>
                                            <div class="form-group">
                                                <a href="<?php echo e(route('admin-productview-color', array('type' => 3, 'style_id' => 1))); ?>" class="add-btn">
                                                    <i class="fas fa-edit"></i> 
                                                    <span class="remove-mobile">
                                                        Color Setting<span></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="item-img">
                                                <div class="sell-area">
                                                    <span class="sale" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->tag_bg_color? $colorsetting_style1->tag_bg_color: '#000000'); ?>; color: <?php echo e($colorsetting_style1 && $colorsetting_style1->tag_color? $colorsetting_style1->tag_color: '#ffffff'); ?>">Electric dab rig</span>
                                                </div>
                                                <div class="extra-list">
                                                    <ul>
                                                        <li> 
                                                            <span rel-toggle="tooltip" title="" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                                                <i class="icofont-heart-alt"></i>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span class="quick-view" rel-toggle="tooltip" title="" data-original-title="Quick View" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <span class="add-to-compare" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                                                <i class="icofont-exchange"></i>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <img class="img-fluid" src="<?php echo e(asset('assets/images/product-view-style1.png')); ?>" alt="">
                                            </div>
                                            <div class="info">
                                                <div class="stars">
                                                    <div class="ratings">
                                                        <div class="empty-stars"></div>
                                                        <div class="full-stars" style="width:0%"></div>
                                                    </div>
                                                </div>
                                                <h4 class="price" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->price_color? $colorsetting_style1->price_color : '#333333'); ?>">$79
                                                    <del><small></small></del>
                                                </h4>
                                                <h5 class="name" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->title_color? $colorsetting_style1->title_color: '#333333'); ?>">Electric Nail</h5>


                                                <div class="item-cart-area">
                                                    <span class="add-to-cart add-to-cart-btn" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                                        <i class="icofont-cart"></i> Add To Cart
                                                    </span>
                                                    <span class="add-to-cart-quick add-to-cart-btn" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                                        <i class="icofont-cart"></i> Buy Now
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>




                                    <div class="col-lg-4 col-md-6">
                                        <div class="prod-style-title" style="display:flex; align-items: center; justify-content: space-between">
                                            <div class="form-group">
                                                <label class="control-label" for="productview-2"><?php echo e(__('Style 2')); ?></label>
                                                <input type="radio" name="productview" id="productview-2" value="1" <?php if(json_decode($gs->product_view)->product == 1): ?> checked <?php endif; ?>>
                                            </div>
                                            <div class="form-group">
                                                <a href="<?php echo e(route('admin-productview-color', array('type' => 3, 'style_id' => 2))); ?>" class="add-btn">
                                                    <i class="fas fa-edit"></i> 
                                                    <span class="remove-mobile">
                                                        Color Setting<span></span>
                                                    </span>
                                                </a>
                                            </div>
                                        </div>

                                        <a href="#" class="prod-item item">            
                                            <div class="prod-init">
                                                <div class="prod-top">
                                                    <h2 class="prod-name" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->title_color? $colorsetting_style2->title_color: '#333333'); ?>">GG4 6" Rooted Clones</h2>
                                                </div> 
                                                
                                                <p class="prod-tag">
                                                    <span class="sale" style="background-color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_bg_color? $colorsetting_style2->tag_bg_color : '#84a45a'); ?>; color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_color? $colorsetting_style2->tag_color: '#000000'); ?>">GG4 Clones</span>
                                                </p>

                                                <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->detail_color? $colorsetting_style2->detail_color: '#333333'); ?>">
                                                    GG4 is a powerful hybrid with a strong, distinct nose.
                                                </p>
                                                
                                                <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333'); ?>">
                                                    <small>Parents: Sour Diesel, Sour Dubb, Chem's Sister, Chocolate Diesel</small>
                                                </p>

                                                <p class="prod-price" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->price_color? $colorsetting_style2->price_color: '#333333'); ?>">
                                                    $11.03 
                                                    <del><small></small></del>
                                                </p>
                                            </div>


                                            <div class="prod-effect">
                                                <div class="extra-list">
                                                    <ul>
                                                        <li>
                                                            
                                                            <span rel-toggle="tooltip" title="" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" data-original-title="Add To Wishlist" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                                                <i class="icofont-heart-alt"></i>
                                                            </span>

                                                        </li>
                                                        <li>
                                                        <span class="quick-view" rel-toggle="tooltip" title="" href="javascript:;" data-toggle="modal" data-target="#quickview" data-placement="right" data-original-title="Quick View" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
                                                        </span>
                                                        </li>
                                                        <li>
                                                            <span class="add-to-compare" data-toggle="tooltip" data-placement="right" title="" data-original-title="Compare" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                                                <i class="icofont-exchange"></i>
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>

                                            <div class="info">
                                                <div class="stars">
                                                    <div class="ratings">
                                                        <div class="empty-stars">
                                                            
                                                        </div>
                                                        <div class="full-stars" style="width:0%"></div>
                                                    </div>
                                                </div>
                                                <h4 class="price">$79 <del><small></small></del></h4>
                                                <h5 class="name">Electric Nail</h5>
                                                <div class="cart-area">
                                                    <span class="add-to-cart add-to-cart-btn" style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                                        <i class="icofont-cart"></i> Add To Cart
                                                    </span>
                                                    <span class="add-to-cart-quick add-to-cart-btn" style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                                        <i class="icofont-cart"></i> Buy Now
                                                    </span>
                                                </div>
                                            </div>


                                            <img class="prod-image" src="<?php echo e(asset('assets/images/product-view-style2.png')); ?>" alt="">
                                        </a>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-6">
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
<?php echo $__env->make('layouts.admin', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>