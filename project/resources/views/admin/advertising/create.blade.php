@extends('layouts.load')

@section('content')

    <div class="content-area">

        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                            @include('includes.admin.form-error')
                            <form id="geniusformdata" action="{{route('admin-advertising-create')}}" method="POST"
                                  enctype="multipart/form-data">
                                {{csrf_field()}}

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Category") }}*</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <select name="category_id" id="category" required="">
                                            <option value="">{{ __("Select Category") }}</option>
                                            @foreach($cats as $cat)
                                                <option value="{{ $cat->id }}">{{ $cat->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Name") }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="input-field" name="name" id = "name"
                                               placeholder="{{ __("Enter Advertising Name") }}" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Price") }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="number" min="0" step="0.01" class="input-field" name="price"
                                               placeholder="{{ __("Enter Plan Cost") }}" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("View count") }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="number" min="0" step="1" class="input-field" name="view_count"
                                               placeholder="{{ __("Enter View Count") }}" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Product count") }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="number" min="0" step="1" class="input-field" name="product_count"
                                               placeholder="{{ __("Enter Product Count") }}" required="" value="">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Type") }}*</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <select id="type" name="type" required="">
                                            <option value="">{{ __("Select an Option") }}</option>
                                            <option value="0">{{ __("First 4") }}</option>
                                            <option value="1">{{ __("Next 4") }}</option>
                                        </select>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('scripts')
    <script type="text/javascript">
        $("#category").change(function(){
            var category = $("#category option:selected").text();
            $("#name").val(category + " Ad Plan");
        });
    </script>
@endsection

