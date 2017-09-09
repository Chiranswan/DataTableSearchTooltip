$(document).ready(function () {
    var table = $('#example').DataTable({
        paging: false,

        ordering: false,

    });

    $('#search-inp').on('keyup', function () {
        table.search($(this).val()).draw();
    });

    $('#search-inp').on('blur', function () {
        var SearchVal = $(this).val();
        $('#Div_Search').attr("data-tip", SearchVal);
    });

});