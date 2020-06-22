$(document).ready(function () {
    $('#adminTable').DataTable();
    $('.dataTables_length').addClass('bs-select');
});

function getCategoryData() {
    axios.get('/admin/getCategoryData').then(function (response) {
        if(response.status == 200) {
            $('#categoryTableBody').empty();
            let categoryData = response.data;
            $.each(categoryData, function (i) {
                $('<tr>').html(
                    "<td> <img class='tableImage' src="+ categoryData[i].category_image +"> </td>" +
                    "<td>"+ categoryData[i].category_name +"</td>" +
                    "<td>"+ categoryData[i].status +"</td>" +
                    "<td> <a> <i class='far fa-edit'></i> </a> </td>" +
                    "<td> <a class='deleteCategoryBtn' data-id="+ categoryData[i].id +"> <i class='far fa-trash-alt'></i> </a> </td>"
                ).appendTo('#categoryTableBody');
            });

            // Get delete id
            $('.deleteCategoryBtn').click(function () {
                let id = $(this).data('id');
                $('#deleteModal').modal('show')
                $('#categoryDeleteConfirmBtn').attr('data-id', id)
            })
        } else {
            alert('error!')
        }

    }).catch(function (error) {
        alert('error!')
    })

}

$('#categoryDeleteConfirmBtn').click(function () {
    let id = $(this).data('id');
    deleteCategory(id);
})

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

