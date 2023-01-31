@extends('layouts.vendor')

@section('content')
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">
                        {{ __("Buy Now") }}
                        <a class="add-btn" href="{{ route('vendor-campaign-index') }}">
                            <i class="fas fa-arrow-left"></i> {{ __("Back") }}
                        </a>
                    </h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ $langg->lang441 }} </a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-campaign-index') }}">Purchase Campaign</a>
                        </li>
                        <li>
                            <a href="javascript:;">Buy Now</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product-area">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mr-table allproduct">

                        @include('includes.vendor.form-error')
                        <form id="geniusform" action="{{route('vendor-campaign-buy')}}" method="POST" enctype="multipart/form-data">
                            {{csrf_field()}}

                            <input type="hidden" id="option_id" name="option_id" value="{{ $data->id }}">
                            <input type="hidden" id="pricce" name="price" value="{{ $data->price }}">

                            <div class="row">
                                <div class="col-lg-12">
                                    <h4 class="heading">{{ __('Message') }}* </h4>
                                    <input type="text" class="input-field" placeholder="{{ __('Enter Message') }}" name="message" required="">
                                </div>
                            </div>

                            <div class="row" style="margin-top: 20px;">
                                <div class="col-lg-12">
                                    <h4 class="heading">{{ __('Link') }}* </h4> 
                                </div>
                                <div class="col-lg-2">
                                    <div class="checkbox-wrapper">
                                        <input type="radio" name="link" class="checkclick" id="store_link" value="1" checked>
                                        <label for="store_link">{{ __('Store') }}* </label>
                                    </div>
                                </div>
                                <div class="col-lg-2">
                                    <div class="checkbox-wrapper">
                                        <input type="radio" name="link" class="checkclick" id="product_link" value="2">
                                        <label for="product_link">{{ __('Product') }}* </label>
                                    </div>
                                </div>
                            </div>

                            <div class="row" style="margin-top: 20px; display:none;" id="link_section">
                                <div class="col-lg-3">
                                    <select id="product_id" name="product_id">
                                        <option>Product</option>
                                        
                                        @foreach($product as $key=>$value)
                                            @php
                                                $category_name = DB::table('categories')->where('id', $key)->first()->name;
                                            @endphp
                                            <optgroup label="{{ $category_name}}">
                                                @foreach($value as $k)
                                                    <option value="{{ $k->id }}">{{ $k->name }}</option>
                                                @endforeach
                                            </optgroup>
                                        @endforeach
                                    </select>
                                </div>
                            </div>
                            
                            <hr>

                            <h4>Payment Info</h4>
                            <div class="payment-info">
                            
                            </div>

                            <div class="row">
                                <div class="col-lg-3 col-md-3">
                                    <div class="left-area">

                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-xs-12">
                                    <br>
                                    <button class="addProductSubmit-btn btn btn-success form-control" type="submit">Pay</button>
                                </div>
                                <div class="col-lg-3 col-md-3">
                                    <div class="left-area">

                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')

<script type="text/javascript">
    //Load Stripe Payment Form
    $('.payment-info').load("{{ route('front.load.payment',['slug1' => 'stripe','slug2' => 0]) }}");

    $("#store_link").on('click', function(){
        $("#link_section").hide();
    });

    $("#product_link").on('click', function(){
        $("#link_section").show();
    });
</script>
@endsection   