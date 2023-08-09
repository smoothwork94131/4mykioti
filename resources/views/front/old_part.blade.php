@extends('layouts.front')
@section('content')
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages">
                        <li><a href="{{ route('front.index') }}">{{ $langg->lang17 }}</a></li>
                        @php
                            $index = 1;
                            $route = '';
                            if ($page != '') {
                                $route = route('front.old_collection');
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
                                    <a href="{{$route}}">
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
            <div class="row">
                @if ($productt)
                    <div class="col-lg-12">
                        <div class="row">
                            <div class="col-lg-6 col-sm-12">
                                <div class="xzoom-container">
                                    <img class="xzoom5" id="xzoom-magnific"  style="width: 100%; max-height: 450px; object-fit: contain;"
                                        src="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : asset('assets/images/noimage.png')) }}"
                                        xoriginal="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : asset('assets/images/noimage.png')) }}" />
                                    <div class="xzoom-thumbs">
                                        <div class="all-slider">
                                            <a href="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : asset('assets/images/noimage.png')) }}">
                                                <img class="xzoom-gallery5" style="width: 100px; max-height: 100px; object-fit: contain;"
                                                    src="{{ filter_var($productt->photo, FILTER_VALIDATE_URL) ? $productt->photo : ($productt->photo ? asset('assets/images/products_home/' . $productt->photo) : asset('assets/images/noimage.png')) }}"
                                                    title="The description goes here">
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-12">
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

                                        @if(isset($productt->model))
                                        <div>
                                            <small>Model #:
                                                <?php echo $productt->model; ?>
                                            </small>
                                        </div>
                                        @endif
                                        <div>
                                            <small>Part #:
                                                <?php echo $productt->sku; ?>
                                            </small>
                                        </div>

                                        <div class="product-price">
                                            <p class="title">{{ $langg->lang87 }} :</p>
                                            <p class="price">
                                                <span id="sizeprice">{{ $productt->price }}</span>
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
                                        <input type="hidden" id="curr_pos" value="{{ $gs->currency_format }}">
                                        <input type="hidden" id="curr_sign" value="{{ $curr->sign }}">

                                        {{-- <div class="info-meta-3">
                                            <ul class="meta-list">
                                                <li class="d-block count">
                                                    <div class="qty" style="display: flex; align-items: center;">
                                                        <label
                                                            style="font-size: 14px; margin-right: 10px; margin-top: 3px;">Quantity:
                                                        </label>
                                                        <ul style="display:flex; align-items-center: center;">
                                                            <li>
                                                                <span class="qtminus">
                                                                    <i class="icofont-minus"></i>
                                                                </span>
                                                            </li>
                                                            <li>
                                                                <!-- <span class="qttotal">1</span> -->
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
                                            </ul>
                                        </div> --}}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                @else
                    <div class="col-lg-12">No product</div>
                @endif
            </div>
        </div>
        <!-- Tranding Item Area End -->
    </section>
    <!-- Product Details Area End -->
@endsection


@section('scripts')
    
@endsection
