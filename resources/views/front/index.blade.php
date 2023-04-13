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


    @if($ps->slider == 1)
        @if(count($sliders))
            @include('includes.slider-style')
        @endif
    @endif
    
    <section class="hero-area" style="background-color: white">
        <div class="container custom-container">
            <div class="row">
                <div class="col-12 remove-padding s-top-block">
                    @if($domain_name == 'mahindra')
                    <div>
                        Over 500,000 Mahindra Parts <br>and growing...
                    </div>
                    @elseif($domain_name == 'kioti')
                    <div>
                        Over 500,000 Kioti Parts <br>and growing...
                    </div>
                    @else
                    
                    @endif
                    
                </div>
                <div class="col-6 remove-padding pr-1">
                    <a href="{{route('front.partsbymodel', [])}}"><div class="s-0-block s-block d-flex m-blue">
                        <div>
                            FIND PARTS
                        </div>
                    </div></a>
                </div>
                <div class="col-6 remove-padding" >
                    <a href="https://3rdfunction.com/collections">
                        <div class="s-0-block s-block d-flex m-red">
                            <div>
                                3RD FUNCTION VALVES
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col-6 remove-padding  pr-1">
                    <a href="{{route('front.schematics')}}"><div class="s-0-block s-block d-flex m-green">
                        <div>
                             FIND SCHEMATICS
                        </div>
                    </div></a>
                </div>
                <div class="col-6 remove-padding">
                <a href="{{route('front.commonparts')}}">
                    <div class="s-0-block s-block d-flex m-brown">
                        <div>
                             COMMON PARTS
                        </div>
                    </div>
                    </a>
                </div>
            </div>
            <div class="row">
                <div class="col-12 remove-padding">
                    <div class='promotions'>
                        <div class='section-name'>
                            Promotions
                        </div>
                        @if($domain_name == 'mahindra')
                        <a href="https://www.tractorbrothers.com/new-models/mahindra-264"><img src="{{asset('assets/images/promotions/fb199527-5e08-422f-b7a9-1502503048c6.jpg')}}" /></a>
                        <a href="https://www.tractorbrothers.com/new-models/kioti-263"><img src="{{asset('assets/images/promotions/8f7fba18-131a-4367-907f-c8c404488e79.jpg')}}" /></a>
                        @elseif($domain_name == 'kioti')
                        <a href="https://www.tractorbrothers.com/new-models/kioti-263"><img src="{{asset('assets/images/promotions/8f7fba18-131a-4367-907f-c8c404488e79.jpg')}}" /></a>
                        <a href="https://www.tractorbrothers.com/new-models/mahindra-264"><img src="{{asset('assets/images/promotions/fb199527-5e08-422f-b7a9-1502503048c6.jpg')}}" /></a>
                        @else

                        @endif
                        <a href="https://www.tractorbrothers.com/new-models/woods-265"><img src="{{asset('assets/images/promotions/5f721233-577e-4e0b-9983-c1b8ad89e8d7.jpg')}}"/></a>
                        <a href="https://www.tractorbrothers.com/new-models/husqvarna-157"><img src="{{asset('assets/images/promotions/8c1b7eaa-f63c-4f1e-9a98-046264d4418e.jpg')}}" /></a>
                    </div>
                </div>    
            </div>
        </div>
    </section>

    {{-- Slider buttom Category Start --}}
    {{-- @if($gs->solo_mode != 1) --}}
        @foreach($products as $product)
        <section class="trending slider-buttom-category grid-display">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 remove-padding">
                        <div class="section-top">
                            <h2 class="section-title">
                                <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                                {{-- <span class="sub">{{ $product["category_name"] }}</span>  --}}
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
    {{-- @else --}}
    {{-- <section class="sub-categori grid-display">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 order-first order-lg-last ajax-loader-parent">
                    <div class="col-lg-12 remove-padding mb-4">
                        @include('includes.front-filter')
                    </div>
                    <div class="right-area" id="app">
                        <div class="categori-item-area">
                            <div class="row" id="ajaxContent">
                                @include('includes.product.solo-products', ['solo_products' => $products])
                            </div>
                            <div id="ajaxLoader" class="ajax-loader" style="background: url({{asset('assets/images/'.$gs->loader)}}) no-repeat scroll center center rgba(0,0,0,.6);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @endif --}}
    {{-- Slider buttom banner End --}}

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