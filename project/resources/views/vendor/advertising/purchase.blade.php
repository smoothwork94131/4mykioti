@extends('layouts.vendor')

@section('content')
    <input type="hidden" id="headerdata" value="PRODUCT">
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ $data->name }}</h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ $langg->lang441 }} </a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-advertising-index') }}">Advertising Plans</a>
                        </li>
                        <li>
                            <a href="javascript:;">{{ $data->name }}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="product-area">
            <div class="row">
                <div class="col-lg-12">
                    <div class="mr-table allproduct">

                        @include('includes.vendor.form-error')
                        <form id="geniusform" action="{{route('vendor-advertising-store')}}" method="POST"
                                  enctype="multipart/form-data">
                                {{csrf_field()}}
                        <h4>Select a Product</h4>
                        <div class="table-responsiv">
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0"
                                   width="100%">
                                <thead>
                                <tr>
                                    <th>Selection</th>
                                    <th>{{ $langg->lang608 }}</th>
                                    <th>{{ $langg->lang609 }}</th>
                                    <th>{{ $langg->lang610 }}</th>
                                </tr>
                                </thead>
                            </table>
                        </div>
                        <hr>

                       

                        <input type="hidden" name="adplan_id" value="{{ $data->id }}">
                        
                        <h4>Payment Info</h4>
                        <div class="payment-info">
                           
                        </div>
                        <div class="row">
                            <div class="col-lg-3 col-md-3">
                                <div class="left-area">

                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-xs-12">
                                <br>
                                <button class="addProductSubmit-btn btn btn-success form-control" type="submit">Pay ${{$data->price}}</button>
                            </div>
                            <div class="col-lg-3 col-md-3">
                                <div class="left-area">

                                </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>



    {{-- GALLERY MODAL --}}

    <div class="modal fade" id="setgallery" tabindex="-1" role="dialog" aria-labelledby="setgallery" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalCenterTitle">{{ $langg->lang619 }}</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">                        
                    <div class="gallery-images">
                        <div class="selected-image">
                            <div class="row">


                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    {{-- GALLERY MODAL ENDS --}}

@endsection

@section('scripts')


    {{-- DATA TABLE --}}

    <script type="text/javascript">

        var table = $('#geniustable').DataTable({
            ordering: false,
            processing: true,
            serverSide: true,
            iDisplayLength: 5,
            ajax: '{{ route('vendor-advertising-product-datatables', $data->id) }}',
            columns: [
                {data: 'selection', searchable: false, orderable: false},
                {data: 'name', name: 'name'},
                {data: 'type', name: 'type'},
                {data: 'price', name: 'price'},
            ],
            language: {
                processing: '<img src="{{asset('assets/images/'.$gs->admin_loader)}}">'
            },
            drawCallback: function (settings) {
                $('.select').niceSelect();
            }
        });


 
    $('#button').click( function () {
        table.row('.selected').remove().draw( false );
    } );



        {{-- DATA TABLE ENDS--}}

    </script>

    <script type="text/javascript">

        // Gallery Section Update

        $(document).on("click", ".set-gallery", function () {
            var pid = $(this).find('input[type=hidden]').val();
            $('#pid').val(pid);
            $('.selected-image .row').html('');
            $.ajax({
                type: "GET",
                url: "{{ route('vendor-gallery-show') }}",
                data: {id: pid},
                success: function (data) {
                    if (data[0] == 0) {
                        $('.selected-image .row').addClass('justify-content-center');
                        $('.selected-image .row').html('<h3>{{ $langg->lang624 }}</h3>');
                    } else {
                        $('.selected-image .row').removeClass('justify-content-center');
                        $('.selected-image .row h3').remove();
                        var arr = $.map(data[1], function (el) {
                            return el
                        });

                        for (var k in arr) {
                            $('.selected-image .row').append('<div class="col-sm-6">' +
                                '<div class="img gallery-img">' +
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



        // Gallery Section Update Ends

        //Load Stripe Payment Form
        $('.payment-info').load("{{ route('front.load.payment',['slug1' => 'stripe','slug2' => 0]) }}");


    </script>

@endsection   