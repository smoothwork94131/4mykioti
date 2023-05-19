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

                        @include('includes.admin.form-success-session')
                        @include('includes.admin.form-error-session')

                        <div class="action-area">
                            <form id="search-form" class="search-form" name="search-form" method="GET" action="{{ route('admin-prod-inventory') }}">
                                {{csrf_field()}}
                                <div class="search-area">
                                    <input type="text" class="form-control" id="inventory_search" name="inventory_search" placeholder="Enter Search Text .." value="{{ $search_text }}">
                                    <button type="submit" class="add-btn">
                                        <i class="fas fa-search"></i>
                                        Search
                                    </button>
                                </div>
                            </form>
                            <form id="update-form" class="update-form" name="update-form" method="POST" action="{{ route('admin-prod-inventory-update') }}">
                                {{csrf_field()}}
                                <input type="hidden" id="update_data" name="update_data" value="">
                                <button type="button" onclick="updateInventory()" class="add-btn">
                                    <i class="fas fa-save"></i>
                                    Save
                                </button>
                            </form>
                        </div>

                        <hr>

                        <div class="table-responsiv">
                            <table id="geniustable" class="table table-hover dt-responsive" cellspacing="0" width="100%">
                                <thead>
                                    <tr>
                                        <th>{{ __("SKU") }}</th>
                                        <th>{{ __("Name") }}</th>
                                        <th>{{ __("Stock") }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($datas as $key=>$data)
                                    <tr>
                                        <td>
                                            {{ $data->sku }}
                                            <input type="hidden" id="box_sku_{{$data->sku}}"  value="{{ $data->sku }}" />
                                        </td>
                                        <td>{{ $data->name }}</td>
                                        <td>
                                            <input type="number" id="box_quantity_{{$data->sku}}" class="form-control" value="{{ $data->stock }}" />
                                        </td>
                                    </tr>    
                                    @empty
                                        <td colspan="3">No Record</td>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <div class="page-center">
                            {{ $datas->links('admin.pagination', ['paginator' => $datas, 'maxLinks' => 10]) }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    <script type="text/javascript">

        function updateInventory() {
            var total_sku_obj = $("[id ^= 'box_sku_']");
            var total_quantity_obj = $("[id ^= 'box_quantity_']");

            var total_data = new Array();

            for(let i=0; i<total_sku_obj.length; i++) {
                let temp_obj = {
                    sku: $(total_sku_obj[i]).val(),
                    quantity: $(total_quantity_obj[i]).val()
                }

                total_data.push(temp_obj)
            }

            total_data = JSON.stringify(total_data);
            $("#update_data").val(total_data);

            $("#update-form").submit();
        }

    </script>
@endsection   