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
                        @foreach($slug_list as $key =>$item)
                            @php
                                $path = $item;
                                $path = Helper::convertPathToData($path);
                                $route = $route . '/' . $item;
                            @endphp
                            <li>
                                <a href="{{$route}}">
                                    {{$item}}
                                </a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->
    <!-- faq Area Start -->
  
    <section class="sub-categori">
        <div class="container">
            <div class="row m-block-content">
                @if(count($result) == 0) 
                    <h3 algin='center'>No data</h3>
                @else
                    @foreach($result as $item)
                    <div class="col col-md-3 col-sm-4 part-block-container">
                        @php
                            $model = str_replace(" ", "-", $item->model);
                            $prod_name = str_replace(" ", "-", $item->name);

                            if($model != "additonal-products") {
                                $model = "mahindra-" . $model;
                            }
                            $route = route("front.old_part", ["model" => $model, "prod_name" => $item->sku. "-" .$prod_name]) ;
                        @endphp
                        <a href="{{$route}}">
                            <div class="m-block" style="padding: 0px; height: auto;">
                                <img style="width: 300px;" src="{{ $item->thumbnail ? asset('assets/images/thumbnails/'.$item->thumbnail):asset('assets/images/noimage.png') }}" alt="">
                            </div>
                            <div class="parts-title">
                                {{$item->name}}
                            </div>
                            <div class="parts-price">
                                ${{$item->price}}
                            </div>
                        </a>
                    </div> 
                    @endforeach
                @endif
            </div>
            <div class="row">
                <div class="col-md-12">
                    <div class="page-center">
                        {{ $result->links('front.pagination.search', ['paginator' => $result, 'maxLinks' => 10]) }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faq Area End-->

    @section('scripts')

    @endsection

@endsection