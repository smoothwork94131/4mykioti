<?php $__env->startSection('styles'); ?>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <section class="login-signup">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <nav class="comment-log-reg-tabmenu">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link login active" id="nav-log-tab" data-toggle="tab" href="#nav-log" role="tab" aria-controls="nav-log" aria-selected="true">
                                <?php echo e($langg->lang197); ?>

                            </a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-log" role="tabpanel"
                             aria-labelledby="nav-log-tab">
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
                                                   placeholder="<?php echo e($langg->lang174); ?>"
                                                   required="">
                                            <i class="icofont-ui-password"></i>
                                        </div>
                                        <div class="form-forgot-pass">
                                            <div class="left">
                                                <input type="checkbox" name="remember"
                                                       id="mrp" <?php echo e(old('remember') ? 'checked' : ''); ?>>
                                                <label for="mrp"><?php echo e($langg->lang175); ?></label>
                                            </div>
                                            <div class="right">
                                                <a href="<?php echo e(route('user-forgot')); ?>">
                                                    <?php echo e($langg->lang176); ?>

                                                </a>
                                            </div>
                                        </div>
                                        <input type="hidden" name="modal" value="1">
                                        <input class="mauthdata" type="hidden" value="<?php echo e($langg->lang177); ?>">
                                        <button type="submit" class="submit-btn"><?php echo e($langg->lang178); ?></button>
                                        <?php if(App\Models\Socialsetting::find(1)->f_check == 1 || App\Models\Socialsetting::find(1)->g_check ==1): ?>
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
                                        <div class="form-forgot-pass" style="margin-top: 20px;">
                                            <div class="left">
                                                <p>No account yet? Sign up now!</p>
                                            </div>
                                            <div class="right authlink">
                                                <a href="<?php echo e(route('user.register')); ?>">
                                                    Sigh Up
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

<?php $__env->stopSection(); ?>

<?php $__env->startSection('scripts'); ?>
    
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.front', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>