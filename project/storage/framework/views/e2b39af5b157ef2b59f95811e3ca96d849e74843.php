<?php $__env->startSection('content'); ?>

    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading"><?php echo e(__('Home Page Customization')); ?></h4>
                    <ul class="links">
                        <li>
                            <a href="<?php echo e(route('admin.dashboard')); ?>"><?php echo e(__('Dashboard')); ?> </a>
                        </li>
                        <li>
                            <a href="javascript:;"><?php echo e(__('Home Page Settings')); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('admin-ps-customize')); ?>"><?php echo e(__('Home Page Customization')); ?></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="social-links-area">
                            <div class="gocover"
                                 style="background: url(<?php echo e(asset('assets/images/'.$gs->admin_loader)); ?>) no-repeat scroll center center rgba(45, 45, 45, 0.5);">
                            </div>
                            <form id="geniusform" action="<?php echo e(route('admin-ps-homeupdate')); ?>" method="POST"
                                  enctype="multipart/form-data">
                                <?php echo e(csrf_field()); ?>


                                <?php echo $__env->make('includes.admin.form-both', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


                                <div class="row justify-content-center">
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="slider"><?php echo e(__('Slider')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="slider"
                                                   value="1" <?php echo e($data->slider==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label"
                                               for="featured_category"><?php echo e(__('Featured Category')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="featured_category"
                                                   value="1" <?php echo e($data->featured_category==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="featured"><?php echo e(__('Featured')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="featured"
                                                   value="1" <?php echo e($data->featured==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="small_banner"><?php echo e(__('Top Small Banner')); ?>

                                            *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="small_banner"
                                                   value="1" <?php echo e($data->small_banner==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="best"><?php echo e(__('Best Seller')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="best"
                                                   value="1" <?php echo e($data->best==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>

                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="flash_deal"><?php echo e(__('Flash Deal')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="flash_deal"
                                                   value="1" <?php echo e($data->flash_deal==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="large_banner"><?php echo e(__('Large Banner')); ?>

                                            *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="large_banner"
                                                   value="1" <?php echo e($data->large_banner==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>

                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="top_rated"><?php echo e(__('Top Rated')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="top_rated"
                                                   value="1" <?php echo e($data->top_rated==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="bottom_small"><?php echo e(__('Bottom Small Banner')); ?>

                                            *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="bottom_small"
                                                   value="1" <?php echo e($data->bottom_small == 1 ? "checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="big"><?php echo e(__('Big Save')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="big" value="1" <?php echo e($data->big==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                </div>


                                <div class="row justify-content-center">


                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label"
                                               for="hot_sale"><?php echo e(__('Hot, New, Trending & Sale')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="hot_sale"
                                                   value="1" <?php echo e($data->hot_sale==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="review_blog"><?php echo e(__('Review & Blog')); ?>

                                            *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="review_blog"
                                                   value="1" <?php echo e($data->review_blog==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>

                                </div>

                                <div class="row justify-content-center">

                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="partners"><?php echo e(__('Partners')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="partners"
                                                   value="1" <?php echo e($data->partners==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>
                                    </div>
                                    <div class="col-lg-2"></div>
                                    <div class="col-lg-4 d-flex justify-content-between">
                                        <label class="control-label" for="service"><?php echo e(__('Service')); ?> *</label>
                                        <label class="switch">
                                            <input type="checkbox" name="service"
                                                   value="1" <?php echo e($data->service==1?"checked":""); ?>>
                                            <span class="slider round"></span>
                                        </label>

                                    </div>

                                </div>

                                <br>

                                <div class="row">
                                    <div class="col-12 text-center">
                                        <button type="submit" class="submit-btn"><?php echo e(__('Submit')); ?></button>
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