const PORTFOLIO_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRVGdyN0xEDos-PFYqADKhEgWWh-9Z9hwenPlyeBkMtdpsQGEwomLtvf3Y_m-vM0K6gQPsYlFmGeh_d/pub?gid=293987403&single=true&output=csv";

async function loadPortfolio() {

    const response = await fetch(PORTFOLIO_URL);
    const csv = await response.text();

    const rows = csv.trim().split("\n");

    const gallery =
    document.getElementById("portfolioGrid");

    const videos =
    document.getElementById("videoHighlights");

    if (!gallery) return;

    gallery.innerHTML = "";

    if (videos) {
        videos.innerHTML = "";
    }

    rows.slice(1).forEach(row => {

        const cols = row.split(",");

        const type =
        cols[0]?.trim().toLowerCase();

        const url =
        cols[1]?.trim();

        const size =
        cols[2]?.trim() || "medium";

        if (type === "image") {

            const photo =
            document.createElement("div");

            photo.className =
            `photo ${size}`;

            photo.innerHTML = `
                <img src="${url}" alt="">
            `;

            gallery.appendChild(photo);

        }

        if (type === "video" && videos) {

            let videoId = "";

            if (url.includes("youtu.be/")) {
                videoId =
                url.split("youtu.be/")[1].split("?")[0];
            }

            const iframe =
            document.createElement("iframe");

            iframe.src =
            `https://www.youtube.com/embed/${videoId}`;

            iframe.allowFullscreen = true;

            videos.appendChild(iframe);

        }

    });

}

loadPortfolio();
document.addEventListener("click", function(e){

    if(e.target.tagName === "IMG" &&
       e.target.closest(".photo")){

        document.getElementById("lightbox")
        .style.display = "flex";

        document.getElementById("lightboxImg")
        .src = e.target.src;
    }

});

document.querySelector(".close-lightbox")
.addEventListener("click", function(){

    document.getElementById("lightbox")
    .style.display = "none";

});