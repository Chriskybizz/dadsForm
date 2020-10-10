
$(function () {
    $('#form-submit').click(function (e) {
        var form_data = {}
        e.preventDefault;

        $('#memory-form .info').each(function () {
            form_data[$(this).attr('id')] = $(this).val();
        });

        console.log(form_data)
    });
});