onmessage = timedCount;
var i = 0;
alert("here2");
function timedCount(evt) {
    i = i + 1;
    postMessage(i);
    setTimeout("timedCount()", 500);
}
