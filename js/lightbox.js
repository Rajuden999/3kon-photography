document.addEventListener("click", function(e){

    if(e.target.matches(".photo img")){

        const lightbox =
        document.getElementById("lightbox");

        const lightboxImg =
        document.getElementById("lightboxImg");

        lightbox.style.display = "flex";
        lightboxImg.src = e.target.src;
    }

    if(
        e.target.classList.contains("close-lightbox") ||
        e.target.id === "lightbox"
    ){
        document.getElementById("lightbox")
        .style.display = "none";
    }

});