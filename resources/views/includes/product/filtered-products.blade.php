@if(json_decode($gs->product_view)->filtered == 0)
    @if (count($prods) > 0)
        @foreach ($prods as $key => $prod)
            <div class="col-lg-3 col-md-6 col-12 remove-padding">
                <a href="{{ route('front.homeproduct', $prod->slug) }}" class="item">
                    <div class="item-img">
                        @if(!empty($prod->features))
                        <div class="sell-area">
                            @foreach($prod->features as $key => $data1)
                            <span class="sale" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->tag_bg_color? $colorsetting_style1->tag_bg_color: '#000000' }}; color: {{ $colorsetting_style1 && $colorsetting_style1->tag_color? $colorsetting_style1->tag_color: '#ffffff' }}">{{ $prod->features[$key] }}</span>
                            @endforeach
                        </div>
                        @endif
                        <div class="extra-list">
                            <ul>
                                <li>
                                    @if(Auth::guard('web')->check())

                                    <span class="add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}" data-toggle="tooltip" data-placement="right" title="{{ $langg->lang54 }}" data-placement="right" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};"><i class="icofont-heart-alt" ></i>
                                    </span>

                                    @else

                                    <span rel-toggle="tooltip" title="{{ $langg->lang54 }}" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                        <i class="icofont-heart-alt"></i>
                                    </span>

                                    @endif
                                </li>
                                <li>
                                <span class="quick-view" rel-toggle="tooltip" title="{{ $langg->lang55 }}" href="javascript:;" data-href="{{ route('product.quick',$prod->id) }}" data-toggle="modal" data-target="#quickview" data-placement="right"  style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};"> <i class="icofont-eye"></i>
                                </span>
                                </li>
                                
                            </ul>
                        </div>
                        <img class="img-fluid" style="max-width:125px; max-height: 150px;"  src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                    </div>
                    <div class="info">
                        <div class="stars">
                            <div class="ratings">
                                <div class="empty-stars">
                                    
                                </div>
                                <div class="full-stars" style="width:{{App\Models\Rating::ratings($prod->id)}}%"></div>
                            </div>
                        </div>
                        <h4 class="price" style="color: {{ $colorsetting_style1 && $colorsetting_style1->price_color? $colorsetting_style1->price_color : '#333333' }}">{{ $prod->setCurrency() }} <del><small>{{ $prod->showPreviousPrice() }}</small></del></h4>
                        <h5 class="name" style="color: {{ $colorsetting_style1 && $colorsetting_style1->title_color? $colorsetting_style1->title_color: '#333333' }}">{{ $prod->showName() }}</h5>
                        <div class="item-cart-area">
                        @if($prod->product_type == "affiliate")
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>
                                {{ $langg->lang251 }}
                            </span>
                        @else
                            @if($prod->emptyStock())
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> {{ $langg->lang78 }}
                            </span>
                            @else
                            <span class="add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$prod->id) }}" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang56 }}
                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="{{ route('product.cart.quickadd',$prod->id) }}" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang251 }}
                            </span>
                            @endif
                        @endif
                        </div>
                    </div>
                </a>
            </div>
        @endforeach
        <div class="col-lg-12">
            <div class="page-center mt-5">
                {!! $prods->appends(['search' => request()->input('search')])->links() !!}
            </div>
        </div>
    @else
        <div class="col-lg-12">
            <div class="page-center">
                <h4 class="text-center">{{ $langg->lang60 }}</h4>
            </div>
        </div>
    @endif
@endif


@if(json_decode($gs->product_view)->filtered == 1)
    @if (count($prods) > 0)
        @foreach ($prods as $key => $prod)
            <div class="col-lg-4 col-md-6 col-12  margin-custome-0">


            <a href="{{ route('front.homeproduct', $prod->slug) }}" class="prod-item item">            
                <div class="prod-init">
                    <div class="prod-top">
                        
                        <h2 class="prod-name"  style="color: {{ $colorsetting_style2 && $colorsetting_style2->title_color? $colorsetting_style2->title_color: '#333333' }}">
                        {{ $prod->name }}
                    </h2>
                    </div> 
                    
                    <p class="prod-tag">
                    @if($prod->features)
                        @foreach($prod->features as $key => $data1)
                        <span class="sale"  style="background-color: {{ $colorsetting_style2 && $colorsetting_style2->tag_bg_color? $colorsetting_style2->tag_bg_color : '#84a45a' }}; color: {{ $colorsetting_style2 && $colorsetting_style2->tag_color? $colorsetting_style2->tag_color: '#000000' }}">{{ $prod->features[$key] }}</span>
                        @endforeach
                    @endif
                    </p>

                    <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->detail_color? $colorsetting_style2->detail_color: '#333333' }}">
                        
                    </p>
                    
                    <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333' }}">	
                        <small>Model #: <?php echo $prod->category_id;  ?></small>
                        <br>
                        <small>Part #: <?php echo $prod->sku;  ?></small>
                    </p>

                    <p class="prod-price" style="color: {{ $colorsetting_style2 && $colorsetting_style2->price_color? $colorsetting_style2->price_color: '#333333' }}">
                        {{ $prod->price }} 
                        <del><small>{{ $prod->previous_price }}</small></del>
                    </p>

                   
                </div>

                <div class="prod-effect item">
                    <div class="extra-list">
                        <ul>
                            <li>
                                @if(Auth::guard('web')->check())

                                <span class="add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}" data-toggle="tooltip" data-placement="right" title="{{ $langg->lang54 }}" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};"><i class="icofont-heart-alt"></i>
                                </span>

                                @else

                                <span rel-toggle="tooltip" title="{{ $langg->lang54 }}" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                    <i class="icofont-heart-alt"></i>
                                </span>

                                @endif
                            </li>
                            <li>
                                <span class="quick-view" rel-toggle="tooltip" title="{{ $langg->lang55 }}" href="javascript:;" data-href="{{ route('product.quick',$prod->id) }}" data-toggle="modal" data-target="#quickview" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};"> <i class="icofont-eye"></i>
                                </span>
                            </li>
                           
                        </ul>
                    </div>
                </div>

                <div class="info">
                        <div class="stars">
                            <div class="ratings">
                                <div class="empty-stars">
                                    
                                </div>
                                <div class="full-stars" style="width:{{App\Models\Rating::ratings($prod->id)}}%"></div>
                            </div>
                        </div>
                        <h5 class="name">
                        $ <del><small>{{ $prod->previous_price }}</small></del>
                        {{ $prod->name }}
                        <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333' }}">	
                            <small>Models #: <?php echo $prod->category_id;  ?></small>
                        </p>
                        </h5>
                        <div class="cart-area">
                        @if($prod->product_type == "affiliate")
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>
                                {{ $langg->lang251 }}
                            </span>
                        @else
                            
                            <span class="add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$prod->id) }}"  style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang56 }}
                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="{{ route('product.cart.quickadd',$prod->id) }}" style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang251 }}
                            </span>
                        @endif
                        </div>
                </div>
                <img class="prod-image" style="max-width:125px; max-height: 150px;"  src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image) }}" alt="">
            </a>

            </div>
        @endforeach
        <div class="col-lg-12">
            <div class="page-center mt-5">
                {!! $prods->appends(['search' => request()->input('search')])->links() !!}
            </div>
        </div>
    @else
        <div class="col-lg-12">
            <div class="page-center">
                <h4 class="text-center">{{ $langg->lang60 }}</h4>
            </div>
        </div>
    @endif
@endif

@if(isset($ajax_check))
    <script type="text/javascript">
        // Tooltip Section
        $('[data-toggle="tooltip"]').tooltip({});
        $('[data-toggle="tooltip"]').on('click', function () {
            $(this).tooltip('hide');
        });

        $('[rel-toggle="tooltip"]').tooltip();

        $('[rel-toggle="tooltip"]').on('click', function () {
            $(this).tooltip('hide');
        });

        // Tooltip Section Ends
    </script>
@endif