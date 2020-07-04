$(document).ready(function () {
    $('#adminTable').DataTable();
    $('.dataTables_length').addClass('bs-select');
});


// Legal functions

function getLegalData() {
    axios.get('/admin/legalData').then((response) => {
        const jsonData = response.data;
        $.each(jsonData, function (i) {
            $('<tr>').html(
                "<td>"+ jsonData[i].about_us +"</td>" +
                "<td>"+ jsonData[i].privacy_policy +"</td>" +
                "<td>"+ jsonData[i].refund_policy +"</td>" +
                "<td>"+ jsonData[i].terms_and_condition +"</td>"
            ).appendTo('#legalTableBody')
        })
    })
}












// Course functions
//Get course data
function getCourse() {
    axios.get('/admin/getCourses').then((response) => {
        let jsonData = response.data;
        $.each(jsonData, function (i) {
            $('<tr>').html(
                "<td>"+ jsonData[i].course_name +"</td>"+
                "<td>"+ jsonData[i].short_des +"</td>"+
                "<td>"+ jsonData[i].total_lecture +"</td>"+
                "<td>"+ jsonData[i].total_students +"</td>"+
                "<td><a id='editCourseBtn' data-id="+ jsonData[i].id +"> <i class='far fa-edit'></i> </a></td>"+
                "<td><a href='#'> <i class='far fa-trash-alt deleteButton'></i> </a></td>"
            ).appendTo('#courseTableBody')
        })
    }).then((error) => {

    })

    $('#editCourseBtn').click(function () {
        $('#editCourseModal').modal('show');
        // let id = $(this).data('id');
        // courseDetails(id);
    });

}

$('.deleteButton').click(function () {
    $('#deleteCourseModal').modal('show');
})

function getCategory() {
    axios.get('/admin/getCategory').then((response) => {
        let categoryData = response.data;
        $.each(categoryData, function (i) {
            $('<option>').html(
                "<option id='catId' data-id="+ categoryData[i].id+">"+ categoryData[i].category_name +"</option>"
            ).appendTo('#addCourseCategory')
        })

    }).catch((error) => {

    })
}

function getCateId() {
    let catId = document.getElementById('cateId').getAttribute('value');
    return catId;
}

// Add course btn click
$('#addCourseBtn').click(function () {
    $('#addCourseModal').modal('show');
    getCategory();
})

$('#addCourseCategory').change(function (e) {
    let catId = $(this).data('id');
    // let cateName = this.value;
    // let catId = $('#cateId').val(this.value)
    // let catId = $('#cateId').getAttribute('value');
    // let catId = getCateId();
    console.log(catId)
})


$('#courseAddConfirmBtn').click(function () {
    $('#addCourseCategory').change(function (e) {
        let cateName = this.value;
        // let catId = $('#cateId').val(this.value)
        // let catId = $('#cateId').getAttribute('value');
        console.log(cateName)

        // let name = $('#addCourseName').val();
        // let image = $('#addCourseImage').val();
        // let sDes = $('#addCourseShortDes').val();
        // let title = $('#addCourseTitle').val();
        // let lDes = $('#addCourseLongDes').val();
        // let tStu = $('#addCourseTotalL').val();
        // let tLec = $('#addCourseTotalStu').val();
        // let sAll = $('#addCourseAllSkills').val();
        // let vUrl = $('#addCourseVideoUrl').val();
        // let cLink = $('#addCourseLink').val();
        //
        // addCourse(catId, name, image, sDes, title, lDes, tLec, tStu, sAll, vUrl, cLink)
    });
})

// Add course
function addCourse(catId, courseName, courseImage, shortDes, courseTitle, longDes, totalL, totalS, skillAll, videoUrl, courseLink) {
    axios.post('/admin/addCourse', {
        category_id: catId,
        course_name: courseName,
        course_image: courseImage,
        short_des: shortDes,
        title: courseTitle,
        long_des: longDes,
        total_lecture: totalL,
        total_students: totalS,
        skill_all: skillAll,
        video_url: videoUrl,
        course_link: courseLink
    }).then((response) => {
        if(response.status == 200 & response.data == 1) {
            alert('success')
        } else {
            alert('error')
        }
    }).catch((error) => {
        alert('error')
    })
}

// Edit course
function courseDetails(id) {
    axios.post('/courseDetails', {id: id}).then((response) => {
        let jsonData = response.data;
        $('#editCourseName').val(jsonData[0].course_name);
        $('#editCourseImage').val(jsonData[0].course_image);
        $('#editCourseShortDes').val(jsonData[0].short_des);
        $('#editCourseTitle').val(jsonData[0].title);
        $('#editCourseLongDes').val(jsonData[0].long_des);
        $('#editCourseTotalL').val(jsonData[0].total_lecture);
        $('#editCourseTotalStu').val(jsonData[0].total_students);
        $('#editCourseAllSkills').val(jsonData[0].skill_all);
        $('#editCourseVideoUrl').val(jsonData[0].video_url);
        $('#editCourseLink').val(jsonData[0].course_link);
    }).catch((error) => {

    })
}












// category functions

function getCategoryData() {
    axios.get('/admin/getCategoryData').then(function (response) {
        if(response.status == 200) {
            $('#mainDiv').removeClass('d-none');
            $('#loaderDiv').addClass('d-none');
            $('#categoryTableBody').empty();
            let categoryData = response.data;
            $.each(categoryData, function (i) {
                $('<tr>').html(
                    "<td> <img class='tableImage' src="+ categoryData[i].category_image +"> </td>" +
                    "<td>"+ categoryData[i].category_name +"</td>" +
                    "<td>"+ categoryData[i].status +"</td>" +
                    "<td> <a class='editCategoryBtn' data-id="+ categoryData[i].id +"> <i class='far fa-edit'></i> </a> </td>" +
                    "<td> <a class='deleteCategoryBtn' data-id="+ categoryData[i].id +"> <i class='far fa-trash-alt'></i> </a> </td>"
                ).appendTo('#categoryTableBody');
            });

            // Get delete id
            $('.deleteCategoryBtn').click(function () {
                let id = $(this).data('id');
                $('#deleteModal').modal('show');
                $('.deleteDataId').html(id);
            });

            // Get category edit id and details
            $('.editCategoryBtn').click(function () {
                let id = $(this).data('id');
                $('.categoryEditId').html(id);
                editCategoryDetails(id);
                $('#editModal').modal('show');
            });

        } else {
            $('#loaderDiv').addClass('d-none');
            $('#wentWrongDiv').removeClass('d-none');
        }

    }).catch(function (error) {
        $('#loaderDiv').addClass('d-none');
        $('#wentWrongDiv').removeClass('d-none');
    })

}

// Get delete category id from confirm button and pass it into delete function
$('#categoryDeleteConfirmBtn').click(function () {
    let id =  $('.deleteDataId').html();
    deleteCategory(id);
});

// Delete category function
function deleteCategory(deleteId) {
    axios.post('/admin/deleteCategory', {id: deleteId}).then(function (response) {
        if(response.status == 200 && response.data == 1) {
            $('#deleteModal').modal('hide');
            toastr.success('Category Deleted Successfully !');
            getCategoryData();
        } else {
            $('#deleteModal').modal('hide');
            toastr.error('Something Went Wrong !');
            getCategoryData();
        }
    }).catch(function (error) {
        $('#deleteModal').modal('hide');
        toastr.error('Something Went Wrong !');
        getCategoryData();
    })
}

// Get each category data
function editCategoryDetails(detailsId) {
    axios.post('/admin/categoryDetails', {id:detailsId}).then(function (response) {
        if(response.status == 200) {
            $('#categoryEditDetails').removeClass('d-none');
            $('#categoryLoaderDiv').addClass('d-none');
            let jsonData = response.data;
            $('#categoryName').val(jsonData[0].category_name);
            $('#categoryImage').val(jsonData[0].category_image);
            $('#categoryDes').val(jsonData[0].category_des);
        } else {
            $('#categoryLoaderDiv').addClass('d-none');
            $('#categoryWentWrongDiv').removeClass('d-none');
        }
    }).catch(function (error) {
        $('#categoryLoaderDiv').addClass('d-none');
        $('#categoryWentWrongDiv').removeClass('d-none');
    })
}

// Get category update id from confirm button and pass it into update function
$('#categoryEditConfirmBtn').click(function () {
    let id = $('.categoryEditId').html();
    let name = $('#categoryName').val();
    let image = $('#categoryImage').val();
    let des = $('#categoryDes').val();
    updateCategory(id, name, image, des);
});

// Edit category function
function updateCategory(categoryUpdateId, categoryName, categoryImage, categoryDes) {
    let alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if(categoryName.length == 0) {
        toastr.error('Category Name is Empty');
    }
    else if(!categoryName.match(alpha)) {
        toastr.error('Numbers Not Allowed !');
    }
    else if(categoryImage.length == 0) {
        toastr.error('Please Select an Image');
    }
    else if(categoryDes.length == 0) {
        toastr.error('Category Description is Empty');
    } else {
        axios.post('/admin/editCategory', {
            id: categoryUpdateId,
            name: categoryName,
            image: categoryImage,
            description: categoryDes
        }).then(function (response) {
            if(response.status == 200 && response.data == 1) {
                toastr.success('Category Updated Successfully !');
                getCategoryData();
                $('#editModal').modal('hide');
            } else {
                toastr.error('Something Went Wrong !');
                getCategoryData();
                $('#editModal').modal('hide');
            }
        }).catch(function () {
            toastr.error('Something Went Wrong !');
            getCategoryData();
            $('#editModal').modal('hide');
        })
    }
}

// Add category
$('#addCategoryBtn').click(function () {
    $('#addCategoryModal').modal('show');
});

// confirm add category
$('#categoryAddConfirmBtn').click(function () {
    let name = $('#addCategoryName').val();
    let img = $('#addCategoryImage').val();
    let des = $('#addCategoryDes').val();
    addCategory(name, img, des);
});

function addCategory(categoryName, categoryImage, categoryDes) {
    let alpha = /^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/
    if(categoryName.length == 0) {
        toastr.error('Category Name is Empty');
    }
    else if(!categoryName.match(alpha)) {
        toastr.error('Numbers Not Allowed !');
    }
    else if(categoryImage.length == 0) {
        toastr.error('Please Select an Image');
    }
    else if(categoryDes.length == 0) {
        toastr.error('Category Description is Empty');
    } else {
        axios.post('/admin/addCategory', {
            name: categoryName,
            image: categoryImage,
            des: categoryDes
        }).then(function (response) {
            if(response.status == 200 && response.data == 1) {
                toastr.success('Category Added Successfully !');
                getCategoryData();
                $('#addCategoryModal').modal('hide');
            } else {
                toastr.error('Something Went Wrong !');
                getCategoryData();
                $('#addCategoryModal').modal('hide');
            }
        }).catch(function () {
            toastr.error('Something Went Wrong !');
            getCategoryData();
            $('#addCategoryModal').modal('hide');
        })
    }
}

