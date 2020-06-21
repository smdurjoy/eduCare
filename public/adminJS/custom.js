$(document).ready(function () {
    $('#adminTable').DataTable();
    $('.dataTables_length').addClass('bs-select');
});

function getCategoryData() {
    axios.get('/admin/getCategoryData').then(function (response) {
        let categoryData = response.data;

        $.each(categoryData, function (i) {
            $('<tr>').html(
                "<td> <img class='tableImage' src="+ categoryData[i].category_image +"> </td>" +
                "<td>"+ categoryData[i].category_name +"</td>" +
                "<td>"+ categoryData[i].status +"</td>" +
                "<td> <a> <i class='far fa-edit'></i> </a> </td>" +
                "<td> <a> <i class='far fa-trash-alt'></i> </a> </td>"
            ).appendTo('#categoryTable');
        });
    }).catch(function (error) {
        alert('error!')
    })
}
