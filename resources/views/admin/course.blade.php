@extends('admin.app')

@section('content')

    <div class="container">
        <div class="row">
            <div class="col-md-12 p-5" id="mainDiv">
                <h1 class="title text-center">Courses</h1>
                <button type="button" id="addCourseBtn" class="btn btn-deep-purple btn-sm">Add Course</button>
                <table class="table table-striped table-sm" cellspacing="0" width="100%" id="courseTable">
                    <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Short Description</th>
                        <th scope="col">Total Lecture</th>
                        <th scope="col">Total Students</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                    </thead>
                    <tbody id="courseTableBody">

                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- Add Course Modal -->
    <div class="modal fade" id="addCourseModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
         aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body p-4">
                    <h5 class="text-center mb-3">Add Course</h5>
                    <div class="row" id="courseAddDetails">
                        <div class="col-md-6">
                            <input type="text" id="addCourseName" class="form-control mb-4" placeholder="Enter Course Name">
                            <input type="text" id="addCourseImage" class="form-control mb-4" placeholder="Enter Course Image URL">
                            <input type="text" id="addCourseShortDes" class="form-control mb-4" placeholder="Enter Course Short Description">
                            <input type="text" id="addCourseTitle" class="form-control mb-4" placeholder="Enter Course Title">
                            <textarea class="form-control mb-4" id="addCourseLongDes" rows="3"  placeholder="Enter Long Description"></textarea>
                        </div>
                        <div class="col-md-6">
                            <input type="text" id="addCourseTotalL" class="form-control mb-4" placeholder="Enter Total Lecture">
                            <input type="text" id="addCourseTotalStu" class="form-control mb-4" placeholder="Enter Total Students">
                            <textarea class="form-control mb-4" id="addCourseAllSkills" rows="3"  placeholder="Enter All Skills"></textarea>
                            <input type="text" id="addCourseVideoUrl" class="form-control mb-4" placeholder="Enter Course Video Url">
                            <input type="text" id="addCourseLink" class="form-control mb-4" placeholder="Enter Course Link">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Cancel</button>
                    <button id="courseAddConfirmBtn" type="button" class="btn btn-danger btn-sm">Save</button>
                </div>
            </div>
        </div>
    </div>


@endsection

@section('script')
    <script type="text/javascript">
        getCourse();
    </script>
@endsection
