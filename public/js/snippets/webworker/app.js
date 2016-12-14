$(function() {
    var w;
    // Setting the web worker
    function startWorker() {
        if (typeof(Worker) !== "undefined") {
            // Yes! Web worker support!
            console.log("Web worker is on");
            if (typeof(w) == "undefined") {
                w = new Worker("/js/snippets/webworker/worker.js");
            }
            w.onmessage = function(e) {
                $('.counter').html(e.data);
            };
        } else {
            console.log("No support for web worker");
            $('.counter').html("No web worker support");
        }
    }

    function stopWorker() {
    	if (typeof(w) !== "undefined") {
        	w.terminate();    		
    	}
        w = undefined;
    }

    // startWorker();

    $('.btn-start').on('click', function() {
        console.log("start worker");
        startWorker();
    });

    $('.btn-stop').on('click', function() {
        console.log("stop worker");
        stopWorker();
    });
});
