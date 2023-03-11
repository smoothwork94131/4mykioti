@extends('layouts.load')

@section('content')
    <div class="content-area">

        <div class="add-product-content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="product-description">
                        <div class="body-area">
                            @include('includes.admin.form-error')
                            <form id="geniusformdata" action="{{route('admin-advertising-update',$data->id)}}"
                                  method="POST" enctype="multipart/form-data">
                                {{csrf_field()}}
                                @if($data->id != 1)
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
                                                <option value="{{ $cat->id }}" @if($data->category_id == $cat->id)) selected @endif>{{ $cat->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                @endif

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">
                                            <h4 class="heading">{{ __("Name") }} *</h4>
                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <input type="text" class="input-field" name="name" id = "name"
                                               placeholder="{{ __("Enter Advertising Name") }}" required="" value="{{$data->name}}">
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
                                               placeholder="{{ __("Enter Plan Cost") }}" required="" value="{{$data->price}}">
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
                                               placeholder="{{ __("Enter View Count") }}" required="" value="{{$data->view_count}}">
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
                                               placeholder="{{ __("Enter Product Count") }}" required="" value="{{$data->product_count}}">
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-lg-4">
                                        <div class="left-area">

                                        </div>
                                    </div>
                                    <div class="col-lg-7">
                                        <button class="addProductSubmit-btn"
                                                type="submit">{{ __("Edit Plan") }}</button>
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

        $("#limit").on('change', function () {
            val = $(this).val();
            if (val == 1) {
                $("#limits").show();
                $("#allowed_products").prop("required", true);
            } else {
                $("#limits").hide();
                $("#allowed_products").prop("required", false);

            }
        });

    </script>

@endsection
