
$(function() {
$('#form-submit').click(function (e) {
    e.preventDefault;
    $('#memory-form input').each(function () {
        console.log($(this).val())
    });
});
});