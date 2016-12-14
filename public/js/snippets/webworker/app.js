// Setting the web worker
if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    console.log("Web worker is on");
    if (typeof(w) == "undefined") {
    	w = new Worker("/js/snippets/webworker/worker.js");

    }
    w.onmessage = function(e){
    	$('.counter').html(e.data);
    };
} else {
	console.log("No support for web worker");
	$('.counter').html("No web worker support");
}
