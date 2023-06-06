@extends('layouts.front')

@section('styles')

@endsection

@section('content')

    <section class="login-signup">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-6">
                    <nav class="comment-log-reg-tabmenu">
                        <div class="nav nav-tabs" id="nav-tab" role="tablist">
                            <a class="nav-item nav-link login active" id="nav-log-tab" data-toggle="tab" href="#nav-log" role="tab" aria-controls="nav-log" aria-selected="true">
                                {{ $langg->lang197 }}
                            </a>
                        </div>
                    </nav>
                    <div class="tab-content" id="nav-tabContent">
                        <div class="tab-pane fade show active" id="nav-log" role="tabpanel"
                             aria-labelledby="nav-log-tab">
                            <div class="login-area">
                                <div class="header-area">
                                    <h4 class="title">{{ $langg->lang172 }}</h4>
                                </div>
                                <div class="login-form signin-form">
                                    @include('includes.admin.form-login')
                                    <form class="mloginform" action="{{ route('user.login.submit') }}" method="POST">
                                        {{ csrf_field() }}
                                        <div class="form-input">
                                            <input type="email" name="email" placeholder="{{ $langg->lang173 }}" required="">
                                            <i class="icofont-user-alt-5"></i>
                                        </div>
                                        <div class="form-input">
                                            <input type="password" class="Password" name="password" placeholder="{{ $langg->lang174 }}" required="">
                                            <i class="icofont-ui-password"></i>
                                        </div>
                                        <div class="form-forgot-pass">
                                            <div class="left">
                                                <input type="checkbox" name="remember" id="mrp" checked>
                                                <label for="mrp">{{ $langg->lang175 }}</label>
                                            </div>
                                            <div class="right">
                                                <a href="{{ route('user-forgot') }}">
                                                    {{ $langg->lang176 }}
                                                </a>
                                            </div>
                                        </div>
                                        <button type="submit" class="submit-btn">{{ $langg->lang178 }}</button>
                                        @if(App\Models\Socialsetting::find(1)->f_check == 1 || App\Models\Socialsetting::find(1)->g_check ==1)
                                            <div class="social-area">
                                                <h3 class="title">{{ $langg->lang179 }}</h3>
                                                <p class="text">{{ $langg->lang180 }}</p>
                                                <ul class="social-links">
                                                    @if(App\Models\Socialsetting::find(1)->f_check == 1)
                                                        <li>
                                                            <a href="{{ route('social-provider','facebook') }}">
                                                                <i class="fab fa-facebook-f"></i>
                                                            </a>
                                                        </li>
                                                    @endif
                                                    @if(App\Models\Socialsetting::find(1)->g_check == 1)
                                                        <li>
                                                            <a href="{{ route('social-provider','google') }}">
                                                                <i class="fab fa-google-plus-g"></i>
                                                            </a>
                                                        </li>
                                                    @endif
                                                </ul>
                                            </div>
                                        @endif
                                        <div class="form-forgot-pass" style="margin-top: 20px;">
                                            <div class="left">
                                                <p>No account yet? Sign up now!</p>
                                            </div>
                                            <div class="right authlink">
                                                <a href="{{ route('user.register') }}">
                                                    Sigh Up
                                                </a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    </section>

@endsection

@section('scripts')
    
@endsection