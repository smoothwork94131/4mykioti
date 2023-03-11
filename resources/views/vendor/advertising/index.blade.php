@extends('layouts.vendor')

@section('content')
    <input type="hidden" id="headerdata" value="{{ __("ADVERTISING") }}">
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">{{ __("Advertising Plans") }}</h4>
                    <ul class="links">
                        <li>
                            <a href="{{ route('vendor-dashboard') }}">{{ __("Dashboard") }} </a>
                        </li>
                        <li>
                            <a href="{{ route('vendor-advertising-index') }}">{{ __("Advertising Plans") }}</a>
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
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0"
                                   width="100%">
                                <thead>
                                <tr>
                                    <th>{{ __("Name") }}</th>
                                    <th>{{ __("Price ($)") }}</th>
                                    <th>{{ __("View Count") }}</th>
                                    <th>{{ __("Product Count") }}</th>
                                    <th>{{ __("Purchase") }}</th>
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


    {{-- DATA TABLE --}}

    <script type="text/javascript">

        var table = $('#geniustable').DataTable({
            ordering: false,
            processing: true,
            serverSide: true,
            ajax: '{{ route('vendor-advertising-datatables') }}',
            columns: [
                {data: 'name', name: 'name'},
                {data: 'price', name: 'price'},
                {data: 'view_count', name: 'view_count'},
                {data: 'product_count', name: 'product_count'},
                {data: 'action', searchable: false, orderable: false}
            ],
            language: {
                processing: '<img src="{{asset('assets/images/spinner.gif')}}">'
            }
        });

        {{-- DATA TABLE ENDS--}}

    </script>

@endsection   