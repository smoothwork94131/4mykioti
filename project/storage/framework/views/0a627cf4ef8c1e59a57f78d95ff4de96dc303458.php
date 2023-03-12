<?php if(json_decode($gs->product_view)->filtered == 0): ?>
    <?php if(count($prods) > 0): ?>
        <?php $__currentLoopData = $prods; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-lg-3 col-md-6 col-12 remove-padding">
                <a href="<?php echo e(route('front.product', $prod->slug)); ?>" class="item">
                    <div class="item-img">
                        <?php if(!empty($prod->features)): ?>
                        <div class="sell-area">
                            <?php $__currentLoopData = $prod->features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $data1): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <span class="sale" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->tag_bg_color? $colorsetting_style1->tag_bg_color: '#000000'); ?>; color: <?php echo e($colorsetting_style1 && $colorsetting_style1->tag_color? $colorsetting_style1->tag_color: '#ffffff'); ?>"><?php echo e($prod->features[$key]); ?></span>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                        <?php endif; ?>
                        <div class="extra-list">
                            <ul>
                                <li>
                                    <?php if(Auth::guard('web')->check()): ?>

                                    <span class="add-to-wish" data-href="<?php echo e(route('user-wishlist-add',$prod->id)); ?>" data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang54); ?>" data-placement="right" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;"><i class="icofont-heart-alt" ></i>
                                    </span>

                                    <?php else: ?>

                                    <span rel-toggle="tooltip" title="<?php echo e($langg->lang54); ?>" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                        <i class="icofont-heart-alt"></i>
                                    </span>

                                    <?php endif; ?>
                                </li>
                                <li>
                                <span class="quick-view" rel-toggle="tooltip" title="<?php echo e($langg->lang55); ?>" href="javascript:;" data-href="<?php echo e(route('product.quick',$prod->id)); ?>" data-toggle="modal" data-target="#quickview" data-placement="right"  style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
                                </span>
                                </li>
                                <li>
                                    <span class="add-to-compare" data-href="<?php echo e(route('product.compare.add',$prod->id)); ?>"  data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang57); ?>" data-placement="right"  style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                        <i class="icofont-exchange"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <img class="img-fluid" style="max-width:125px; max-height: 150px;"  src="<?php echo e($prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png')); ?>" alt="">
                    </div>
                    <div class="info">
                        <div class="stars">
                            <div class="ratings">
                                <div class="empty-stars">
                                    
                                </div>
                                <div class="full-stars" style="width:<?php echo e(App\Models\Rating::ratings($prod->id)); ?>%"></div>
                            </div>
                        </div>
                        <h4 class="price" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->price_color? $colorsetting_style1->price_color : '#333333'); ?>"><?php echo e($prod->setCurrency()); ?> <del><small><?php echo e($prod->showPreviousPrice()); ?></small></del></h4>
                        <h5 class="name" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->title_color? $colorsetting_style1->title_color: '#333333'); ?>"><?php echo e($prod->showName()); ?></h5>
                        <div class="item-cart-area">
                        <?php if($prod->product_type == "affiliate"): ?>
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="<?php echo e(route('affiliate.product', $prod->slug)); ?>"><i class="icofont-cart"></i>
                                <?php echo e($langg->lang251); ?>

                            </span>
                        <?php else: ?>
                            <?php if($prod->emptyStock()): ?>
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> <?php echo e($langg->lang78); ?>

                            </span>
                            <?php else: ?>
                            <span class="add-to-cart add-to-cart-btn" data-href="<?php echo e(route('product.cart.add',$prod->id)); ?>" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang56); ?>

                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="<?php echo e(route('product.cart.quickadd',$prod->id)); ?>" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang251); ?>

                            </span>
                            <?php endif; ?>
                        <?php endif; ?>
                        </div>
                    </div>
                </a>
            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-12">
            <div class="page-center mt-5">
                <?php echo $prods->appends(['search' => request()->input('search')])->links(); ?>

            </div>
        </div>
    <?php else: ?>
        <div class="col-lg-12">
            <div class="page-center">
                <h4 class="text-center"><?php echo e($langg->lang60); ?></h4>
            </div>
        </div>
    <?php endif; ?>
<?php endif; ?>


<?php if(json_decode($gs->product_view)->filtered == 1): ?>
    <?php if(count($prods) > 0): ?>
        <?php $__currentLoopData = $prods; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-lg-4 col-md-6 col-12  margin-custome-0">


            <a href="<?php echo e(route('front.product', $prod->slug)); ?>" class="prod-item item">            
                <div class="prod-init">
                    <div class="prod-top">
                        
                        <h2 class="prod-name"  style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->title_color? $colorsetting_style2->title_color: '#333333'); ?>">
                        <?php echo e($prod->name); ?>

                    </h2>
                    </div> 
                    
                    <p class="prod-tag">
                    <?php if($prod->features): ?>
                        <?php $__currentLoopData = $prod->features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $data1): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <span class="sale"  style="background-color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_bg_color? $colorsetting_style2->tag_bg_color : '#84a45a'); ?>; color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_color? $colorsetting_style2->tag_color: '#000000'); ?>"><?php echo e($prod->features[$key]); ?></span>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    <?php endif; ?>
                    </p>

                    <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->detail_color? $colorsetting_style2->detail_color: '#333333'); ?>">
                        
                    </p>
                    
                    <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333'); ?>">	
                        <small>Model #: <?php echo $prod->category_id;  ?></small>
                        <br>
                        <small>Part #: <?php echo $prod->sku;  ?></small>
                    </p>

                    <p class="prod-price" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->price_color? $colorsetting_style2->price_color: '#333333'); ?>">
                        <?php echo e($prod->price); ?> 
                        <del><small><?php echo e($prod->previous_price); ?></small></del>
                    </p>

                   
                </div>

                <div class="prod-effect item">
                    <div class="extra-list">
                        <ul>
                            <li>
                                <?php if(Auth::guard('web')->check()): ?>

                                <span class="add-to-wish" data-href="<?php echo e(route('user-wishlist-add',$prod->id)); ?>" data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang54); ?>" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;"><i class="icofont-heart-alt"></i>
                                </span>

                                <?php else: ?>

                                <span rel-toggle="tooltip" title="<?php echo e($langg->lang54); ?>" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                    <i class="icofont-heart-alt"></i>
                                </span>

                                <?php endif; ?>
                            </li>
                            <li>
                                <span class="quick-view" rel-toggle="tooltip" title="<?php echo e($langg->lang55); ?>" href="javascript:;" data-href="<?php echo e(route('product.quick',$prod->id)); ?>" data-toggle="modal" data-target="#quickview" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
                                </span>
                            </li>
                            <li>
                                <span class="add-to-compare" data-href="<?php echo e(route('product.compare.add',$prod->id)); ?>"  data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang57); ?>" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
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
                                <div class="full-stars" style="width:<?php echo e(App\Models\Rating::ratings($prod->id)); ?>%"></div>
                            </div>
                        </div>
                        <h5 class="name">
                        $ <del><small><?php echo e($prod->previous_price); ?></small></del>
                        <?php echo e($prod->name); ?>

                        <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333'); ?>">	
                            <small>Models #: <?php echo $prod->category_id;  ?></small>
                        </p>
                        </h5>
                        <div class="cart-area">
                        <?php if($prod->product_type == "affiliate"): ?>
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="<?php echo e(route('affiliate.product', $prod->slug)); ?>"><i class="icofont-cart"></i>
                                <?php echo e($langg->lang251); ?>

                            </span>
                        <?php else: ?>
                            
                            <span class="add-to-cart add-to-cart-btn" data-href="<?php echo e(route('product.cart.add',$prod->id)); ?>"  style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang56); ?>

                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="<?php echo e(route('product.cart.quickadd',$prod->id)); ?>" style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang251); ?>

                            </span>
                        <?php endif; ?>
                        </div>
                </div>
                <img class="prod-image" style="max-width:125px; max-height: 150px;"  src="<?php echo e($prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image)); ?>" alt="">
            </a>

            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-12">
            <div class="page-center mt-5">
                <?php echo $prods->appends(['search' => request()->input('search')])->links(); ?>

            </div>
        </div>
    <?php else: ?>
        <div class="col-lg-12">
            <div class="page-center">
                <h4 class="text-center"><?php echo e($langg->lang60); ?></h4>
            </div>
        </div>
    <?php endif; ?>
<?php endif; ?>

<?php if(isset($ajax_check)): ?>
    <script type="text/javascript">
        // Tooltip Section
        $('[data-toggle="tooltip"]').tooltip({});
        $('[data-toggle="tooltip"]').on('click', function () {
            $(this).tooltip('hide');
        });

        $('[rel-toggle="tooltip"]').tooltip();

        $('[rel-toggle="tooltip"]').on('click', function () {
            $(this).tooltip('hide');
        });

        // Tooltip Section Ends
    </script>
<?php endif; ?>