<div class="row">
    @foreach($strains as $strain)
        <div class="col-md-6 col-sm-12 mb-2">
            <div class="row">
                <div class="col-md-6">
                    <div class="xzoom-container">
                        <img class="xzoom5" src="{{ $strain->main_thumb()? asset($strain->main_thumb()->path):asset('assets/images/noimage.png') }}"/>
                        <div class="xzoom-thumbs">
                            <div class="all-slider">
                                @forelse($strain->galleries as $gal)
                                    <a href="javascript:void(0)" data-href="{{asset($gal->path)}}" class="img-link-item">
                                        <img class="xzoom-gallery5" width="80" src="{{asset($gal->path)}}">
                                    </a>
                                @empty
                                    <a href="javascript:void(0)" data-href="{{asset('assets/images/noimage.png')}}" class="img-link-item">
                                        <img class="xzoom-gallery5" width="80" src="{{asset('assets/images/noimage.png')}}">
                                    </a>
                                @endforelse
                            </div>
                        </div>
                        
                    </div>
                    <div class="action-area">
                        @if(!Auth::guard('web')->check())
                            <a class="read-more-btn" href="{{ route('user.login') }}">Edit Strain Info</a>
                        @else
                            <a class="read-more-btn" href="{{route('front.strainshow',$strain->id)}}">Edit Strain Info</a>
                        @endif
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="right-area">
                        <div class="product-info">
                            <h4 class="product-name">{{ $strain->name }}</h4>
                            <p>{{ $strain->effect }}</p>
                            <p>{{ $strain->description }}</p>
                            <p>{{ $strain->parent }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    @endforeach
</div>
<div class="page-center">
    {!! $strains->links() !!}
</div>
<script>
    var $product_slider = $('.all-slider');
    $product_slider.owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        margin: 0,
        autoplay: false,
        items: 4,
        autoplayTimeout: 6000,
        smartSpeed: 1000,
        responsive: {
            0: {
                items: 4
            },
            768: {
                items: 4
            }
        }
    });
</script>