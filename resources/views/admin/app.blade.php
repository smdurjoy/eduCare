<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>@yield('title')</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.2/css/all.css">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <link href="{{asset('adminCSS/bootstrap.min.css')}}" rel="stylesheet" type="text/css" >
    <link href="{{asset('adminCSS/mdb.min.css')}}" rel="stylesheet" type="text/css" >
    <link href="{{asset('adminCSS/sidenav.css')}}" rel="stylesheet" type="text/css" >
    <link href="{{asset('adminCSS/datatables.min.css')}}" rel="stylesheet" type="text/css" >
    <link href="{{asset('adminCSS/datatables-select.min.css')}}" rel="stylesheet" type="text/css" >
    <link href="{{asset('adminCSS/style.css')}}" rel="stylesheet" type="text/css" >
</head>

<body class="fix-header fix-sidebar">

    @include('admin.menu')
    @yield('content')

    </div>

    <script type="text/javascript" src="{{asset('adminJS/jquery-3.4.1.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/popper.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/bootstrap.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/mdb.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/jquery.slimscroll.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/sidebarmenu.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/sticky-kit.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/custom.min-2.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/datatables.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/datatables-select.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/axios.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('adminJS/custom.js')}}"></script>

    @yield('script')

</body>
</html>
