var webFormTel =$('#WEB_FORM_ITEM_TELEPHONE input');
var webForm = $('.webFormDw form');


valid(webForm);




function valid(form) {
    $.validator.addMethod("minlenghtphone", function (value, element) {

            return value.replace(/\D+/g, '').length > 10;
        },
        "");
    $.validator.addMethod("requiredphone", function (value, element) {

            return value.replace(/\D+/g, '').length > 1;
        },
        "");
    $(form).validate({
        rules: {
            form_text_3: {
                required: true,
                minlength: 2
            },
            form_email_4: {
                required: true,
                email: true
            },
            form_text_5: {
                requiredphone: true,
                minlenghtphone: true
            },
            form_textarea_10: {
                required: true,
                minlength: 3
            }
        },
        errorPlacement: function(error, element) {},
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
        },
        unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
        }
    });
}

$(function () {
    webFormTel.inputmask("+ 7 (999) 999-99-99", {
        placeholder: "-"
    });
});