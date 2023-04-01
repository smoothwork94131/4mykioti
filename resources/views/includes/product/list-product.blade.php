@if($flag == 'prod')
<li>
    <div class="single-box">
        <div class="left-area">
            <img src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
        </div>
        <div class="right-area">
            <div class="stars">
                <div class="ratings">
                    <div class="empty-stars"></div>
                    <div class="full-stars" style="width:{{App\Models\Rating::ratings($prod->id)}}%"></div>
                </div>
            </div>
            
            {{-- <h4 class="price">{{ $prod->showPrice() }}
            <del>{{ $prod->showPreviousPrice() }}</del>
            </h4> --}}

            @php
                $new_slug_list = array(
                    'category' => $slug_list['category'],
                    'series'=>$slug_list['series'],
                    'model'=>$slug_list['model'], 
                    'section'=>$slug_list['model'],
                    'group'=>$prod->category_id, 
                    'prod_name'=>$prod->name
                );
            @endphp
            <p class="text">
                <a href="{{ route('front.product', $new_slug_list) }}">
                    {{ mb_strlen($prod->name,'utf-8') > 35 ? mb_substr($prod->name,0,35,'utf-8').'...' : $prod->name }}
                </a>
            </p>
        </div>
    </div>
</li>
@else
<li>
    <div class="single-box">
        <div class="left-area">
            <img src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/noimage.png') }}" alt="">
        </div>
        <div class="right-area">
            <div class="stars">
                <div class="ratings">
                    <div class="empty-stars"></div>
                    <div class="full-stars" style="width:{{App\Models\Rating::ratings($prod->id)}}%"></div>
                </div>
            </div>
            
            <h4 class="price">{{ $prod->showPrice() }}
            <del>{{ $prod->showPreviousPrice() }}</del>
            </h4>
            <p class="text">
                <a href="{{ route('front.homeproduct', $prod->slug) }}">
                    {{ mb_strlen($prod->name,'utf-8') > 35 ? mb_substr($prod->name,0,35,'utf-8').'...' : $prod->name }}
                </a>
            </p>
        </div>
    </div>
</li>
@endif