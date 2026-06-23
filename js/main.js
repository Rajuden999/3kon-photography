const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    const images = card.querySelectorAll(".slide");

    let current = 0;

    setInterval(() => {

        images[current].classList.remove("active");

        current = (current + 1) % images.length;

        images[current].classList.add("active");

    }, 4000);

});