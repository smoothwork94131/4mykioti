@extends('layouts.front')

@section('content')
    @php
    // if(Session::has('rootRoute')) {
    //     if(Session::get('rootRoute') == "Find") {
    //         $page = "partsbymodel";
    //     }
    //     else if(Session::get('rootRoute') == "Common") {
    //         $page = "commonparts";
    //     }
    //     else if(Session::get('rootRoute') == "Filter") {
    //         $page = "partsbyfilter";
    //     }
    //     else {
    //         $page = "partsbymodel";
    //     }
    // }
    // else {
    //     $page = "partsbymodel";
    // }
    $page = "partsbymodel";
    @endphp

    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages">
                        <li><a href="{{ route('front.index') }}">{{ $langg->lang17 }}</a></li>
                        @php
                            $index = 1;
                            $route = '';
                            if ($page != 'product') {
                                $route = route('front.' . $page);
                            }
                        @endphp
                        @foreach ($slug_list as $key => $item)
                            @php
                                $path = $item;
                                $path = Helper::convertPathToData($path);
                                $route = $route . '/' . $item;
                            @endphp
                            <li>
                                @if (count($slug_list) == $index)
                                    <a>
                                        {{ $path }}
                                    </a>
                                @else
                                    <a href="{{ $route }}">
                                        {{ $path }}
                                    </a>
                                @endif

                            </li>
                            @php
                                $index++;
                            @endphp
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- Product Details Area Start -->
    <section class="product-details-page">
        <div class="container">
            @if ($productt)
            <div class="row">
                <div class="col-md-2 col-sm-12 product-link-block">
                    <div>
                        <a href="{{route('front.partsbymodel', [])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    FIND PARTS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.commonparts')}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    COMMON PARTS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.partsbyfilter', ['filter'=>'Oil'])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    OIL FILTERS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.partsbyfilter', ['filter'=>'Air'])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    AIR FILTERS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.partsbyfilter', ['filter'=>'Fuel'])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    FUEL FILTERS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.partsbyfilter', ['filter' => 'Hydraulic'])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    HYDRAULIC FILTERS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.partsbyfilter', ['filter' => 'Oil-Pressure'])}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    OIL PRESSURE FILTERS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="{{route('front.schematics')}}">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    FIND SCHEMATICS
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <a href="https://3rdfunction.com/collections">
                            <div class="s-0-block s-block d-flex m-gray" style="height: 50px;">
                                <div>
                                    <span><i class="fa fa-search"></i></span>
                                    3RD FUNCTION VALVES
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <div class="col-md-6 col-sm-12">
                    <div class="xzoom-container">
                        @php
                            $instead_image = '';
                            if ($group_record->image && file_exists(public_path('assets/images/group/' . $group_record->image))) {
                                $instead_image = asset('assets/images/group/' . $group_record->image);
                            } 
                            else if ($group_record->group_Id && file_exists(public_path('assets/images/group/' . $group_record->group_Id . '.png'))) {
                                $instead_image = asset('assets/images/group/' . $group_record->group_Id . '.png');
                            } 
                            else if ($group_record->group_Id && file_exists(public_path('assets/images/group/' . $group_record->group_Id . '.jpeg'))) {
                                $instead_image = asset('assets/images/group/' . $group_record->group_Id . '.jpeg');
                            } 
                            else {
                                $instead_image = asset('assets/images/noimage.png');
                            }
                        @endphp
                        <img class="xzoom5" id="xzoom-magnific" style="width: 100%; max-height: 450px; object-fit: contain;"
                            src="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : $instead_image) }}"
                            xoriginal="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : $instead_image) }}" />
                        <div class="xzoom-thumbs">
                            <div class="all-slider">
                                <a
                                    href="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : $instead_image) }}">
                                    <img class="xzoom-gallery5" style="width: 100px; max-height: 100px; object-fit: contain;"
                                        src="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : $instead_image) }}"
                                        title="The description goes here">
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-12">
                    <div class="right-area">
                        <div class="product-info">
                            <h4 class="product-name">{{ $productt->name }}</h4>
                            <div class="info-meta-1">
                                <ul>
                                    <li class="product-isstook">
                                        <p>
                                            <i class="icofont-check-circled"></i>
                                            {{ $gs->show_stock == 0 ? '' : $productt->stock }}
                                            {{ $langg->lang79 }}
                                        </p>
                                    </li>
                                    <li>
                                        <div class="ratings">
                                            <div class="empty-stars"></div>
                                            <div class="full-stars"></div>
                                        </div>
                                    </li>
                                    <li class="review-count">
                                        <p>{{ $langg->lang80 }}</p>
                                    </li>
                                    <li>
                                        <div class="mybadge">
                                            New
                                        </div>
                                    </li>
                                    
                                </ul>
                            </div>
                            <div class="product-model">
                                Model #: <?php echo $productt->model; ?>
                            </div>
                            <div class="product-part">
                                Part #: <?php echo $productt->sku; ?>
                            </div>
                            @if ($productt->photo == null)
                                <div class="product-part" style="font-size: 18px;">
                                    Ref Num: <?php echo $productt->refno; ?>
                                </div>
                            @endif
                            <div class="product-price">
                                <p class="title">{{ $langg->lang87 }} :</p>
                                <p class="price">
                                    <span id="sizeprice">${{ $productt->price }}</span>
                                </p>
                            </div>

                            @php
                                $stck = (string) $productt->stock;
                            @endphp

                            @if ($stck != null)
                                <input type="hidden" id="stock" value="{{ $stck }}">
                            @else
                                <input type="hidden" id="stock" value="">
                            @endif

                            <input type="hidden" id="product_id" value="{{ $productt->id }}">
                            <input type="hidden" id="db" value="{{ $db }}">
                            <input type="hidden" id="curr_pos" value="{{ $gs->currency_format }}">
                            <input type="hidden" id="curr_sign" value="{{ $curr->sign }}">

                            <div class="info-meta-3">
                                <ul class="meta-list">
                                    <li class="d-block count">
                                        <div class="qty" style="display: flex; align-items: center;">
                                            <label
                                                style="font-size: 18px; margin-right: 10px; margin-top: 3px; font-weight: 600;">Quantity:
                                            </label>
                                            <ul style="display:flex; align-items-center: center;">
                                                <li>
                                                    <span class="qtminus">
                                                        <i class="icofont-minus"></i>
                                                    </span>
                                                </li>
                                                <li>
                                                    <input type="text" id="qttotal" class="qttotal"
                                                        value="1" step="1" min="0"
                                                        style="margin-right: 3px; width: 50px;" />
                                                </li>
                                                <li>
                                                    <span class="qtplus">
                                                        <i class="icofont-plus"></i>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    
                                    <li class="addtocart">
                                        <a href="javascript:;" id="addcrt"><i
                                                class="icofont-cart"></i>{{ $langg->lang90 }}</a>
                                    </li>

                                    <li class="addtocart">
                                        <a id="qaddcrt" href="javascript:;">
                                            <i class="icofont-cart"></i>{{ $langg->lang251 }}
                                        </a>
                                    </li>

                                    @if (Auth::guard('web')->check())
                                        <li class="favorite">
                                            <a href="javascript:;" class="add-to-wish"
                                                data-href="{{ route('user-wishlist-add', ['series' => $db, 'prod_id' => $productt->id]) }}"><i
                                                    class="icofont-heart-alt"></i></a>
                                        </li>
                                    @else
                                        <li class="favorite">
                                            <a href="javascript:;" data-toggle="modal"
                                                data-target="#comment-log-reg"><i
                                                    class="icofont-heart-alt"></i></a>
                                        </li>
                                    @endif

                                </ul>
                            </div>

                            @if ($gs->is_report)
                                {{-- PRODUCT REPORT SECTION --}}

                                @if (Auth::guard('web')->check())
                                    <div class="report-area">
                                        <a href="javascript:;" data-toggle="modal"
                                            data-target="#report-modal"><i class="fas fa-flag"></i>
                                            {{ $langg->lang776 }}</a>
                                    </div>
                                @else
                                    <div class="report-area">
                                        <a href="javascript:;" data-toggle="modal"
                                            data-target="#comment-log-reg"><i class="fas fa-flag"></i>
                                            {{ $langg->lang776 }}</a>
                                    </div>
                                @endif

                                {{-- PRODUCT REPORT SECTION ENDS --}}
                            @endif
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div id="product-details-tab">
                        <div class="top-menu-area">
                            <ul class="tab-menu">
                                <li><a href="#tabs-1">{{ $langg->lang92 }}</a></li>
                                @php
                                    $policy_index  = 2;
                                @endphp
                                @foreach($product_policies as $policy)
                                <li><a href="#tabs-{{$policy_index}}">{{ strtoupper($policy->name) }}</a></li>
                                @php
                                    $policy_index++;
                                @endphp
                                @endforeach
                                <li><a href="#tabs-{{$policy_index}}">{{ $langg->lang94 }}({{ '0' }})</a></li>
                            </ul>
                        </div>
                        <div class="tab-content-wrapper">
                            <div id="tabs-1" class="tab-content-area">
                                <p>{!! $productt->description !!}</p>
                            </div>
                            @php
                                $policy_index  = 2;
                            @endphp
                            @foreach($product_policies as $policy)
                            <div id="tabs-{{$policy_index}}" class="tab-content-area">
                                <p>{!! $policy->description !!}</p>
                            </div>
                            @php
                                $policy_index++;
                            @endphp
                            @endforeach
                            <div id="tabs-{{$policy_index}}" class="tab-content-area">
                                <div class="heading-area">
                                    <h4 class="title">
                                        {{ $langg->lang96 }}
                                    </h4>
                                    <div class="reating-area">
                                        <div class="stars"><span
                                                id="star-rating">{{ App\Models\Rating::rating($productt->id) }}</span>
                                            <i class="fas fa-star"></i>
                                        </div>
                                    </div>
                                </div>
                                <div id="replay-area">
                                    <div id="reviews-section">
                                        <p>{{ $langg->lang97 }}</p>
                                    </div>
                                    @if (Auth::guard('web')->check())
                                        <div class="review-area">
                                            <h4 class="title">{{ $langg->lang98 }}</h4>
                                            <div class="star-area">
                                                <ul class="star-list">
                                                    <li class="stars" data-val="1">
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li class="stars" data-val="2">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li class="stars" data-val="3">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li class="stars" data-val="4">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                    <li class="stars active" data-val="5">
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                        <i class="fas fa-star"></i>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div class="write-comment-area">
                                            <div class="gocover"
                                                style="background: url({{ asset('assets/images/' . $gs->loader) }}) no-repeat scroll center center rgba(45, 45, 45, 0.5);">
                                            </div>
                                            <form id="reviewform" action="{{ route('front.review.submit') }}"
                                                data-href="{{ route('front.reviews', $productt->id) }}"
                                                method="POST">
                                                @include('includes.admin.form-both')
                                                {{ csrf_field() }}
                                                <input type="hidden" id="rating" name="rating"
                                                    value="5">
                                                <input type="hidden" name="user_id"
                                                    value="{{ Auth::guard('web')->user()->id }}">
                                                <input type="hidden" name="product_id"
                                                    value="{{ $productt->id }}">
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <textarea name="review" placeholder="{{ $langg->lang99 }}" required=""></textarea>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-lg-12">
                                                        <button class="submit-btn"
                                                            type="submit">{{ $langg->lang100 }}</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    @else
                                        <div class="row">
                                            <div class="col-lg-12">
                                                <br>
                                                <h5 class="text-center"><a href="javascript:;"
                                                        data-toggle="modal" data-target="#comment-log-reg"
                                                        class="btn login-btn mr-1">{{ $langg->lang101 }}</a>
                                                    {{ $langg->lang102 }}
                                                </h5>
                                                <br>
                                            </div>
                                        </div>
                                    @endif
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            @else
            <div class="row">
                <div class="col-lg-12">No product</div>
            </div>
            @endif
        </div>
    </section>
    <!-- Trending Item Area Start -->
    <div class="trending">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <span class="section-top">
                        <div style="display: flex; align-item: center;">
                            <span class="section-title">
                                {{ $langg->lang216 }}
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12">
                    <div class="also-fit-container">
                        <table class="table" style="text-align: center;">
                            <thead>
                                <tr>
                                    <th width="50%">Series</th>
                                    <th width="50%">Model</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach ($also_fits as $key => $item)
                                    <tr>
                                        <td style="font-size: 16px; text-transform: uppercase;">{{ $key }}
                                        </td>
                                        <td style="font-size: 16px; text-transform: uppercase;">
                                            @foreach ($item as $sub_item)
                                                <div style="margin-bottom: 5px;">{{ $sub_item }}</div>
                                            @endforeach
                                        </td>
                                    </tr>
                                @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Tranding Item Area End -->

    <section class="trending">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <span class="section-top">
                        <div style="display: flex; align-item: center;">
                            <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                            <span class="section-title">
                                More {{ $slug_list['model'] }} Products
                                {{-- <span class="title-underline"></span> --}}
                            </span>
                        </div>
                    </span>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 remove-padding">
                    <div class="trending-item-slider">
                        @foreach($other_parts as $prod)
                        @include('includes.product.slider-homeproduct', 
                            [
                                'prod' => $prod, 
                                'db' => $db, 
                                'slug_list' => [
                                    'category' => $slug_list['category'],
                                    'series' => $slug_list['series'],
                                    'model' => $prod->model,
                                    'section' => $prod->section_name,
                                    'group' => $prod->group_name,
                                    'prod_name' => $prod->name
                                ]
                            ]
                        )
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Product Details Area End -->
@endsection

@section('scripts')
    <script type="text/javascript">
        $(document).on("submit", "#emailreply1", function() {
            var token = $(this).find('input[name=_token]').val();
            var subject = $(this).find('input[name=subject]').val();
            var message = $(this).find('textarea[name=message]').val();
            var $type = $(this).find('input[name=type]').val();
            $('#subj1').prop('disabled', true);
            $('#msg1').prop('disabled', true);
            $('#emlsub').prop('disabled', true);
            $.ajax({
                type: 'post',
                url: "{{ URL::to('/user/admin/user/send/message') }}",
                data: {
                    '_token': token,
                    'subject': subject,
                    'message': message,
                    'type': $type
                },
                success: function(data) {
                    $('#subj1').prop('disabled', false);
                    $('#msg1').prop('disabled', false);
                    $('#subj1').val('');
                    $('#msg1').val('');
                    $('#emlsub').prop('disabled', false);
                    if (data == 0)
                        toastr.error("Oops Something Goes Wrong !!");
                    else
                        toastr.success("Message Sent !!");
                    $('.close').click();
                }

            });
            return false;
        });
    </script>
@endsection
