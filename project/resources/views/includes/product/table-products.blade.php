<div class="mr-table allproduct mt-4">
    <div class="table-responsiv">
        <table id="product_table" class="table table-hover dt-responsive" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th>Name</th>
                <th>Photo</th>
                <th>Type</th>
                <th>Price</th>
                <th style="text-align:center;">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($prods as $prod)
                <tr>
                    <td>
                        {{ $prod->showName() }}
                    </td>
                    <td>
                        <img style="width:30px; height: 30px;" src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image) }}" alt="">
                    </td>
                    <td>
                        {{ $prod->product_type }}
                    </td>
                    <td>
                        {{ $prod->showPrice() }}
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
                                <span class="dropdown-item quick-view" data-href="{{ route('product.quick',$prod->id) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                <span class="dropdown-item add-to-compare" data-href="{{ route('product.compare.add',$prod->id) }}"><i class="icofont-exchange"></i>&nbsp;&nbsp;Compare</span>
                                @if($prod->product_type == "affiliate")
                                    <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                @else
                                    @if($prod->emptyStock())
                                        <span class="dropdown-item add-to-cart-btn cart-out-of-stock" href="#"><i class="icofont-close-circled"></i>&nbsp;&nbsp;{{ $langg->lang78 }}</span>
                                    @else
                                        <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$prod->id) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',$prod->id) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                    @endif
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