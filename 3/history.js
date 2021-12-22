// Program with functions that enables changes to the DOM without page reloads.

function java() {
    // Changes slug to /java and appends text without reload.
    history.pushState(null, null, "java");
    document.body.append("\n bra språk ");
}

function python() {
    // Changes slug to /python and appends text without reload.
    history.pushState(null, null, "python");
    document.body.append("bättre språk ");
}

window.onpopstate = function(event) {
    // Appends a smiley when the user uses back or forward function in the browser.
    document.body.append(" ¯\_(ツ)_/¯ ");
}
