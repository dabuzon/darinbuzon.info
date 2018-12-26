$(document).ready(function () {
    if ($('.carousel img').hasClass('first')) {
        $('.carousel img.first').addClass('selected');
    }
    if ($('.description p').hasClass('first')) {
        $('.description p.first').addClass('selected');
        $('.selected').show();
    }

    $('.middle .feather-chevron-right').click(function() {
        $('.selected').removeClass('selected').addClass('hide');
        
    })
})