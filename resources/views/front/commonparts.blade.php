@extends('layouts.front')
@section('content')
    <?php 
        $name = "" ;
        $group_id = "" ;
    
    ?>
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
                            <a href="{{route('front.common')}}">
                                Categories
                            </a>
                        </li>
      
                        <?php 
                        
                            if(count($cate_list) > 0) {
                                $req = "?page=commonparts" ;
                                foreach($cate_list as $key => $item) {
                                    if($item['name']) {
                                        
                                        $req.="&{$key}=".$item['name'] ;

                                        ?>
                                        <li>
                                            <a href="{{route('front.groups').$req.'&type='.$item['type']}}">
                                                {{$item['name']}}
                                            </a>
                                        </li>
                                        <?php
                                    }
                                }
                            }
                        ?>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    

    
    <input type="hidden" id="isSchematics" value="0">
    <section class="faq-section">
        <div class="container">
            <div class="row m-block-content">
            @if($type == "category")
                @foreach($eccategories as $key => $item)
                        <div class="col col-md-3 col-sm-4">
                            <div class="m-block" 
                                data-type="category"
                                data-category="{{$item->name}}"
                                data-url="{{route('front.groups')}}"
                                data-category-name="{{$item->name}}"
                                data-page="commonparts"
                                data-status="0" data-token="{{ csrf_token() }}">
                                {{$item->name}}
                            </div>
                        </div>
                @endforeach
            @else 
                @foreach($page_categories as $item)
                        <?php 
                            
                            if($type == "model") {
                                $item->series = $item->name ;
                                $item->model="" ;
                                $name = $item->name ;
                                $item->section_name = "" ;
                                $item->group_name = "" ;
                                $series = $item->name ;

                                $series = $item->name ;
                                

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
                                data-page="commonparts"
                                data-category="{{$cate_list['category']['name']}}"
                                data-status="0" data-token="{{ csrf_token() }}">
                                {{$name}}
                            </div>
                        </div>
                @endforeach
                @if(count($page_categories) == 0)
                    <h3 align='center'>No Data</h3>
                @endif
            @endif  
                
            </div>
        </div>
    </section>
    <!-- faq Area End-->

@endsection