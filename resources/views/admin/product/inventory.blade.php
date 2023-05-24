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
                                    <select id="manufacturer" name="manufacturer" class="form-control">
                                        <option value="Kioti" {{ $manufacturer=='Kioti'?'selected':'' }}>KIOTI</option>
                                        <option value="Mahindra" {{ $manufacturer=='Mahindra'?'selected':'' }}>MAHINDRA</option>
                                        <option value="Roxor" {{ $manufacturer=='Roxor'?'selected':'' }}>ROXOR</option>
                                    </select>
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
                                        <th>{{ __("PART NUMBER") }}</th>
                                        <th>{{ __("DESCRIPTION") }}</th>
                                        <th>{{ __("BIN") }}</th>
                                        <th>{{ __("LINE NUMBER") }}</th>
                                        <th>{{ __("VENDOR NUMBER") }}</th>
                                        <th>{{ __("STOCK") }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @forelse ($inventories as $key=>$inventory)
                                    <tr>
                                        <td>
                                            {{ $inventory->part_number }}
                                            <input type="hidden" id="box_sku_{{$inventory->part_number}}"  value="{{ $inventory->part_number }}" />
                                        </td>
                                        <td>{{ $inventory->description }}</td>
                                        <td>
                                            <input type="text" id="box_bin_{{$inventory->part_number}}" class="form-control" value="{{ $inventory->bin }}" placeholder="Please Enter Bin." />
                                        </td>
                                        <td>{{ $inventory->line_number }}</td>
                                        <td>{{ $inventory->vendor_number }}</td>
                                        <td>
                                            <input type="number" id="box_quantity_{{$inventory->part_number}}" class="form-control" value="" placeholder="Please Enter Quantity." min="0" />
                                        </td>
                                    </tr>    
                                    @empty
                                        <td colspan="3">No Record</td>
                                    @endforelse
                                </tbody>
                            </table>
                        </div>

                        <div class="page-center">
                            {{ $inventories->links('admin.pagination', ['paginator' => $inventories, 'maxLinks' => 10]) }}
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
            var total_bin_obj = $("[id ^= 'box_bin_']");

            var total_data = new Array();

            for(let i=0; i<total_sku_obj.length; i++) {
                let temp_obj = {
                    sku: $(total_sku_obj[i]).val(),
                    quantity: $(total_quantity_obj[i]).val(),
                    bin: $(total_bin_obj[i]).val() 
                }

                total_data.push(temp_obj)
            }

            total_data = JSON.stringify(total_data);
            $("#update_data").val(total_data);
            $("#update-form").submit();
        }

    </script>
@endsection   