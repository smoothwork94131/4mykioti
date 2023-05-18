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
                                                <button class="go-dropdown-toggle" onclick="updateInventory('{{ $data->sku }}')">
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

        function updateInventory(sku) {
            var quantity = $("#stock_box_" + sku).val();
            $.ajax({
                type: "post",
                url: "{{ route('admin-prod-inventory-update') }}",
                data: {
                    _token: '{{ csrf_token() }}',
                    sku: sku,
                    quantity: quantity
                },
                success: function (result) {
                    if(result.flag = true) {
                        toastr.success("Updated quantity successfully");
                    }
                    else {
                        toastr.warning("Something went wrong during update of quantity");
                    }
                }
            });
        }

    </script>
@endsection   