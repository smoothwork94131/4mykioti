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
                        @php
                            $index = 0;
                            $route = route("front.partsbyfilter");
                        @endphp
                        @foreach($slug_list as $key =>$item)
                            @php
                                $path = $item;
                                $route = $route."/".$path;
                            @endphp
                            <li>
                                @if(count($slug_list) == $index) 
                                    <a>
                                        {{$item}}
                                    </a>
                                @else
                                    <a href="{{$route}}">
                                        {{$item}}
                                    </a>
                                @endif
                            </li>
                            @php
                                $index++ ;
                            @endphp
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->
    <section class="faq-section">
        <div class="container">
            @if(count($results) == 0) 
                <h3 algin='center' class="page-title">No data</h3>
            @else
                @if(count($slug_list) > 1)
                    <h3 class="page-title">{{ strtoupper($domain_name) }} {{ $category?? '' }} {{ $filter }} Filters</h3>
                    <div class="row m-block-content">
                        @foreach($results as $item)
                        <div class="col col-md-3 col-sm-4">
                            <div class="m-block" >
                                Series: {{ $item["series"]->name }}, Model: {{ $item["model"]->model }}
                            </div>
                        </div> 
                        @endforeach
                    </div>
                @else
                    <h3 class="page-title">{{ strtoupper($domain_name) }} {{ $filter }} Filters</h3>
                    <div class="row m-block-content">
                        @foreach($results as $item)
                        <div class="col col-md-3 col-sm-4">
                            @php 
                                $path = $item->name ;
                                if(strstr($path, "/")) {
                                    $path = str_replace("/", ":::", $path) ;
                                }

                                if(strstr($path, "#")) {
                                    $path = str_replace("#", "***", $path) ;
                                }
                            @endphp
                            <a href="{{$route.'/'.$path}}">
                                <div class="m-block" >
                                    {{$item->name}} Filter
                                </div>
                            </a>
                        </div> 
                        @endforeach
                    </div>
                @endif
            @endif
        </div>
    </section>

    @section('scripts')
    @endsection
@endsection