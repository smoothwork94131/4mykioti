@extends('layouts.front')
@section('content')
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages">
                        <li>
                            <a href="{{ route('front.index') }}">
                                {{ $langg->lang17 }}
                            </a>
                        </li>
                        <li>
                            <a>
                                Locations
                            </a>
                        </li>
                        <li>
                            <a href="{{ route('front.location', $location_id) }}">
                                {{ $locations->street . " " . $locations->city . " " . $locations->zip_code }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <section class="sub-categori">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12">
                    <div id="map"></div>
                </div>
            </div>
        </div>
    </section>

    {{-- <section class="sub-categori">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-12 col-md-12" style="background-color: #fff;">
                    @if($location_id == "36478")
                    <img src="{{ asset('assets/images/location1.png')}}" style="width:100%; " />
                    @elseif($location_id == "37100")
                    <img src="{{ asset('assets/images/location2.png')}}" style="width:100%; " />
                    @elseif($location_id == "37101")
                    <img src="{{ asset('assets/images/location3.png')}}" style="width:100%; " />
                    @endif
                    <img>
                </div>
            </div>
        </div>
    </section> --}}
@endsection

@section('scripts')
<script type="text/javascript">
    function initMap() {
        var geocoder = new google.maps.Geocoder();

        var address = "{{ $locations->street . " " . $locations->city . " " . $locations->zip_code }}";
        geocoder.geocode({ 'address': address }, function(results, status) {
            if (status == 'OK') {
                var lat = results[0].geometry.location.lat();
                var lng = results[0].geometry.location.lng();
                
                const myLatLng = { lat: lat, lng: lng };
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 5,
                    center: myLatLng,
                });

                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: "Welcome to Tractor Brothers!",
                });

            } else {
                const myLatLng = { lat: 22.2734719, lng: 70.7512559 };
                const map = new google.maps.Map(document.getElementById("map"), {
                    zoom: 5,
                    center: myLatLng,
                });

                new google.maps.Marker({
                    position: myLatLng,
                    map,
                    title: "Welcome to Tractor Brothers!",
                });
            }
        });
    }

    window.initMap = initMap;
</script>
  
<script type="text/javascript" src="https://maps.google.com/maps/api/js?key={{ env('GOOGLE_MAP_KEY') }}&callback=initMap" ></script>
@endsection