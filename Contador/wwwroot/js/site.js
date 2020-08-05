$(document).ready(function () {
    $("#clock").countdown("2021/06/30", function (event) {
        $(this).html(event.strftime("%D Dias %H:%M:%S"));
    });
});
