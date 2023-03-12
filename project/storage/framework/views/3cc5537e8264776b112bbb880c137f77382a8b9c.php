<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php if(isset($page->meta_tag) && isset($page->meta_description)): ?>
        <meta name="keywords" content="<?php echo e($page->meta_tag); ?>">
        <meta name="description" content="<?php echo e($page->meta_description); ?>">
        <title><?php echo e($gs->title); ?></title>
    <?php elseif(isset($blog->meta_tag) && isset($blog->meta_description)): ?>
        <meta name="keywords" content="<?php echo e($blog->meta_tag); ?>">
        <meta name="description" content="<?php echo e($blog->meta_description); ?>">
        <title><?php echo e($gs->title); ?></title>
    <?php elseif(isset($productt)): ?>

        <meta property="og:title" content="<?php echo e($productt->name); ?>"/>
        <meta property="og:description"
              content="<?php echo e($productt->meta_description != null ? $productt->meta_description : strip_tags($productt->description)); ?>"/>
        <meta property="og:image" content="<?php echo e(asset('assets/images/thumbnails/'.$productt->thumbnail)); ?>"/>
        <meta name="author" content="OGLife">
        <title><?php echo e(substr($productt->name, 0,11)."-"); ?><?php echo e($gs->title); ?></title>
    <?php else: ?>
        <meta name="keywords" content="<?php echo e($seo->meta_keys); ?>">
        <meta name="author" content="OGLife">
        <title><?php echo e($gs->title); ?></title>
    <?php endif; ?>

    <meta http-equiv="cache-control" content="max-age=0"/>
    <meta http-equiv="cache-control" content="no-cache"/>
    <meta http-equiv="expires" content="0"/>
    <meta http-equiv="expires" content="Tue, 01 Jan 1980 1:00:00 GMT"/>
    <meta http-equiv="pragma" content="no-cache"/>

    <!-- favicon -->
    <link rel="icon" type="image/x-icon" href="<?php echo e(asset('assets/images/'.$gs->favicon)); ?>"/>

    <?php if($langg->rtl == "1"): ?>

    <!-- stylesheet -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/rtl/all.css')); ?>">

        <!--Updated CSS-->
        <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/rtl/styles.php?color='.str_replace('#','',$gs->colors).'&amp;'.'header_color='.str_replace('#','',$gs->header_color).'&amp;'.'footer_color='.str_replace('#','',$gs->footer_color).'&amp;'.'copyright_color='.str_replace('#','',$gs->copyright_color).'&amp;'.'category_color='.str_replace('#','',$gs->category_color).'&amp;'.'menu_color='.str_replace('#','',$gs->menu_color).'&amp;'.'menu_bg_color='.str_replace('#','',$gs->menu_bg_color).'&amp;'.'menu_hover_color='.str_replace('#','',$gs->menu_hover_color))); ?>">

    <?php else: ?>

    <!-- stylesheet -->
        <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/all.css')); ?>">

        <!--Updated CSS-->
        <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/style.php?color='.str_replace('#','',$gs->colors).'&amp;'.'header_color='.str_replace('#','',$gs->header_color).'&amp;'.'footer_color='.str_replace('#','',$gs->footer_color).'&amp;'.'copyright_color='.str_replace('#','',$gs->copyright_color).'&amp;'.'category_color='.str_replace('#','',$gs->category_color).'&amp;'.'menu_color='.str_replace('#','',$gs->menu_color).'&amp;'.'menu_bg_color='.str_replace('#','',$gs->menu_bg_color).'&amp;'.'menu_hover_color='.str_replace('#','',$gs->menu_hover_color))); ?>">

    <?php endif; ?>

    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/custom.css')); ?>">
    <link rel="stylesheet" href="<?php echo e(asset('assets/front/css/customheader.css')); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <?php echo $__env->yieldContent('styles'); ?>

</head>

<body>

<?php if($gs->is_loader == 1): ?>
    <div class="preloader" id="preloader"
         style="background: url(<?php echo e(asset('assets/images/'.$gs->loader)); ?>) no-repeat scroll center center #FFF;"></div>
<?php endif; ?>

<?php if($gs->is_popup== 1): ?>

    <?php if(isset($visited)): ?>
        <div style="display:none">
            <img src="<?php echo e(asset('assets/images/'.$gs->popup_background)); ?>">
        </div>

        <!--  Starting of subscribe-pre-loader Area   -->
        <div class="subscribe-preloader-wrap" id="subscriptionForm" style="display: none;">
            <div class="subscribePreloader__thumb"
                 style="background-image: url(<?php echo e(asset('assets/images/'.$gs->popup_background)); ?>);">
                <span class="preload-close"><i class="fas fa-times"></i></span>
                <div class="subscribePreloader__text text-center">
                    <h1><?php echo e($gs->popup_title); ?></h1>
                    <p><?php echo e($gs->popup_text); ?></p>
                    <form action="<?php echo e(route('front.subscribe')); ?>" id="subscribeform" method="POST">
                        <?php echo e(csrf_field()); ?>

                        <div class="form-group">
                            <input type="email" name="email" placeholder="<?php echo e($langg->lang741); ?>" required="">
                            <button id="sub-btn" type="submit"><?php echo e($langg->lang742); ?></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--  Ending of subscribe-pre-loader Area   -->

    <?php endif; ?>

<?php endif; ?>


    <?php if(isset($age_no_setted)): ?>

        <!--  Starting of age-pre-loader Area   -->
        <div class="subscribe-preloader-wrap" id="agecheckerForm" style="display: none;">
                <span class="preload-close"><i class="fas fa-times"></i></span>

                <div class="subscribePreloader__text text-center">
                    <h1><?php echo e($gs->agepopup_text); ?></h1>
                    <p class="social-links d-none">
                        <a href="https://www.google.com/" target='_blank'><button>google.com</button></a>
                        <a href="https://www.disney.com/" target='_blank'><button>disney.com</button></a>
                        <a href="https://bing.com/" target='_blank'><button>bing.com</button></a>
                       
                    </p>
                    <form action="<?php echo e(route('front.age')); ?>" id="ageform" method="POST">
                        <?php echo e(csrf_field()); ?>

                        <div class="form-group">
                            <input type="number" name="age" placeholder="Enter Your Age" required="">
                            <button id="sub-btn" type="submit"> OK </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!--  Ending of subscribe-pre-loader Area   -->

    <?php endif; ?>


<section class="top-header">
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-12 remove-padding">
                <div class="content">
                    <div class="left-content">
                        <div class="list">
                            <ul>
                                <li>
                                    <a class="root-link" href="/" target="">
                                        Home
                                    </a>
                                </li>
                                <li>
                                    <a class="root-link" href="/" target="">
                                        New Models
                                    </a>
                                </li>
                                <li>
                                    <a class="root-link" href="/" target="">
                                        Inventory
                                    </a>
                                </li>
                                <li class="mainmenu-area">
                                    <div class="categories_menu">
                                        <div class="categories_title">
                                            <h2 class="categori_toggle"> Parts Finder </h2>
                                        </div>
                                        <div class="categories_menu_inner products">
                                            <?php $__currentLoopData = $eccategories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                            <div class="categories_menu ">
                                                <div class="categories_title">
                                                    <h2 class="categori_toggle"> <?php echo e($product->product); ?> <i
                                                                class="fa fa-angle-down arrow-down"></i></h2>
                                                </div>
                                                <div class="categories_menu_inner series">
                                                    <?php $__currentLoopData = $product->where('product', $product->product)->select('series')->distinct()->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $series): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                    <div class="categories_menu">
                                                        <div class="categories_title" data-type="model"
                                                                        data-series="<?php echo e($series->series); ?>"
                                                                        data-url="<?php echo e(route('front.groups')); ?>" 
                                                                        data-status="0" data-token="<?php echo e(csrf_token()); ?>">
                                                            <h2 class="categori_toggle"> <?php echo e($series->series); ?> <i
                                                                        class="fa fa-angle-down arrow-down"></i></h2>
                                                        </div>
                                                        <div class="categories_menu_inner models" style="max-height: 300px; overflow-y: auto; background-color: #e1e1e1">
                                                            loading...
                                                        </div>
                                                    </div>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </div>
                                            </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <a class="root-link" href="/" target="">
                                        Services
                                    </a>
                                </li>
                                <li>
                                    <a class="root-link" href="/" target="">
                                        Company Info
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="right-content helpful-links">
                        <ul class="header-info helpful-links-inner">
                            <li href="/locations" class="btn btn-primary hidden-xs">Maps &amp; Hours</li>
                            <li href="/ecommerce#/cart" title="Cart" class="my-dropdown cart"><span><i class="fa fa-shopping-cart">
                                </i></span>
                                <span class="cart-quantity"
                                            id="cart-count"><?php echo e(Session::has('cart') ? count(Session::get('cart')->items) : '0'); ?></span>
                                <div class="my-dropdown-menu" id="cart-items">
                                    <?php echo $__env->make('load.cart', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<div class="top-gap"></div>
<!-- Top Header Area End -->

<!-- Logo Header Area Start -->
<section class="logo-header">
    <div class="container-fluid">
        <div class="row ">
            <div class="col-lg-3 col-sm-6 col-5 remove-padding">
                <div class="logo">
                    <a href="<?php echo e(route('front.index')); ?>">
                        <img src="<?php echo e(asset('assets/front/images/logo.png')); ?>" alt="" class="img-responsive center-block logo-img">
                    </a>
                </div>
            </div>
            <div class="col-lg-7 col-sm-12 order-last order-sm-2 order-md-2 d-flex align-items-center justify-content-center">
                <div class="header-locations">
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span></i>
                        <ul class="header-links">
                            <li>
                                <a href="/locations/36478" title="View Map &amp; Hours for Greensburg">
                                    <span class="city">Greensburg</span>, <span class="region">PA</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1(724) 691-0200" title="Call Us">
                                    <span>(724) 691-0200</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span></i>
                        <ul class="header-links">
                            <li>
                                <a href="/locations/37100" title="View Map &amp; Hours for Butler">
                                    <span class="city">Butler</span>, <span class="region">PA</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1(724) 482-6288" title="Call Us">
                                    <span>(724) 482-6288</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <i class="fa fa-map-marker" aria-hidden="true"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Map</span></i>
                        <ul class="header-links">
                            <li>
                                <a href="/locations/37101" title="View Map &amp; Hours for Stoneboro">
                                    <span class="city">Stoneboro</span>, <span class="region">PA</span>
                                </a>
                            </li>
                            <li>
                                <a href="tel:+1(724) 253-2035" title="Call Us">
                                    <span>(724) 253-2035</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-7 remove-padding order-lg-last d-flex align-items-center justify-content-end">
                <ul class="business-info-socialmedia">

                    <li class="social-media search">
						<a href="https://www.facebook.com/TractorBros" target="_blank" aria-label="Facebook" aria-describedby="audioeye_new_window_message">
							<span class="fa-stack fa-lg">
								<i class="fa fa-search fa-stack-1x fa-inverse"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Search</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Search</span></i>
							</span>
						</a>
					</li>
					<li class="social-media facebook">
						<a href="https://www.facebook.com/TractorBros" target="_blank" aria-label="Facebook" aria-describedby="audioeye_new_window_message">
							<span class="fa-stack fa-lg">
								<i class="fa fa-facebook fa-stack-1x fa-inverse"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Like us on Facebook</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Like us on Facebook</span></i>
							</span>
						</a>
					</li>
					<li class="social-media youtube">
						<a href="https://www.youtube.com/channel/UCPWjtRtVVMzes0AkXk24z7A/videos" title="YouTube" target="_blank" aria-describedby="audioeye_new_window_message">
							<span class="fa-stack fa-lg">
								<i class="fa fa-youtube-play fa-stack-1x fa-inverse"><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Check us out on Youtube</span><span class="sr-only" role="presentation" aria-hidden="true" tabindex="-1">Check us out on Youtube</span></i>
							</span>
						</a>
					</li>
			    </ul>
            </div>
        </div>
    </div>
</section>
<!-- Logo Header Area End -->

<?php echo $__env->yieldContent('content'); ?>

<!-- Footer Area Start -->
<footer class="footer" id="footer">
    <div class="container">
        <div class="row">
            <div class="col-md-6 col-lg-4">
                <div class="footer-info-area">
                    <div class="footer-logo">
                        <a href="<?php echo e(route('front.index')); ?>" class="logo-link">
                            <img src="<?php echo e(asset('assets/images/'.$gs->footer_logo)); ?>" alt="">
                        </a>
                    </div>
                    <div class="text">
                        <p style="color: <?php echo e($gs->footer_text_color); ?>">
                            <?php echo $gs->footer; ?>

                        </p>
                    </div>
                </div>
                <div class="fotter-social-links">
                    <ul>

                        <?php if(App\Models\Socialsetting::find(1)->f_status == 1): ?>
                            <li>
                                <a href="<?php echo e(App\Models\Socialsetting::find(1)->facebook); ?>" class="facebook"
                                   target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if(App\Models\Socialsetting::find(1)->g_status == 1): ?>
                            <li>
                                <a href="<?php echo e(App\Models\Socialsetting::find(1)->gplus); ?>" class="google-plus"
                                   target="_blank">
                                    <i class="fab fa-google-plus-g"></i>
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if(App\Models\Socialsetting::find(1)->t_status == 1): ?>
                            <li>
                                <a href="<?php echo e(App\Models\Socialsetting::find(1)->twitter); ?>" class="twitter"
                                   target="_blank">
                                    <i class="fab fa-twitter"></i>
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if(App\Models\Socialsetting::find(1)->l_status == 1): ?>
                            <li>
                                <a href="<?php echo e(App\Models\Socialsetting::find(1)->linkedin); ?>" class="linkedin"
                                   target="_blank">
                                    <i class="fab fa-linkedin-in"></i>
                                </a>
                            </li>
                        <?php endif; ?>

                        <?php if(App\Models\Socialsetting::find(1)->d_status == 1): ?>
                            <li>
                                <a href="<?php echo e(App\Models\Socialsetting::find(1)->dribble); ?>" class="dribbble"
                                   target="_blank">
                                    <i class="fab fa-dribbble"></i>
                                </a>
                            </li>
                        <?php endif; ?>

                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="footer-widget info-link-widget">
                    <h4 class="title" style="color: <?php echo e($gs->footer_text_color); ?>">
                        <?php echo e($langg->lang21); ?>

                    </h4>
                    <ul class="link-list">
                        <li>
                            <a href="<?php echo e(route('front.index')); ?>" style="color: <?php echo e($gs->footer_text_color); ?>">
                                <i class="fas fa-angle-double-right" style="color: <?php echo e($gs->footer_text_color); ?>"></i><?php echo e($langg->lang22); ?>

                            </a>
                        </li>

                        <?php $__currentLoopData = DB::table('pages')->where('footer','=',1)->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <li>
                                <a href="<?php echo e(route('front.page',$data->slug)); ?>" style="color: <?php echo e($gs->footer_text_color); ?>">
                                    <i class="fas fa-angle-double-right" style="color: <?php echo e($gs->footer_text_color); ?>"></i><?php echo e($data->title); ?>

                                </a>
                            </li>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                        <li>
                            <a href="<?php echo e(route('front.contact')); ?>" style="color: <?php echo e($gs->footer_text_color); ?>">
                                <i class="fas fa-angle-double-right" style="color: <?php echo e($gs->footer_text_color); ?>"></i><?php echo e($langg->lang23); ?>

                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-6 col-lg-4">
                <div class="footer-widget recent-post-widget">
                    <h4 class="title" style="color: <?php echo e($gs->footer_text_color); ?>">
                        <?php echo e($langg->lang24); ?>

                    </h4>
                    <ul class="post-list">
                        <?php $__currentLoopData = App\Models\Blog::orderBy('created_at', 'desc')->limit(3)->get(); $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $blog): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                            <li>
                                <div class="post">
                                    <div class="post-img">
                                        <img style="width: 73px; height: 59px;"
                                             src="<?php echo e(asset('assets/images/blogs/'.$blog->photo)); ?>" alt="">
                                    </div>
                                    <div class="post-details">
                                        <a href="<?php echo e(route('front.blogshow',$blog->id)); ?>">
                                            <h4 class="post-title" style="color: <?php echo e($gs->footer_text_color); ?>">
                                                <?php echo e(mb_strlen($blog->title,'utf-8') > 45 ? mb_substr($blog->title,0,45,'utf-8')." .." : $blog->title); ?>

                                            </h4>
                                        </a>
                                        <p class="date" style="color: <?php echo e($gs->footer_text_color); ?>">
                                            <?php echo e(date('M d - Y',(strtotime($blog->created_at)))); ?>

                                        </p>
                                    </div>
                                </div>
                            </li>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="copy-bg">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="content">
                        <div class="content">
                            <p style="color: <?php echo e($gs->footer_text_color); ?>"><?php echo $gs->copyright; ?></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
<!-- Footer Area End -->

<!-- Back to Top Start -->
<div class="bottomtotop">
    <i class="fas fa-chevron-right"></i>
</div>
<!-- Back to Top End -->

<!-- LOGIN MODAL -->
<div class="modal fade" id="comment-log-reg" tabindex="-1" role="dialog" aria-labelledby="comment-log-reg-Title"
     aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <nav class="comment-log-reg-tabmenu">
                    <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a class="nav-item nav-link login active" id="nav-log-tab1" data-toggle="tab" href="#nav-log1"
                           role="tab" aria-controls="nav-log" aria-selected="true">
                            <?php echo e($langg->lang197); ?>

                        </a>
                        <a class="nav-item nav-link" id="nav-reg-tab1" data-toggle="tab" href="#nav-reg1" role="tab"
                           aria-controls="nav-reg" aria-selected="false">
                            <?php echo e($langg->lang198); ?>

                        </a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-log1" role="tabpanel"
                         aria-labelledby="nav-log-tab1">
                        <div class="login-area">
                            <div class="header-area">
                                <h4 class="title"><?php echo e($langg->lang172); ?></h4>
                            </div>
                            <div class="login-form signin-form">
                                <?php echo $__env->make('includes.admin.form-login', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                <form class="mloginform" action="<?php echo e(route('user.login.submit')); ?>" method="POST">
                                    <?php echo e(csrf_field()); ?>

                                    <div class="form-input">
                                        <input type="email" name="email" placeholder="<?php echo e($langg->lang173); ?>"
                                               required="">
                                        <i class="icofont-user-alt-5"></i>
                                    </div>
                                    <div class="form-input">
                                        <input type="password" class="Password" name="password"
                                               placeholder="<?php echo e($langg->lang174); ?>" required="">
                                        <i class="icofont-ui-password"></i>
                                    </div>
                                    <div class="form-forgot-pass">
                                        <div class="left">
                                            <input type="checkbox" name="remember" id="mrp"
                                                    <?php echo e(old('remember') ? 'checked' : ''); ?>>
                                            <label for="mrp"><?php echo e($langg->lang175); ?></label>
                                        </div>
                                        <div class="right">
                                            <a href="javascript:;" id="show-forgot">
                                                <?php echo e($langg->lang176); ?>

                                            </a>
                                        </div>
                                    </div>
                                    <input type="hidden" name="modal" value="1">
                                    <input class="mauthdata" type="hidden" value="<?php echo e($langg->lang177); ?>">
                                    <button type="submit" class="submit-btn"><?php echo e($langg->lang178); ?></button>
                                    <?php if(App\Models\Socialsetting::find(1)->f_check == 1 ||
                                    App\Models\Socialsetting::find(1)->g_check == 1): ?>
                                        <div class="social-area">
                                            <h3 class="title"><?php echo e($langg->lang179); ?></h3>
                                            <p class="text"><?php echo e($langg->lang180); ?></p>
                                            <ul class="social-links">
                                                <?php if(App\Models\Socialsetting::find(1)->f_check == 1): ?>
                                                    <li>
                                                        <a href="<?php echo e(route('social-provider','facebook')); ?>">
                                                            <i class="fab fa-facebook-f"></i>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                                <?php if(App\Models\Socialsetting::find(1)->g_check == 1): ?>
                                                    <li>
                                                        <a href="<?php echo e(route('social-provider','google')); ?>">
                                                            <i class="fab fa-google-plus-g"></i>
                                                        </a>
                                                    </li>
                                                <?php endif; ?>
                                            </ul>
                                        </div>
                                    <?php endif; ?>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="nav-reg1" role="tabpanel" aria-labelledby="nav-reg-tab1">
                        <div class="login-area signup-area">
                            <div class="header-area">
                                <h4 class="title"><?php echo e($langg->lang181); ?></h4>
                            </div>
                            <div class="login-form signup-form">
                                <?php echo $__env->make('includes.admin.form-login', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                <form class="mregisterform" action="<?php echo e(route('user-register-submit')); ?>"
                                      method="POST">
                                    <?php echo e(csrf_field()); ?>


                                    <div class="form-input">
                                        <input type="text" class="User Name" name="name"
                                               placeholder="<?php echo e($langg->lang182); ?>" required="">
                                        <i class="icofont-user-alt-5"></i>
                                    </div>

                                    <div class="form-input">
                                        <input type="email" class="User Name" name="email"
                                               placeholder="<?php echo e($langg->lang183); ?>" required="">
                                        <i class="icofont-email"></i>
                                    </div>

                                    <div class="form-input">
                                        <input type="text" class="User Name" name="phone"
                                               placeholder="<?php echo e($langg->lang184); ?>" required="">
                                        <i class="icofont-phone"></i>
                                    </div>

                                    <div class="form-input">
                                        <input type="text" class="User Name" name="address"
                                               placeholder="<?php echo e($langg->lang185); ?>" required="">
                                        <i class="icofont-location-pin"></i>
                                    </div>

                                    <div class="form-input">
                                        <input type="password" class="Password" name="password"
                                               placeholder="<?php echo e($langg->lang186); ?>" required="">
                                        <i class="icofont-ui-password"></i>
                                    </div>

                                    <div class="form-input">
                                        <input type="password" class="Password" name="password_confirmation"
                                               placeholder="<?php echo e($langg->lang187); ?>" required="">
                                        <i class="icofont-ui-password"></i>
                                    </div>


                                    <?php if($gs->is_capcha == 1): ?>

                                        <ul class="captcha-area">
                                            <li>
                                                <p><img class="codeimg1"
                                                        src="<?php echo e(asset("assets/images/capcha_code.png")); ?>" alt=""> <i
                                                            class="fas fa-sync-alt pointer refresh_code "></i></p>
                                            </li>
                                        </ul>

                                        <div class="form-input">
                                            <input type="text" class="Password" name="codes"
                                                   placeholder="<?php echo e($langg->lang51); ?>" required="">
                                            <i class="icofont-refresh"></i>
                                        </div>


                                    <?php endif; ?>

                                    <input class="mprocessdata" type="hidden" value="<?php echo e($langg->lang188); ?>">
                                    <button type="submit" class="submit-btn"><?php echo e($langg->lang189); ?></button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- LOGIN MODAL ENDS -->

<!-- FORGOT MODAL -->
<div class="modal fade" id="forgot-modal" tabindex="-1" role="dialog" aria-labelledby="comment-log-reg-Title"
     aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="login-area">
                    <div class="header-area forgot-passwor-area">
                        <h4 class="title"><?php echo e($langg->lang191); ?> </h4>
                        <p class="text"><?php echo e($langg->lang192); ?> </p>
                    </div>
                    <div class="login-form">
                        <?php echo $__env->make('includes.admin.form-login', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                        <form id="mforgotform" action="<?php echo e(route('user-forgot-submit')); ?>" method="POST">
                            <?php echo e(csrf_field()); ?>

                            <div class="form-input">
                                <input type="email" name="email" class="User Name"
                                       placeholder="<?php echo e($langg->lang193); ?>" required="">
                                <i class="icofont-user-alt-5"></i>
                            </div>
                            <div class="to-login-page">
                                <a href="javascript:;" id="show-login">
                                    <?php echo e($langg->lang194); ?>

                                </a>
                            </div>
                            <input class="fauthdata" type="hidden" value="<?php echo e($langg->lang195); ?>">
                            <button type="submit" class="submit-btn"><?php echo e($langg->lang196); ?></button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- FORGOT MODAL ENDS -->


<!-- VENDOR LOGIN MODAL -->
<div class="modal fade" id="vendor-login" tabindex="-1" role="dialog" aria-labelledby="vendor-login-Title"
     aria-hidden="true">
    <div class="modal-dialog  modal-dialog-centered modal-lg" style="transition: .5s;" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <nav class="comment-log-reg-tabmenu">
                    <div class="nav nav-tabs" id="nav-tab1" role="tablist">
                    <!-- <a class="nav-item nav-link login active" id="nav-log-tab11" data-toggle="tab" href="#nav-log11" role="tab" aria-controls="nav-log" aria-selected="true">
							<?php echo e($langg->lang234); ?>

                            </a> -->
                        <a class="nav-item nav-link login active" id="nav-reg-tab11" data-toggle="tab" href="#nav-reg11"
                           role="tab" aria-controls="nav-reg" aria-selected="false" style="width: 100%">
                            <?php echo e($langg->lang235); ?>

                        </a>
                    </div>
                </nav>
                <div class="tab-content" id="nav-tabContent">
                <!-- <div class="tab-pane fade" id="nav-log11" role="tabpanel" aria-labelledby="nav-log-tab">
				        <div class="login-area">
				          <div class="login-form signin-form">
				                <?php echo $__env->make('includes.admin.form-login', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                        <form class="mloginform" action="<?php echo e(route('user.login.submit')); ?>" method="POST">
				              <?php echo e(csrf_field()); ?>

                        <div class="form-input">
                          <input type="email" name="email" placeholder="<?php echo e($langg->lang173); ?>" required="">
				                <i class="icofont-user-alt-5"></i>
				              </div>
				              <div class="form-input">
				                <input type="password" class="Password" name="password" placeholder="<?php echo e($langg->lang174); ?>" required="">
				                <i class="icofont-ui-password"></i>
				              </div>
				              <div class="form-forgot-pass">
				                <div class="left">
				                  <input type="checkbox" name="remember"  id="mrp1" <?php echo e(old('remember') ? 'checked' : ''); ?>>
				                  <label for="mrp1"><?php echo e($langg->lang175); ?></label>
				                </div>
				                <div class="right">
				                  <a href="javascript:;" id="show-forgot1">
				                    <?php echo e($langg->lang176); ?>

                        </a>
                      </div>
                    </div>
                    <input type="hidden" name="modal"  value="1">
                     <input type="hidden" name="vendor"  value="1">
                    <input class="mauthdata" type="hidden"  value="<?php echo e($langg->lang177); ?>">
				              <button type="submit" class="submit-btn"><?php echo e($langg->lang178); ?></button>
					              <?php if(App\Models\Socialsetting::find(1)->f_check == 1 || App\Models\Socialsetting::find(1)->g_check == 1): ?>
                    <div class="social-area">
                        <h3 class="title"><?php echo e($langg->lang179); ?></h3>
					                  <p class="text"><?php echo e($langg->lang180); ?></p>
					                  <ul class="social-links">
					                    <?php if(App\Models\Socialsetting::find(1)->f_check == 1): ?>
                        <li>
                          <a href="<?php echo e(route('social-provider','facebook')); ?>">
					                        <i class="fab fa-facebook-f"></i>
					                      </a>
					                    </li>
					                    <?php endif; ?>
                    <?php if(App\Models\Socialsetting::find(1)->g_check == 1): ?>
                        <li>
                          <a href="<?php echo e(route('social-provider','google')); ?>">
					                        <i class="fab fa-google-plus-g"></i>
					                      </a>
					                    </li>
					                    <?php endif; ?>
                            </ul>
                        </div>
<?php endif; ?>
                        </form>
                      </div>
                    </div>
                </div> -->
                    <div class="tab-pane fade show active" id="nav-reg11" role="tabpanel" aria-labelledby="nav-reg-tab">
                        <div class="login-area signup-area">
                            <div class="login-form signup-form">
                                <?php echo $__env->make('includes.admin.form-login', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>
                                <form class="mregisterform" action="<?php echo e(route('user-register-submit')); ?>" method="POST">
                                    <?php echo e(csrf_field()); ?>


                                    <div class="row">

                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="text" class="User Name" name="name"
                                                       placeholder="<?php echo e($langg->lang182); ?>" required="">
                                                <i class="icofont-user-alt-5"></i>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="email" class="User Name" name="email"
                                                       placeholder="<?php echo e($langg->lang183); ?>" required="">
                                                <i class="icofont-email"></i>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="text" class="User Name" name="phone"
                                                       placeholder="<?php echo e($langg->lang184); ?>" required="">
                                                <i class="icofont-phone"></i>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="address"
                                                       placeholder="<?php echo e($langg->lang185); ?>" required="">
                                                <i class="icofont-location-pin"></i>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="text" class="User Name" name="shop_name"
                                                       placeholder="<?php echo e($langg->lang238); ?>" required="">
                                                <i class="icofont-cart-alt"></i>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="owner_name"
                                                       placeholder="<?php echo e($langg->lang239); ?>" required="">
                                                <i class="icofont-cart"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="shop_number"
                                                       placeholder="<?php echo e($langg->lang240); ?>" required="">
                                                <i class="icofont-shopping-cart"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="shop_address"
                                                       placeholder="<?php echo e($langg->lang241); ?>" required="">
                                                <i class="icofont-opencart"></i>
                                            </div>
                                        </div>

                                        <div class="col-lg-12">

                                            <div class="form-input">
                                                <select name="category_id" required="">
                                                    <option value="" selected disabled>Category</option>
                                                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $data): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                        <option value="<?php echo e($data->id); ?>"><?php echo e($data->name); ?></option>
                                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                                </select>
                                                <i class="fas fa-sitemap"></i>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="reg_number"
                                                       placeholder="<?php echo e($langg->lang242); ?>" required="">
                                                <i class="icofont-ui-cart"></i>
                                            </div>
                                        </div>
                                        <div class="col-lg-6">

                                            <div class="form-input">
                                                <input type="text" class="User Name" name="shop_message"
                                                       placeholder="<?php echo e($langg->lang243); ?>" required="">
                                                <i class="icofont-envelope"></i>
                                            </div>
                                        </div>

                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="password" class="Password" name="password"
                                                       placeholder="<?php echo e($langg->lang186); ?>" required="">
                                                <i class="icofont-ui-password"></i>
                                            </div>

                                        </div>
                                        <div class="col-lg-6">
                                            <div class="form-input">
                                                <input type="password" class="Password" name="password_confirmation"
                                                       placeholder="<?php echo e($langg->lang187); ?>" required="">
                                                <i class="icofont-ui-password"></i>
                                            </div>
                                        </div>

                                        <?php if($gs->is_capcha == 1): ?>

                                            <div class="col-lg-6">


                                                <ul class="captcha-area">
                                                    <li>
                                                        <p>
                                                            <img class="codeimg1"
                                                                 src="<?php echo e(asset("assets/images/capcha_code.png")); ?>"
                                                                 alt=""> <i
                                                                    class="fas fa-sync-alt pointer refresh_code "></i>
                                                        </p>

                                                    </li>
                                                </ul>


                                            </div>

                                            <div class="col-lg-6">

                                                <div class="form-input">
                                                    <input type="text" class="Password" name="codes"
                                                           placeholder="<?php echo e($langg->lang51); ?>" required="">
                                                    <i class="icofont-refresh"></i>

                                                </div>


                                            </div>

                                        <?php endif; ?>

                                        <input type="hidden" name="vendor" value="1">
                                        <input class="mprocessdata" type="hidden" value="<?php echo e($langg->lang188); ?>">
                                        <button type="submit" class="submit-btn"><?php echo e($langg->lang189); ?></button>

                                    </div>


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- VENDOR LOGIN MODAL ENDS -->

<!-- Product Quick View Modal -->

<div class="modal fade" id="quickview" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog quickview-modal modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="submit-loader">
                <img src="<?php echo e(asset('assets/images/'.$gs->loader)); ?>" alt="">
            </div>
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container quick-view-modal">

                </div>
            </div>
        </div>
    </div>
</div>
<!-- Product Quick View Modal -->

<!-- Ask Age View Modal -->
<div class="modal fade" id="askage" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog askage-modal modal-dialog-centered modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container askage-view-modal">

                </div>
            </div>
        </div>
    </div>
</div>
<!-- Ask Age View Modal -->

<!-- Order Tracking modal Start-->
<div class="modal fade" id="track-order-modal" tabindex="-1" role="dialog" aria-labelledby="order-tracking-modal"
     aria-hidden="true">
    <div class="modal-dialog  modal-lg" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h6 class="modal-title"><b><?php echo e($langg->lang772); ?></b></h6>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">

                <div class="order-tracking-content">
                    <form id="track-form" class="track-form">
                        <?php echo e(csrf_field()); ?>

                        <input type="text" id="track-code" placeholder="<?php echo e($langg->lang773); ?>" required="">
                        <button type="submit" class="mybtn1"><?php echo e($langg->lang774); ?></button>
                        <a href="#" data-toggle="modal" data-target="#order-tracking-modal"></a>
                    </form>
                </div>

                <div>
                    <div class="submit-loader d-none">
                        <img src="<?php echo e(asset('assets/images/'.$gs->loader)); ?>" alt="">
                    </div>
                    <div id="track-order">

                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
<!-- Order Tracking modal End -->

<script type="text/javascript">
    var mainurl = "<?php echo e(url('/')); ?>";
    var gs = <?php echo json_encode($gs); ?>;
    var langg = <?php echo json_encode($langg); ?>;
</script>

<!-- jquery -->
<script src="<?php echo e(asset('assets/front/js/jquery.js')); ?>"></script>
<script src="<?php echo e(asset('assets/front/js/vue.js')); ?>"></script>
<script src="<?php echo e(asset('assets/front/jquery-ui/jquery-ui.min.js')); ?>"></script>
<!-- popper -->
<script src="<?php echo e(asset('assets/front/js/popper.min.js')); ?>"></script>
<!-- bootstrap -->
<script src="<?php echo e(asset('assets/front/js/bootstrap.min.js')); ?>"></script>
<!-- plugin js-->
<script src="<?php echo e(asset('assets/front/js/plugin.js')); ?>"></script>
<!-- <script src="<?php echo e(asset('assets/front/js/owl.carousel.min.js')); ?>"></script> -->

<script src="<?php echo e(asset('assets/front/js/xzoom.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/front/js/jquery.hammer.min.js')); ?>"></script>
<script src="<?php echo e(asset('assets/front/js/setup.js')); ?>"></script>

<script src="<?php echo e(asset('assets/front/js/toastr.js')); ?>"></script>
<!-- main -->
<script src="<?php echo e(asset('assets/front/js/main.js')); ?>"></script>
<!-- custom -->
<script src="<?php echo e(asset('assets/front/js/custom.js')); ?>"></script>

<?php echo $seo->google_analytics; ?>


<?php if($gs->is_talkto == 1): ?>
    <!--Start of Tawk.to Script-->
    <?php echo $gs->talkto; ?>

    <!--End of Tawk.to Script-->
<?php endif; ?>

<?php echo $__env->yieldContent('scripts'); ?>

</body>

</html>
