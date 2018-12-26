$(document).ready(function () {
    $('.middle .feather-chevron-right').click(function() {
        if (!$('.first').hasClass('hide')) {
            $('.first').toggleClass('hide');
            $('.first').next().toggleClass('hide selected');
        } else if (!$('.selected').hasClass('last')) {
            $('.selected').next().toggleClass('hide placehold');
            $('.selected').toggleClass('hide selected');
            $('.placehold').toggleClass('placehold selected');
        } else if ($('.selected').hasClass('last')) {
            $('.selected').toggleClass('hide selected');
            $('.first').toggleClass('hide');
        }
    })
})