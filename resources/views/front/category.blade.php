@extends('layouts.front')

@section('styles')
<style>
    .switch-section {
        margin: 20px 0;
    }

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

    .dropdown-toggle:after {
        display:none;
    }

    #list_view {
        background-color: #fff;
        padding: 10px;
    }

    .dropdown-item {
        cursor: pointer;
    }
</style>
@endsection
@section('content')
    @if ($group)
    <section class="sub-categori">
        <div class="container-fluid" style="padding-left: 5%; padding-right: 5%">
            <div class="row breadcrumb-area" >
                <div class="col-12">
                    <div class="section-top" style="display: block; padding-left: 0px;">
                        
                        @php 
                            $route = "front.partsbymodel" ;
                            $index = 1 ;
                        @endphp
                        <div class="col-lg-12">
                            <ul class="pages parts-by-model-title">
                                <li>
                                    <a href="{{ route('front.index') }}">
                                        {{ $langg->lang17 }}
                                    </a>
                                </li>
                                <li>
                                    <a href="{{ route($route) }}">
                                        Category
                                    </a>
                                </li>
                                @php
                                    $route = route("$route") ;
                                @endphp
                                @foreach($slug_list as $key =>$item)
                                    @php
                                        if(strstr($item, "/")) {    
                                            $slug_list[$key] = str_replace("/", ":::", $item) ;
                                        }

                                        $path = $item ;
                                        if(strstr($path, "/")) {
                                            $path = str_replace("/", ":::", $path) ;
                                        }
                                        $route = $route."/".$path ;
                                        
                                    @endphp
                                    <li>
                                        @if(count($slug_list) == $index) 
                                            <a>
                                                {{$item}}
                                            </a>
                                        @else
                                            <a href = "{{$route}}">
                                                {{$item}}
                                            </a>
                                        @endif
                                        
                                    </li>
                                    @php
                                        $index++ ;
                                        
                                    @endphp

                                    
                                @endforeach
                            
                            </ul>
                        </div>

                        <h2 class="section-title remove-padding">
                            {{$group->group_name }}
                            <span class="title-underline"></span>
                        </h2>
                    </div>
                </div>
                <div class="group-table d-desktop">
                    <div class="group-schematics">
                        <img src="{{asset('assets/images/group/'.$group->image)}}">
                    </div>
                    <div class="parts-table">
                        <table id="product_table" class="table " cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th style="text-align:center;">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($prods as $key=>$prod)
                                @php 
                                    $path = $prod->name ;
                                    if(strstr($path, "/")) {
                                        $path = str_replace("/", ":::", $path) ;
                                    }
                                    $slug_list['prod'] = $path ;
                                @endphp
                                <tr>
                                    <td>
                                        <img style="width:73px; height: 59px;" src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                                    </td>
                                    <td>
                                        <a href="{{route('front.sub_category', $slug_list)}}">{{ $prod->name }}</a>
                                    </td>
                                    <td>
                                        ${{ $prod->price }}
                                    </td>
                                    <td style="text-align:center;">
                                        <div class="dropdown">
                                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-primary">
                                                @if(Auth::guard('web')->check())
                                                    <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                @else
                                                    <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                @endif
                                                <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => $db, 'id' => $prod->id]) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                                @if($prod->product_type == "affiliate")
                                                    <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                                @else
                                                <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                                @endif
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

                <div class="group-table d-mobile">
                    <div style='margin-bottom: 15px' align='center'>
                        <button type="button" class="btn btn-primary" style="background: #F05223; border: 1px solid #F05223" data-toggle="modal" data-target="#prod_img_modal">View Schematic Diagram</button>
                    </div>
                    <table id="product_table" class="table " cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Price</th>
                                <th style="text-align:center;">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($prods as $key=>$prod)
                                <tr>
                                    <td>
                                        <img style="width:73px; height: 59px;" src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                                    </td>
                                    <td>
                                        <a href="{{route('front.sub_category', ['prod_name' => $prod->name, 'series'=>$group->series, 'model'=>$group->model])}}">{{ $prod->name }}</a>

                                    </td>
                                    <td>
                                        ${{ $prod->price }}
                                    </td>
                                    <td style="text-align:center;">
                                        <div class="dropdown">
                                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-primary">
                                                @if(Auth::guard('web')->check())
                                                    <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                @else
                                                    <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                @endif
                                                <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => $db, 'id' => $prod->id]) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                                @if($prod->product_type == "affiliate")
                                                    <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                                @else
                                                <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                                @endif
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                </div>
            </div>
        </div>

        <div class="modal fade" id="prod_img_modal" role="dialog" >
            <div class="modal-dialog modal-lg" style='width: 100%; top: 10%; left: 0%; margin: 0px;'>
                <div class="modal-content">
                    <div class="modal-header" style='padding: 5px;'>
                        <button type="button" 
                            class="close" 
                            data-dismiss="modal" 
                            style='right: 15px;top: 15px; background: transparent;z-index:100;'>&times;</button>
                    </div>
                    <div class="modal-body">
                        <img src="{{asset('assets/images/group/'.$group->image)}}" style='width: 100%;'>
                    </div>
                </div>
            </div>
        </div>
    </section>
    @else
    <section class="sub-categori">
        <div class="container">
        @php 
            $route = "front.commonparts" ;
            $index = 1 ;
        @endphp
            <div class="col-lg-12 breadcrumb-area">
                <ul class="pages parts-by-model-title">
                    <li>
                        <a href="{{ route('front.index') }}">
                            {{ $langg->lang17 }}
                        </a>
                    </li>
                    <li>
                        <a href="{{ route($route) }}">
                            Category
                        </a>
                    </li>
                    @php
                        $route = route("$route") ;
                    @endphp
                    @foreach($slug_list as $key =>$item)
                        @php
                            $path = $item ;
                            if(strstr($path, "/")) {
                                $path = str_replace("/", ":::", $path) ;
                            }
                            $route = $route."/".$path ;
                            if(strstr($item, "/")) {    
                                $slug_list[$key] = str_replace("/", ":::", $item) ;
                            }
                        @endphp
                        <li>
                            @if(count($slug_list) == $index) 
                                <a>
                                    {{$item}}
                                </a>
                            @else
                                <a href = "{{$route}}">
                                    {{$item}}
                                </a>
                            @endif
                            
                        </li>
                        @php
                            $index++ ;
                        @endphp
                    @endforeach
                    
                </ul>
            </div>
            <table id="product_table" class="table" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th width='10%' class='th-img'></th>
                    <th>Name</th>
                    <th>Model</th>
                    <th class='th-group'>Group</th>
                    <th class='th-part'>Part</th>
                    <th class='th-price'>Price</th>
                    <th style="text-align:center;" class='th-action'>Action</th>
                </tr>
                </thead>
                <tbody>
                
                @foreach($prods as $key=>$prod)
                @php 
                    $path = $prod->name ;
                    if(strstr($path, "/")) {
                        $path = str_replace("/", ":::", $path) ;
                    }
                    $slug_list['prod'] = $path ;
                @endphp
                    <tr>
                        <td class='td-img'>
                            <img  src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                        </td>
                        <td>
                            <a href="{{route('front.commonparts', $slug_list)}}">{{ $prod->name }}</a>
                        </td>
                        <td>
                            {{ $prod->subcategory_id }}
                        </td>
                        <td class='td-group'>
                            {{ $prod->parent }}
                        </td>
                        <td class='td-part'>
                            {{ $prod->sku }}
                        </td>
                        <td class='td-price'>
                            ${{ $prod->price }}
                        </td >  
                        <td style="text-align:center;" class='td-action'>
                            <div class="dropdown">
                                <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fas fa-ellipsis-v"></i>
                                </a>
                                <div class="dropdown-menu dropdown-primary">
                                    @if(Auth::guard('web')->check())
                                        <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                    @else
                                        <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                    @endif
                                    <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => $db, 'id' => $prod->id]) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                    @if($prod->product_type == "affiliate")
                                        <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                    @else
                                    <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                            <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => $db, 'id' => $prod->id]) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                    @endif
                                </div>
                            </div>
                        </td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </section>
    @endif
    <!-- SubCategori Area End -->
@endsection


@section('scripts')
<script>
    $(document).ready(function () {
        $('#product_table').DataTable({
            "paging": false,
            "ordering": false,
            "info": false,
            "searching": false,
            "lengthMenu": [[50, 100, 150, 200, -1], [50, 100, 150, 200, "All"]],
            rowReorder: {
                selector: 'td:nth-child(2)'
            },
            responsive: true
        });
    });

    // append parameters to pagination links
    function addToPagination() {
        // add to attributes in pagination links
        $('ul.pagination li a').each(function () {
            let url = $(this).attr('href');
            let queryString = '?' + url.split('?')[1]; // "?page=1234...."

            let urlParams = new URLSearchParams(queryString);
            let page = urlParams.get('page'); // value of 'page' parameter

            let fullUrl = '{{route('front.category', [Request::route('category'),Request::route('subcategory'),Request::route('childcategory')])}}?page=' + page + '&search=' + '{{request()->input('search')}}';

            $(".attribute-input").each(function () {
                if ($(this).is(':checked')) {
                    fullUrl += '&' + encodeURI($(this).attr('name')) + '=' + encodeURI($(this).val());
                }
            });

            if ($("#sortby").val() != '') {
                fullUrl += '&sort=' + encodeURI($("#sortby").val());
            }
            $(this).attr('href', fullUrl);
        });
    }

    $(document).on('click', '.categori-item-area .pagination li a', function (event) {
        event.preventDefault();
        if ($(this).attr('href') != '#' && $(this).attr('href')) {
            $('#preloader').show();
            $('#ajaxContent').load($(this).attr('href'), function (response, status, xhr) {
                if (status == "success") {
                    $('#preloader').fadeOut();
                    $("html,body").animate({
                        scrollTop: 0
                    }, 1);

                    addToPagination();
                }
            });
        }
    });

</script>
@endsection