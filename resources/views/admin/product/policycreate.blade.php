@extends('layouts.admin')
@section('styles')

<link href="{{asset('assets/admin/css/product.css')}}" rel="stylesheet" />
<link href="{{asset('assets/admin/css/jquery.Jcrop.css')}}" rel="stylesheet" />
<link href="{{asset('assets/admin/css/Jcrop-style.css')}}" rel="stylesheet" />

@endsection
@section('content')

<div class="content-area">
    <div class="mr-breadcrumb">
        <div class="row">
            <div class="col-lg-12">
                <h4 class="heading">
                    <a class="add-btn" href="{{ route('admin-prod-policy') }}"><i class="fas fa-arrow-left"></i> {{ __('Back') }}</a>
                </h4>
                <ul class="links">
                    <li>
                        <a href="{{ route('admin.dashboard') }}">{{ __('Dashboard') }} </a>
                    </li>
                    <li>
                        <a href="javascript:;">{{ __('Products') }} </a>
                    </li>
                    <li>
                        <a href="{{ route('admin-prod-policy') }}">{{ __('All Product Policies') }}</a>
                    </li>
                    <li>
                        <a href="{{ route('admin-prod-policy-create') }}">{{ __('Add Product Policy') }}</a>
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
                        <form id="geniusform" action="{{route('admin-prod-policy-store')}}" method="POST">
                            {{csrf_field()}}

                            @include('includes.admin.form-both')

                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="left-area">
                                        <h4 class="heading">{{ __('Policy Name') }}* </h4>
                                        <p class="sub-heading">{{ __('(In Any Language)') }}</p>
                                    </div>
                                </div>

                                <div class="col-lg-7 prod-name">
                                    <input type="text" class="input-field" placeholder="{{ __('Enter Policy Name') }}" name="name" required="">
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="left-area">
                                        <h4 class="heading">
                                            {{ __('Policy Description') }}*
                                        </h4>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <div class="text-editor">
                                        <textarea class="form-control" name="description" id="description" rows="10"></textarea>
                                    </div>
                                </div>
                            </div>

                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="left-area">

                                    </div>
                                </div>
                                <div class="col-lg-7 text-center">
                                    <button class="addProductSubmit-btn" type="submit">{{ __('Create Product Policy')}}</button>
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

@section('scripts')

@endsection
