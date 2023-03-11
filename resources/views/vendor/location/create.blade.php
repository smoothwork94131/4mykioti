@extends('layouts.vendor')

@section('content')

    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __('Create Store Location') }} <a class="add-btn"
                                                                             href="{{ route('vendor-location-index') }}"><i
                                    class="fas fa-arrow-left"></i> {{ $langg->lang550 }}</a></h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ $langg->lang441 }}</a>
                        </li>
                        <li>
                            <a href="javascript:;">{{ __('Locations') }} </a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-location-index') }}">{{ __('All Locations') }}</a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-location-create') }}">{{ __('Create Location') }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                            <br>
                            @if($location_count == 0)
                            <div class="row mb-2">
                                <div class="col-lg-12">
                                    <div class="alert alert-warning">
                                        Before you begin selling items, you will need to setup at least one location. We can setup one now. Check any boxes to reuse any of the information you have already provided.
                                    </div>
                                </div>
                            </div>
                            @endif
                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="left-area">
                                        <h4 class="heading">{{ __('Enter Your Address') }}</h4>
                                    </div>
                                </div>
                                <div class="col-lg-7">
                                    <input id="autocomplete" placeholder="Enter your address" class="input-field" type="text" />
                                </div>
                            </div>
                            <br>
                            <div class="gocover" style="background: url({{asset('assets/images/'.$gs->admin_loader)}}) no-repeat scroll center center rgba(45, 45, 45, 0.5);"></div>

                            @include('includes.vendor.form-error')
                            <form id="geniusform" action="{{route('vendor-location-create')}}" method="POST" enctype="multipart/form-data">
                                {{csrf_field()}}
                                @include('includes.vendor.form-both')

                                <input type="hidden" name="lat" id="lat">
                                <input type="hidden" name="lng" id="lng">
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Street Address') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <div class="row">
                                            <div class="col-lg-3">
                                                <input class="input-field" id="street_number" placeholder="Street Number" name="street_number" required=""/>
                                            </div>
                                            <div class="col-lg-9">
                                                <input class="input-field" id="route" placeholder="Address" name="street_address" required=""/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('City') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" id="locality" placeholder="City" name="city" required="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('State') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" id="administrative_area_level_1" placeholder="State" name="state" required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Zip Code') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" id="postal_code" placeholder="Zip Code" name="zip" required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Country') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" id="country" placeholder="Country" name="country" required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Location Name') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" placeholder="Location Name" name="location_name" required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Contact Name') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" placeholder="Contact Name" name="contact_name"
                                            required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Contact Number') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" placeholder="Contact Number" name="contact_number"
                                            required=""/>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __('Contact Email') }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <input class="input-field" placeholder="Contact Email" name="contact_email"
                                            required=""/>
                                    </div>
                                </div>
                                <br>
                                @if($location_count == 0)
                                <div class="row">
                                    <div class="col-lg-2">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-8 d-flex align-items-center justify-content-around">
                                        <input type="hidden" name="step_flow" value="1">
                                        <button class="addProductSubmit-btn" type="submit">Next</button>
                                        <a href="{{ route('vendor-subcategory-index') }}" class="addProductSubmit-btn d-flex align-items-center justify-content-center">New Sub Category</a>
                                        <a href="{{ route('vendor-childcat-index') }}" class="addProductSubmit-btn d-flex align-items-center justify-content-center">New Child Category</a>
                                    </div>
                                    <div class="col-lg-2"></div>
                                </div>
                                @else
                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <button class="addProductSubmit-btn" type="submit">{{ __('Create') }}</button>
                                    </div>
                                </div>
                                @endif
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section("scripts")
    <script src="https://polyfill.io/v3/polyfill.min.js?features=default"></script>
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC1jKOFLhfQoZD3xJISSPnSW9-4SyYPpjY&callback=initAutocomplete&libraries=places&v=weekly" defer></script>
    <script>
        // This sample uses the Autocomplete widget to help the user select a
        // place, then it retrieves the address components associated with that
        // place, and then it populates the form fields with those details.
        // This sample requires the Places library. Include the libraries=places
        // parameter when you first load the API. For example:
        // <script
        // src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">
        let placeSearch;
        let autocomplete;
        const componentForm = {
            street_number: "short_name",
            route: "long_name",
            locality: "long_name",
            administrative_area_level_1: "short_name",
            country: "long_name",
            postal_code: "short_name",
        };

        function initAutocomplete() {
            // Create the autocomplete object, restricting the search predictions to
            // geographical location types.
            autocomplete = new google.maps.places.Autocomplete(
                document.getElementById("autocomplete"),
                {types: ["geocode"]}
            );
            // Avoid paying for data that you don't need by restricting the set of
            // place fields that are returned to just the address components.
            autocomplete.setFields(["address_component", "geometry"]);
            // When the user selects an address from the drop-down, populate the
            // address fields in the form.
            autocomplete.addListener("place_changed", fillInAddress);
        }

        function fillInAddress() {
            // Get the place details from the autocomplete object.
            const place = autocomplete.getPlace();

            var location = JSON.parse(JSON.stringify(place.geometry.location));
            $("#lat").val(location.lat);
            $("#lng").val(location.lng);

            for (const component in componentForm) {
                document.getElementById(component).value = "";
                // document.getElementById(component).disabled = false;
            }

            // Get each component of the address from the place details,
            // and then fill-in the corresponding field on the form.
            for (const component of place.address_components) {
                const addressType = component.types[0];

                if (componentForm[addressType]) {
                    const val = component[componentForm[addressType]];
                    document.getElementById(addressType).value = val;
                }
            }
        }

        // Bias the autocomplete object to the user's geographical location,
        // as supplied by the browser's 'navigator.geolocation' object.

    </script>
@endsection