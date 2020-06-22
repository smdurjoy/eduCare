$(document).ready(function () {
    $('#adminTable').DataTable();
    $('.dataTables_length').addClass('bs-select');
});

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

