<?php $__currentLoopData = $prods; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $prod): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
    <div class="docname">
        <a href="<?php echo e(route('front.iproduct', ['slug' => $db, 'slug1' => $prod->slug])); ?>">
            <img src="<?php echo e($prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image)); ?>"
 alt="">
            <div class="search-content">
                <p><?php echo mb_strlen($prod->name,'utf-8') > 66 ? str_replace($slug,'<b>'.$slug.'</b>',mb_substr($prod->name,0,66,'utf-8')).'...' : str_replace($slug,'<b>'.$slug.'</b>',$prod->name); ?> - <?php echo e($prod->subcategory_id); ?></p>
                <span style="font-size: 14px; font-weight:600; display:block;"><?php echo e($prod->price); ?></span>
            </div>
        </a>
    </div>
<?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>