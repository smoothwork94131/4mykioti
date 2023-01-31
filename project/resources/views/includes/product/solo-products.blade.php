@if(json_decode($gs->product_view)->home == 0)
    @if (count($solo_products) > 0)
        @foreach ($solo_products as $key => $solo_prod)
            <div class="col-lg-3 col-md-6 col-12">
                <a href="{{ route('front.product', $solo_prod->slug) }}" class="item">
                    <div class="item-img">
                        @if(!empty($solo_prod->features))
                        <div class="sell-area">
                            @foreach($solo_prod->features as $key => $data1)
                            <span class="sale" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->tag_bg_color? $colorsetting_style1->tag_bg_color: '#000000' }}; color: {{ $colorsetting_style1 && $colorsetting_style1->tag_color? $colorsetting_style1->tag_color: '#ffffff' }}">{{ $solo_prod->features[$key] }}</span>
                            @endforeach
                        </div>
                        @endif
                        <div class="extra-list">
                            <ul>
                                <li>
                                    @if(Auth::guard('web')->check())

                                    <span class="add-to-wish" data-href="{{ route('user-wishlist-add',$solo_prod->id) }}" data-toggle="tooltip" data-placement="right" title="{{ $langg->lang54 }}" data-placement="right" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};"><i class="icofont-heart-alt" ></i>
                                    </span>

                                    @else

                                    <span rel-toggle="tooltip" title="{{ $langg->lang54 }}" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                        <i class="icofont-heart-alt"></i>
                                    </span>

                                    @endif
                                </li>
                                <li>
                                    <span class="quick-view" rel-toggle="tooltip" title="{{ $langg->lang55 }}" href="javascript:;" data-href="{{ route('product.quick',$solo_prod->id) }}" data-toggle="modal" data-target="#quickview" data-placement="right"  style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};"> <i class="icofont-eye"></i>
                                    </span>
                                </li>
                                <li>
                                    <span class="add-to-compare" data-href="{{ route('product.compare.add',$solo_prod->id) }}"  data-toggle="tooltip" data-placement="right" title="{{ $langg->lang57 }}" data-placement="right"  style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                        <i class="icofont-exchange"></i>
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <img class="img-fluid" src="{{ $solo_prod->thumbnail ? asset('assets/images/thumbnails/'.$solo_prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                    </div>
                    <div class="info">
                        <div class="stars">
                            <div class="ratings">
                                <div class="empty-stars">
                                    
                                </div>
                                <div class="full-stars" style="width:{{App\Models\Rating::ratings($solo_prod->id)}}%"></div>
                            </div>
                        </div>
                        <h4 class="price" style="color: {{ $colorsetting_style1 && $colorsetting_style1->price_color? $colorsetting_style1->price_color : '#333333' }}">{{ $solo_prod->setCurrency() }} <del><small>{{ $solo_prod->showPreviousPrice() }}</small></del></h4>
                        <h5 class="name" style="color: {{ $colorsetting_style1 && $colorsetting_style1->title_color? $colorsetting_style1->title_color: '#333333' }}">{{ $solo_prod->showName() }}</h5>
                        <div class="item-cart-area">
                        @if($solo_prod->product_type == "affiliate")
                            <span class="add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $solo_prod->slug) }}"><i class="icofont-cart"></i>
                                {{ $langg->lang251 }}
                            </span>
                        @else
                            @if($solo_prod->emptyStock())
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> {{ $langg->lang78 }}
                            </span>
                            @else
                            <span class="add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$solo_prod->id) }}" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang56 }}
                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="{{ route('product.cart.quickadd',$solo_prod->id) }}" style="background-color:{{ $colorsetting_style1 && $colorsetting_style1->buttons_color? $colorsetting_style1->buttons_color: 'green' }};">
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
                {!! $solo_products->appends(['search' => request()->input('search'), 'sort' => request()->input('sort')])->links() !!}
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

@if(json_decode($gs->product_view)->home == 1)
    @if (count($solo_products) > 0)
        @foreach ($solo_products as $key => $solo_prod)
            <div class="col-lg-3 col-md-6 col-12  margin-custome-0">
            <a href="{{ route('front.product', $solo_prod->slug) }}" class="prod-item item">            
                <div class="prod-init">
                    <div class="prod-top">
                        <h2 class="prod-name"  style="color: {{ $colorsetting_style2 && $colorsetting_style2->title_color? $colorsetting_style2->title_color: '#333333' }}">
                        {{ $solo_prod->showName() }}
                    </h2>
                    </div> 
                    
                    <p class="prod-tag">
                    
                        <span class="sale"  style="background-color: {{ $colorsetting_style2 && $colorsetting_style2->tag_bg_color? $colorsetting_style2->tag_bg_color : '#84a45a' }}; color: {{ $colorsetting_style2 && $colorsetting_style2->tag_color? $colorsetting_style2->tag_color: '#000000' }}">{{ $solo_prod->subcategory_id }}</span>
                        
                    </p>
                    <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->detail_color? $colorsetting_style2->detail_color: '#333333' }}">
                        @php
                            $str=$solo_prod->showDetails();					
                            if (strlen($str) > 60)
                            {
                                $str2 = substr($str, 0, 57);
                                $str2 = $str2.'...';
                            }
                            else
                            {
                                $str2 = $str;
                            }						
                        @endphp
                        <?php 
                            echo $str2;
                        ?>
                    </p>
                    
                    @if ($solo_prod->showParent() && $solo_prod->showParent() != '<br>')
                        <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333' }}">	
                            <small>Model #: <?php echo $solo_prod->category_id;  ?></small></br>
                            <small>Part #: <?php echo $solo_prod->sku;  ?></small>
                        </p>
                    @endif

                    <p class="prod-price" style="color: {{ $colorsetting_style2 && $colorsetting_style2->price_color? $colorsetting_style2->price_color: '#333333' }}">
                        {{ $solo_prod->showPrice() }} 
                        <del><small>{{ $solo_prod->showPreviousPrice() }}</small></del>
                    </p>

                    @if ($solo_prod->showEffects())
                        @php
                            $segments = explode(', ', $solo_prod->showEffects());
                            $arrayLength = count($segments);
                        @endphp
                        <p style="display:flex; align-items: center; ">
                            <?php
                            $i = 0;
                            while ($i < $arrayLength)
                            {
                                if(!str_contains($segments[$i], 'pain')) {
                            ?>
                                <img src="{{ asset('assets/images/effects/'. $segments[$i] . '.png') }}" alt="Users report feeling {{ $segments[$i] }}." style="margin-right: 3px; margin-left: 3px; font-size: 8px; line-height:10px; object-fit: contain; width: unset; height: 30px;">
                            <?php 
                                } else { ?>
                                <img src="{{ asset('assets/images/effects/pain-relief.png') }}" alt="Users report feeling Pain." style="margin-right: 3px; margin-left: 3px; font-size: 8px; line-height:10px; object-fit: contain; width: unset; height: 30px;">
                            <?php
                                }
                            ?>
                            <?php
                                $i++; 
                            }
                            ?>
                        </p>		
                    @endif
                </div>

                <div class="prod-effect item">
                    <div class="extra-list">
                        <ul>
                            <li>
                                @if(Auth::guard('web')->check())

                                <span class="add-to-wish" data-href="{{ route('user-wishlist-add',$solo_prod->id) }}" data-toggle="tooltip" data-placement="right" title="{{ $langg->lang54 }}" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};"><i class="icofont-heart-alt"></i>
                                </span>

                                @else

                                <span rel-toggle="tooltip" title="{{ $langg->lang54 }}" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                    <i class="icofont-heart-alt"></i>
                                </span>

                                @endif
                            </li>
                            <li>
                            <span class="quick-view" rel-toggle="tooltip" title="{{ $langg->lang55 }}" href="javascript:;" data-href="{{ route('product.quick',$solo_prod->id) }}" data-toggle="modal" data-target="#quickview" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};"> <i class="icofont-eye"></i>
                            </span>
                            </li>
                            <li>
                                <span class="add-to-compare" data-href="{{ route('product.compare.add',$solo_prod->id) }}"  data-toggle="tooltip" data-placement="right" title="{{ $langg->lang57 }}" data-placement="right" style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                    <i class="icofont-exchange"></i>
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
                                <div class="full-stars" style="width:{{App\Models\Rating::ratings($solo_prod->id)}}%"></div>
                            </div>
                        </div>
                        <h5 class="name">
                        {{ $solo_prod->setCurrency() }} <del><small>{{ $solo_prod->showPreviousPrice() }}</small></del>
                        {{ $solo_prod->showName() }}

                        @if ($solo_prod->showParent() && $solo_prod->showParent() != '<br>')
                            <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color? $colorsetting_style2->sub_detail_color : '#333333' }}">	
                                <small>Model #: <?php echo $solo_prod->category_id;  ?></small>
                                <br>
                                <small>Part #: <?php echo $solo_prod->sku;  ?></small>
                            </p>
                        @endif
                        </h5>
                        <div class="cart-area">
                        @if($solo_prod->product_type == "affiliate")
                            <span class="add-to-cart-btn affilate-btn"
                                data-href="{{ route('affiliate.product', $solo_prod->slug) }}"><i class="icofont-cart"></i>
                                {{ $langg->lang251 }}
                            </span>
                        @else
                            @if($solo_prod->emptyStock())
                            <span class="add-to-cart-btn cart-out-of-stock">
                                <i class="icofont-close-circled"></i> {{ $langg->lang78 }}
                            </span>
                            @else
                            <span class="add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$solo_prod->id) }}"  style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang56 }}
                            </span>
                            <span class="add-to-cart-quick add-to-cart-btn"
                                data-href="{{ route('product.cart.quickadd',$solo_prod->id) }}" style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color? $colorsetting_style2->buttons_color: 'green' }};">
                                <i class="icofont-cart"></i> {{ $langg->lang251 }}
                            </span>
                            @endif
                        @endif
                        </div>
                </div>
                <img class="prod-image" src="{{ $solo_prod->thumbnail ? asset('assets/images/thumbnails/'.$solo_prod->thumbnail):asset('assets/images/products/'.$gs->prod_image) }}" alt="">
            </a>

            </div>
        @endforeach
        <div class="col-lg-12">
            <div class="page-center mt-5">
                {!! $solo_products->appends(['search' => request()->input('search'), 'sort' => request()->input('sort')])->links() !!}
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