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
    <!-- Breadcrumb Area Start -->
    <section class="breadcrumb-area">
        <div class="{{ count($slug_list)>4 ? 'container-fluid' : 'container' }}" style="{{ count($slug_list) > 4? 'padding-left: 5%; padding-right: 5%' : ''}}">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages parts-by-model-title">
                        <li>
                            <a href="{{ route('front.index') }}">
                                {{ $langg->lang17 }}
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('front.partsbymodel') }}">
                               Category
                            </a>
                        </li>
                        @php
                            $index = 1 ;
                            $route = route("front.partsbymodel") ;
                        @endphp
                        @foreach($slug_list as $key =>$item)
                            @php
                                $path = $item ;
                                $path = Helper::convertPathToData($path);
                                $route = $route."/".$item
                            @endphp
                            <li>
                                @if(count($slug_list) == $index) 
                                    <a>
                                        {{$path}}
                                    </a>
                                @else
                                    <a href = "{{$route}}">
                                        {{$path}}
                                    </a>
                                @endif
                            </li>
                            @php
                                $index++ ;
                            @endphp
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </section>
    <!-- Breadcrumb Area End -->
    
    <!-- Section Start -->
    @if(count($slug_list) > 4)
    <section class="faq-section">
        <div class="container-fluid" style="padding-left: 5%; padding-right: 5%">
            <h3 class="page-title">
                {{ $group_record->model ?? $group_record->model }} {{ $group_record->group_name ?? $group_record->group_name }} PART
            </h3>
            <div class="row parts-container">
                <div class="col-md-12 group-table d-desktop">
                    <div class="group-schematics">
                        @if($group_record->image && file_exists(public_path('assets/images/group/'.$group_record->image)))
                            <img src="{{asset('assets/images/group/'.$group_record->image)}}">
                        @else
                            @if(file_exists(public_path('assets/images/group/'.$group_record->group_Id.'.png')))
                            <img src="{{asset('assets/images/group/'.$group_record->group_Id.'.png')}}">
                            @elseif(file_exists(public_path('assets/images/group/'.$group_record->group_Id.'.jpeg')))
                                <img src="{{asset('assets/images/group/'.$group_record->group_Id.'.jpeg')}}">
                            @else
                            <img src="{{asset('assets/images/noimage.png')}}" style="min-width: 100px;">
                            @endif
                        @endif
                    </div>
                    <div class="parts-table">
                        <p style="text-align: center; margin-bottom: 0px; font-size: 12px;">
                            Parts not listed are not available at this time
                        </p>
                        <table id="product_table" class="table product_table" cellspacing="0" width="100%">
                            <thead>
                            <tr>
                                @if($refno_flag)
                                <th style="text-align:center;">NO</th>
                                @endif
                                @if($thumbnail_flag)
                                <th style="text-align:center;"></th>
                                @endif
                                <th style="text-align:center;">Name</th>
                                <th style="text-align:center;">Price</th>
                                <th style="text-align:center;">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($result as $key=>$item)
                                @php
                                    $path_list = $slug_list;
                                    $path = $item->name ;
                                    if(strstr($path, "/")) {
                                        $path = str_replace("/", ":::", $path);
                                    }
                                    $path_list['prod_name'] = $path;
                                @endphp
                                <tr>
                                    @if($refno_flag)
                                    <td style="text-align:center;">
                                        {{ $item->refno }}
                                    </td>
                                    @endif
                                    @if($thumbnail_flag)
                                    <td style="text-align:center;">
                                        <img style="width:30px; height: 30px;" src="{{ $item->thumbnail ? asset('assets/images/thumbnails_home/'.$item->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                                    </td>
                                    @endif
                                    <td style="text-align:center;">
                                        <a href="{{route('front.homeproduct', $path_list)}}">
                                            @php
                                                $prod_name = $item->name;
                                                if (strpos($prod_name, ',') !== false) {
                                                    $prod_name = Helper::reversePartsName($prod_name);
                                                }
                                            @endphp
                                            {{ $prod_name }}
                                        </a>
                                    </td>
                                    <td style="text-align:center;">
                                        ${{ $item->price }}
                                    </td>
                                    <td style="text-align:center;">
                                        <div class="dropdown">
                                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-primary">
                                                @if(Auth::guard('web')->check())
                                                <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add', ['series' => strtolower($slug_list["series"]), 'prod_id' => $item->id]) }}">
                                                    <i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish
                                                </span>
                                                @else
                                                <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg">
                                                    <i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish
                                                </span>
                                                @endif
                                                <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}" data-toggle="modal" data-target="#quickview">
                                                    <i class="icofont-eye"></i>&nbsp;&nbsp;Quick View
                                                </span>
                                                <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}">
                                                    <i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}
                                                </span>
                                                <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}">
                                                    <i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>
    
                <div class="col-md-12 group-table d-mobile">
                    <div style='margin-bottom: 15px; text-align: center;'>
                        <button type="button" class="btn btn-primary" style="background: #F05223; border: 1px solid #F05223" data-toggle="modal" data-target="#prod_img_modal">View Schematic Diagram</button>
                    </div>
                    <div class="parts-table">
                        <p style="text-align: center; margin-bottom: 0px; font-size: 12px;">
                            Parts not listed are not available at this time
                        </p>
                        <table id="product_table" class="table product_table" cellspacing="0" width="100%" style="font-size: 12px;">
                            <thead>
                                <tr>
                                    @if($refno_flag)
                                    <th style="text-align:center;">NO</th>
                                    @endif
                                    @if($thumbnail_flag)
                                    <th style="text-align:center;"></th>
                                    @endif
                                    <th style="text-align:center;">Name</th>
                                    <th style="text-align:center;">Price</th>
                                    <th style="text-align:center;">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                            @foreach($result as $key=>$item)
                                @php
                                    $path = $item->name;
                                    if(strstr($path, "/")) {
                                        $path = str_replace("/", ":::", $path) ;
                                    }
                                    $slug_list['prod_name'] = $path;
                                @endphp
                                <tr>
                                    @if($refno_flag)
                                    <td style="text-align:center;">
                                        {{ $item->refno }}
                                    </td>
                                    @endif
                                    @if($thumbnail_flag)
                                    <td style="text-align:center;">
                                        <img style="width:30px; height: 30px;" src="{{ $item->thumbnail ? asset('assets/images/thumbnails_home/'.$item->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                                    </td>
                                    @endif
                                    <td style="text-align:center;">
                                        <a href="{{route('front.homeproduct', $slug_list)}}">{{ $item->name }}</a>
                                    </td>
                                    <td style="text-align:center;">
                                        ${{ $item->price }}
                                    </td>
                                    <td style="text-align:center;">
                                        <div class="dropdown">
                                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i class="fas fa-ellipsis-v"></i>
                                            </a>
                                            <div class="dropdown-menu dropdown-primary">
                                                @if(Auth::guard('web')->check())
                                                <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add', ['series' => strtolower($slug_list["series"]), 'prod_id' => $item->id]) }}">
                                                    <i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish
                                                </span>
                                                @else
                                                <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg">
                                                    <i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish
                                                </span>
                                                @endif
                                                <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}" data-toggle="modal" data-target="#quickview">
                                                    <i class="icofont-eye"></i>&nbsp;&nbsp;Quick View
                                                </span>
                                                <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}">
                                                    <i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}
                                                </span>
                                                <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => strtolower($slug_list["series"]), 'id' => $item->id]) }}">
                                                    <i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                    </div>
                </div>

                {{-- <div class="col-md-12">
                    <div class="page-right">
                        {{ $result->links('front.pagination.search', ['paginator' => $result, 'maxLinks' => 10]) }}
                    </div>
                </div> --}}
            </div>
            <div class="row ceo-container">
                <div class="col-md-12">
                    @foreach($result as $key=>$item)
                    <div style="text-align:center; color: #fff; font-size: 1px; over-flow: hidden; width: 100%;">
                        The {{ $domain_name . " " . $item->model . " " . $item->name}} is available online for ${{ $item->price }} at 4my{{ $domain_name}}.com
                    </div>
                    @endforeach
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
                        @if($group_record->image && file_exists(public_path('assets/images/group/'.$group_record->image)))
                            <img style='width: 100%;' src="{{asset('assets/images/group/'.$group_record->image)}}">
                        @else
                            @if(file_exists(public_path('assets/images/group/'.$group_record->group_Id.'.png')))
                            <img style='width: 100%;' src="{{asset('assets/images/group/'.$group_record->group_Id.'.png')}}">
                            @elseif(file_exists(public_path('assets/images/group/'.$group_record->group_Id.'.jpeg')))
                            <img style='width: 100%;' src="{{asset('assets/images/group/'.$group_record->group_Id.'.jpeg')}}">
                            @else
                            <img style='width: 100%;' src="{{asset('assets/images/noimage.png')}}">
                            @endif
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </section>
    @else
    <section class="faq-section">
        <div class="container">
            @if(count($result) == 0) 
                <h3 class="page-title">No data</h3>
            @else
                <h3 class="page-title">{{ strtoupper($domain_name) }} {{ Helper::convertPathToData($slug_list["category"]?? '') }} {{ Helper::convertPathToData($slug_list["series"]?? '') }} {{ Helper::convertPathToData($slug_list["model"]?? '') }} {{ Helper::convertPathToData($slug_list["section"]?? '') }} {{ Helper::convertPathToData($slug_list["group"]??'') }} Parts</h3>
                <div class="row m-block-content">
                    @foreach($result as $item)
                        <div class="col-md-3 col-sm-6">
                            @php 
                                $path = $item->name;
                                if(strstr($path, "/")) {
                                    $path = str_replace("/", ":::", $path) ;
                                }

                                if(strstr($path, "#")) {
                                    $path = str_replace("#", "***", $path) ;
                                }
                            @endphp
                            <a href="{{$route.'/'.$path}}">
                                <div class="m-block" >
                                    {{$item->name}} Parts
                                </div>
                            </a>
                        </div> 
                    @endforeach
                </div>
            @endif
        </div>
    </section>
    @endif
    <!-- Section End-->
@endsection

@section('scripts')

@endsection