<div id="quick-details" class="row product-details-page py-0">
    <div class="col-lg-5">
        <div class="xzoom-container">
            @if ($product->photo)
                @php 
                    $flag = $db ?? 'products';
                @endphp

                @if($flag == 'products')
                <img class="quick-zoom" id="xzoom-magnific1"
                    src="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products/' . $product->photo) }}"
                    xoriginal="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products/' . $product->photo) }}" />
                <div class="xzoom-thumbs">
                    <div class="quick-all-slider">
                        <a
                            href="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products/' . $product->photo) }}">
                            <img class="quick-zoom-gallery" width="80"
                                src="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products/' . $product->photo) }}"
                                title="The description goes here">
                        </a>
                    </div>
                </div>
                @else
                <img class="quick-zoom" id="xzoom-magnific1"
                    src="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products_home/' . $product->photo) }}"
                    xoriginal="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products_home/' . $product->photo) }}" />
                <div class="xzoom-thumbs">
                    <div class="quick-all-slider">
                        <a
                            href="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products_home/' . $product->photo) }}">
                            <img class="quick-zoom-gallery" width="80"
                                src="{{ filter_var($product->photo, FILTER_VALIDATE_URL) ? $product->photo : asset('assets/images/products_home/' . $product->photo) }}"
                                title="The description goes here">
                        </a>
                    </div>
                </div>
                @endif
            @else
                <img class="quick-zoom" id="xzoom-magnific1"
                    src="{{ asset('assets/images/noimage.png') }}"
                    xoriginal="{{ asset('assets/images/noimage.png') }}" />
                <div class="xzoom-thumbs">
                    <div class="quick-all-slider">
                        <a href="{{ asset('assets/images/noimage.png') }}">
                            <img class="quick-zoom-gallery" width="80"
                                src="{{ asset('assets/images/noimage.png') }}"
                                title="The description goes here">
                        </a>
                    </div>
                </div>
            @endif
        </div>
    </div>
    <div class="col-lg-7">
        <div class="right-area">
            <div class="product-info">
                <h4 class="product-name">{{ $product->name }}</h4>
                <div class="info-meta-1">
                    <ul>
                        @if ($product->product_condition != 0)
                            <li>
                                <div class="{{ $product->product_condition == 2 ? 'mybadge' : 'mybadge1' }}">
                                    {{ $product->product_condition == 2 ? 'New' : 'Used' }}
                                </div>
                            </li>
                        @endif
                    </ul>
                </div>

                <div><small>Model #: <?php echo $product->category_id; ?></small></div>
                <div><small>Part #: <?php echo $product->sku; ?></small></div>

                <div class="product-price">
                    <p class="title">{{ $langg->lang87 }} :</p>
                    <p class="price"><span id="msizeprice">{{ $product->price }}</span>
                    </p>
                    @if ($product->youtube != null)
                        <a href="{{ $product->youtube }}" class="video-play-btn mfp-iframe">
                            <i class="fas fa-play"></i>
                        </a>
                    @endif
                </div>
                @if (!empty($product->size))
                    <div class="mproduct-size">
                        <p class="title">{{ $langg->lang88 }} :</p>
                        <ul class="siz-list">
                            @php
                                $is_first = true;
                            @endphp
                            @foreach ($product->size as $key => $data1)
                                <li class="{{ $is_first ? 'active' : '' }}">
                                    <span class="box">{{ $data1 }}
                                        <input type="hidden" class="msize" value="{{ $data1 }}">
                                        <input type="hidden" class="msize_qty" value="{{ $product->size_qty[$key] }}">
                                        <input type="hidden" class="msize_key" value="{{ $key }}">
                                        <input type="hidden" class="msize_price"
                                            value="{{ round($product->size_price[$key] * $curr->value, 2) }}">
                                    </span>
                                </li>
                                @php
                                    $is_first = false;
                                @endphp
                            @endforeach
                            <li>
                        </ul>
                    </div>
                @endif

                @if (!empty($product->color))
                    <div class="mproduct-color">
                        <p class="title">{{ $langg->lang89 }} :</p>
                        <ul class="color-list">
                            @php
                                $is_first = true;
                            @endphp
                            @foreach ($product->color as $key => $data1)
                                <li class="{{ $is_first ? 'active' : '' }}">
                                    <span class="box" data-color="{{ $product->color[$key] }}"
                                        style="background-color: {{ $product->color[$key] }}"></span>
                                </li>
                                @php
                                    $is_first = false;
                                @endphp
                            @endforeach

                        </ul>
                    </div>
                @endif

                @if (!empty($product->size))
                    <input type="hidden" class="product-stock" id="stock" value="{{ $product->size_qty[0] }}">
                @else
                    @php
                        $stck = (string) $product->stock;
                    @endphp
                    @if ($stck != null)
                        <input type="hidden" class="product-stock" value="{{ $stck }}">
                    @elseif($product->type != 'Physical')
                        <input type="hidden" class="product-stock" value="0">
                    @else
                        <input type="hidden" class="product-stock" value="">
                    @endif
                @endif

                @if (!empty($product->details))
                    <div style="text-align: justify; font-size: 13px;  color: #a79e9e; margin-top: 10px;">
                        {{ $product->details }}
                    </div>
                    <hr />
                @endif

                <input type="hidden" id="mproduct_id" value="{{ $product->id }}">
                <input type="hidden" id="mdb" value="{{ $db ?? 'products' }}">
                <input type="hidden" id="mcurr_pos" value="{{ $gs->currency_format }}">
                <input type="hidden" id="mcurr_sign" value="{{ $curr->sign }}">
                <div class="info-meta-3">
                    <ul class="meta-list">
                        @if (!empty($product->attributes))
                            @php
                                $attrArr = json_decode($product->attributes, true);
                                // dd($attrArr);
                            @endphp
                        @endif
                        @if (!empty($attrArr))
                            <div class="product-attributes my-4">
                                <div class="row">
                                    @foreach ($attrArr as $attrKey => $attrVal)
                                        @if (array_key_exists('details_status', $attrVal) && $attrVal['details_status'] == 1)
                                            <div class="col-lg-6">
                                                <div class="form-group mb-2">
                                                    <strong for=""
                                                        class="text-capitalize">{{ str_replace('_', ' ', $attrKey) }}
                                                        :</strong>
                                                    <div class="">
                                                        @foreach ($attrVal['values'] as $optionKey => $optionVal)
                                                            <div class="custom-control custom-radio">
                                                                <input type="hidden" class="keys" value="">
                                                                <input type="hidden" class="values" value="">
                                                                <input type="radio"
                                                                    id="{{ $attrKey }}{{ $optionKey }}"
                                                                    name="{{ $attrKey }}"
                                                                    class="custom-control-input mproduct-attr"
                                                                    data-key="{{ $attrKey }}"
                                                                    data-price="{{ $attrVal['prices'][$optionKey] * $curr->value }}"
                                                                    value="{{ $optionVal }}"
                                                                    {{ $loop->first ? 'checked' : '' }}>
                                                                <label class="custom-control-label"
                                                                    for="{{ $attrKey }}{{ $optionKey }}">{{ $optionVal }}
                                                                    : {{ $curr->sign }}
                                                                    {{ number_format($product->showRealPrice() + $attrVal['prices'][$optionKey] * $curr->value, '2', '.', '') }}
                                                                </label>
                                                            </div>
                                                        @endforeach
                                                    </div>
                                                </div>
                                            </div>
                                        @endif
                                    @endforeach
                                </div>
                            </div>
                        @endif

                        @if ($product->stock === 0)
                            <li class="addtocart">
                                <a href="javascript:;" class="cart-out-of-stock">
                                    <i class="icofont-close-circled"></i>
                                    {{ $langg->lang78 }}</a>
                            </li>
                        @else
                            <li class="addtocart">
                                <a href="javascript:;" id="maddcrt"><i
                                        class="icofont-cart"></i>{{ $langg->lang90 }}
                                </a>
                            </li>

                            <li class="addtocart">
                                <a id="mqaddcrt" href="javascript:;">
                                    <i class="icofont-cart"></i>{{ $langg->lang251 }}
                                </a>
                            </li>
                        @endif

                        @if (Auth::guard('web')->check())
                            <li class="favorite">
                                <a href="javascript:;" class="add-to-wish"
                                    data-href="{{ route('user-wishlist-add', $product->id) }}"><i
                                        class="icofont-heart-alt"></i></a>
                            </li>
                        @else
                            <li class="favorite">
                                <a href="javascript:;" data-toggle="modal" data-target="#comment-log-reg"><i
                                        class="icofont-heart-alt"></i></a>
                            </li>
                        @endif
                    </ul>

                    @if ($product->ship != null)
                        <p class="estimate-time">{{ $langg->lang86 }}: <b> {{ $product->ship }}</b></p>
                    @endif
                    @if ($product->sku != null)
                        <p class="p-sku">
                            {{ $langg->lang77 }}: <span class="idno">{{ $product->sku }}</span>
                        </p>
                    @endif
                </div>
            </div>
        </div>
    </div>
</div>

<style type="text/css">
    @media (min-width: 1200px) {

        .xzoom-preview {
            width: 450px !important;
            height: 390px !important;
            background: white;
            position: inherit;
            z-index: 99999;

            @if ($langg->rtl == '1')
                right: 900px;
            @endif

        }

    }
</style>

<script src="{{ asset('assets/front/js/quicksetup.js') }}"></script>

<script type="text/javascript">
    //   magnific popup activation
    $('.video-play-btn').magnificPopup({
        type: 'video'
    });


    var sizes = "";
    var size_qty = "";
    var size_price = "";
    var size_key = "";
    var colors = "";
    var mtotal = "";
    var mstock = $('.product-stock').val();
    var keys = "";
    var values = "";
    var prices = "";

    $('.mproduct-attr').on('change', function() {

        var total;
        total = mgetAmount() + mgetSizePrice();
        total = total.toFixed(2);
        var pos = $('#mcurr_pos').val();
        var sign = $('#mcurr_sign').val();
        if (pos == '0') {
            $('#msizeprice').html(sign + total);
        } else {
            $('#msizeprice').html(total + sign);
        }
    });


    function mgetSizePrice() {

        var total = 0;
        if ($('.mproduct-size .siz-list li').length > 0) {
            total = parseFloat($('.mproduct-size .siz-list li.active').find('.msize_price').val());
        }
        return total;
    }


    function mgetAmount() {
        var total = 0;
        var value = parseFloat($('#mproduct_price').val());
        var datas = $(".mproduct-attr:checked").map(function() {
            return $(this).data('price');
        }).get();

        var data;
        for (data in datas) {
            total += parseFloat(datas[data]);
        }
        total += value;
        return total;
    }


    // Product Details Product Size Active Js Code
    $('.mproduct-size .siz-list .box').on('click', function() {

        $('#modal-total').val(1);
        var parent = $(this).parent();
        size_qty = $(this).find('.msize_qty').val();
        size_price = $(this).find('.msize_price').val();
        size_key = $(this).find('.msize_key').val();
        sizes = $(this).find('.msize').val();
        $('.mproduct-size .siz-list li').removeClass('active');
        parent.addClass('active');
        total = mgetAmount() + parseFloat(size_price);
        stock = size_qty;
        total = total.toFixed(2);
        var pos = $('#mcurr_pos').val();
        var sign = $('#mcurr_sign').val();
        if (pos == '0') {
            $('#msizeprice').html(sign + total);
        } else {
            $('#msizeprice').html(total + sign);
        }

    });

    // Product Details Product Color Active Js Code
    $('.mproduct-color .color-list .box').on('click', function() {
        colors = $(this).data('color');
        var parent = $(this).parent();
        $('.mproduct-color .color-list li').removeClass('active');
        parent.addClass('active');

    });

    $('.modal-minus').on('click', function() {
        total = $("#modal-total").val();
        if (total > 1) {
            total--;
        }
        $("#modal-total").val(total);
    });

    $('.modal-plus').on('click', function() {
        total = $("#modal-total").val();
        if (mstock != "") {
            var stk = parseInt(mstock);
            if (total < stk) {
                total++;
                $("#modal-total").val(total);
            }
        } else {
            total++;
        }
        $("#modal-total").val(total);
    });

    $("#maddcrt").on("click", function() {
        var qty = $("#modal-total").val();
        var pid = $(this).parent().parent().parent().parent().find("#mproduct_id").val();
        var mdb = $(this).parent().parent().parent().parent().find("#mdb").val();

        if ($('.mproduct-attr').length > 0) {
            values = $(".mproduct-attr:checked").map(function() {
                return $(this).val();
            }).get();

            keys = $(".mproduct-attr:checked").map(function() {
                return $(this).data('key');
            }).get();


            prices = $(".mproduct-attr:checked").map(function() {
                return $(this).data('price');
            }).get();

        }


        $.ajax({
            type: "GET",
            url: mainurl + "/addnumcart",
            data: {
                id: pid,
                qty: qty,
                db: mdb,
                size: sizes,
                color: colors,
                size_qty: size_qty,
                size_price: size_price,
                size_key: size_key,
                keys: keys,
                values: values,
                prices: prices
            },
            success: function(data) {
                if (data == 'digital') {
                    toastr.error(langg.already_cart);
                } else if (data == 0) {
                    toastr.error(langg.out_stock);
                } else {
                    $("#cart-count").html(data[0]);
                    $("#cart-items").load(mainurl + '/carts/view');
                    toastr.success(langg.add_cart);
                }
            }
        });
    });


    $(document).on("click", "#mqaddcrt", function() {
        var qty = $("#modal-total").val();
        var pid = $(this).parent().parent().parent().parent().find("#mproduct_id").val();
        var db = $(this).parent().parent().parent().parent().find("#mdb").val();

        if ($('.mproduct-attr').length > 0) {
            values = $(".mproduct-attr:checked").map(function() {
                return $(this).val();
            }).get();

            keys = $(".mproduct-attr:checked").map(function() {
                return $(this).data('key');
            }).get();


            prices = $(".mproduct-attr:checked").map(function() {
                return $(this).data('price');
            }).get();

        }

        window.location = mainurl + "/addtonumcart?id=" + pid + "&qty=" + qty + "&db=" + db + "&size=" + sizes +
            "&color=" + colors.substring(1, colors.length) + "&size_qty=" + size_qty + "&size_price=" +
            size_price + "&size_key=" + size_key + "&keys=" + keys + "&values=" + values + "&prices=" + prices;

    });
</script>
