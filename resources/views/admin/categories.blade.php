@extends('admin.app')

@section('content')
    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5 d-none" id="mainDiv">
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

        <div class="row">
            <div class="col-md-12 p-5 text-center mt-5" id="loaderDiv">
                <img class="loaderImage" src="{{ asset('images/adminLoader.svg') }}">
            </div>
        </div>

        <div class="row">
            <div class="col-md-12 p-5 wentWrong text-center d-none" id="wentWrongDiv">
                <img class="wentWrongImage" src="{{ asset('images/wentWrong.png') }}">
                <h3><span>Opss!</span> Something Went Wrong!</h3>
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
                    <h1 class="deleteDataId d-none"></h1>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Cancel</button>
                    <button id="categoryDeleteConfirmBtn" data-id="" type="button" class="btn btn-danger btn-sm">Delete</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Edit Modal -->
    <div class="modal fade" id="editModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <h5 class="text-center mb-3">Edit Category</h5>
                    <h1 class="categoryEditId d-none"></h1>
                    <div class="d-none" id="categoryEditDetails">
                        <input type="text" id="categoryName" class="form-control mb-4" placeholder="Enter Category Name">
                        <input type="text" id="categoryImage" class="form-control mb-4" placeholder="Enter Category Image URL">
                        <input type="text" id="categoryDes" class="form-control mb-4" placeholder="Enter Category Description">
                    </div>
                    {{-- loader div --}}
                    <div class="col-md-12 p-5 text-center mt-5" id="categoryLoaderDiv">
                        <img class="loaderImage" src="{{ asset('images/adminLoader.svg') }}">
                    </div>
                    {{-- WentWrong div --}}
                    <div class="col-md-12 p-5 wentWrong text-center d-none" id="categoryWentWrongDiv">
                        <img class="wentWrongImage" src="{{ asset('images/wentWrong.png') }}">
                        <h3><span>Opss!</span> Something Went Wrong!</h3>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Cancel</button>
                    <button id="categoryEditConfirmBtn" type="button" class="btn btn-danger btn-sm">Update</button>
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
