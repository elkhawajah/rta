$(document).ready(function () {
    $('.upload-file input[type=file]').change(function () {
        $(this).next().find('input').val($(this).val());
    });

    $(".remove").click(function () {
        $(this).closest('.item').fadeOut("normal", function () {

            $(this).fadeOut(300).remove();
        });
    });
});