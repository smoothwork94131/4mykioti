@foreach($prods as $prod)
    <div class="docname">   
        <a href="{{ route('front.homeproduct', ['category' => $category, 'series'=>$series, 'model'=>$model, 'section'=>$prod->section_name, 'group'=>$prod->group_id, 'prod_name'=> $prod->name]) }}">
            <img src="{{ $prod->thumbnail ? asset('assets/images/thumbnails_home/'.$prod->thumbnail):asset('assets/images/products_home/'.$gs->prod_image) }}" alt="">
            <div class="search-content">
                <p>{!! mb_strlen($prod->name,'utf-8') > 66 ? str_replace($model,'<b>'.$model.'</b>',mb_substr($prod->name,0,66,'utf-8')).'...' : str_replace($model,'<b>'.$model.'</b>',$prod->name)  !!} - {{$prod->model}}</p>
                <span style="font-size: 14px; font-weight:600; display:block;">{{ $current_currency->sign }}{{ $prod->price }}</span>
            </div>
        </a>
    </div>
@endforeach