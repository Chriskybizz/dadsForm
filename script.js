
$(function () {

    $('#form-submit').click(function (e) {
        e.preventDefault;


        $('#memory-form .info').each(function () {
            console.log($(this).val(), $(this).attr('id'))
        });
    });
});