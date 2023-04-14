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
                            <li>
                                <a>
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
  
    <section class="faq-section">
        <div class="container">
            <div class="row m-block-content">
                @if(count($result) == 0) 
                    <h3 algin='center'>No data</h3>
                @else
                    @foreach($result as $item)
                    <div class="col col-md-3 col-sm-4 part-block-container">
                        @php 
                            $route = route("front.old_collection", ["series" => "mahindra-" . $item->subcategory_id, "parts" => $item->name]) ;
                        @endphp
                        <a href="{{$route}}">
                            <div class="m-block" >
                                <img src="{{ $item->thumbnail ? asset('assets/images/thumbnails/'.$item->thumbnail):asset('assets/images/noimage.png') }}" alt="">
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
                    <div class="pagination-container">
                        {{ $result->links() }}
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- faq Area End-->

    @section('scripts')

    @endsection

@endsection