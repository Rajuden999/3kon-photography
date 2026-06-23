const PHOTOS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRVGdyN0xEDos-PFYqADKhEgWWh-9Z9hwenPlyeBkMtdpsQGEwomLtvf3Y_m-vM0K6gQPsYlFmGeh_d/pub?gid=475928580&single=true&output=csv";

async function loadPhotos() {

const response = await fetch(PHOTOS_URL);
const csv = await response.text();

const rows = csv.trim().split("\n");

const gallery =
document.getElementById("galleryGrid");

if (!gallery) return;

gallery.innerHTML = "";

rows.slice(1).forEach(row => {

    const cols = row.split(",");

    const imageUrl =
    cols[0]?.trim();

    const size =
    cols[1]?.trim() || "medium";

    if (!imageUrl) return;

    const photo =
    document.createElement("div");

    photo.className =
    `photo ${size}`;

    photo.innerHTML = `
        <img src="${imageUrl}" alt="3Kon Photography">
    `;

    gallery.appendChild(photo);

});
```

}

loadPhotos();

document.addEventListener("click", function(e){


if(
    e.target.tagName === "IMG" &&
    e.target.closest(".photo")
){

    const lightbox =
    document.getElementById("lightbox");

    const lightboxImg =
    document.getElementById("lightboxImg");

    if(lightbox && lightboxImg){

        lightbox.style.display = "flex";

        lightboxImg.src =
        e.target.src;

    }

}

});

const closeBtn =
document.querySelector(".close-lightbox");

if(closeBtn){


closeBtn.addEventListener(
"click",
function(){

    const lightbox =
    document.getElementById("lightbox");

    if(lightbox){

        lightbox.style.display =
        "none";

    }

});


}
