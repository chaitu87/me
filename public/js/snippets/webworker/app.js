// Setting the web worker
if (typeof(Worker) !== "undefined") {
    // Yes! Web worker support!
    console.log("Web worker is on");
} else {
    console.log("No support for web worker");
}