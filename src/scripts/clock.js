let toggle = true;
let mtoggle = true;

function tick() {
    let time = dayjs(new Date());
    $("#first-clock").html(time.format("MMMM D [—] H"));
    $("#minutes").html(time.format("mm"));
}

tick();
setInterval(tick, 1000);
setInterval(function blink() {
    $("#colon").css({
        visibility: toggle ? "visible" : "hidden"
    });
    toggle = !toggle;
}, 1000);

function mtick() {
    let time = dayjs(new Date());
    $("#mfirst-clock").html(time.format("MMMM D [—] H"));
    $("#mminutes").html(time.format("mm"));
}

mtick();
setInterval(mtick, 1000);
setInterval(function blink() {
    $("#mcolon").css({
        visibility: mtoggle ? "visible" : "hidden"
    });
    mtoggle = !mtoggle;
}, 1000);