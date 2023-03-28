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
                            <a href="{{ route('front.schematics') }}">
                               Category
                            </a>
                        </li>
                        @php
                            $index = 1 ;
                            $route = route("front.schematics") ;
                        @endphp
                        @foreach($slug_list as $key =>$item)
                            @php
                            
                                $path = $item ;
                                if(strstr($path, "/")) {
                                    $path = str_replace("/", ":::", $path) ;
                                }
                                $route = $route."/".$path
                            @endphp
                            <li>
                                @if(count($slug_list) == $index) 
                                    <a>
                                        {{$item}}
                                    </a>
                                @else
                                    <a href = "{{$route}}">
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
            <div class="row m-block-content">
            
            @if(count($slug_list) == 5)
                <h2>
                    {{$result[0]->group_name}}
                </h2>
                <div class="group-schematics">
                    <img src="{{asset('assets/images/group/'.$result[0]->image)}}"/>
                </div>
            @else
                @foreach($result as $item)
                <div class="col col-md-3 col-sm-4">
                    @php 
                        $path = $item->name ;
                        if(strstr($path, "/")) {
                            $path = str_replace("/", ":::", $path) ;
                        }
                    @endphp
                    <a href="{{$route.'/'.$path}}">
                        <div class="m-block" >
                            {{$item->name}}
                        </div>
                    </a>
                </div> 
                @endforeach    
            @endif
            </div>
        </div>
    </section>
    <!-- faq Area End-->

    @section('scripts')

    @endsection

@endsection