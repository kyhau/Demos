function startWorker (element, options) {
    alert("hello");
    //first we create a web worker and define the js file that defines it
    var worker = new Worker("TestWebWorkerTask.js");

    //this is how the web worker talks to us (the main thread)
    worker.onmessage = function (e) {
        log("The worker said " + e.data);
    };

    //and this is how we talk to the web worker
    worker.postMessage("Hey there, worker.");
}
