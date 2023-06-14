<a href="{{ route('front.product', $prod->slug) }}" class="prod-item item">
    <div class="prod-init">
        <div class="prod-top">
            <h2 class="prod-name"
                style="color: {{ $colorsetting_style2 && $colorsetting_style2->title_color ? $colorsetting_style2->title_color : '#333333' }}">
                @php
                    if (strpos($prod->name, ',') !== false) {
                        $prod->name = Helper::reversePartsName($prod->name);
                    }
                @endphp
                {{ $prod->name }}
            </h2>
        </div>

        <p class="prod-details"
            style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color ? $colorsetting_style2->sub_detail_color : '#333333' }}">
            <small>Model:
                <?php echo $prod->model; ?>
            </small>
        </p>

        <p class="prod-price" style="color: {{ $colorsetting_style2 && $colorsetting_style2->price_color ? $colorsetting_style2->price_color : '#333333' }}">
            ${{ $prod->price }}
        </p>
    </div>

    <div class="prod-effect item">
        <div class="extra-list">
            <ul>
                <li>
                    @if (Auth::guard('web')->check())
                        <span class="add-to-wish" data-href="{{ route('user-wishlist-add', ['series' => $db, 'prod_id' => $prod->id]) }}"
                            data-toggle="tooltip" data-placement="right" title="{{ $langg->lang54 }}"
                            data-placement="right"
                            style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color ? $colorsetting_style2->buttons_color : 'green' }};"><i
                                class="icofont-heart-alt"></i>
                        </span>
                    @else
                        <span rel-toggle="tooltip" title="{{ $langg->lang54 }}" data-toggle="modal" id="wish-btn"
                            data-target="#comment-log-reg" data-placement="right"
                            style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color ? $colorsetting_style2->buttons_color : 'green' }};">
                            <i class="icofont-heart-alt"></i>
                        </span>
                    @endif
                </li>
                <li>
                    <span class="quick-view" rel-toggle="tooltip" title="{{ $langg->lang55 }}" href="javascript:;"
                        data-href="{{ route('product.iquick', ['db' => $db, 'id' => $prod->id]) }}" data-toggle="modal"
                        data-target="#quickview" data-placement="right"
                        style="color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color ? $colorsetting_style2->buttons_color : 'green' }};">
                        <i class="icofont-eye"></i>
                    </span>
                </li>

            </ul>
        </div>
    </div>

    <div class="info">
        <h5 class="name">
            ${{ $prod->price }}
            {{ $prod->name }}
            <p class="prod-details" style="color: {{ $colorsetting_style2 && $colorsetting_style2->sub_detail_color ? $colorsetting_style2->sub_detail_color : '#333333' }}">
                Model: <?php echo $prod->model; ?>
            </p>
        </h5>

        <div class="cart-area">
            @if ($prod->stock == 0)
                <span class="add-to-cart-btn cart-out-of-stock">
                    <i class="icofont-close-circled"></i> {{ $langg->lang78 }}
                </span>
            @else
                <span class="add-to-cart add-to-cart-btn"
                    data-href="{{ route('product.cart.add', ['db' => $db, 'id' => $prod->id]) }}"
                    style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color ? $colorsetting_style2->buttons_color : 'green' }};">
                    <i class="icofont-cart"></i> {{ $langg->lang56 }}
                </span>
                <span class="add-to-cart-quick add-to-cart-btn"
                    data-href="{{ route('product.cart.quickadd', ['db' => $db, 'id' => $prod->id]) }}"
                    style="background-color:{{ $colorsetting_style2 && $colorsetting_style2->buttons_color ? $colorsetting_style2->buttons_color : 'green' }};">
                    <i class="icofont-cart"></i> {{ $langg->lang251 }}
                </span>
            @endif
        </div>
    </div>

    <img class="prod-image" src="{{ $prod->thumbnail ? asset('assets/images/thumbnails_home/' . $prod->thumbnail) : asset('assets/images/noimage.png') }}" alt="">
</a>
