@extends('layouts.vendor')

@section('content')
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __('Create Return Policy') }}
                        <a class="add-btn" href="{{ route('vendor-return-policy') }}">
                            <i class="fas fa-arrow-left"></i> {{ $langg->lang550 }}
                        </a>
                    </h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ $langg->lang441 }}</a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-location-create') }}">{{ __('Vendor Return Policy') }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">

                            <div class="gocover" style="background: url({{asset('assets/images/'.$gs->admin_loader)}}) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>

                            <form id="geniusform" action="{{route('vendor-return-policy-store')}}" method="POST" enctype="multipart/form-data">
                                {{csrf_field()}}

                                @if($policy_count == 0)
                                    <div class="row mb-2">
                                        <div class="col-lg-12">
                                            <div class="alert alert-warning">
                                                Before you begin selling items, you will need to setup at least one return policy. We can setup one now. Check any boxes to reuse any of the information you have already provided.
                                            </div>
                                        </div>
                                    </div>
                                @endif

                                @include('includes.vendor.form-both')
                                @include('includes.vendor.form-success')

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Location") }}*</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <select id="location_id" name="location_id" required="">
                                            <option value="">{{ __("Location") }}</option>
                                            @foreach($locations as $location)
                                                <option value="{{ $location->id }}">{{$location->location_name}}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">
                                                {{ __("Return Policy Text") }}*
                                            </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="text-editor">
                                            <textarea class="form-control" name="policy_text"></textarea>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Active') }}* </h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="checkbox-wrapper">
                                            <input type="checkbox" name="active" class="" id="active" value="1">
                                            <label for="active">{{ __('if you click, this policy will be active') }}</label>
                                        </div>
                                    </div>
                                </div>

                                @if($policy_count == 0)
                                <div class="row">
                                    <div class="col-lg-2">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-8 d-flex align-items-center justify-content-around">
                                        <input type="hidden" name="step_flow" value="1">
                                        <a href="{{ route('vendor-location-create') }}" class="addProductSubmit-btn d-flex align-items-center justify-content-center">Back to Location</a>
                                        <button class="addProductSubmit-btn" type="submit">Next</button>
                                        <a href="{{ route('vendor-subcategory-index') }}" class="addProductSubmit-btn d-flex align-items-center justify-content-center">New Sub Category</a>
                                        <a href="{{ route('vendor-childcat-index') }}" class="addProductSubmit-btn d-flex align-items-center justify-content-center">New Child Category</a>
                                    </div>
                                    <div class="col-lg-2"></div>
                                </div>
                                @else
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <button class="addProductSubmit-btn" type="submit">{{ __('Create Policy') }}</button>
                                    </div>
                                </div>
                                @endif
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section("scripts")

@endsection