@extends('admin.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5" id="mainDiv">
                <h1 class="title text-center">Legal</h1>
                <button type="button" id="addLegalBtn" class="btn btn-deep-purple btn-sm">Add Course</button>
                <table class="table table-striped table-sm" cellspacing="0" width="100%" id="legalTable">
                    <thead>
                    <tr>
                        <th scope="col">About Us</th>
                        <th scope="col">Privacy Policy</th>
                        <th scope="col">Refund Policy</th>
                        <th scope="col">Terms and Condition</th>
                    </tr>
                    </thead>
                    <tbody id="legalTableBody">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">
        getLegalData();
    </script>
@endsection
