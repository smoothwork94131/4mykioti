@extends('layouts.front')

@section('content')
<!-- Breadcrumb Area Start -->
<div class="breadcrumb-area">
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <ul class="pages">
                    <li>
                        <a href="{{route('front.index')}}">{{ $langg->lang17 }}</a>
                    </li>
                    <li>
                        <a href="javascript:;">{{ $langg->lang58 }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- Breadcrumb Area End -->

<!-- SubCategori Area Start -->
<section class="sub-categori">
    <div class="container">
        <div class="row">
            <div class="col-md-12">
                <table id="product_table" class="product_table table" cellspacing="0" width="100%">
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
                    @forelse ($products as $prod)
                        <tr>
                            <td class='td-img'>
                                <img src="{{ $prod->thumbnail ? asset('assets/images/thumbnails_home/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                            </td>
                            <td>
                                <a href="{{'/product/'.$tbl_name.'/'.$prod->table.'/'.$prod->model.'/'.$prod->section.'/'.$prod->group_name.'/'.$prod->name}}">
                                    @php
                                        $prod_name = $prod->name;
                                        if (strpos($prod_name, ',') !== false) {
                                            $prod_name = Helper::reversePartsName($prod_name);
                                        }
                                    @endphp
                                    {{ $prod_name }}
                                </a>
                            </td>
                            <td>
                                {{ $prod->model }}
                            </td>
                            <td class='td-part'>
                                {{ $prod->sku }}
                            </td>
                            <td class='td-price'>
                                ${{ $prod->price }}
                            </td >  
                            <td style="text-align:center;" class='td-action'>
                                <div class="dropdown">
                                    <a class="btn-floating btn-lg black" type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="fas fa-ellipsis-v"></i>
                                    </a>
                                    <div class="dropdown-menu dropdown-primary">
                                        @if(Auth::guard('web')->check())
                                            <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add', ['series' => $tbl_name, 'prod_id' => $prod->id]) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                        @else
                                            <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                        @endif
                                        <span class="dropdown-item quick-view" data-href="{{ route('product.iquick',['db' => $prod->table, 'id' => $prod->id]) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                        <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',['db' => $prod->table, 'id' => $prod->id]) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',['db' => $prod->table, 'id' => $prod->id]) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7">No Data</td>
                        </tr>
                    @endforelse
                    </tbody>
                </table>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="page-center">
                    {{ $products->links('front.pagination.search', ['paginator' => $products, 'maxLinks' => 10]) }}
                </div>
            </div>
        </div>
    </div>
</section>
<!-- SubCategori Area End -->
@endsection
<style>
    .cart span i {
        margin-top: 15px;
    }

</style>
@section('scripts')

@endsection
