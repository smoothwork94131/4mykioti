@extends('layouts.front')
@section('content')

    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages parts-by-model-title">
                        <li>
                            <a href="{{ route('front.index') }}">
                                {{ $langg->lang17 }}
                            </a>
                        </li>
                        <li>
                            <a href="javascript:location.reload();">
                                Tractors
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->

    <input type="hidden" id="isSchematics" value="0">

    <section class="faq-section">
        <div class="container">
            
            <div class="row justify-content-center m-block-content">
                    <!-- @foreach($eccategories as $product) -->
                        @foreach($series_data as $series)
                            <div class="col col-md-3 col-sm-4">
                                <div class="m-block" data-type="model"
                                                data-series="{{$series->series}}"
                                                data-url="{{route('front.groups')}}" 
                                                data-model_type="common"
                                                data-status="0" 
                                                data-token="{{ csrf_token() }}">
                                                {{$series->series}}
                                </div>
                            </div>
                        @endforeach
                    <!-- @endforeach -->
            </div>
        </div>
    </section>
    <!-- faq Area End-->

@endsection