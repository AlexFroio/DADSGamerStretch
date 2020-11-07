if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js").then(registration => {
        console.log("SW registered, fuck you.");
        console.log(registration);
    }).catch(error => {
        console.log("you fucked up");
        console.log(error);
    });
}