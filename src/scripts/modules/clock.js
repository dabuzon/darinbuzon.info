let toggle = true;

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