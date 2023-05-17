@extends('layouts.admin')

@section('content')
    
    <input type="hidden" id="headerdata" value="{{ __("PRODUCT") }}">
    
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __("Products") }}</h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('admin.dashboard') }}">{{ __("Dashboard") }} </a>
                        </li>
                        <li>
                            <a href="javascript:;">{{ __("Products") }} </a>
                        </li>
                        <li>
                            <a href="{{ route('admin-prod-index') }}">{{ __("Inventory") }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product-area">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mr-table allproduct">

                        @include('includes.admin.form-success')

                        <div class="table-responsiv">
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>{{ __("SKU") }}</th>
                                        <th>{{ __("Name") }}</th>
                                        <th>{{ __("Stock") }}</th>
                                        <th>{{ __("Options") }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($datas as $key=>$data)
                                    <tr>
                                        <td>{{ $data->sku }}</td>
                                        <td>{{ $data->name }}</td>
                                        <td>
                                            <input id="stock_box_{{$data->sku}}" type="number", class="form-control" value="{{ $data->stock }}" />
                                        </td>
                                        <td>
                                            <div class="godropdown">
                                                <button class="go-dropdown-toggle">
                                                    <i class="fas fa-edit"></i> Update
                                                </button>
                                            </div>
                                        </td>
                                    </tr>    
                                    @empty
                                        <td colspan="4">No Record</td>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    {{-- DATA TABLE --}}

    <script type="text/javascript">
        var table = $('#geniustable').DataTable({
            paging: true,
            ordering: false,
            info: false,
            searching: false,
            language: {
                processing: '<img src="{{asset('assets/images/'.$gs->admin_loader)}}">'
            },
            drawCallback: function (settings) {
                $('.select').niceSelect();
            },
            lengthMenu: [[20, 100, 150, 200, -1], [20, 100, 150, 200, "All"]],
        });
    </script>


    <script type="text/javascript">

        // Gallery Section Update

        $(document).on("click", ".set-gallery", function () {
            var pid = $(this).find('input[type=hidden]').val();
            $('#pid').val(pid);
            $('.selected-image .row').html('');
            $.ajax({
                type: "GET",
                url: "{{ route('admin-gallery-show') }}",
                data: {id: pid},
                success: function (data) {
                    if (data[0] == 0) {
                        $('.selected-image .row').addClass('justify-content-center');
                        $('.selected-image .row').html('<h3>{{ __("No Images Found.") }}</h3>');
                    } else {
                        $('.selected-image .row').removeClass('justify-content-center');
                        $('.selected-image .row h3').remove();
                        var arr = $.map(data[1], function (el) {
                            return el
                        });

                        for (var k in arr) {
                            $('.selected-image .row').append('<div class="col-sm-6">' +
                                '<div class="img gallery-img">' +
                                '<span class="remove-img"><i class="fas fa-times"></i>' +
                                '<input type="hidden" value="' + arr[k]['id'] + '">' +
                                '</span>' +
                                '<a href="' + '{{asset('assets/images/galleries').'/'}}' + arr[k]['photo'] + '" target="_blank">' +
                                '<img src="' + '{{asset('assets/images/galleries').'/'}}' + arr[k]['photo'] + '" alt="gallery image">' +
                                '</a>' +
                                '</div>' +
                                '</div>');
                        }
                    }

                }
            });
        });


        $(document).on('click', '.remove-img', function () {
            var id = $(this).find('input[type=hidden]').val();
            $(this).parent().parent().remove();
            $.ajax({
                type: "GET",
                url: "{{ route('admin-gallery-delete') }}",
                data: {id: id}
            });
        });

        $(document).on('click', '#prod_gallery', function () {
            $('#uploadgallery').click();
        });


        $("#uploadgallery").change(function () {
            $("#form-gallery").submit();
        });

        $(document).on('submit', '#form-gallery', function () {
            $.ajax({
                url: "{{ route('admin-gallery-store') }}",
                method: "POST",
                data: new FormData(this),
                dataType: 'JSON',
                contentType: false,
                cache: false,
                processData: false,
                success: function (data) {
                    if (data != 0) {
                        $('.selected-image .row').removeClass('justify-content-center');
                        $('.selected-image .row h3').remove();
                        var arr = $.map(data, function (el) {
                            return el
                        });
                        for (var k in arr) {
                            $('.selected-image .row').append('<div class="col-sm-6">' +
                                '<div class="img gallery-img">' +
                                '<span class="remove-img"><i class="fas fa-times"></i>' +
                                '<input type="hidden" value="' + arr[k]['id'] + '">' +
                                '</span>' +
                                '<a href="' + '{{asset('assets/images/galleries').'/'}}' + arr[k]['photo'] + '" target="_blank">' +
                                '<img src="' + '{{asset('assets/images/galleries').'/'}}' + arr[k]['photo'] + '" alt="gallery image">' +
                                '</a>' +
                                '</div>' +
                                '</div>');
                        }
                    }

                }

            });
            return false;
        });


        // Gallery Section Update Ends


    </script>




@endsection   