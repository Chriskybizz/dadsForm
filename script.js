$('input[name="Info"]').click(function (e) {
    e.preventDefault();
    $('#form input').each(function () {
        console.log($(this).val());
    });
});
});

/*var form_data = {
    "name": document.getElementById("name").value,
    "relation": document.getElementById("rel").value,
    "date": document.getElementById("date").value,
    "memTitle": document.getElementById("haBday").value,
    "Memory": document.getElementById("mem").value

};

let formSave = () => {
    console.log(form_data);
  } //Dunno if this is still needed */

$('#form-submit').click(funtion(e) {
    e.preventDefault;
    $('#memory-form input').each(function () {
        console.log($(this).val())
    });
});
