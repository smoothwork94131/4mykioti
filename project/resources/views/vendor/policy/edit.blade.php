@extends('layouts.vendor')

@section('content')
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __('Edit Return Policy') }}
                        <a class="add-btn" href="{{ route('vendor-return-policy') }}">
                            <i class="fas fa-arrow-left"></i> {{ $langg->lang550 }}
                        </a>
                    </h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ $langg->lang441 }}</a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-return-policy-edit', $policy->id) }}">{{ __('Edit Vendor Return Policy') }}</a>
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

                            <div class="gocover"
                                 style="background: url({{asset('assets/images/'.$gs->admin_loader)}}) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>

                            <form id="geniusform" action="{{route('vendor-return-policy-update', $policy->id)}}"
                                  method="POST" enctype="multipart/form-data">
                                {{csrf_field()}}

                                @include('includes.vendor.form-both')

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
                                                @if($location->id == $policy->location_id)
                                                    <option value="{{ $location->id }}"
                                                            selected>{{$location->location_name}}</option>
                                                @else
                                                    <option value="{{ $location->id }}">{{$location->location_name}}</option>
                                                @endif
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
                                            <textarea class="form-control"
                                                      name="policy_text">{{ $policy->policy_text }}</textarea>
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
                                            <input type="checkbox" name="active" class="" id="active"
                                                   value="1" {{ $policy->active? 'checked': ''}}>
                                            <label for="active">{{ __('if you click, this policy will be active') }}</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-7 text-center">
                                        <button class="addProductSubmit-btn"
                                                type="submit">{{ __("Update  Policy") }}</button>
                                    </div>
                                </div>
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