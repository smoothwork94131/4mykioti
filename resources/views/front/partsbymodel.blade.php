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
                                Categories
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->
    
    <section class="faq-section">
        <div class="container">
            <div class="row m-block-content">
                    @foreach($eccategories as $key => $item)
                            <div class="col col-md-3 col-sm-4">
                                <div class="m-block" data-type="category"
                                                data-series="{{$item->id}}"
                                                data-url="{{route('front.groups')}}"
                                                data-category-name="{{$item->name}}"
                                                data-status="0" data-token="{{ csrf_token() }}">
                                                {{$item->name}}
                                </div>
                            </div>
                    @endforeach
            </div>
        </div>
    </section>
    <!-- faq Area End-->

@endsection