<?php if(json_decode($gs->product_view)->home == 0): ?>
    <?php if(count($solo_products) > 0): ?>
        <?php $__currentLoopData = $solo_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $solo_prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <?php
            $colors = ["s-red", "s-blue", "s-yellow", "s-green"];
            $color = $colors[$key % 4]
            ?>


            <div class="col-lg-3 col-md-6 col-12">
                <a href="<?php echo e(route('front.product', $solo_prod->slug)); ?>" class="item <?php echo e($color); ?>">
                    <div class="item-img">
                        <?php if(!empty($solo_prod->features)): ?>
                        <div class="sell-area">
                            <?php $__currentLoopData = $solo_prod->features; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $data1): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <span class="sale" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->tag_bg_color? $colorsetting_style1->tag_bg_color: '#000000'); ?>; color: <?php echo e($colorsetting_style1 && $colorsetting_style1->tag_color? $colorsetting_style1->tag_color: '#ffffff'); ?>"><?php echo e($solo_prod->features[$key]); ?></span>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </div>
                        <?php endif; ?>
                        <div class="extra-list">
                            <ul>
                                <li>
                                    <?php if(Auth::guard('web')->check()): ?>

                                    <span class="add-to-wish" data-href="<?php echo e(route('user-wishlist-add',$solo_prod->id)); ?>" data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang54); ?>" data-placement="right" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;"><i class="icofont-heart-alt" ></i>
                                    </span>

                                    <?php else: ?>

                                    <span rel-toggle="tooltip" title="<?php echo e($langg->lang54); ?>" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                        <i class="icofont-heart-alt"></i>
                                    </span>

                                    <?php endif; ?>
                                </li>
                                <li>
                                    <span class="quick-view" rel-toggle="tooltip" title="<?php echo e($langg->lang55); ?>" href="javascript:;" data-href="<?php echo e(route('product.quick',$solo_prod->id)); ?>" data-toggle="modal" data-target="#quickview" data-placement="right"  style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
                                    </span>
                                </li>
                                
                            </ul>
                        </div>
                        <img class="img-fluid" src="<?php echo e($solo_prod->thumbnail ? asset('assets/images/thumbnails/'.$solo_prod->thumbnail):asset('assets/images/noimage.png')); ?>" alt="">
                    </div>
                    <div class="info">
                        <div class="stars">
                            <div class="ratings">
                                <div class="empty-stars">
                                    
                                </div>
                                <div class="full-stars" style="width:<?php echo e(App\Models\Rating::ratings($solo_prod->id)); ?>%"></div>
                            </div>
                        </div>
                        <h4 class="price" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->price_color? $colorsetting_style1->price_color : '#333333'); ?>"><?php echo e($solo_prod->setCurrency()); ?> <del><small><?php echo e($solo_prod->showPreviousPrice()); ?></small></del></h4>
                        <h5 class="name" style="color: <?php echo e($colorsetting_style1 && $colorsetting_style1->title_color? $colorsetting_style1->title_color: '#333333'); ?>"><?php echo e($solo_prod->showName()); ?></h5>
                        <div class="item-cart-area">
                        <?php if($solo_prod->product_type == "affiliate"): ?>
                            <span class="add-to-cart-btn affilate-btn" data-href="<?php echo e(route('affiliate.product', $solo_prod->slug)); ?>"><i class="icofont-cart"></i>
                                <?php echo e($langg->lang251); ?>

                            </span>
                        <?php else: ?>
                            <?php if($solo_prod->emptyStock()): ?>
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> <?php echo e($langg->lang78); ?>

                            </span>
                            <?php else: ?>
                            <span class="add-to-cart add-to-cart-btn" data-href="<?php echo e(route('product.cart.add',['db' => 'products', 'id' => $solo_prod->id])); ?>" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang56); ?>

                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="<?php echo e(route('product.cart.quickadd',['db' => 'products', 'id' => $solo_prod->id])); ?>" style="background-color:<?php echo e($colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green'); ?>;">
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
                <?php echo $solo_products->appends(['search' => request()->input('search'), 'sort' => request()->input('sort')])->links(); ?>

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

<?php if(json_decode($gs->product_view)->home == 1): ?>
    <?php if(count($solo_products) > 0): ?>
        <?php $__currentLoopData = $solo_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $solo_prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

        <?php
            $colors = ["s-red", "s-blue", "s-yellow", "s-green"];
            $color = $colors[$key % 4]
            ?>

            <div class="col-lg-3 col-md-6 col-12  margin-custome-0">

            <a href="<?php echo e(route('front.product', $solo_prod->slug)); ?>" class="prod-item item">            
                <div class="prod-init">
                    <div class="prod-top">
                        <h2 class="prod-name"  style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->title_color? $colorsetting_style2->title_color: '#333333'); ?>">
                        <?php echo e($solo_prod->showName()); ?>

                    </h2>
                    </div> 
                    
                    <p class="prod-tag">
                    
                        <span class="sale"  style="background-color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_bg_color? $colorsetting_style2->tag_bg_color : '#84a45a'); ?>; color: <?php echo e($colorsetting_style2 && $colorsetting_style2->tag_color? $colorsetting_style2->tag_color: '#000000'); ?>"><?php echo e($solo_prod->subcategory_id); ?></span>
                        
                    </p>
                    <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->detail_color? $colorsetting_style2->detail_color: '#333333'); ?>">
                        <?php
                            $str=$solo_prod->showDetails();					
                            if (strlen($str) > 60)
                            {
                                $str2 = substr($str, 0, 57);
                                $str2 = $str2.'...';
                            }
                            else
                            {
                                $str2 = $str;
                            }						
                        ?>
                        <?php 
                            echo $str2;
                        ?>
                    </p>
                    
                    <?php if($solo_prod->showParent() && $solo_prod->showParent() != '<br>'): ?>
                        <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333'); ?>">	
                            <small>Model #: <?php echo $solo_prod->category_id;  ?></small></br>
                            <small>Part #: <?php echo $solo_prod->sku;  ?></small>
                        </p>
                    <?php endif; ?>

                    <p class="prod-price" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->price_color? $colorsetting_style2->price_color: '#333333'); ?>">
                        <?php echo e($solo_prod->showPrice()); ?> 
                        <del><small><?php echo e($solo_prod->showPreviousPrice()); ?></small></del>
                    </p>

                    <?php if($solo_prod->showEffects()): ?>
                        <?php
                            $segments = explode(', ', $solo_prod->showEffects());
                            $arrayLength = count($segments);
                        ?>
                        <p style="display:flex; align-items: center; ">
                            <?php
                            $i = 0;
                            while ($i < $arrayLength)
                            {
                                if(!str_contains($segments[$i], 'pain')) {
                            ?>
                                <img src="<?php echo e(asset('assets/images/effects/'. $segments[$i] . '.png')); ?>" alt="Users report feeling <?php echo e($segments[$i]); ?>." style="margin-right: 3px; margin-left: 3px; font-size: 8px; line-height:10px; object-fit: contain; width: unset; height: 30px;">
                            <?php 
                                } else { ?>
                                <img src="<?php echo e(asset('assets/images/effects/pain-relief.png')); ?>" alt="Users report feeling Pain." style="margin-right: 3px; margin-left: 3px; font-size: 8px; line-height:10px; object-fit: contain; width: unset; height: 30px;">
                            <?php
                                }
                            ?>
                            <?php
                                $i++; 
                            }
                            ?>
                        </p>		
                    <?php endif; ?>
                </div>

                <div class="prod-effect item">
                    <div class="extra-list">
                        <ul>
                            <li>
                                <?php if(Auth::guard('web')->check()): ?>

                                <span class="add-to-wish" data-href="<?php echo e(route('user-wishlist-add',$solo_prod->id)); ?>" data-toggle="tooltip" data-placement="right" title="<?php echo e($langg->lang54); ?>" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;"><i class="icofont-heart-alt"></i>
                                </span>

                                <?php else: ?>

                                <span rel-toggle="tooltip" title="<?php echo e($langg->lang54); ?>" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                    <i class="icofont-heart-alt"></i>
                                </span>

                                <?php endif; ?>
                            </li>
                            <li>
                            <span class="quick-view" rel-toggle="tooltip" title="<?php echo e($langg->lang55); ?>" href="javascript:;" data-href="<?php echo e(route('product.quick',$solo_prod->id)); ?>" data-toggle="modal" data-target="#quickview" data-placement="right" style="color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;"> <i class="icofont-eye"></i>
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
                                <div class="full-stars" style="width:<?php echo e(App\Models\Rating::ratings($solo_prod->id)); ?>%"></div>
                            </div>
                        </div>
                        <h5 class="name">
                        <?php echo e($solo_prod->setCurrency()); ?> <del><small><?php echo e($solo_prod->showPreviousPrice()); ?></small></del>
                        <?php echo e($solo_prod->showName()); ?>


                        <?php if($solo_prod->showParent() && $solo_prod->showParent() != '<br>'): ?>
                            <p class="prod-details" style="color: <?php echo e($colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333'); ?>">	
                                <small>Model #: <?php echo $solo_prod->category_id;  ?></small>
                                <br>
                                <small>Part #: <?php echo $solo_prod->sku;  ?></small>
                            </p>
                        <?php endif; ?>
                        </h5>
                        <div class="cart-area">
                        <?php if($solo_prod->product_type == "affiliate"): ?>
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="<?php echo e(route('affiliate.product', $solo_prod->slug)); ?>"><i class="icofont-cart"></i>
                                <?php echo e($langg->lang251); ?>

                            </span>
                        <?php else: ?>
                            <?php if($solo_prod->emptyStock()): ?>
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> <?php echo e($langg->lang78); ?>

                            </span>
                            <?php else: ?>
                            <span class="add-to-cart add-to-cart-btn" data-href="<?php echo e(route('product.cart.add',['db' => 'products', 'id' => $solo_prod->id])); ?>"  style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang56); ?>

                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="<?php echo e(route('product.cart.quickadd',['db' => 'products', 'id' => $solo_prod->id])); ?>" style="background-color:<?php echo e($colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green'); ?>;">
                                <i class="icofont-cart"></i> <?php echo e($langg->lang251); ?>

                            </span>
                            <?php endif; ?>
                        <?php endif; ?>
                        </div>
                </div>
                <img class="prod-image" src="<?php echo e($solo_prod->thumbnail ? asset('assets/images/thumbnails/'.$solo_prod->thumbnail):asset('assets/images/products/'.$gs->prod_image)); ?>" alt="">
            </a>

            </div>
        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <div class="col-lg-12">
            <div class="page-center mt-5">
                <?php echo $solo_products->appends(['search' => request()->input('search'), 'sort' => request()->input('sort')])->links(); ?>

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