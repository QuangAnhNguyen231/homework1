function upDate(element) {
    console.log("Mouse over or focus event triggered");

    document.getElementById("image").innerHTML = element.alt;
}

function unDo(element) {
    console.log("Mouse leave or blur event triggered");

    document.getElementById("image").innerHTML =
        "Hover over an image below to display here.";
}

function addTabFocus() {
    console.log("Page loaded - adding tabindex");

    let images = document.querySelectorAll("#gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Added tabindex to image " + (i + 1));
    }
}
