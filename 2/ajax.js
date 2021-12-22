// Program that implements AJAX to get content from the back-end
const xhr = new XMLHttpRequest();

// Gets the text that are going to be displayed
xhr.open("get", "text.txt", true);

xhr.onreadystatechange = function () {
    // Gets HTML element and populate it with response text when the ready state changes
    document.getElementById("text").textContent = xhr.responseText;
};

$(document).ready(function(){
    // Function to send the request to the browser (change the ready state)
    $("#button").click(function(){
        xhr.send()
    });
});
