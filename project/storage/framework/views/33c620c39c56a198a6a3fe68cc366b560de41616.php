<?php $__env->startSection('styles'); ?>
<style>
    .custom-control-label::before {
        position: absolute;
        top: .25rem;
        left: -1.5rem;
        display: block!important;
        width: 1rem;
        height: 1rem!important;
        pointer-events: none;
        content: ""!important;
        background-color: #fff;
        border: #adb5bd solid 1px;
    }

    .custom-control-input {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 1rem!important;
        height: 1.25rem!important;
        opacity: 0;
    }

    .custom-control {
        position: relative;
        z-index: 1!important;
        display: block;
        min-height: 1.5rem;
    }
</style>
<?php $__env->stopSection(); ?>

<?php $__env->startSection('content'); ?>

    <section class="login-signup">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <nav class="comment-log-reg-tabmenu">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link active" id="nav-reg-tab" data-toggle="tab" href="#nav-reg" role="tab" aria-controls="nav-reg" aria-selected="false">
                                <?php echo e($langg->lang198); ?>

                            </a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-reg" role="tabpanel" aria-labelledby="nav-reg-tab">
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
                                            <input type="text" class="User Name" id="name" name="name" placeholder="<?php echo e($langg->lang182); ?>" required="">
                                            <i class="icofont-user-alt-5"></i>
                                        </div>

                                        <div class="form-input">
                                            <input type="email" class="User Name" id="email" name="email" placeholder="<?php echo e($langg->lang183); ?>" required="">
                                            <i class="icofont-email"></i>
                                        </div>

                                        <div class="form-input">
                                            <input type="text" class="User Name" id="phone" name="phone" placeholder="<?php echo e($langg->lang184); ?>" required="">
                                            <i class="icofont-phone"></i>
                                        </div>

                                        <div class="form-input">
                                            
                                            <input type="hidden" id="postal_code" name="zip" required=""/>
                                            <input type="hidden" id="country" name="country" required=""/>
                                            <input type="hidden" id="locality" name="city" required="">
                                            <input type="hidden" id="administrative_area_level_1" name="state" required=""/>
                                            <input type="hidden" name="position" id="position">
                                            <input type="hidden" id="street_number" name="street_number" required=""/>
                                            <input type="hidden" id="route" name="street_address" required=""/>

                                            <input type="text" class="User Name" name="autocomplete" id="autocomplete" placeholder="<?php echo e($langg->lang185); ?>" required="">
                                            <i class="icofont-location-pin"></i>
                                        </div>

                                        <div class="form-input">
                                            <input type="password" class="Password" name="password" placeholder="<?php echo e($langg->lang186); ?>" required="">
                                            <i class="icofont-ui-password"></i>
                                        </div>

                                        <div class="form-input">
                                            <input type="password" class="Password" name="password_confirmation" placeholder="<?php echo e($langg->lang187); ?>" required="">
                                            <i class="icofont-ui-password"></i>
                                        </div>

                                        <?php if($gs->is_capcha == 1): ?>

                                            <ul class="captcha-area">
                                                <li>
                                                    <p>
                                                        <img class="codeimg1" src="<?php echo e(asset("assets/images/capcha_code.png")); ?>" alt=""> 
                                                        <i class="fas fa-sync-alt pointer refresh_code "></i>
                                                    </p>
                                                </li>
                                            </ul>

                                            <div class="form-input">
                                                <input type="text" class="Password" name="codes" placeholder="<?php echo e($langg->lang51); ?>" required="">
                                                <i class="icofont-refresh"></i>
                                            </div>

                                        <?php endif; ?>

                                        
                                        
                                        <div id="vendor_input_section">
                                            <div class="form-input">
                                                <input type="text" class="User Name" name="shop_name" placeholder="Company Name">
                                                <i class="icofont-cart-alt"></i>
                                            </div>

                                            <div class="form-input">
                                                <div class="form-forgot-pass">
                                                    <div class="left">
                                                        <input type="checkbox" id="same_user_name">
                                                        <label for="same_user_name">Same User Name</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-input">
                                                <input type="text" class="User Name" id="owner_name" name="owner_name" placeholder="<?php echo e($langg->lang239); ?>">
                                                <i class="icofont-cart"></i>
                                            </div>

                                            <div class="form-input">
                                                <div class="form-forgot-pass">
                                                    <div class="left">
                                                        <input type="checkbox" id="same_user_number">
                                                        <label for="same_user_number">Same User Phone Number</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-input">
                                                <input type="text" class="User Name" id="shop_number" name="shop_number" placeholder="<?php echo e($langg->lang240); ?>">
                                                <i class="icofont-shopping-cart"></i>
                                            </div>

                                            <div class="form-input">
                                                <div class="form-forgot-pass">
                                                    <div class="left">
                                                        <input type="checkbox" id="same_user_address">
                                                        <label for="same_user_address">Same User Address</label>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="form-input">
                                                <input type="text" class="User Name" id="shop_address" name="shop_address" placeholder="<?php echo e($langg->lang241); ?>">
                                                <i class="icofont-opencart"></i>
                                            </div>

                                            <div class="form-input">
                                                <textarea class="User Name" id="shop_message" name="shop_message" placeholder="<?php echo e($langg->lang243); ?>"></textarea>
                                            </div>
                                        </div>

                                        <div class="form-input">
                                            <div class="form-forgot-pass">
                                                <div class="left">
                                                    <input type="checkbox" id="terms_condition" name="terms_condition" value="1">
                                                    <label for="terms_condition"><a href="<?php echo e(route('front.terms-condition')); ?>" target="_blank">I agree Terms and Conditions</a></label>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-input">
                                            <input type="text" class="User Name" id="terms_condition_inital" name="terms_condition_inital" placeholder="Inital">
                                            <i class="icofont-info"></i>
                                        </div>

                                        <input class="mprocessdata" type="hidden" value="<?php echo e($langg->lang188); ?>">
                                        <button type="submit" class="submit-btn"><?php echo e($langg->lang189); ?></button>

                                        <div class="form-forgot-pass" style="margin-top: 20px;">
                                            <div class="left">
                                                <p>Already have an  account?</p>
                                            </div>
                                            <div class="right authlink">
                                                <a href="<?php echo e(route('user.login')); ?>">
                                                    Log In
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
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1jKOFLhfQoZD3xJISSPnSW9-4SyYPpjY&callback=initAutocomplete&libraries=places&v=weekly" defer></script>
    
    <script>
        let placeSearch;
        let autocomplete;

        const componentForm = {
            street_number: "short_name",
            route: "long_name",
            locality: "long_name",
            administrative_area_level_1: "short_name",
            country: "long_name",
            postal_code: "short_name",
        };

        function initAutocomplete() {
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById("autocomplete"),
                {types: ["geocode"]}
            );
            autocomplete.setFields(["address_component", "geometry"]);
            autocomplete.addListener("place_changed", fillInAddress);
        }

        function fillInAddress() {
            const place = autocomplete.getPlace();

            var location = JSON.parse(JSON.stringify(place.geometry.location));

            var position = "lat:" + location.lat + ",lng:" + location.lng;
            $("#position").val(position);
            
            for (const component in componentForm) {
                document.getElementById(component).value = "";
                // document.getElementById(component).disabled = false;
            }

            for (const component of place.address_components) {
                const addressType = component.types[0];

                if (componentForm[addressType]) {
                    const val = component[componentForm[addressType]];
                    document.getElementById(addressType).value = val;
                }
            }
        }
    </script>

    <script>
        $(document).ready(function () {
            $("#vendor_input_section").hide();
            
            $("#vendor_switch").on('change', function() {
                if($(this).prop("checked") == true) {
                    $("#vendor_input_section").show();
                }
                else {
                    $("#vendor_input_section").hide();
                    $("#vendor_input_section :text").val('');
                    $("#vendor_input #shop_message").val('')
                }
            })

            $("#same_user_name").on('change', function() {
                if($(this).prop("checked") == true) {
                    var username = $("#name").val();
                    if(username == '') {
                        toastr.error('please enter User Name first');
                        $(this).removeAttr('checked');
                    }
                    else {
                        $("#owner_name").val(username);
                    }
                }
                else {
                    $("#owner_name").val('');
                }
            });

            $("#same_user_number").on('change', function() {
                if($(this).prop("checked") == true) {
                    var phone = $("#phone").val();
                    if(phone == '') {
                        toastr.error('please enter Phone Number first');
                        $(this).removeAttr('checked');
                    }
                    else {
                        $("#shop_number").val(phone);
                    }
                }
                else {
                    $("#shop_number").val('');
                }
            });

            $("#same_user_address").on('change', function() {
                if($(this).prop("checked") == true) {
                    var address = $("#autocomplete").val();
                    if(address == '') {
                        toastr.error('please enter Address first');
                        $(this).removeAttr('checked');
                    }
                    else {
                        $("#shop_address").val(address);
                    }
                }
                else {
                    $("#shop_address").val('');
                }
            });
        })
    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layouts.front', array_except(get_defined_vars(), array('__data', '__path')))->render(); ?>