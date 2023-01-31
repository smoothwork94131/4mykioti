@extends('layouts.front')

@section('styles')
<style>
    .switch-section {
        margin: 20px 0;
    }

    .custom-control-label::before {
        position: absolute;
        top: .25rem;
        left: -1.5rem;
        display: block!important;
        width: 1rem;
        height: 1rem!important;
        pointer-events: none;
        content: ""!important;
        background-color: #fff;
        border: #adb5bd solid 1px;
    }

    .custom-control-input {
        position: absolute;
        left: 0;
        z-index: -1;
        width: 1rem!important;
        height: 1.25rem!important;
        opacity: 0;
    }

    .custom-control {
        position: relative;
        z-index: 1!important;
        display: block;
        min-height: 1.5rem;
    }

    .dropdown-toggle:after {
        display:none;
    }

    #list_view {
        background-color: #fff;
        padding: 10px;
    }

    .dropdown-item {
        cursor: pointer;
    }
</style>
@endsection
@section('content')
    <!-- Breadcrumb Area Start -->
    <div class="breadcrumb-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <ul class="pages">
                        <li>
                            <a href="{{route('front.index')}}">{{ $langg->lang17 }}</a>
                        </li>
                        @if (!empty($cat))
                            <li>
                                <a href="{{route('front.category', $cat->slug)}}">{{ $cat->name }}</a>
                            </li>
                        @endif
                        @if (!empty($subcat))
                            <li>
                                <a href="{{route('front.category', [$cat->slug, $subcat->slug])}}">{{ $subcat->name }}</a>
                            </li>
                        @endif
                        @if (!empty($childcat))
                            <li>
                                <a href="{{route('front.category', [$cat->slug, $subcat->slug, $childcat->slug])}}">{{ $childcat->name }}</a>
                            </li>
                        @endif
                        @if (empty($childcat) && empty($subcat) && empty($cat))
                            <li>
                                <a href="{{route('front.category')}}">{{ $langg->lang36 }}</a>
                            </li>
                        @endif

                    </ul>
                </div>
            </div>
        </div>
    </div>
    <!-- Breadcrumb Area End -->


    <!-- SubCategori Area Start -->
    <section class="sub-categori">
        <div class="container">
            <div class="row">
                @include('includes.catalog')
                <div class="col-lg-9 order-first order-lg-last ajax-loader-parent">
                    <div class="section-top">
                        <h2 class="section-title">
                            <img src="{{asset('assets/images/logo60px.png')}}" width="50" height="50"> 
                            <span class="sub">Category</span> 
                            <span class="main">{{empty($cat) ? "All Categories" : $cat->name }}</span> 
                            <span class="title-underline"></span>
                        </h2>
                        @include('includes.filter')
                    </div>
                    <div class="switch-section">
                        <div class="form-input d-flex align-items-center"   >
                            <div class="custom-control custom-switch">
                                <input type="checkbox" class="custom-control-input" id="view_switch">
                                <label class="custom-control-label" for="view_switch">List View</label>
                            </div>
                        </div>
                    </div>
                    <div class="right-area" id="app">
                        <div class="categori-item-area">
                            <div id="default_view">
                                <div class="row" id="ajaxContent">
                                    @include('includes.product.filtered-products')
                                </div>
                                <div id="ajaxLoader" class="ajax-loader" style="background: url({{asset('assets/images/'.$gs->loader)}}) no-repeat scroll center center rgba(0,0,0,.6);"></div>
                            </div>
                            <div id="list_view" style="display:none;">
                                @include('includes.product.table-products')
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- SubCategori Area End -->
@endsection


@section('scripts')
    <script>
        $(document).ready(function () {
            $("#view_switch").on('change', function() {
                if($(this).prop("checked") == true) {
                    $("#default_view").hide();
                    $("#list_view").show();
                }
                else {
                    $("#list_view").hide();
                    $("#default_view").show();
                }
            });

            $('#product_table').DataTable({
                "paging": true,
                "ordering": false,
                "info": true,
                "lengthMenu": [[50, 100, 150, 200, -1], [50, 100, 150, 200, "All"]]
            });

            // when dynamic attribute changes
            $(".attribute-input, #sortby").on('change', function () {
                $("#ajaxLoader").show();
                filter();
            });

            // when price changed & clicked in search button
            $(".filter-btn").on('click', function (e) {
                e.preventDefault();
                $("#ajaxLoader").show();
                filter();
            });
        });

        function filter() {
            let filterlink = '';

            if ($("#prod_name").val() != '') {
                if (filterlink == '') {
                    filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?search=' + $("#prod_name").val();
                } else {
                    filterlink += '&search=' + $("#prod_name").val();
                }
            }

            $(".attribute-input").each(function () {
                if ($(this).is(':checked')) {
                    if (filterlink == '') {
                        filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $(this).attr('name') + '=' + $(this).val();
                    } else {
                        filterlink += '&' + $(this).attr('name') + '=' + $(this).val();
                    }
                }
            });

            if ($("#sortby").val() != '') {
                if (filterlink == '') {
                    filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#sortby").attr('name') + '=' + $("#sortby").val();
                } else {
                    filterlink += '&' + $("#sortby").attr('name') + '=' + $("#sortby").val();
                }
            }

            if ($("#min_price").val() != '') {
                if (filterlink == '') {
                    filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#min_price").attr('name') + '=' + $("#min_price").val();
                } else {
                    filterlink += '&' + $("#min_price").attr('name') + '=' + $("#min_price").val();
                }
            }

            if ($("#max_price").val() != '') {
                if (filterlink == '') {
                    filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#max_price").attr('name') + '=' + $("#max_price").val();
                } else {
                    filterlink += '&' + $("#max_price").attr('name') + '=' + $("#max_price").val();
                }
            }

            // console.log(filterlink);
            console.log(encodeURI(filterlink));
            $("#ajaxContent").load(encodeURI(filterlink), function (data) {
                // add query string to pagination
                addToPagination();
                $("#ajaxLoader").fadeOut(1000);
            });
        }

        // append parameters to pagination links
        function addToPagination() {
            // add to attributes in pagination links
            $('ul.pagination li a').each(function () {
                let url = $(this).attr('href');
                let queryString = '?' + url.split('?')[1]; // "?page=1234...."

                let urlParams = new URLSearchParams(queryString);
                let page = urlParams.get('page'); // value of 'page' parameter

                let fullUrl = '{{route('front.category', [Request::route('category'),Request::route('subcategory'),Request::route('childcategory')])}}?page=' + page + '&search=' + '{{request()->input('search')}}';

                $(".attribute-input").each(function () {
                    if ($(this).is(':checked')) {
                        fullUrl += '&' + encodeURI($(this).attr('name')) + '=' + encodeURI($(this).val());
                    }
                });

                if ($("#sortby").val() != '') {
                    fullUrl += '&sort=' + encodeURI($("#sortby").val());
                }

                if ($("#min_price").val() != '') {
                    fullUrl += '&min=' + encodeURI($("#min_price").val());
                }

                if ($("#max_price").val() != '') {
                    fullUrl += '&max=' + encodeURI($("#max_price").val());
                }

                $(this).attr('href', fullUrl);
            });
        }

        $(document).on('click', '.categori-item-area .pagination li a', function (event) {
            event.preventDefault();
            if ($(this).attr('href') != '#' && $(this).attr('href')) {
                $('#preloader').show();
                $('#ajaxContent').load($(this).attr('href'), function (response, status, xhr) {
                    if (status == "success") {
                        $('#preloader').fadeOut();
                        $("html,body").animate({
                            scrollTop: 0
                        }, 1);

                        addToPagination();
                    }
                });
            }
        });

    </script>

    <script type="text/javascript">

        $(function () {

            $("#slider-range").slider({
                range: true,
                orientation: "horizontal",
                min: 0,
                max: 10000000,
                values: [{{ isset($_GET['min']) ? $_GET['min'] : '0' }}, {{ isset($_GET['max']) ? $_GET['max'] : '10000000' }}],
                step: 5,

                slide: function (event, ui) {
                    if (ui.values[0] == ui.values[1]) {
                        return false;
                    }

                    $("#min_price").val(ui.values[0]);
                    $("#max_price").val(ui.values[1]);
                }
            });

            $("#min_price").val($("#slider-range").slider("values", 0));
            $("#max_price").val($("#slider-range").slider("values", 1));

        });

    </script>



@endsection