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

    <input type="hidden" id="isSchematics" value="1">

    <section class="faq-section">
        <div class="container">
            <div class="row m-block-content">
            @if($type == "category")
                @foreach($eccategories as $key => $item)
                        <div class="col col-md-3 col-sm-4">
                            <div class="m-block" 
                                data-type="category"
                                data-series="{{$item->id}}"
                                data-url="{{route('front.groups')}}"
                                data-category-name="{{$item->name}}"
                                data-page="schematics"
                                data-status="0" data-token="{{ csrf_token() }}">
                                {{$item->name}}
                            </div>
                        </div>
                @endforeach
            @else
                @foreach($page_categories as $item)
                        <?php 
                            $name = "" ;
                            $group_id = "" ;
                            if($type == "model") {
                                $item->series = $item->name ;
                                $item->model="" ;
                                $name = $item->name ;
                                $item->section_name = "" ;
                                $item->group_name = "" ;
                            } else if($type == "section") {
                                $item->series = $series;
                                $name = $item->model ;
                                $item->group_name = "" ;
                                $item->section_name = "" ;
                            } else if($type == "group") {
                                $name = $item->section_name ;
                                $item->model = $model ;
                                $item->series = $series ;
                                $item->group_name = "" ;
                                
                            } else if($type == "detail") {
                                $name = $item->group_name ;
                                $item->model = $model ;
                                $item->series = $series ;
                                $item->group_name = $name ;
                                $item->section_name = "" ;
                                $group_id = $item->group_Id ;
                            }
                        ?>
                        
                        <div class="col col-md-3 col-sm-4">
                            <div class="m-block" 
                                data-type="{{$type}}"
                                data-series="{{$item->series}}"
                                data-url="{{route('front.groups')}}"
                                data-model="{{$item->model}}"
                                data-section="{{$item->section_name}}"
                                data-groupname="{{$item->group_name}}"
                                data-group="{{$group_id}}"
                                data-page="schematics"
                                data-status="0" data-token="{{ csrf_token() }}">
                                {{$name}}
                            </div>
                        </div>
                @endforeach
            @endif
            @if(count($page_categories) == 0)
                <h3 align='center'>No Data</h3>
            @endif
                
            </div>
        </div>
    </section>
    <!-- faq Area End-->

@endsection