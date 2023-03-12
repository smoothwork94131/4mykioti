<?php $__env->startSection('content'); ?>

    <?php if($ps->slider == 1): ?>
        <?php if(count($sliders)): ?>
            <?php echo $__env->make('includes.slider-style', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
        <?php endif; ?>
    <?php endif; ?>
    
    <?php if($ps->slider == 1): ?>
        <!-- Hero Area Start -->
        <section class="hero-area" style="background-color: white">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12 remove-padding s-top-block">
                        <div>
                        Over 500,000 Kioti Parts <br>and growing...
                        </div>
                    </div>
                    <div class="col-6 remove-padding pr-1">
                        <a href="<?php echo e(route('front.partsByModel')); ?>"><div class="s-0-block s-block d-flex m-blue">
                            <div>
                                FIND PARTS
                            </div>
                        </div></a>
                    </div>
                    <div class="col-6 remove-padding">
                        <div class="s-0-block s-block d-flex m-red">
                            <div>
                                 COMING SOON!!
                            </div>
                            <div>
                                3RD FUNCTION VALVES
                            </div>
                        </div>
                    </div>
                    <div class="col-6 remove-padding  pr-1">
                        <a href="<?php echo e(route('front.schematics')); ?>"><div class="s-0-block s-block d-flex m-green">
                            <div>
                                 FIND SCHEMATICS
                            </div>
                        </div></a>
                    </div>
                    <div class="col-6 remove-padding">
                    <a href="<?php echo e(route('front.common')); ?>">
                        <div class="s-0-block s-block d-flex m-brown">
                            <div>
                                 COMMON PARTS
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Hero Area End -->
    <?php endif; ?>
    

    

        
        <!-- <section class="view-type">
            <div class="container text-right">
                    <br>
                    <button onclick="listView()" class="list"><i class="fa fa-bars"></i> List</button>
                    <button onclick="gridView()" class="btn-success grid"><i class="fa fa-th-large"></i> Grid</button>
            </div>
        </section> -->

        <?php if($gs->solo_mode != 1): ?>
            <section class="trending slider-buttom-category grid-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                    <span class="sub">products</span> 
                                    <span class="main"><?php echo e($langg->lang14); ?></span> 
                                    <span class="title-underline"></span>
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="trending-item-slider">
                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <?php if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker): ?>
                                        <?php if( $cat->name == 'Accessories'): ?>
                                        <div class="sc-common-padding">
                                            <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="single-category">
                                                <div class="left">
                                                    <h5 class="title">
                                                        <?php echo e($cat->name); ?>

                                                    </h5>
                                                    <p class="count">
                                                        <?php echo e(count($cat->products)); ?> <?php echo e($langg->lang4); ?>

                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <img src="<?php echo e(asset('assets/images/categories/'.$cat->image)); ?>" class="category-img" alt="">
                                                </div>
                                            </a>
                                        </div>
                                        <?php endif; ?>
                                    <?php else: ?>
                                    <div class="sc-common-padding">
                                        <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="single-category">
                                            <div class="left">
                                                <h5 class="title">
                                                    <?php echo e($cat->name); ?>

                                                </h5>
                                                <p class="count">
                                                    <?php echo e(count($cat->products)); ?> <?php echo e($langg->lang4); ?>

                                                </p>
                                            </div>
                                            <div class="right">
                                                <img src="<?php echo e(asset('assets/images/categories/'.$cat->image)); ?>" class="category-img" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <?php endif; ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>


            <section class="d-none list-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                    <span class="sub">products</span> 
                                    <span class="main"><?php echo e($langg->lang14); ?></span> 
                                    <span class="title-underline"></span>
                                </h2>
                                
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="trending-item-slider">
                                <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <?php if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker): ?>
                                        <?php if( $cat->name == 'Accessories'): ?>
                                        <div class="sc-common-padding">
                                            <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="single-category">
                                                <div class="left">
                                                    <h5 class="title">
                                                        <?php echo e($cat->name); ?>

                                                    </h5>
                                                    <p class="count">
                                                        <?php echo e(count($cat->products)); ?> <?php echo e($langg->lang4); ?>

                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <img src="<?php echo e(asset('assets/images/categories/'.$cat->image)); ?>" class="category-img" alt="">
                                                </div>
                                            </a>
                                        </div>
                                        <?php endif; ?>
                                    <?php else: ?>
                                    <div class="sc-common-padding">
                                        <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="single-category">
                                            <div class="left">
                                                <h5 class="title">
                                                    <?php echo e($cat->name); ?>

                                                </h5>
                                                <p class="count">
                                                    <?php echo e(count($cat->products)); ?> <?php echo e($langg->lang4); ?>

                                                </p>
                                            </div>
                                            <div class="right">
                                                <img src="<?php echo e(asset('assets/images/categories/'.$cat->image)); ?>" class="category-img" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    <?php endif; ?>
                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>

        <?php endif; ?>
        

    

    
        <!-- Trending Item Area Start -->

        <?php if($gs->solo_mode == 1 && !empty($gs->solo_category)): ?>
            <section class="sub-categori grid-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 order-first order-lg-last ajax-loader-parent">
                            <!-- <div class="section-top">
                                <h2 class="section-title">
                                    <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                    <span class="sub">Category</span> 
                                    <span class="main"><?php echo e($solo_category_info->name); ?></span> 
                                    <span class="title-underline"></span>
                                </h2>
                            </div> -->
                            <div class="col-lg-12 remove-padding mb-4">
                                <?php echo $__env->make('includes.front-filter', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                            </div>
                            <div class="right-area" id="app">
                                <div class="categori-item-area">
                                    <div class="row" id="ajaxContent">
                                        <?php echo $__env->make('includes.product.solo-products', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                    </div>
                                    <div id="ajaxLoader" class="ajax-loader" style="background: url(<?php echo e(asset('assets/images/'.$gs->loader)); ?>) no-repeat scroll center center rgba(0,0,0,.6);"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section class="sub-categori list-display d-none">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 order-first order-lg-last ajax-loader-parent">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                    <span class="sub">Category</span> 
                                    <span class="main"><?php echo e($solo_category_info->name); ?></span> 
                                    <span class="title-underline"></span>
                                </h2>
                            </div>

                            <div class="table-responsiv">
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0"
                                   width="100%">
                                <thead>
                                <tr>
                                    <th><?php echo e(__("Name")); ?></th>
                                    <th><?php echo e(__("Stock")); ?></th>
                                    <th><?php echo e(__("Price")); ?></th>
                                    <th><?php echo e(__("Actions")); ?></th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        <?php else: ?>
            <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $cat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                <?php if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker): ?>
                    <?php if( $cat->name == 'Accessories'): ?>
                    <section class="trending">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="section-top">
                                        <h2 class="section-title">
                                            <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                            <span class="sub">Featured</span> 
                                            <span class="main"><?php echo e($cat->name); ?></span> 
                                            <span class="title-underline"></span>
                                        </h2>
                                        <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="link">View All</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="trending-item-slider">
                                        <?php
                                            $adplan = $cat->adplans;
                                            $ad_products = $cat->adplans->products->where('viewed_count', '<', $adplan->view_count)->sortBy('id')->take($adplan->product_count);
                                            if(count($ad_products) < $adplan->product_count) {
                                                $ad_products = $cat->adplans->products->sortByDesc('id')->take($adplan->product_count);
                                            }
                                        ?>

                                        <?php $__currentLoopData = $ad_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prodh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> <!-- removed after where('featured', '=', 1)->where  -->
                                            <?php
                                                $prod = $prodh->product;
                                            ?>
                                            <?php if(!$prod->is_verified): ?>
                                                <?php echo $__env->make('includes.product.slider-product', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                            <?php endif; ?>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    <?php endif; ?>
                <?php else: ?>
                    <section class="trending">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="section-top">
                                        <h2 class="section-title">
                                            <img src="<?php echo e(asset('assets/images/logo60px.png')); ?>" width="50" height="50"> 
                                            <span class="sub">Featured</span> 
                                            <span class="main"><?php echo e($cat->name); ?></span> 
                                            <span class="title-underline"></span>
                                        </h2>
                                        <a href="<?php echo e(route('front.category',$cat->slug)); ?>" class="link">View All</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="trending-item-slider">
                                        <?php
                                            $adplan = $cat->adplans;
                                            $ad_products = $cat->adplans->products->where('viewed_count', '<', $adplan->view_count)->sortBy('id')->take($adplan->product_count);
                                            if(count($ad_products) < $adplan->product_count) {
                                                $ad_products = $cat->adplans->products->sortByDesc('id')->take($adplan->product_count);
                                            }
                                        ?>
                                        
                                        <?php $__currentLoopData = $ad_products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prodh): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?> <!-- removed after where('featured', '=', 1)->where  -->
                                            <?php    
                                                $prod = $prodh->product;
                                            ?>
                                            <?php if(Auth::guard('web')->check()): ?>
                                                <?php if(Auth::user()->is_verified): ?>
                                                    <?php echo $__env->make('includes.product.slider-product', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                                <?php else: ?>
                                                    <?php if(!$prod->is_verified): ?>
                                                        <?php echo $__env->make('includes.product.slider-product', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                                    <?php endif; ?>
                                                <?php endif; ?>
                                            <?php else: ?>
                                                <?php if(!empty($prod)): ?>
                                                    <?php if(!$prod->is_verified): ?>
                                                        <?php echo $__env->make('includes.product.slider-product', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                                    <?php endif; ?>
                                                <?php endif; ?>
                                            <?php endif; ?>
                                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                <?php endif; ?>
                
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
        <?php endif; ?>

    <!-- Tranding Item Area End -->
    

    <?php if($ps->small_banner == 1): ?>

        <!-- Banner Area One Start -->
        <section class="banner-section">
            <div class="container">
                <?php $__currentLoopData = $top_small_banners->chunk(2); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $chunk): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                    <div class="row">
                        <?php $__currentLoopData = $chunk; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $img): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <div class="col-lg-6 remove-padding">
                                <div class="left">
                                    <a class="banner-effect" href="<?php echo e($img->link); ?>" target="_blank">
                                        <img src="<?php echo e(asset('assets/images/banners/'.$img->photo)); ?>" alt="">
                                    </a>
                                </div>
                            </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </div>
                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
        </section>
        <!-- Banner Area One Start -->
    <?php endif; ?>




<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    <script>
        $(window).on('load', function () {

            setTimeout(function () {

                $('#extraData').load('<?php echo e(route('front.extraIndex')); ?>');

            }, 500);
        });

        function listView(){
            $('.grid-display').removeClass('d-none');
            $('.list-display').removeClass('d-none');
            $('button.grid').removeClass('btn-success');
            $('button.list').removeClass('btn-success');
            $('button.list').addClass('btn-success');
            $('.grid-display').addClass('d-none');


            var table = $('#geniustable').DataTable({
                ordering: false,
                processing: true,
                serverSide: true,
                retrieve: true,
                lengthMenu: [ 50, 100, 150 ,200 ],
                ajax: '<?php echo e(route('front.soloproduct.datatables')); ?>',
                columns: [
                    {data: 'name', name: 'name'},
                    {data: 'stock', name: 'stock'},
                    {data: 'price', name: 'price'},
                    {data: 'action', name: 'action'},
                ],
                language: {
                    processing: '<img src="<?php echo e(asset('assets/images/'.$gs->admin_loader)); ?>">'
                },
                drawCallback: function (settings) {
                    $('.select').niceSelect();
                }
            });
        }

        function gridView(){
            $('.grid-display').removeClass('d-none');
            $('.list-display').removeClass('d-none');
            $('button.grid').removeClass('btn-success');
            $('button.list').removeClass('btn-success');
            $('button.grid').addClass('btn-success');
            $('.list-display').addClass('d-none');

            

        }

    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.front', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>