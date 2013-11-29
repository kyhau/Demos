self.addEventListener('message', function (e) {
    self.postMessage(e.data);
    //i = i + 1;
    //setTimeout("timedCount()", 500);
}, false);
