@extends('layouts.front')

@section('content')
    <section class="user-dashbord">
        <div class="container">
            <div class="row">
                @include('includes.user-dashboard-sidebar')
                <div class="col-lg-8">
                    <!-- @include('includes.form-success') -->
                    <div class="user-profile-details my-tractor-content">
                        <div class="order-history" >
                            <div class="header-area d-flex align-items-center">
                                <h4 class="title">{{ $langg->lang230 }}</h4>
                            </div>
                            <div class='add-btn'>
                                <button class='btn btn-primary' 
                                    class='button' 
                                    data-toggle="modal"
                                    data-target="#add_my_tractor_modal"
                                >New</button>
                            </div>
                            
                            <div class='row'>
                                <div class='col-md-8 col-sm-12'>
                                    <form id='edit_tractor_form' style='margin: 0;'>
                                        <div class="form-group">
                                            <label for="value" class='name'>series</label>
                                            <select class="form-control value series" onchange = 'changeEditSeries(event)'>
                                            @foreach($series as $item)
                                                <?php 
                                                $selected = '';
                                                if($sel_part->series == strtolower($item->series))
                                                {
                                                    $selected = 'selected="selected"';
                                                }
                                                ?>
                                                <option {{$selected}}>{{$item->series}}</option>
                                            @endforeach
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label for="value" class='name'>model</label>
                                            <select class="form-control value model">
                                            @foreach($model as $key => $item)
                                                <?php
                                                $selected = '';
                                                if($sel_part->model == $key)
                                                {
                                                    $selected = 'selected="selected"';
                                                }
                                                ?>
                                                <option {{$selected}}>{{$key}}</option>
                                            @endforeach
                                            </select>
                                        </div>
                                    </form>
                                    <div align='right' style='padding: 15px;'>
                                        <button class='btn btn-success' onclick="addTractor('edit')"><i class='fa fa-edit'></i>Edit</button>
                                        <button class='btn btn-danger' onclick='removeItem()'><i class='fa fa-trash'></i>Remove</button>
                                    </div>
                                </div>
                                <div class='col-md-4 col-sm-12 my-tractor-list'>
                                    @if (count($cate_tractor) == 0) 
                                        <div align='center'>No data</div>
                                    @else  
                                        @foreach($cate_tractor as $key => $item) 
                                            <div class="list-item <?php if($sel_part->id == $item->id)  echo 'sel-list' ;?>">
                                                <a href="{{route('user-my-tractor')}}?part_id={{$item->id}}">
                                                 {{strtoupper($item->series)}},
                                                 {{$item->model}}
                                                </a>
                                            </div>
                                        @endforeach
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="modal fade" id="add_my_tractor_modal"  role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">

                    <div class="modal-header d-block text-center">
                        <h4 class="modal-title d-inline-block">Add New Tracktor</h4>
                    </div>
                    <div class="modal-body">
                        <form id='new_tractor_form'>
                            <div class="form-group">
                                <label for="value" class='name'>series</label>
                                <select class="form-control value series" onchange = 'changeNewSeries(event)'>
                                @foreach($series as $item)
                                    <option>{{$item->series}}</option>
                                @endforeach
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="value" class='name'>model</label>
                                <select class="form-control value model model">
                                @foreach($model as $key => $item)
                                    <option>{{$key}}</option>
                                @endforeach
                                </select>
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer justify-content-end">
                        <button class='btn btn-success' onclick="addTractor('new')">Add</button>
                        <button class='btn btn-danger' data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
@endsection
@section('scripts')

    <script type="text/javascript">
        
        function getTractorInitData() {
            
        }
        function addTractor(type) {
            var series =  $("#"+type+"_tractor_form .series").val() ;
            var model =  $("#"+type+"_tractor_form .model").val() ;
            
            $.ajax({
                url: "{{route('user-add-my-tractor')}}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data:{
                    series: series,
                    model: model,
                    type:type,
                    sel_part_id: "{{$sel_part->id}}"
                },
                type:'post',
                dataType:'json',
                success:function(result) {
                    alert(result.msg) ;
                    window.location.href = "{{route('user-my-tractor')}}" ;
                },error:function() {
                    alert("Error") ;
                }
            }) ;

        }

        function changeEditSeries(event) {
            var value = event.target.value ;
            getModel(value, "edit") ;   
        }

        function changeNewSeries(event) {
            var value = event.target.value ;
            getModel(value, "new") ;  
        }

        function getModel(series, type) {
            $.ajax({
                url: "{{route('user-get-my-tractor-model')}}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data:{
                    series: series
                },
                type:'post',
                success:function(result) {
                    var html = "" ;
                    for(key in result) {
                        html+="<option>"+key+"</option>" ;
                    }

                    $("#"+type+"_tractor_form .model").html(html) ;
                },error:function() {
                    alert("Error") ;
                }
            }) ;
        }
        function removeItem() {
            $.ajax({
                url: "{{route('user-remove-my-tractor')}}",
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                },
                data:{
                    sel_part_id: "{{$sel_part->id}}"
                },
                type:'post',
                success:function(result) {
                    alert(result.msg) ;
                    window.location.href = "{{route('user-my-tractor')}}" ;
                },error:function() {
                    alert("Error") ;
                }
            }) ;
        }
    </script>

@endsection