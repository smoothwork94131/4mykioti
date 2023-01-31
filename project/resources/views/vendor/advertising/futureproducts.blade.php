@extends('layouts.vendor')

@section('content')
    <input type="hidden" id="headerdata" value="{{ __("ADVERTISING") }}">
    <div class="content-area">
        <div class="mr-breadcrumb">
            <div class="row">
                <div class="col-lg-12">
                    <h4 class="heading">Future Advertising Products</h4>
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
                                    <th>{{ __("Product") }}</th>
                                    <th>Plan</th>
                                    <th>{{ __("Views") }}</th>
                                    <th>{{ __("Price ($)") }}</th>
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
            ajax: '{{ route('vendor-ad-future-product-datatables')}}',
            columns: [
                {data: 'product', name: 'product'},
                {data: 'plans', name: 'plans'},
                {data: 'viewed_count', name: 'viewed_count'},
                {data: 'price', name: 'price'},
            ],
            language: {
                processing: '<img src="{{asset('assets/images/spinner.gif')}}">'
            }
        });

        {{-- DATA TABLE ENDS--}}

    </script>

@endsection   