$(document).ready(function () {
    $('.clock').click(function () {
        if ($('.clock').find('a').length) {
            $('.clock *').replaceWith('<a href="javascript:void(0)" class="no-repeat">This site is available through <a href="https://datproject.org/" target="_blank">Dat</a>, on the <a href="https://www.are.na/darin-buzon/p2p-decentralized-web" target="_blank">peer-to-peer web</a>, accessible through <a href="https://beakerbrowser.com/" target="_blank">Beaker Browser</a>. Programmed by <a href="https://github.com/dabuzon" target="_blank">yours truly</a> with its <a href="https://github.com/dabuzon/darinbuzon.info" target="_blank">source readily available to you</a>.</a>');
        } else if ($('.clock').find('.no-repeat').length) {
            $('.clock *').replaceWith('<a href="javascript:void(0)"><span id="first-clock"></span><span id="colon">:</span><span id="minutes"></span></a>')
        }
    })
})