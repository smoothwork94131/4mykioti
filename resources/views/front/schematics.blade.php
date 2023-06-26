@extends('layouts.front')

@section('content')
    <!-- Breadcrumb Area Start -->
    <section class="breadcrumb-area">
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
    </section>
    <!-- Breadcrumb Area End -->

    <!-- Section Start -->
    <section class="faq-section">
        <div class="container">
            @if(count($result) == 0) 
                <h3 class="page-title">No data</h3>
            @else               
                @if(count($slug_list) == 5)
                    <h3 class="page-title">{{ strtoupper($domain_name) . " " .$result[0]->group_name . " SCHEMATICS"}}</h3>
                    <div class="row m-block-content">
                        <div class="group-schematics">
                            @if($result[0]->image && file_exists(public_path('assets/images/group/'.$result[0]->image)))
                                <img src="{{asset('assets/images/group/'.$result[0]->image)}}">
                            @else
                                @if(file_exists(public_path('assets/images/group/'.$result[0]->group_Id.'.png')))
                                <img src="{{asset('assets/images/group/'.$result[0]->group_Id.'.png')}}">
                                @elseif(file_exists(public_path('assets/images/group/'.$result[0]->group_Id.'.jpeg')))
                                <img src="{{asset('assets/images/group/'.$result[0]->group_Id.'.jpeg')}}">
                                @else
                                <img src="{{asset('assets/images/noimage.png')}}" style="min-width: 100px;">
                                @endif
                            @endif
                        </div>
                    </div>
                @else
                    <h3 class="page-title">{{ strtoupper($domain_name) }} {{ $category?? '' }} {{ $series?? '' }} {{ $model?? '' }} {{ $section?? '' }} {{ $group?? '' }} Schematics</h3>
                    <div class="row m-block-content">
                        @foreach($result as $item)
                        <div class="col-md-3 col-sm-6">
                            @php 
                                $path = $item->name ;
                                if(strstr($path, "/")) {
                                    $path = str_replace("/", ":::", $path) ;
                                }
                            @endphp
                            <a href="{{$route.'/'.$path}}">
                                <div class="m-block" >
                                    {{$item->name}} Schematic
                                </div>
                            </a>
                        </div> 
                        @endforeach    
                    </div>
                @endif
            @endif
        </div>
    </section>
    <!-- Section End-->
@endsection

@section('scripts')

@endsection