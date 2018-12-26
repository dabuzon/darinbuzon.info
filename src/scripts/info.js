$(document).ready(function () {
    $('.to-click').click(function () {
        $('body').toggleClass('info');
        $('.checker').toggleClass('more-info');
        $('.to-click').unwrap();
        $('.clicking span').toggleClass('to-click no-click');
        $('.to-click').wrap('<a href="javascript:void(0)"></a>');
    })
})