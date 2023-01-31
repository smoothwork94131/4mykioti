@extends('layouts.vendor')

@section('content')
    <input type="hidden" id="headerdata" value="{{ __("STRAIN") }}">
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __("Purchase Campaign") }}</h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ __("Dashboard") }} </a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-campaign-index') }}">{{ __("Purchase Campaign") }}</a>
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
                                        <th>{{ __("NUMBERS OF TEXT") }}</th>
                                        <th>{{ __("PRICE") }}</th>
                                        <th>{{ __("ACTION") }}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script type="text/javascript">
        var table = $('#geniustable').DataTable({
            ordering: false,
            processing: true,
            serverSide: true,
            ajax: '{{ route('vendor-campaign-datatables') }}',
            columns: [
                {data: 'number_texts', name: 'number_texts'},
                {data: 'price', name: 'price'},
                {data: 'action', searchable: false, orderable: false}
            ],
            language: {
                processing: '<img src="{{asset('assets/images/'.$gs->admin_loader)}}">'
            },
            drawCallback: function (settings) {
                $('.select').niceSelect();
            }
        });
    </script>

@endsection   