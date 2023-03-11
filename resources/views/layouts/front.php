<!-- temp -->
<div class="categories_menu_inner series">
    @foreach($product->where('product', $product->product)->select('series')->distinct()->get() as $series)
    <div class="categories_menu">
        <div class="categories_title" data-type="group"
                        data-series="{{$series->series}}"
                        data-url="{{route('front.groups')}}" data-model="{{$model->model}}" 
                        data-section="{{$section->section_name}}" data-status="0" data-token="{{ csrf_token() }}">
            <h2 class="categori_toggle"> {{$series->series}} <i
                        class="fa fa-angle-down arrow-down"></i></h2>
        </div>
        <div class="categories_menu_inner models" style="max-height: 300px; overflow-y: auto; background-color: #e1e1e1">
            @foreach($product->where('series', $series->series)->select('model')->distinct()->get() as $model)
            <div class="categories_menu">
                <div class="categories_title" style="background-color: #e1e1e1">
                    <h2 class="categori_toggle"> {{$model->model}} <i
                                class="fa fa-angle-down arrow-down"></i></h2>
                </div>
                <div class="categories_menu_inner sections">
                    @foreach($product->where('model', $model->model)->select('section_name')->distinct()->get() as $section)
                    <div class="categories_menu">
                        <div class="categories_title" 
                        data-type="group"
                        data-series="{{$series->series}}"
                        data-url="{{route('front.groups')}}" data-model="{{$model->model}}" 
                        data-section="{{$section->section_name}}" data-status="0" data-token="{{ csrf_token() }}">
                            <h2 class="categori_toggle" > {{$section->section_name}} <i
                                        class="fa fa-angle-down arrow-down"></i></h2>
                        </div>
                        <div class="categories_menu_inner groups">
                            <ul class="category-groups">
                                loading...
                            </ul>
                        </div>
                    </div>
                    @endforeach
                </div>
            </div>
            @endforeach
        </div>
    </div>
    @endforeach
</div>

<!-- temp -->
<div class="categories_menu">
    <div class="categories_title">
        <h2 class="categori_toggle"> Parts Finder </h2>
    </div>
    <div class="categories_menu_inner products">
        @foreach($eccategories as $product)
        <div class="categories_menu ">
            <div class="categories_title">
                <h2 class="categori_toggle"> {{$product->product}} <i
                            class="fa fa-angle-down arrow-down"></i></h2>
            </div>
            <div class="categories_menu_inner series">
                @foreach($product->where('product', $product->product)->select('series')->distinct()->get() as $series)
                <div class="categories_menu">
                    <div class="categories_title" data-type="model"
                                    data-series="{{$series->series}}"
                                    data-url="{{route('front.groups')}}" 
                                    data-status="0" data-token="{{ csrf_token() }}">
                        <h2 class="categori_toggle"> {{$series->series}} <i
                                    class="fa fa-angle-down arrow-down"></i></h2>
                    </div>
                    <div class="categories_menu_inner models" style="max-height: 300px; overflow-y: auto; background-color: #e1e1e1">
                        loading...
                    </div>
                </div>
                @endforeach
            </div>
        </div>
        @endforeach
    </div>
</div>