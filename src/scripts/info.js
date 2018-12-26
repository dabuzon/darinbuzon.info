$(document).ready(function() {
    $('#click.active').click(function() {
        $('body').toggleClass('info');
        $('.checker').toggleClass('more-info');
        $('#click, #click.active').toggleClass('active');
    })
})