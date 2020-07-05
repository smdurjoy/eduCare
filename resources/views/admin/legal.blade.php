@extends('admin.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5" id="mainDiv">
                <h1 class="title text-center">Legal</h1>
                <button type="button" id="editLegalBtn" data-id="" class="btn btn-deep-purple btn-sm">Edit Legal</button>
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

    <!-- Edit Legal Modal -->
    <div class="modal fade" id="editLegalModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <h5 class="text-center mb-4">Edit Legal</h5>
                    <div class="row" id="legalEditDetails">
                        <div class="col-md-6">
                            <textarea class="form-control mb-4" id="editAboutUs" rows="3"  placeholder="Enter About Us"></textarea>
                            <textarea class="form-control mb-4" id="editPrivacyPolicy" rows="3"  placeholder="Enter Privacy Policy"></textarea>
                        </div>
                        <div class="col-md-6">
                            <textarea class="form-control mb-4" id="editTermsCondition" rows="3"  placeholder="Enter Terms & Condition"></textarea>
                            <textarea class="form-control mb-4" id="editRefundPolicy" rows="3"  placeholder="Enter Refund Policy"></textarea>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Cancel</button>
                    <button id="legalEditConfirmBtn" type="button" class="btn btn-danger btn-sm">Update</button>
                </div>
            </div>
        </div>
    </div>

@endsection

@section('script')
    <script type="text/javascript">
        getLegalData();
    </script>
@endsection
