@extends('layouts.front')

@section('styles')
    <style type="text/css">
        .root.root--in-iframe {
            background: #4682b447 !important;
        }
    </style>
@endsection

@section('content')
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages">
                        <li>
                            <a href="{{ route('front.index') }}">
                                {{ $langg->lang17 }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('front.checkout') }}">
                                {{ $langg->lang136 }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->

    <!-- Check Out Area Start -->
    <section class="checkout">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="checkout-area mb-0 pb-0">
                        <div class="checkout-process">
                            <ul class="nav" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link active" id="pills-step1-tab" data-toggle="pill" href="#pills-step1"
                                        role="tab" aria-controls="pills-step1" aria-selected="true">
                                        <span>1</span> {{ $langg->lang743 }}
                                        <i class="far fa-address-card"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" id="pills-step2-tab" data-toggle="pill" href="#pills-step2"
                                        role="tab" aria-controls="pills-step2" aria-selected="false">
                                        <span>2</span> {{ $langg->lang744 }}
                                        <i class="fas fa-dolly"></i>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link disabled" id="pills-step3-tab" data-toggle="pill" href="#pills-step3"
                                        role="tab" aria-controls="pills-step3" aria-selected="false">
                                        <span>3</span> Checkout
                                        <i class="far fa-credit-card"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>


                <div class="col-lg-8">
                    <form id="" action="" method="POST" class="checkoutform">
                        @include('includes.form-success')
                        @include('includes.form-error')

                        {{ csrf_field() }}

                        <div class="checkout-area">
                            <div class="tab-content" id="pills-tabContent">
                                <div class="tab-pane fade show active" id="pills-step1" role="tabpanel"
                                    aria-labelledby="pills-step1-tab">
                                    <div class="content-box">
                                        <div class="content">
                                            <div class="personal-info">
                                                <h5 class="title">
                                                    {{ $langg->lang746 }} :
                                                </h5>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input type="text" id="personal-name" class="form-control"
                                                            name="personal_name" placeholder="{{ $langg->lang747 }}"
                                                            value="{{ Auth::check() ? Auth::user()->name : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input type="email" id="personal-email" class="form-control"
                                                            name="personal_email" placeholder="{{ $langg->lang748 }}"
                                                            value="{{ Auth::check() ? Auth::user()->email : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                </div>
                                                @if (!Auth::check())
                                                    <div class="row">
                                                        <div class="col-lg-12 mt-3">
                                                            <input class="styled-checkbox" id="open-pass" type="checkbox"
                                                                value="1" name="pass_check">
                                                            <label for="open-pass">{{ $langg->lang749 }}</label>
                                                        </div>
                                                    </div>
                                                    <div class="row set-account-pass d-none">
                                                        <div class="col-lg-6">
                                                            <input type="password" name="personal_pass" id="personal-pass"
                                                                class="form-control" placeholder="{{ $langg->lang750 }}">
                                                        </div>
                                                        <div class="col-lg-6">
                                                            <input type="password" name="personal_confirm"
                                                                id="personal-pass-confirm" class="form-control"
                                                                placeholder="{{ $langg->lang751 }}">
                                                        </div>
                                                    </div>
                                                @endif
                                            </div>
                                            <div class="billing-address">
                                                <h5 class="title">
                                                    {{ $langg->lang147 }}
                                                </h5>
                                                <div class="row">
                                                    <input type="hidden" name="shipping" value="shipto">
                                                    <div class="col-lg-6 d-none" id="shipshow">
                                                        <select class="form-control nice" name="pickup_location">
                                                            @foreach ($pickups as $pickup)
                                                                <option value="{{ $pickup->location }}">
                                                                    {{ $pickup->location }}</option>
                                                            @endforeach
                                                        </select>
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="name"
                                                            placeholder="{{ $langg->lang152 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->name : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="phone"
                                                            placeholder="{{ $langg->lang153 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->phone : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="email"
                                                            placeholder="{{ $langg->lang154 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->email : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="address"
                                                            placeholder="{{ $langg->lang155 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->address : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <select class="form-control" name="customer_country"
                                                            required="" {!! Auth::check() ? 'readonly' : '' !!}>
                                                            @include('includes.countries')
                                                        </select>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="city"
                                                            placeholder="{{ $langg->lang158 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->city : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control" type="text" name="zip"
                                                            placeholder="{{ $langg->lang159 }}" required=""
                                                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->zip : '' }}"
                                                            {!! Auth::check() ? 'readonly' : '' !!}>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                class="row {{ !Auth::guard('web')->user() || !Auth::guard('web')->user()->is_verified ? 'd-none' : '' }}">
                                                <div class="col-lg-12 mt-3">
                                                    <input class="styled-checkbox" id="ship-diff-address" type="checkbox"
                                                        value="value1">
                                                    <label for="ship-diff-address">{{ $langg->lang160 }}</label>
                                                </div>
                                            </div>
                                            <div class="ship-diff-addres-area d-none">
                                                <h5 class="title">
                                                    {{ $langg->lang752 }}
                                                </h5>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" type="text"
                                                            name="shipping_name" id="shippingFull_name"
                                                            placeholder="{{ $langg->lang152 }}">
                                                        <input type="hidden" name="shipping_email" value="">
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" type="text"
                                                            name="shipping_phone" id="shipingPhone_number"
                                                            placeholder="{{ $langg->lang153 }}">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" name="shipping_address"
                                                            id="shipping_address" placeholder="Shipping Address">
                                                    </div>

                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" name="shipping_country"
                                                            placeholder="Shipping Country">
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" name="shipping_city"
                                                            id="shipping_city" placeholder="Shipping City">
                                                    </div>
                                                    <div class="col-lg-6">
                                                        <input class="form-control ship_input" name="shipping_zip"
                                                            id="shippingPostal_code" placeholder="Shipping Zip Code">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="order-note mt-3">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <input type="text" id="Order_Note" class="form-control"
                                                            name="order_notes"
                                                            placeholder="{{ $langg->lang217 }} ({{ $langg->lang218 }})">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12  mt-3">
                                                    <div class="bottom-area paystack-area-btn">
                                                        <button type="submit"
                                                            class="mybtn1">{{ $langg->lang753 }}</button>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-step2" role="tabpanel"
                                    aria-labelledby="pills-step2-tab">
                                    <div class="content-box">
                                        <div class="content">
                                            <div class="order-area">
                                                @foreach ($products as $product)
                                                    <div class="order-item">
                                                        <div class="product-img">
                                                            <div class="d-flex">
                                                                @if ($product['db'] == 'products')
                                                                    <img src=" {{ asset('assets/images/products/' . $product['item']->photo) }}"
                                                                        height="80" width="80" class="p-1">
                                                                @else
                                                                    <img src=" {{ asset('assets/images/products_home/' . $product['item']->photo) }}"
                                                                        height="80" width="80" class="p-1">
                                                                @endif
                                                            </div>
                                                        </div>
                                                        <div class="product-content">
                                                            <p class="name">
                                                                @if ($product['db'] == 'products')
                                                                    <a href="{{ route('front.product', $product['item']->slug) }}"
                                                                        target="_blank">
                                                                        {{ $product['item']->name }}
                                                                    </a>
                                                                @else
                                                                    <a
                                                                        href="{{ route('front.homeproduct', ['category' => $product['item']->category, 'series' => $product['db'], 'model' => $product['item']->model, 'section' => $product['item']->section, 'group' => $product['item']->group_name, 'prod_name' => $product['item']->name]) }}">
                                                                        @php
                                                                            $prod_name = mb_strlen($product['item']->name, 'utf-8') > 45 ? mb_substr($product['item']->name, 0, 45, 'utf-8') . '...' : $product['item']->name;
                                                                            if (strpos($prod_name, ',') !== false) {
                                                                                $prod_name = Helper::reversePartsName($prod_name);
                                                                            }
                                                                        @endphp
                                                                        {{ $prod_name }}
                                                                    </a>
                                                                @endif
                                                            </p>
                                                            <div class="unit-price">
                                                                <h5 class="label">{{ $langg->lang754 }} : </h5>
                                                                <p>{{ App\Models\Product::convertPrice($product['item']->price) }}
                                                                </p>
                                                            </div>
                                                            @if (!empty($product['size']))
                                                                <div class="unit-price">
                                                                    <h5 class="label">{{ $langg->lang312 }} : </h5>
                                                                    <p>{{ str_replace('-', ' ', $product['size']) }}</p>
                                                                </div>
                                                            @endif
                                                            @if (!empty($product['color']))
                                                                <div class="unit-price">
                                                                    <h5 class="label">{{ $langg->lang313 }} : </h5>
                                                                    <span id="color-bar"
                                                                        style="border: 10px solid {{ $product['color'] == '' ? 'white' : '#' . $product['color'] }};"></span>
                                                                </div>
                                                            @endif
                                                            @if (!empty($product['keys']))
                                                                @foreach (array_combine(explode(',', $product['keys']), explode(',', $product['values'])) as $key => $value)
                                                                    <div class="quantity">
                                                                        <h5 class="label">
                                                                            {{ ucwords(str_replace('_', ' ', $key)) }}
                                                                            : </h5>
                                                                        <span class="qttotal">{{ $value }} </span>
                                                                    </div>
                                                                @endforeach
                                                            @endif
                                                            <div class="quantity">
                                                                <h5 class="label">{{ $langg->lang755 }} : </h5>
                                                                <span class="qttotal">{{ $product['qty'] }} </span>
                                                            </div>
                                                            <div class="total-price">
                                                                <h5 class="label">{{ $langg->lang756 }} : </h5>
                                                                <p>{{ App\Models\Product::convertPrice($product['price']) }}
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                @endforeach
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-12 mt-3">
                                                    <div class="bottom-area">
                                                        <a href="javascript:;" id="step1-btn" class="mybtn1 mr-3">{{ $langg->lang757 }}</a>
                                                        <a href="javascript:;" id="step3-btn" class="mybtn1">{{ $langg->lang753 }}</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane fade" id="pills-step3" role="tabpanel"
                                    aria-labelledby="pills-step3-tab">
                                    <div class="content-box">
                                        <div class="content">
                                            <div class="billing-info-area">
                                                <h4 class="title">
                                                    {{ $langg->lang758 }}
                                                </h4>
                                                <ul class="info-list">
                                                    <li>
                                                        <p id="shipping_user"></p>
                                                    </li>
                                                    <li>
                                                        <p id="shipping_location"></p>
                                                    </li>
                                                    <li>
                                                        <p id="shipping_phone"></p>
                                                    </li>
                                                    <li>
                                                        <p id="shipping_email"></p>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div class="payment-information">
                                                <a class="nav-link payment" data-val="" data-show="no"
                                                    data-form="{{ route('front.checkout.store') }}"
                                                    data-href="{{ route('front.checkout.store') }}"
                                                    id="v-pills-tab3-tab" data-toggle="pill" href="#v-pills-tab3"
                                                    role="tab" aria-controls="v-pills-tab3"
                                                    aria-selected="false"></a>
                                            </div>

                                            <div class="row">
                                                <div class="col-lg-12 mt-3">
                                                    <div class="bottom-area">
                                                        <a href="{{ route('front.cart.clear') }}" class="mybtn1 mr-3 mt-1">Clear Cart</a>
                                                        <button type="submit" id="final-btn" class="mybtn1 mt-1">
                                                            Checkout
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <input type="hidden" id="shipping-cost" name="shipping_cost" value="0">
                        <input type="hidden" id="packing-cost" name="packing_cost" value="0">
                        <input type="hidden" name="tax" value="{{ $gs->tax }}">
                        <input type="hidden" name="totalQty" value="{{ $totalQty }}">

                        @if (Session::has('coupon_total'))
                            <input type="hidden" name="total" id="grandtotal" value="{{ $totalPrice }}">
                            <input type="hidden" id="tgrandtotal" value="{{ $totalPrice }}">
                        @elseif(Session::has('coupon_total1'))
                            <input type="hidden" name="total" id="grandtotal"
                                value="{{ preg_replace('/[^0-9,.]/', '', Session::get('coupon_total1')) }}">
                            <input type="hidden" id="tgrandtotal"
                                value="{{ preg_replace('/[^0-9,.]/', '', Session::get('coupon_total1')) }}">
                        @else
                            <input type="hidden" name="total" id="grandtotal"
                                value="{{ round($totalPrice * $curr->value, 2) }}">
                            <input type="hidden" id="tgrandtotal" value="{{ round($totalPrice * $curr->value, 2) }}">
                        @endif

                        <input type="hidden" name="coupon_code" id="coupon_code"
                            value="{{ Session::has('coupon_code') ? Session::get('coupon_code') : '' }}">
                        <input type="hidden" name="coupon_discount" id="coupon_discount"
                            value="{{ Session::has('coupon') ? Session::get('coupon') : '' }}">
                        <input type="hidden" name="coupon_id" id="coupon_id"
                            value="{{ Session::has('coupon') ? Session::get('coupon_id') : '' }}">
                        <input type="hidden" name="user_id" id="user_id"
                            value="{{ Auth::guard('web')->check() ? Auth::guard('web')->user()->id : '' }}">
                    </form>
                </div>

                @if (Session::has('cart'))
                    <div class="col-lg-4">
                        <div class="right-area">
                            <div class="order-box">
                                <h4 class="title">{{ $langg->lang127 }}</h4>
                                <ul class="order-list">
                                    <li>
                                        <p>
                                            {{ $langg->lang128 }}
                                        </p>
                                        <P>
                                            <b
                                                class="cart-total">{{ Session::has('cart') ? App\Models\Product::convertPrice(Session::get('cart')->totalPrice) : '0.00' }}</b>
                                        </P>
                                    </li>
                                    @if ($gs->tax != 0)
                                        <li>
                                            <p>
                                                {{ $langg->lang144 }}
                                            </p>
                                            <P>
                                                <b> {{ $gs->tax }}% </b>
                                            </P>
                                        </li>
                                    @endif

                                    @if (Session::has('coupon'))
                                        <li class="discount-bar">
                                            <p>
                                                {{ $langg->lang145 }}
                                                <span
                                                    class="dpercent">{{ Session::get('coupon_percentage') == 0 ? '' : '(' . Session::get('coupon_percentage') . ')' }}</span>
                                            </p>
                                            <P>
                                                @if ($gs->currency_format == 0)
                                                    <b
                                                        id="discount">{{ $curr->sign }}{{ Session::get('coupon') }}</b>
                                                @else
                                                    <b
                                                        id="discount">{{ Session::get('coupon') }}{{ $curr->sign }}</b>
                                                @endif
                                            </P>
                                        </li>
                                    @else
                                        <li class="discount-bar d-none">
                                            <p>
                                                {{ $langg->lang145 }} <span class="dpercent"></span>
                                            </p>
                                            <P>
                                                <b id="discount">{{ $curr->sign }}{{ Session::get('coupon') }}</b>
                                            </P>
                                        </li>
                                    @endif
                                </ul>

                                <div class="total-price">
                                    <p>
                                        {{ $langg->lang131 }}
                                    </p>
                                    <p>
                                        @if (Session::has('coupon_total'))
                                            @if ($gs->currency_format == 0)
                                                <span id="total-cost">{{ $curr->sign }}{{ $totalPrice }}</span>
                                            @else
                                                <span id="total-cost">{{ $totalPrice }}{{ $curr->sign }}</span>
                                            @endif
                                        @elseif(Session::has('coupon_total1'))
                                            <span id="total-cost"> {{ Session::get('coupon_total1') }}</span>
                                        @else
                                            <span
                                                id="total-cost">{{ App\Models\Product::convertPrice($totalPrice) }}</span>
                                        @endif
                                    </p>
                                </div>

                                <div class="cupon-box">
                                    <div id="coupon-link">
                                        <img src="{{ asset('assets/front/images/tag.png') }}">
                                        {{ $langg->lang132 }}
                                    </div>
                                    <form id="check-coupon-form" class="coupon">
                                        <input type="text" placeholder="{{ $langg->lang133 }}" id="code"
                                            required="" autocomplete="off">
                                        <button type="submit">{{ $langg->lang134 }}</button>
                                    </form>
                                </div>

                                @php
                                    $shipping_price = 9.99;
                                    $count = 0;
                                    foreach ($products as $product) {
                                        if (($product['item']->best ?? 0) == 1) {
                                            $count += $product['qty'];
                                        }
                                    }
                                    $shipping_price = $shipping_price * (intdiv($count - 1, 3) + 1);
                                @endphp

                                <div class="final-price">
                                    <span>{{ $langg->lang767 }} :</span>
                                    @if (Session::has('coupon_total'))
                                        @if ($gs->currency_format == 0)
                                            <span id="final-cost">{{ $curr->sign }}{{ $totalPrice }}</span>
                                        @else
                                            <span id="final-cost">{{ $totalPrice }}{{ $curr->sign }}</span>
                                        @endif
                                    @elseif(Session::has('coupon_total1'))
                                        <span id="final-cost"> {{ Session::get('coupon_total1') }}</span>
                                    @else
                                        <span id="final-cost">{{ App\Models\Product::convertPrice($totalPrice) }}</span>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
            </div>
        </div>
    </section>
    <!-- Check Out Area End-->
@endsection

@section('scripts')
    {{-- <script src="https://js.paystack.co/v1/inline.js"></script> --}}

    <script type="text/javascript">
        $('a.payment:first').addClass('active');
        $('.checkoutform').prop('action', $('a.payment:first').data('form'));
        $($('a.payment:first').attr('href')).load($('a.payment:first').data('href'));
        
        var show = $('a.payment:first').data('show');
        if (show != 'no') {
            $('.pay-area').removeClass('d-none');
        } else {
            $('.pay-area').addClass('d-none');
        }
        $($('a.payment:first').attr('href')).addClass('active').addClass('show');
    </script>


    <script type="text/javascript">
        var coup = 0;
        var pos = {{ $gs->currency_format }};

        var mship = $('.shipping').length > 0 ? $('.shipping').first().val() : 0;
        var mpack = $('.packing').length > 0 ? $('.packing').first().val() : 0;
        mship = parseFloat(mship);
        mpack = parseFloat(mpack);

        $('#shipping-cost').val(mship);
        $('#packing-cost').val(mpack);

        var ftotal = parseFloat($('#grandtotal').val()) + mship + mpack;
        ftotal = parseFloat(ftotal);
        if (ftotal % 1 != 0) {
            ftotal = ftotal.toFixed(2);
        }
        if (pos == 0) {
            $('#final-cost').html('{{ $curr->sign }}' + ftotal)
        } else {
            $('#final-cost').html(ftotal + '{{ $curr->sign }}')
        }

        $('#grandtotal').val(ftotal);

        // $('.shipping').on('click', function() {
        //     mship = $(this).val();

        //     $('#shipping-cost').val(mship);
        //     var ttotal = parseFloat($('#tgrandtotal').val()) + parseFloat(mship) + parseFloat(mpack);
        //     ttotal = parseFloat(ttotal);
        //     if (ttotal % 1 != 0) {
        //         ttotal = ttotal.toFixed(2);
        //     }
        //     if (pos == 0) {
        //         $('#final-cost').html('{{ $curr->sign }}' + ttotal);
        //     } else {
        //         $('#final-cost').html(ttotal + '{{ $curr->sign }}');
        //     }

        //     $('#grandtotal').val(ttotal);

        // })

        // $('.packing').on('click', function() {
        //     mpack = $(this).val();
        //     $('#packing-cost').val(mpack);
        //     var ttotal = parseFloat($('#tgrandtotal').val()) + parseFloat(mship) + parseFloat(mpack);
        //     ttotal = parseFloat(ttotal);
        //     if (ttotal % 1 != 0) {
        //         ttotal = ttotal.toFixed(2);
        //     }

        //     if (pos == 0) {
        //         $('#final-cost').html('{{ $curr->sign }}' + ttotal);
        //     } else {
        //         $('#final-cost').html(ttotal + '{{ $curr->sign }}');
        //     }


        //     $('#grandtotal').val(ttotal);

        // })

        $("#check-coupon-form").on('submit', function() {
            var val = $("#code").val();
            var total = $("#grandtotal").val();
            var ship = 0;
            $.ajax({
                type: "GET",
                url: mainurl + "/carts/coupon/check",
                data: {
                    code: val,
                    total: total,
                    shipping_cost: ship
                },
                success: function(data) {
                    if (data == 0) {
                        toastr.error(langg.no_coupon);
                        $("#code").val("");
                    } else if (data == 2) {
                        toastr.error(langg.already_coupon);
                        $("#code").val("");
                    } else {
                        $("#check-coupon-form").toggle();
                        $(".discount-bar").removeClass('d-none');

                        if (pos == 0) {
                            $('#total-cost').html('{{ $curr->sign }}' + data[0]);
                            $('#discount').html('{{ $curr->sign }}' + data[2]);
                        } else {
                            $('#total-cost').html(data[0] + '{{ $curr->sign }}');
                            $('#discount').html(data[2] + '{{ $curr->sign }}');
                        }
                        $('#grandtotal').val(data[0]);
                        $('#tgrandtotal').val(data[0]);
                        $('#coupon_code').val(data[1]);
                        $('#coupon_discount').val(data[2]);
                        if (data[4] != 0) {
                            $('.dpercent').html('(' + data[4] + ')');
                        } else {
                            $('.dpercent').html('');
                        }


                        var ttotal = parseFloat($('#grandtotal').val()) + parseFloat(mship) +
                            parseFloat(mpack);
                        ttotal = parseFloat(ttotal);
                        if (ttotal % 1 != 0) {
                            ttotal = ttotal.toFixed(2);
                        }

                        if (pos == 0) {
                            $('#final-cost').html('{{ $curr->sign }}' + ttotal)
                        } else {
                            $('#final-cost').html(ttotal + '{{ $curr->sign }}')
                        }

                        toastr.success(langg.coupon_found);
                        $("#code").val("");
                    }
                }
            });
            return false;
        });

        // Password Checking

        $("#open-pass").on("change", function() {
            if (this.checked) {
                $('.set-account-pass').removeClass('d-none');
                $('.set-account-pass input').prop('required', true);
                $('#personal-email').prop('required', true);
                $('#personal-name').prop('required', true);
            } else {
                $('.set-account-pass').addClass('d-none');
                $('.set-account-pass input').prop('required', false);
                $('#personal-email').prop('required', false);
                $('#personal-name').prop('required', false);

            }
        });
        // Password Checking Ends

        // Shipping Address Checking
        $("#ship-diff-address").on("change", function() {
            if (this.checked) {
                $('.ship-diff-addres-area').removeClass('d-none');
                $('.ship-diff-addres-area input, .ship-diff-addres-area select').prop('required', true);
            } else {
                $('.ship-diff-addres-area').addClass('d-none');
                $('.ship-diff-addres-area input, .ship-diff-addres-area select').prop('required', false);
                $('.ship-diff-addres-area input, .ship-diff-addres-area select').val('');
            }

        });
        // Shipping Address Checking Ends
    </script>

    <script type="text/javascript">
        var ck = 0;
        $('.checkoutform').on('submit', function(e) {
            if (ck == 0) {
                e.preventDefault();
                $('#pills-step2-tab').removeClass('disabled');
                $('#pills-step2-tab').click();

            } else {
                $('#preloader').show();
            }
            $('#pills-step1-tab').addClass('active');
        });

        $('#step1-btn').on('click', function() {
            $('#pills-step1-tab').removeClass('active');
            $('#pills-step2-tab').removeClass('active');
            $('#pills-step3-tab').removeClass('active');
            $('#pills-step2-tab').addClass('disabled');
            $('#pills-step3-tab').addClass('disabled');
            $('#pills-step1-tab').click();
        });

        // Step 2 btn DONE
        $('#step2-btn').on('click', function() {
            $('#pills-step3-tab').removeClass('active');
            $('#pills-step1-tab').removeClass('active');
            $('#pills-step2-tab').removeClass('active');
            $('#pills-step3-tab').addClass('disabled');
            $('#pills-step2-tab').click();
            $('#pills-step1-tab').addClass('active');
        });

        $('#step3-btn').on('click', function() {
            $('.checkoutform').prop('id', 'checkoutform');
            $('#pills-step3-tab').removeClass('disabled');
            $('#pills-step3-tab').click();

            var shipping_user = !$('input[name="shipping_name"]').val() ? $('input[name="name"]').val() : $(
                'input[name="shipping_name"]').val();
            var shipping_location = !$('input[name="shipping_address"]').val() ? $('input[name="address"]').val() :
                $('input[name="shipping_address"]').val();
            var shipping_phone = !$('input[name="shipping_phone"]').val() ? $('input[name="phone"]').val() : $(
                'input[name="shipping_phone"]').val();
            var shipping_email = !$('input[name="shipping_email"]').val() ? $('input[name="email"]').val() : $(
                'input[name="shipping_email"]').val();

            $('#shipping_user').html('<i class="fas fa-user"></i>' + shipping_user);
            $('#shipping_location').html('<i class="fas fas fa-map-marker-alt"></i>' + shipping_location);
            $('#shipping_phone').html('<i class="fas fa-phone"></i>' + shipping_phone);
            $('#shipping_email').html('<i class="fas fa-envelope"></i>' + shipping_email);

            $('#pills-step1-tab').addClass('active');
            $('#pills-step2-tab').addClass('active');
        });

        $('#final-btn').on('click', function() {
            ck = 1;
        })

        $('.payment').on('click', function() {
            $('.checkoutform').prop('id', '');
            $('.checkoutform').prop('action', $(this).data('form'));
            $('.pay-area #v-pills-tabContent .tab-pane.fade').not($(this).attr('href')).html('');
            var show = $(this).data('show');
            if (show != 'no') {
                $('.pay-area').removeClass('d-none');
            } else {
                $('.pay-area').addClass('d-none');
            }
            $($(this).attr('href')).load($(this).data('href'));
        })
    </script>
    <script
        src="https://maps.google.com/maps/api/js?key={{ env('GOOGLE_MAP_KEY') }}&callback=initAutocomplete&libraries=places&v=weekly"
        defer></script>

    <script type="text/javascript">
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
                document.getElementById("autocomplete"), {
                    types: ["geocode"]
                }
            );
            autocomplete.setFields(["address_component", "geometry"]);
            autocomplete.addListener("place_changed", fillInAddress);
        }

        function fillInAddress() {
            const place = autocomplete.getPlace();
            var location = JSON.parse(JSON.stringify(place));

            var address = "";
            var country = "";
            var city = "";
            var postalCode = "";

            for (const component of place.address_components) {
                const addressType = component.types[0];
                if (componentForm[addressType]) {
                    const val = component[componentForm[addressType]];
                    if (addressType == 'street_number') address += val;
                    if (addressType == 'route') {
                        if (address) {
                            address += " ";
                        }
                        address += val;
                    }

                    if (addressType == 'locality') {
                        city += val;
                    }
                    if (addressType == 'country') {
                        country += val;
                    }
                    if (addressType == 'postal_code') {
                        postalCode += val;
                    }
                }
            }

            $("#shipping_address").val(address);
            $("#shipping_country").val(country);
            $("#shipping_city").val(city);
            $("#shipping_zip").val(postalCode);

            const latlng = JSON.parse(JSON.stringify(place.geometry.location));

            $("#shipping_lat").val(latlng.lat);
            $("#shipping_lng").val(latlng.lng);
        }
    </script>
@endsection
