$(function() {
    $("#textAreaContainer").dxTextArea({
        autoResizeEnabled: true,
        minHeight: 100,
        maxHeight: 200
    });
    // havent tested
    $('input[name="Info"]').click(function(e) {
        e.preventDefault();
        $('#form input').each(function() {
            console.log($(this).val());
        });                          
    });
});
