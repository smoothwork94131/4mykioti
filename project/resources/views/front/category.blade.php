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
                <div class="col-12">
                    <div class="section-top" style="display: block">
                        <p><span>{{$group->group_Id}}</span></p>
                        <h2 class="section-title">
                            {{$group->group_name }}
                            <span class="title-underline"></span>
                        </h2>
                    </div>
                </div>
                <div class="col-lg-8">
                    <img src="{{asset('assets/images/group/'.$group->group_Id.'.png')}}">
                </div>
                <div class="col-lg-4">
                <div class="mr-table allproduct mt-4">
    <div class="table-new">
        <table id="product_table" class="table table-hover" cellspacing="0" width="100%">
            <thead>
            <tr>
                <th></th>
                <th>RefNo</th>
                <th>Name</th>
                <th>Photo</th>
                <th>Type</th>
                <th>Price</th>
                <th style="text-align:center;">Action</th>
            </tr>
            </thead>
            <tbody>
            @foreach($prods as $key=>$prod)
                <tr>
                    <th><input type="number" value="0" min="0" style="width: 50px"></th>
                    <td>
                        {{ $key }}
                    </td>
                    <td>
                        {{ $prod->name }}
                    </td>
                    <td>
                        <img style="width:30px; height: 30px;" src="{{ $prod->thumbnail ? asset('assets/images/thumbnails/'.$prod->thumbnail):asset('assets/images/products/'.$gs->prod_image) }}" alt="">
                    </td>
                    <td>
                        {{ $prod->product_type }}
                    </td>
                    <td>
                        ${{ $prod->price }}
                    </td>
                    <td style="text-align:center;">
                        <div class="dropdown">
                            <a class="btn-floating btn-lg black dropdown-toggle"type="button" id="dropdownMenu3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i class="fas fa-ellipsis-v"></i>
                            </a>
                            <div class="dropdown-menu dropdown-primary">
                                @if(Auth::guard('web')->check())
                                    <span class="dropdown-item add-to-wish" data-href="{{ route('user-wishlist-add',$prod->id) }}"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                @else
                                    <span class="dropdown-item" data-toggle="modal" id="wish-btn" data-target="#comment-log-reg"><i class="icofont-heart-alt"></i>&nbsp;&nbsp;Add to Wish</span>
                                @endif
                                <span class="dropdown-item quick-view" data-href="{{ route('product.quick',$prod->id) }}" data-toggle="modal" data-target="#quickview"><i class="icofont-eye"></i>&nbsp;&nbsp;Quick View</span>
                                <span class="dropdown-item add-to-compare" data-href="{{ route('product.compare.add',$prod->id) }}"><i class="icofont-exchange"></i>&nbsp;&nbsp;Compare</span>
                                @if($prod->product_type == "affiliate")
                                    <span class="dropdown-item add-to-cart-btn affilate-btn" data-href="{{ route('affiliate.product', $prod->slug) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                @else
                                <span class="dropdown-item add-to-cart add-to-cart-btn" data-href="{{ route('product.cart.add',$prod->id) }}"><i class="icofont-cart"></i>&nbsp;&nbsp;{{ $langg->lang56 }}</span>
                                        <span class="dropdown-item add-to-cart-quick" style="width: 100%;" data-href="{{ route('product.cart.quickadd',$prod->id) }}"><i class="icofont-dollar"></i>&nbsp;&nbsp;{{ $langg->lang251 }}</span>
                                @endif
                            </div>
                        </div>
                    </td>
                </tr>
            @endforeach
            </tbody>
        </table>
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
                "ordering": true,
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

            // $(".attribute-input").each(function () {
            //     if ($(this).is(':checked')) {
            //         if (filterlink == '') {
            //             filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $(this).attr('name') + '=' + $(this).val();
            //         } else {
            //             filterlink += '&' + $(this).attr('name') + '=' + $(this).val();
            //         }
            //     }
            // });

            if ($("#sortby").val() != '') {
                if (filterlink == '') {
                    filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#sortby").attr('name') + '=' + $("#sortby").val();
                } else {
                    filterlink += '&' + $("#sortby").attr('name') + '=' + $("#sortby").val();
                }
            }

            // if ($("#min_price").val() != '') {
            //     if (filterlink == '') {
            //         filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#min_price").attr('name') + '=' + $("#min_price").val();
            //     } else {
            //         filterlink += '&' + $("#min_price").attr('name') + '=' + $("#min_price").val();
            //     }
            // }

            // if ($("#max_price").val() != '') {
            //     if (filterlink == '') {
            //         filterlink += '{{route('front.category', [Request::route('category'), Request::route('subcategory'), Request::route('childcategory')])}}' + '?' + $("#max_price").attr('name') + '=' + $("#max_price").val();
            //     } else {
            //         filterlink += '&' + $("#max_price").attr('name') + '=' + $("#max_price").val();
            //     }
            // }

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

                // if ($("#min_price").val() != '') {
                //     fullUrl += '&min=' + encodeURI($("#min_price").val());
                // }

                // if ($("#max_price").val() != '') {
                //     fullUrl += '&max=' + encodeURI($("#max_price").val());
                // }

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