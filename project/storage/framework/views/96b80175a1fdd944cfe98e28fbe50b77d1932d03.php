<?php $__env->startSection('content'); ?>

    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading"><?php echo e(__('Website Contents')); ?></h4>
                    <ul class="links">
                        <li>
                            <a href="<?php echo e(route('admin.dashboard')); ?>"><?php echo e(__('Dashboard')); ?> </a>
                        </li>
                        <li>
                            <a href="javascript:;"><?php echo e(__('General Settings')); ?></a>
                        </li>
                        <li>
                            <a href="<?php echo e(route('admin-gs-contents')); ?>"><?php echo e(__('Website Contents')); ?></a>
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
                            <div class="gocover"
                                 style="background: url(<?php echo e(asset('assets/images/'.$gs->admin_loader)); ?>) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>
                            <form action="<?php echo e(route('admin-gs-update')); ?>" id="geniusform" method="POST"
                                  enctype="multipart/form-data">
                                <?php echo e(csrf_field()); ?>


                                <?php echo $__env->make('includes.admin.form-both', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Website Title')); ?> *
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="text" class="input-field"
                                               placeholder="<?php echo e(__('Write Your Site Title Here')); ?>" name="title"
                                               value="<?php echo e($gs->title); ?>" required="">
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Whole Sale Max Quantity')); ?> *
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <input type="number" class="input-field"
                                               placeholder="<?php echo e(__('Whole Sale Max Quantity')); ?>" name="wholesale"
                                               value="<?php echo e($gs->wholesale); ?>" required="" min="0">
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Theme Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="colors"
                                                       value="<?php echo e($gs->colors); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Header Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="header_color" value="<?php echo e($gs->header_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Menu Background Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="menu_bg_color" value="<?php echo e($gs->menu_bg_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Menu Text Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="menu_color" value="<?php echo e($gs->menu_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Menu Text Hover Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="menu_hover_color" value="<?php echo e($gs->menu_hover_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Category Background Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="category_color" value="<?php echo e($gs->category_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Product Slug Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input class="input-field color-field" type="text" name="product_slug_color" value="<?php echo e($gs->product_slug_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Footer Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="footer_color" value="<?php echo e($gs->footer_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Footer Text Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input type="text" class="input-field color-field" name="footer_text_color" value="<?php echo e($gs->footer_text_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Copyright Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input class="input-field color-field" type="text" name="copyright_color" value="<?php echo e($gs->copyright_color); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Slider Product Location')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks drop-success">
                                                <option data-val="1" value="<?php echo e(route('admin-gs-slider-location',1)); ?>" <?php echo e($gs->banner_product_location == 1 ? 'selected' : ''); ?>><?php echo e(__('Left')); ?></option>
                                                <option data-val="0" value="<?php echo e(route('admin-gs-slider-location',0)); ?>" <?php echo e($gs->banner_product_location == 0 ? 'selected' : ''); ?>><?php echo e(__('Right')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading"><?php echo e(__('Slider Product Background Color')); ?> *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="form-group">
                                            <div class="input-group colorpicker-component cp">
                                                <input class="input-field color-field" type="text" name="banner_product_background" value="<?php echo e($gs->banner_product_background); ?>" class="form-control cp"/>
                                                <span class="input-group-addon"><i></i></span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Use HTTPS')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_secure == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-secure',1)); ?>" <?php echo e($gs->is_secure == 1 ? 'selected' : ''); ?>><?php echo e(__('Yes')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-secure',0)); ?>" <?php echo e($gs->is_secure == 0 ? 'selected' : ''); ?>><?php echo e(__('No')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Home Link On Menu')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_home== 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-ishome',1)); ?>" <?php echo e($gs->is_home == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-ishome',0)); ?>" <?php echo e($gs->is_home == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Capcha')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_capcha== 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-iscapcha',1)); ?>" <?php echo e($gs->is_capcha == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-iscapcha',0)); ?>" <?php echo e($gs->is_capcha == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Sign Up Verification')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_verification_email == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-is-email-verify',1)); ?>" <?php echo e($gs->is_verification_email == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-is-email-verify',0)); ?>" <?php echo e($gs->is_verification_email == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Display Stock Number')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->show_stock == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-stock',1)); ?>" <?php echo e($gs->show_stock == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-stock',0)); ?>" <?php echo e($gs->show_stock == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Check to be over 21')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->age_checker == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-age',1)); ?>" <?php echo e($gs->age_checker == 1 ? 'selected' : ''); ?>><?php echo e(__('Yes')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-age',0)); ?>" <?php echo e($gs->age_checker == 0 ? 'selected' : ''); ?>><?php echo e(__('No')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>



                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Tawk.to')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_talkto == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-talkto',1)); ?>" <?php echo e($gs->is_talkto == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-talkto',0)); ?>" <?php echo e($gs->is_talkto == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Tawk.to Widget Code')); ?> *
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="tawk-area">
                                            <textarea name="talkto"><?php echo e($gs->talkto); ?></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Disqus')); ?>

                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="action-list">
                                            <select class="process select droplinks <?php echo e($gs->is_disqus == 1 ? 'drop-success' : 'drop-danger'); ?>">
                                                <option data-val="1"
                                                        value="<?php echo e(route('admin-gs-isdisqus',1)); ?>" <?php echo e($gs->is_disqus == 1 ? 'selected' : ''); ?>><?php echo e(__('Activated')); ?></option>
                                                <option data-val="0"
                                                        value="<?php echo e(route('admin-gs-isdisqus',0)); ?>" <?php echo e($gs->is_disqus == 0 ? 'selected' : ''); ?>><?php echo e(__('Deactivated')); ?></option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Disqus Universal Code')); ?> *
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="tawk-area">
                                            <textarea name="disqus"><?php echo e($gs->disqus); ?></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                <?php echo e(__('Cronjob URL')); ?> *
                                            </h4>
                                            <p class="sub-heading"><?php echo e(__('(Copy This URL and paste this to cron job.)')); ?>

                                                <a target="_blank"
                                                   href="https://www.youtube.com/watch?v=Hw0fbM7E80Q"><?php echo e(__('Check Tutorial')); ?></a>
                                            </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div>
                                            <textarea class="input-field"
                                                      readonly=""><?php echo e(url('/vendor/subscription/check')); ?></textarea>
                                        </div>
                                    </div>
                                </div>


                                <div class="row justify-content-center">
                                    <div class="col-lg-3">
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