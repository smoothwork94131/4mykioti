@extends('layouts.front')


@section('content')

    @if($ps->slider == 1)
        @if(count($sliders))
            @include('includes.slider-style')
        @endif
    @endif
    
    @if($ps->slider == 1)
        <!-- Hero Area Start -->
        <section class="hero-area">
            <div class="container custom-container">
                <div class="row">
                    <div class="col-12 remove-padding s-top-block">
                        <div>
                        Over 500,000 Kioti Parts <br>and growing...
                        </div>
                    </div>
                    <div class="col-6 remove-padding pr-1">
                        <a href="{{route('front.partsByModel')}}"><div class="s-0-block s-block d-flex">
                            <div>
                                FIND PARTS
                            </div>
                        </div></a>
                    </div>
                    <div class="col-6 remove-padding">
                        <div class="s-0-block s-block d-flex">
                            <div>
                                3RD FUNCTION VALVES
                            </div>
                        </div>
                    </div>
                    <div class="col-6 remove-padding  pr-1">

                        <a href="{{route('front.schematics')}}"><div class="s-0-block s-block d-flex">
                            <div>
                                 FIND SCHEMATICS
                            </div>
                        </div></a>
                    </div>
                    <div class="col-6 remove-padding">
                    <a href="{{route('front.common')}}">
                        <div class="s-0-block s-block d-flex">
                            <div>
                                 COMMON PARTS
                            </div>
                        </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Hero Area End -->
    @endif
    

    {{-- @if($ps->featured_category == 1) --}}

        {{-- Slider buttom Category Start --}}
        <!-- <section class="view-type">
            <div class="container text-right">
                    <br>
                    <button onclick="listView()" class="list"><i class="fa fa-bars"></i> List</button>
                    <button onclick="gridView()" class="btn-success grid"><i class="fa fa-th-large"></i> Grid</button>
            </div>
        </section> -->

        @if($gs->solo_mode != 1)
            <section class="trending slider-buttom-category grid-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                    <span class="sub">products</span> 
                                    <span class="main">{{ $langg->lang14 }}</span> 
                                    <span class="title-underline"></span>
                                </h2>
                                {{-- <a href="#" class="link">View All</a> --}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="trending-item-slider">
                                @foreach($categories as $cat)
                                    @if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker)
                                        @if( $cat->name == 'Accessories')
                                        <div class="sc-common-padding">
                                            <a href="{{ route('front.category',$cat->slug) }}" class="single-category">
                                                <div class="left">
                                                    <h5 class="title">
                                                        {{ $cat->name }}
                                                    </h5>
                                                    <p class="count">
                                                        {{ count($cat->products) }} {{ $langg->lang4 }}
                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <img src="{{asset('assets/images/categories/'.$cat->image) }}" class="category-img" alt="">
                                                </div>
                                            </a>
                                        </div>
                                        @endif
                                    @else
                                    <div class="sc-common-padding">
                                        <a href="{{ route('front.category',$cat->slug) }}" class="single-category">
                                            <div class="left">
                                                <h5 class="title">
                                                    {{ $cat->name }}
                                                </h5>
                                                <p class="count">
                                                    {{ count($cat->products) }} {{ $langg->lang4 }}
                                                </p>
                                            </div>
                                            <div class="right">
                                                <img src="{{asset('assets/images/categories/'.$cat->image) }}" class="category-img" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    @endif
                                @endforeach
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>


            <section class="d-none list-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                    <span class="sub">products</span> 
                                    <span class="main">{{ $langg->lang14 }}</span> 
                                    <span class="title-underline"></span>
                                </h2>
                                {{-- <a href="#" class="link">View All</a> --}}
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-12 remove-padding">
                            <div class="trending-item-slider">
                                @foreach($categories as $cat)
                                    @if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker)
                                        @if( $cat->name == 'Accessories')
                                        <div class="sc-common-padding">
                                            <a href="{{ route('front.category',$cat->slug) }}" class="single-category">
                                                <div class="left">
                                                    <h5 class="title">
                                                        {{ $cat->name }}
                                                    </h5>
                                                    <p class="count">
                                                        {{ count($cat->products) }} {{ $langg->lang4 }}
                                                    </p>
                                                </div>
                                                <div class="right">
                                                    <img src="{{asset('assets/images/categories/'.$cat->image) }}" class="category-img" alt="">
                                                </div>
                                            </a>
                                        </div>
                                        @endif
                                    @else
                                    <div class="sc-common-padding">
                                        <a href="{{ route('front.category',$cat->slug) }}" class="single-category">
                                            <div class="left">
                                                <h5 class="title">
                                                    {{ $cat->name }}
                                                </h5>
                                                <p class="count">
                                                    {{ count($cat->products) }} {{ $langg->lang4 }}
                                                </p>
                                            </div>
                                            <div class="right">
                                                <img src="{{asset('assets/images/categories/'.$cat->image) }}" class="category-img" alt="">
                                            </div>
                                        </a>
                                    </div>
                                    @endif
                                @endforeach
                            </div>
                        </div>

                    </div>
                    
                </div>
            </section>

        @endif
        {{-- Slider buttom banner End --}}

    {{-- @endif --}}

    {{-- @if($ps->featured == 1) --}}
        <!-- Trending Item Area Start -->

        @if($gs->solo_mode == 1 && !empty($gs->solo_category))
            <section class="sub-categori grid-display">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 order-first order-lg-last ajax-loader-parent">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                    <span class="sub">Category</span> 
                                    <span class="main">{{ $solo_category_info->name }}</span> 
                                    <span class="title-underline"></span>
                                </h2>
                            </div>
                            <div class="col-lg-12 remove-padding mb-4">
                                @include('includes.front-filter')
                            </div>
                            <div class="right-area" id="app">
                                <div class="categori-item-area">
                                    <div class="row" id="ajaxContent">
                                        @include('includes.product.solo-products')
                                    </div>
                                    <div id="ajaxLoader" class="ajax-loader" style="background: url({{asset('assets/images/'.$gs->loader)}}) no-repeat scroll center center rgba(0,0,0,.6);"></div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>

            <section class="sub-categori list-display d-none">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12 order-first order-lg-last ajax-loader-parent">
                            <div class="section-top">
                                <h2 class="section-title">
                                    <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                    <span class="sub">Category</span> 
                                    <span class="main">{{ $solo_category_info->name }}</span> 
                                    <span class="title-underline"></span>
                                </h2>
                            </div>

                            <div class="table-responsiv">
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0"
                                   width="100%">
                                <thead>
                                <tr>
                                    <th>{{ __("Name") }}</th>
                                    <th>{{ __("Stock") }}</th>
                                    <th>{{ __("Price") }}</th>
                                    <th>{{ __("Actions") }}</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        @else
            @foreach($categories as $cat)
                @if(!Auth::guard('web')->check() && $myage < 21 && $gs->age_checker)
                    @if( $cat->name == 'Accessories')
                    <section class="trending">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="section-top">
                                        <h2 class="section-title">
                                            <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                            <span class="sub">Featured</span> 
                                            <span class="main">{{ $cat->name }}</span> 
                                            <span class="title-underline"></span>
                                        </h2>
                                        <a href="{{ route('front.category',$cat->slug) }}" class="link">View All</a>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="trending-item-slider">
                                        @php
                                            $adplan = $cat->adplans;
                                            $ad_products = $cat->adplans->products->where('viewed_count', '<', $adplan->view_count)->sortBy('id')->take($adplan->product_count);
                                            if(count($ad_products) < $adplan->product_count) {
                                                $ad_products = $cat->adplans->products->sortByDesc('id')->take($adplan->product_count);
                                            }
                                        @endphp

                                        @foreach($ad_products as $prodh) <!-- removed after where('featured', '=', 1)->where  -->
                                            @php
                                                $prod = $prodh->product;
                                            @endphp
                                            @if(!$prod->is_verified)
                                                @include('includes.product.slider-product')
                                            @endif
                                        @endforeach
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                    @endif
                @else
                    <section class="trending">
                        <div class="container">
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="section-top">
                                        <h2 class="section-title">
                                            <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                            <span class="sub">Featured</span> 
                                            <span class="main">{{ $cat->name }}</span> 
                                            <span class="title-underline"></span>
                                        </h2>
                                        <a href="{{ route('front.category',$cat->slug) }}" class="link">View All</a>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-lg-12 remove-padding">
                                    <div class="trending-item-slider">
                                        @php
                                            $adplan = $cat->adplans;
                                            $ad_products = $cat->adplans->products->where('viewed_count', '<', $adplan->view_count)->sortBy('id')->take($adplan->product_count);
                                            if(count($ad_products) < $adplan->product_count) {
                                                $ad_products = $cat->adplans->products->sortByDesc('id')->take($adplan->product_count);
                                            }
                                        @endphp
                                        
                                        @foreach($ad_products as $prodh) <!-- removed after where('featured', '=', 1)->where  -->
                                            @php    
                                                $prod = $prodh->product;
                                            @endphp
                                            @if(Auth::guard('web')->check())
                                                @if(Auth::user()->is_verified)
                                                    @include('includes.product.slider-product')
                                                @else
                                                    @if(!$prod->is_verified)
                                                        @include('includes.product.slider-product')
                                                    @endif
                                                @endif
                                            @else
                                                @if(!empty($prod))
                                                    @if(!$prod->is_verified)
                                                        @include('includes.product.slider-product')
                                                    @endif
                                                @endif
                                            @endif
                                        @endforeach
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                @endif
                
            @endforeach
        @endif

    <!-- Tranding Item Area End -->
    {{-- @endif --}}

    @if($ps->small_banner == 1)

        <!-- Banner Area One Start -->
        <section class="banner-section">
            <div class="container">
                @foreach($top_small_banners->chunk(2) as $chunk)
                    <div class="row">
                        @foreach($chunk as $img)
                            <div class="col-lg-6 remove-padding">
                                <div class="left">
                                    <a class="banner-effect" href="{{ $img->link }}" target="_blank">
                                        <img src="{{asset('assets/images/banners/'.$img->photo)}}" alt="">
                                    </a>
                                </div>
                            </div>
                        @endforeach
                    </div>
                @endforeach
            </div>
        </section>
        <!-- Banner Area One Start -->
    @endif




@endsection

@section('scripts')
    <script>
        $(window).on('load', function () {

            setTimeout(function () {

                $('#extraData').load('{{route('front.extraIndex')}}');

            }, 500);
        });

        function listView(){
            $('.grid-display').removeClass('d-none');
            $('.list-display').removeClass('d-none');
            $('button.grid').removeClass('btn-success');
            $('button.list').removeClass('btn-success');
            $('button.list').addClass('btn-success');
            $('.grid-display').addClass('d-none');


            var table = $('#geniustable').DataTable({
                ordering: false,
                processing: true,
                serverSide: true,
                retrieve: true,
                lengthMenu: [ 50, 100, 150 ,200 ],
                ajax: '{{ route('front.soloproduct.datatables') }}',
                columns: [
                    {data: 'name', name: 'name'},
                    {data: 'stock', name: 'stock'},
                    {data: 'price', name: 'price'},
                    {data: 'action', name: 'action'},
                ],
                language: {
                    processing: '<img src="{{asset('assets/images/'.$gs->admin_loader)}}">'
                },
                drawCallback: function (settings) {
                    $('.select').niceSelect();
                }
            });
        }

        function gridView(){
            $('.grid-display').removeClass('d-none');
            $('.list-display').removeClass('d-none');
            $('button.grid').removeClass('btn-success');
            $('button.list').removeClass('btn-success');
            $('button.grid').addClass('btn-success');
            $('.list-display').addClass('d-none');

            

        }

    </script>
@endsection