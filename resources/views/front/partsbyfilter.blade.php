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
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages parts-by-model-title">
                        <li>
                            <a href="{{ route('front.index') }}">
                                {{ $langg->lang17 }}
                            </a>
                        </li>
                        @php
                            $index = 0;
                            $route = route("front.partsbyfilter");
                        @endphp
                        @foreach($slug_list as $key =>$item)
                            @php
                                $path = $item;
                                $route = $route."/".$path;
                            @endphp
                            <li>
                                @if(count($slug_list) == $index) 
                                    <a>
                                        {{$item}}
                                    </a>
                                @else
                                    <a href="{{$route}}">
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
            </div>
        </div>
    </section>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->
    <section class="faq-section">
        <div class="container">
            @if(count($results) == 0) 
                <h3 class="page-title">No data</h3>
            @else
                <h3 class="page-title">{{ strtoupper($domain_name) }} {{ $category?? '' }} {{ $series?? '' }} {{ $model?? '' }} {{ $filter }} Filters</h3>
                @if(count($slug_list) > 3)
                    <div class="row">
                        <div class="col-md-12">
                            <table class="table product_table" cellspacing="0" width="100%">
                                <thead>
                                <tr>
                                    <th width='10%' class='th-img' style="text-align:center;"></th>
                                    <th style="text-align:center;">Name</th>
                                    <th style="text-align:center;">Model</th>
                                    <th class='th-group' style="text-align:center;">Group</th>
                                    <th class='th-part' style="text-align:center;">Part</th>
                                    <th class='th-price' style="text-align:center;">Price</th>
                                    <th class='th-action' style="text-align:center;">Action</th>
                                </tr>
                                </thead>
                                <tbody>
                                
                                @foreach($results as $key=>$prod)
                                @php
                                    $path_list = $slug_list;
                                    $path_list['section'] = $prod->section_name;
                                    $path_list['group'] = $prod->group_name;
                                    unset($path_list['filter']);

                                    $path = $prod->name ;
                                    if(strstr($path, "/")) {
                                        $path = str_replace("/", ":::", $path) ;
                                    }
                                    $path_list['prod_name'] = $path ;
                                @endphp
                                    <tr>
                                        <td class='td-img' style="text-align:center;">
                                            <img src="{{ $prod->thumbnail ? asset('assets/images/thumbnails_home/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                                        </td>
                                        <td style="text-align:center;">
                                            <a href="{{route('front.homeproduct', $path_list)}}">
                                                @php
                                                    $prod_name = $prod->name;
                                                    if (strpos($prod_name, ',') !== false) {
                                                        $prod_name = Helper::reversePartsName($prod_name);
                                                    }
                                                @endphp
                                                {{ $prod_name }}
                                            </a>
                                        </td>
                                        <td style="text-align:center;">
                                            {{ $prod->model }}
                                        </td>
                                        <td class='td-group' style="text-align:center;">
                                            {{ $prod->group_id }}
                                        </td>
                                        <td class='td-part' style="text-align:center;">
                                            {{ $prod->sku }}
                                        </td>
                                        <td class='td-price' style="text-align:center;">
                                            ${{ $prod->price }}
                                        </td >  
                                        <td class='td-action' style="text-align:center;">
                                            <div class="dropdown">
                                                <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <i class="fas fa-ellipsis-v"></i>
                                                </a>
                                                <div class="dropdown-menu dropdown-primary">
                                                    @if(Auth::guard('web')->check())
                                                        <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add', ['series' => strtolower($series), 'prod_id' => $prod->id]) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                    @else
                                                        <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                                    @endif
                                                    <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => strtolower($series), 'id' => $prod->id]) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                                    <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => strtolower($series), 'id' => $prod->id]) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                                    <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => strtolower($series), 'id' => $prod->id]) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-12">
                            <div class="page-center">
                                {{ $results->links('front.pagination.search', ['paginator' => $results, 'maxLinks' => 10]) }}
                            </div>
                        </div>
                    </div>
                @else
                    <div class="row m-block-content">
                        @foreach($results as $item)
                        <div class="col-md-3 col-sm-6">
                            @php 
                                $path = $item->name ;
                                if(strstr($path, "/")) {
                                    $path = str_replace("/", ":::", $path) ;
                                }
                            @endphp
                            <a href="{{$route.'/'.$path}}">
                                <div class="m-block" >
                                    {{$item->name}} {{ $filter }} Filters
                                </div>
                            </a>
                        </div> 
                        @endforeach
                    </div>
                @endif
            @endif
        </div>
    </section>
@endsection

@section('scripts')

@endsection