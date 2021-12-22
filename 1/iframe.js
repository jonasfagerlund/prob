// Program that changes the content of an related iframe in the html document.
$("#knapp").click(function () {
    // On button click get the iframe element and changes its innerHTML text.
    let frame = document.getElementById("ram");
    let frameDocument = frame.contentDocument;
    frameDocument.activeElement.innerHTML = "Hello world!";
});
