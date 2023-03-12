<div class="col-lg-3 col-md-6">
    <div class="left-area">
        <div class="filter-result-area">
            <div class="header-area">
                <h4 class="title">
                    <?php echo e($langg->lang61); ?>

                </h4>
            </div>
            <div class="body-area">

                <ul class="filter-list">
                    <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $element): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <?php if(count($element->products) > 0): ?>
                        <li>
                            <div class="content">
                                <a href="<?php echo e(route('front.vendor', [str_replace(' ', '-', $vendor->shop_name), $element->slug])); ?>"
                                   class="category-link"> <i class="fas fa-angle-double-right"></i> <?php echo e($element->name); ?>

                                </a>
                                <?php if(!empty($cat) && $cat->id == $element->id && !empty($cat->subs)): ?>
                                    <?php $__currentLoopData = $cat->subs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $subelement): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        
                                        <?php if(count($subelement->products) > 0): ?>
                                        <div class="sub-content open">
                                            <a href="<?php echo e(route('front.vendor', [str_replace(' ', '-', $vendor->shop_name), $cat->slug, $subelement->slug])); ?>"
                                               class="subcategory-link"><i
                                                        class="fas fa-angle-right"></i><?php echo e($subelement->name); ?></a>
                                            <?php if(!empty($subcat) && $subcat->id == $subelement->id && !empty($subcat->childs)): ?>
                                                <?php $__currentLoopData = $subcat->childs; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $childcat): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>

                                                    <?php if(count($childcat->products) > 0): ?>
                                                    <div class="child-content open">
                                                        <a href="<?php echo e(route('front.vendor', [str_replace(' ', '-', $vendor->shop_name), $cat->slug, $subcat->slug, $childcat->slug])); ?>"
                                                           class="subcategory-link"><i
                                                                    class="fas fa-caret-right"></i><?php echo e($childcat->name); ?>

                                                        </a>
                                                    </div>
                                                    <?php endif; ?>

                                                <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                            <?php endif; ?>
                                        </div>
                                        <?php endif; ?>

                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                            </div>
                            <?php endif; ?>


                        </li>
                        <?php endif; ?>
                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>

                </ul>
            </div>
        </div>


        <?php if((!empty($cat) && !empty(json_decode($cat->attributes, true))) || (!empty($subcat) && !empty(json_decode($subcat->attributes, true))) || (!empty($childcat) && !empty(json_decode($childcat->attributes, true)))): ?>

            <div class="tags-area">
                <div class="header-area">
                    <h4 class="title">
                        Filters
                    </h4>
                </div>
                <div class="body-area">
                    <form id="attrForm"
                          action="<?php echo e(route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])); ?>"
                          method="post">
                        <ul class="filter">
                            <div class="single-filter">
                                <?php if(!empty($cat) && !empty(json_decode($cat->attributes, true))): ?>
                                    <?php $__currentLoopData = $cat->attributes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $attr): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div>
                                            <strong><?php echo e($attr->name); ?></strong>
                                        </div>
                                        <?php if(!empty($attr->attribute_options)): ?>
                                            <?php $__currentLoopData = $attr->attribute_options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check">
                                                    <input name="<?php echo e($attr->input_name); ?>[]"
                                                           class="form-check-input attribute-input" type="checkbox"
                                                           id="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"
                                                           value="<?php echo e($option->name); ?>">
                                                    <label class="form-check-label"
                                                           for="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"><?php echo e($option->name); ?></label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>

                                <?php if(!empty($subcat) && !empty(json_decode($subcat->attributes, true))): ?>
                                    <?php $__currentLoopData = $subcat->attributes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $attr): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div>
                                            <strong><?php echo e($attr->name); ?></strong>
                                        </div>
                                        <?php if(!empty($attr->attribute_options)): ?>
                                            <?php $__currentLoopData = $attr->attribute_options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check">
                                                    <input name="<?php echo e($attr->input_name); ?>[]"
                                                           class="form-check-input attribute-input" type="checkbox"
                                                           id="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"
                                                           value="<?php echo e($option->name); ?>">
                                                    <label class="form-check-label"
                                                           for="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"><?php echo e($option->name); ?></label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>

                                <?php if(!empty($childcat) && !empty(json_decode($childcat->attributes, true))): ?>
                                    <?php $__currentLoopData = $childcat->attributes; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $attr): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                        <div>
                                            <strong><?php echo e($attr->name); ?></strong>
                                        </div>
                                        <?php if(!empty($attr->attribute_options)): ?>
                                            <?php $__currentLoopData = $attr->attribute_options; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $key => $option): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                                <div class="form-check">
                                                    <input name="<?php echo e($attr->input_name); ?>[]"
                                                           class="form-check-input attribute-input" type="checkbox"
                                                           id="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"
                                                           value="<?php echo e($option->name); ?>">
                                                    <label class="form-check-label"
                                                           for="<?php echo e($attr->input_name); ?><?php echo e($option->id); ?>"><?php echo e($option->name); ?></label>
                                                </div>
                                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                        <?php endif; ?>
                                    <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                <?php endif; ?>
                            </div>
                        </ul>
                    </form>
                </div>
            </div>
        <?php endif; ?>


        <?php if(!isset($vendor)): ?>

            


        <?php else: ?>

            <div class="service-center">
                <div class="header-area">
                    <h4 class="title">
                        <?php echo e($langg->lang227); ?>

                    </h4>
                </div>
                <div class="body-area">
                    <ul class="list">
                        <li>
                            <a href="javascript:;" data-toggle="modal"
                               data-target="<?php echo e(Auth::guard('web')->check() ? '#vendorform1' : '#comment-log-reg'); ?>">
                                <i class="icofont-email"></i> <span class="service-text"><?php echo e($langg->lang228); ?></span>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+<?php echo e($vendor->shop_number); ?>">
                                <i class="icofont-phone"></i> <span class="service-text"><?php echo e($vendor->shop_number); ?></span>
                            </a>
                        </li>
                    </ul>
                    <!-- Modal -->
                </div>

                <div class="footer-area">
                    <p class="title">
                        <?php echo e($langg->lang229); ?>

                    </p>
                    <ul class="list">


                        <?php if($vendor->f_check != 0): ?>
                            <li><a href="<?php echo e($vendor->f_url); ?>" target="_blank"><i class="fab fa-facebook-f"></i></a></li>
                        <?php endif; ?>
                        <?php if($vendor->g_check != 0): ?>
                            <li><a href="<?php echo e($vendor->g_url); ?>" target="_blank"><i class="fab fa-google"></i></a></li>
                        <?php endif; ?>
                        <?php if($vendor->t_check != 0): ?>
                            <li><a href="<?php echo e($vendor->t_url); ?>" target="_blank"><i class="fab fa-twitter"></i></a></li>
                        <?php endif; ?>
                        <?php if($vendor->l_check != 0): ?>
                            <li><a href="<?php echo e($vendor->l_url); ?>" target="_blank"><i class="fab fa-linkedin-in"></i></a></li>
                        <?php endif; ?>


                    </ul>
                </div>
            </div>


        <?php endif; ?>


    </div>
</div>
