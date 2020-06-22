@extends('admin.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5">
                <h1 class="title text-center">Categories</h1>
                <table class="table table-striped table-sm" cellspacing="0" width="100%" id="categoryTable">
                    <thead>
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Name</th>
                        <th scope="col">Status</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody id="categoryTableBody">

                    </tbody>
                </table>
            </div>
        </div>
    </div>


    <!-- Delete Modal -->
    <div class="modal fade" id="deleteModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <h5 class="text-center">Are you sure ?</h5>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button>
                    <button id="categoryDeleteConfirmBtn" data-id="" type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">
        getCategoryData();
    </script>
@endsection
