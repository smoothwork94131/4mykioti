
<section class="top-header">
    <div class="container">
        <div class="row">
            <div class="col-lg-12 remove-padding">
                <div class="content">
                    <div class="left-content">
                        <div class="list">
                            <ul>
                                @if($gs->is_language == 1)
                                    <li>
                                        <div class="language-selector">
                                            <i class="fas fa-globe-americas"></i>
                                            <select name="language" class="language selectors nice">
                                                @foreach(DB::table('languages')->get() as $language)
                                                    <option value="{{route('front.language',$language->id)}}" {{ Session::has('language') ? ( Session::get('language') == $language->id ? 'selected' : '' ) : (DB::table('languages')->where('is_default','=',1)->first()->id == $language->id ? 'selected' : '') }} >{{$language->language}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </li>
                                @endif

                                @if($gs->is_currency == 1)
                                    <li>
                                        <div class="currency-selector">
                                            <span>{{ Session::has('currency') ?   DB::table('currencies')->where('id','=',Session::get('currency'))->first()->sign   : DB::table('currencies')->where('is_default','=',1)->first()->sign }}</span>
                                            <select name="currency" class="currency selectors nice">
                                                @foreach(DB::table('currencies')->get() as $currency)
                                                    <option value="{{route('front.currency',$currency->id)}}" {{ Session::has('currency') ? ( Session::get('currency') == $currency->id ? 'selected' : '' ) : (DB::table('currencies')->where('is_default','=',1)->first()->id == $currency->id ? 'selected' : '') }} >{{$currency->name}}</option>
                                                @endforeach
                                            </select>
                                        </div>
                                    </li>
                                @endif
                            </ul>
                        </div>
                    </div>
                    <div class="right-content">
                        <div class="list">
                            <ul>
                                @if(!Auth::guard('web')->check())
                                    <li class="login">
                                        <div class="links">
                                            <a href="{{ route('user.login') }}" class="whitelink">
                                                <span class="sign-in">{{ $langg->lang12 }}</span><span>|</span>
                                            </a>
                                            <a href="{{ route('user.register') }}" class="whitelink">
                                                <span class="join">{{ $langg->lang13 }}</span>
                                            </a>
                                        </div>
                                    </li>
                                @else
                                    <li class="profilearea my-dropdown">
                                        <a href="javascript: ;" id="profile-icon" class="profile carticon">
												<span class="text">
                                                    <i class="far fa-user"></i>	{{ $langg->lang11 }} 
                                                    <i class="fas fa-chevron-down"></i>
												</span>
                                        </a>
                                        <div class="my-dropdown-menu profile-dropdown">
                                            <ul class="profile-links">
                                                <!-- @if(Auth::user()->IsVendor())
                                                    <li>
                                                        <a href="{{ route('vendor-dashboard') }}"><i
                                                                    class="fas fa-angle-double-right"></i> {{ $langg->lang222 }}
                                                        </a>
                                                    </li>
                                                @endif -->
                                            
                                                <li>
                                                    <a href="{{ route('user-dashboard') }}">
                                                        <i class="fas fa-angle-double-right"></i> {{ $langg->lang221 }}
                                                    </a>
                                                </li>
                                                

                                                <li>
                                                    <a href="{{ route('user-profile') }}"><i
                                                                class="fas fa-angle-double-right"></i> {{ $langg->lang205 }}
                                                    </a>
                                                </li>

                                                <li>
                                                    <a href="{{ route('user-logout') }}"><i
                                                                class="fas fa-angle-double-right"></i> {{ $langg->lang223 }}
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                @endif


                                @if($gs->reg_vendor == 1)
                                    <li>
                                        @if(Auth::check())
                                            @if(Auth::guard('web')->user()->is_vendor == 2)
                                                <a href="{{ route('vendor-dashboard') }}"
                                                   class="sell-btn">{{ $langg->lang220 }}</a>
                                            @else
                                                <a href="{{ route('user-package') }}"
                                                   class="sell-btn">{{ $langg->lang220 }}</a>
                                            @endif
                                    </li>
                                @else
                                    <li>
                                        <a href="javascript:;" data-toggle="modal" data-target="#vendor-login"
                                           class="sell-btn">{{ $langg->lang220 }}</a>
                                    </li>
                                @endif
                                @endif


                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Top Header Area End -->

<!-- Logo Header Area Start -->
<section class="logo-header">
    <div class="container">
        <div class="row ">
            <div class="col-lg-2 col-sm-6 col-5 remove-padding">
                <div class="logo">
                    <a href="{{ route('front.index') }}">
                        <img src="{{asset('assets/images/'.$gs->logo)}}" alt="">
                    </a>
                </div>
            </div>
            <div class="col-lg-8 col-sm-12 order-last order-sm-2 order-md-2 d-flex align-items-center justify-content-center">
                <div class="search-box-wrapper">
                    <div class="search-box">
                        <div class="categori-container" id="catSelectForm">
                            <select name="category" id="category_select" class="categoris">
                                <!-- <option value="">{{ $langg->lang1 }}</option> -->
                                <option value="" disabled>Tractors</option>
                                @foreach($categories as $data)
                                    @if($data->id > 21)
                                    <option value="{{ $data->slug }}" {{ Request::route('category') == $data->slug ? 'selected' : '' }}>&nbsp;&nbsp;&nbsp;{{ $data->name }}</option>
                                    @endif
                                @endforeach
                            </select>
                        </div>

                        <form id="searchForm" class="search-form"
                              action="{{ route('front.category', [Request::route('category')??'CK',Request::route('subcategory'),Request::route('childcategory')]) }}"
                              method="GET">
                            @if (!empty(request()->input('sort')))
                                <input type="hidden" name="sort" value="{{ request()->input('sort') }}">
                            @endif
                            @if (!empty(request()->input('minprice')))
                                <input type="hidden" name="minprice" value="{{ request()->input('minprice') }}">
                            @endif
                            @if (!empty(request()->input('maxprice')))
                                <input type="hidden" name="maxprice" value="{{ request()->input('maxprice') }}">
                            @endif
                            <input type="text" id="prod_name" name="search" placeholder="{{ $langg->lang2 }}"
                                   value="{{ request()->input('search') }}" autocomplete="off">
                            <div class="autocomplete">
                                <div id="myInputautocomplete-list" class="autocomplete-items">
                                </div>
                            </div>
                            <button type="submit"><i class="icofont-search-1"></i></button>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-lg-2 col-sm-6 col-7 remove-padding order-lg-last d-flex align-items-center justify-content-end">
                <div class="helpful-links">
                    <ul class="helpful-links-inner">
                        <li class="my-dropdown" data-toggle="tooltip" data-placement="top" title="{{ $langg->lang3 }}">
                            <a href="javascript:;" class="cart carticon">
                                <div class="icon">
                                    <i class="icofont-cart"></i>
                                    <span class="cart-quantity"
                                          id="cart-count">{{ Session::has('cart') ? count(Session::get('cart')->items) : '0' }}</span>
                                </div>

                            </a>
                            <div class="my-dropdown-menu" id="cart-items">
                                @include('load.cart')
                            </div>
                        </li>
                        <li class="wishlist" data-toggle="tooltip" data-placement="top" title="{{ $langg->lang9 }}">
                            @if(Auth::guard('web')->check())
                                <a href="{{ route('user-wishlists') }}" class="wish">
                                    <i class="far fa-heart"></i>
                                    <span id="wishlist-count">{{ count(Auth::user()->wishlists) }}</span>
                                </a>
                            @else
                                <a href="javascript:;" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"
                                   class="wish">
                                    <i class="far fa-heart"></i>
                                    <span id="wishlist-count">0</span>
                                </a>
                            @endif
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
<!-- Logo Header Area End -->