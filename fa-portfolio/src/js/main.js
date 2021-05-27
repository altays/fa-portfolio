alert("Hello!")

// function that takes two params
function loadImage(id, targetId) {
    
    // targeting image with a given id
    let el = document.getElementById(id)
    // if no target id is present, use the id for target El
    let targetEl = targetId ? document.getElementById(targetId) : el;
    let imageToLoad;

    // console.log(`el.dataset.image: ` + el.dataset.image)
    // if data-image is provided, set the imageToLoad as that image
    if (el.dataset.image){
        imageToLoad = el.dataset.image
    } else if (typeof el.currentSrc ===`undefined`) {
        // if browser does not support src set and currentsrc, use src
        imageToLoad = el.src;
    } else {
        // otherwise, set it to the current src
        imageToLoad = el.currentSrc;
    }

    // if imageToLoad holds a ariable
    if (imageToLoad) {
        // create a new image from which the source is a value
        var img = new Image();
        img.src = imageToLoad;
        console.log(img.src)
        // when the image is loaded, add CSS class to target element
        img.onload = function() {
          targetEl.classList.add('is-loaded')  
        };
    }
}

document.addEventListener(`DOMContentLoaded`,function() {
    loadImage('wallpaper');
    loadImage('pictureImage','picture')
    // loadImage('picture-image',`pictureImage`)
})


function modifyText() {
    console.log("worked")
}
  
// Add event listener to table
var el = document.getElementByID("toggle");
el.addEventListener("click", modifyText);