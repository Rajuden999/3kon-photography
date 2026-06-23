const TESTIMONIALS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRVGdyN0xEDos-PFYqADKhEgWWh-9Z9hwenPlyeBkMtdpsQGEwomLtvf3Y_m-vM0K6gQPsYlFmGeh_d/pub?gid=731152112&single=true&output=csv";

async function loadTestimonials() {

    const response = await fetch(TESTIMONIALS_URL);
    const csv = await response.text();

    const rows = csv.trim().split("\n");

    const grid =
    document.getElementById("testimonialsGrid");

    if (!grid) return;

    grid.innerHTML = "";

    rows.slice(1).forEach(row => {

        const cols = row.split(",");

        const name = cols[0]?.trim();
        const review = cols[1]?.trim();
        const image = cols[2]?.trim();

        const card =
        document.createElement("div");

        card.className = "testimonial-card";

        card.innerHTML = `
            <img src="${image}" alt="${name}">

            <h3>${name}</h3>

            <p>${review}</p>
        `;

        grid.appendChild(card);

    });

}

loadTestimonials();