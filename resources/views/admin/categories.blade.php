@extends('admin.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5">
                <h1 class="title text-center">Categories</h1>
                <table class="table table-striped table-sm" cellspacing="0" width="100%">
                    <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody id="categoryTable">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">
        getCategoryData();
    </script>
@endsection
