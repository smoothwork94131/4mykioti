@extends('layouts.vendor')

@section('styles')
<style>
    .bg {
        background-image: linear-gradient(to right, #047edf, #0bb9fa);
        padding: 40px 40px 30px 40px;
    }

    .landing-header {
        text-align: center;
    }

    .title {
        color: #fff;
    }

    .number {
        color: #fff;
        font-size: 36px;
    }
</style>
@endsection

@section('content')
    <div class="content-area">
        @if($user->checkWarning())
            <div class="alert alert-danger validation text-center">
                <h3>
                    {{ $user->displayWarning() }} 
                </h3> 
                <a href="{{ route('vendor-warning',$user->verifies()->where('admin_warning','=','1')->orderBy('id','desc')->first()->id) }}"> 
                    {{$langg->lang803}} 
                </a>
            </div>
        @endif


        @include('includes.form-success')
        <div class="row">
            <div class="col-md-12">
                <div class="bg">
                    <div class="landing-header">
                        <h2 class="title">Your Vendor Account is Ready.</h2>
                    </div>
                    <div class="d-flex align-items-center justify-content-center mt-3">
                        <span class="number" id="count_number">5</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5" id="link_container" style="display: none;">
            <div class="col-md-8"></div>
            <div class="col-md-4">
                <div class="d-flex align-items-center justify-content-around">
                    <a href="{{ route('vendor-location-create') }}" class="btn btn-primary">Go to Location</a>
                    <a href="{{ route('vendor-subcategory-index') }}" class="btn btn-primary">New Sub Category</a>
                    <a href="{{ route('vendor-childcat-index') }}" class="btn btn-primary">New Child Category</a>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
<script>
    var timer;
    var inital = $("#count_number").text();
    inital = parseInt(inital);

    var timer = setInterval(startTimer, 1000);
    
    function startTimer() {
        if(inital == -1) {  
            clearInterval(timer);
            $("#count_number").text('Please location link to add new location for vendor product');
            $("#link_container").show();
            return;
        }

        $("#count_number").text(inital);
        inital--;
    }

    
</script>
@endsection
