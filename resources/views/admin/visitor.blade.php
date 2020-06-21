@extends('admin.app')

@section('content')
<div class="container">
    <div class="row">
        <div class="col-md-12 p-5">
            <table class="table table-striped table-sm" id="visitorTable" cellspacing="0" width="100%">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">IP Address</th>
                    <th scope="col">Visit Time</th>
                </tr>
                </thead>
                <tbody>
                @foreach($visitorData as $visitorData)
                    <tr>
                        <td>{{ $visitorData->id }}</th>
                        <td>{{ $visitorData->ip_address }}</td>
                        <td>{{ $visitorData->visit_time }}</td>
                    </tr>
                @endforeach
                </tbody>
            </table>
        </div>
    </div>
</div>

@endsection
