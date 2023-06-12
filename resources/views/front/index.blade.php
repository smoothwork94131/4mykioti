@extends('layouts.front')

@section('styles')
    <link rel="stylesheet" href="{{asset('assets/front/css/custom.css')}}">
@endsection

@section('content')

    @if (\Session::has('success'))
    <div class="success alert-success">
        <ul>
            <li>{!! \Session::get('success') !!}</li>
        </ul>
    </div>
    @endif

    @if (\Session::has('error'))
    <div class="danger alert-danger">
        <ul>
            <li>{!! \Session::get('error') !!}</li>
        </ul>
    </div>
    @endif

    <section class="hero-area" style="background-color: white">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12 remove-padding s-top-block">
                    @if($domain_name == 'mahindra')
                    <div>
                        Over 730,000 Mahindra Parts <br>and growing...
                    </div>
                    @else
                    <div>
                        {{-- Over 500,000 Kioti Parts <br>and growing... --}}
                        <p> 
                            <img src="{{asset('assets/images/introduction1.png')}}" style="float: left; margin-right: 20px; width: 50%;"/>
                            At Tractor Brothers, we pride ourselves on being the best one stop shop for all your Kioti parts and accessories, including our top selling 3rd Function Valve Kits that always include free shipping.
                        </p>
                        <p>
                        Find the genuine Kioti tractor parts you need fast, and for the best prices anywhere. Tractor Brothers has 3 state-of-the-art locations to serve you and all of your tractor supply needs. Orders placed before 2pm are usually shipped same day.
                        </p>
                    </div>
                    @endif
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.partsbymodel', [])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                FIND PARTS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.commonparts')}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                COMMON PARTS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding">
                    <a href="{{route('front.partsbyfilter', ['filter'=>'Oil'])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                OIL FILTERS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.partsbyfilter', ['filter'=>'Air'])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                AIR FILTERS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.partsbyfilter', ['filter'=>'Fuel'])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                FUEL FILTERS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding">
                    <a href="{{route('front.partsbyfilter', ['filter' => 'Hydraulic'])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                HYDRAULIC FILTERS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.partsbyfilter', ['filter' => 'Oil-Pressure'])}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                OIL PRESSURE FILTERS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding pr-1">
                    <a href="{{route('front.schematics')}}">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                FIND SCHEMATICS
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-md-4 col-sm-12 remove-padding">
                    <a href="https://3rdfunction.com/collections">
                        <div class="s-0-block s-block d-flex m-gray">
                            <div>
                                <span><i class="fa fa-search"></i></span>
                                3RD FUNCTION VALVES
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <div class="row">
                <div class="col-md-12 remove-padding">
                    <div class='promotions'>
                        <div class='promotion-title'>
                            Promotions
                        </div>
                        <div class="promotion-content row">
                            @if($domain_name == 'mahindra')
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/mahindra-264"><img src="{{asset('assets/images/promotions/fb199527-5e08-422f-b7a9-1502503048c6.jpg')}}" /></a>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/kioti-263"><img src="{{asset('assets/images/promotions/8f7fba18-131a-4367-907f-c8c404488e79.jpg')}}" /></a>
                            </div>
                            @else
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/kioti-263"><img src="{{asset('assets/images/promotions/8f7fba18-131a-4367-907f-c8c404488e79.jpg')}}" /></a>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/mahindra-264"><img src="{{asset('assets/images/promotions/fb199527-5e08-422f-b7a9-1502503048c6.jpg')}}" /></a>    
                            </div>
                            @endif
                        </div>
                        <div class="promotion-content row">
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/woods-265"><img src="{{asset('assets/images/promotions/5f721233-577e-4e0b-9983-c1b8ad89e8d7.jpg')}}"/></a>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <a href="https://www.tractorbrothers.com/new-models/husqvarna-157"><img src="{{asset('assets/images/promotions/8c1b7eaa-f63c-4f1e-9a98-046264d4418e.jpg')}}" /></a>
                            </div>    
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    @foreach($products as $product)
    <section class="trending grid-display">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 remove-padding">
                    <div class="section-top">
                        <h2 class="section-title">
                            <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                            <span class="main">{{ $product["category_name"] }}</span> 
                            <span class="title-underline"></span>
                        </h2>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-12 remove-padding">
                    <div class="trending-item-slider">
                        @foreach($product['products'] as $prod)
                        @include('includes.product.slider-product', ['prod' => $prod])
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </section>
    @endforeach
    
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

    <section class="hero-area" style="background-color: white">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12 remove-padding s-top-block">
                    <div>
                        <p>
                        <img src="{{asset('assets/images/introduction2.png')}}" style="float: right; margin-left: 20px; width: 50%;"/>
                        Tractor Brothers was originally Mahindra of Greensburg, selling Mahindra tractors and implements.  Over the years, as we expanded our business with additional equipment lines and additional locations to better serve our customers, we decided to rebrand as Tractor Brothers.  We specialize in high quality products, parts, and accessories for the landscape professional, farmer, and discerning homeowner.  We carry the latest products from leading brands, including Mahindra, KIOTI, Husqvarna, Woods, Husqvarna, Stihl, and Titan.
                        </p>
                        <p>
                            Setting New Standards in Customer Service<br>
                            At Tractor Brothers, we have built our business on customer satisfaction by offering quality products backed by rock-solid service, setting us apart from competitors. Our service technicians can handle everything from minor repairs to major overhauls. Our objective is to get your equipment up and running quickly! <a href="https://www.tractorbrothers.com/servicereq">Schedule a service appointment today.</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

@endsection

@section('scripts')
    <script>
        function listView(){
            $('.grid-display').removeClass('d-none');
            $('.list-display').removeClass('d-none');
            $('button.grid').removeClass('btn-success');
            $('button.list').removeClass('btn-success');
            $('button.list').addClass('btn-success');
            $('.grid-display').addClass('d-none');
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