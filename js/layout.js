async function loadLayout() {

```
const headerResponse =
await fetch("partials/header.html");

document.getElementById("siteHeader")
.innerHTML =
await headerResponse.text();

const footerResponse =
await fetch("partials/footer.html");

document.getElementById("siteFooter")
.innerHTML =
await footerResponse.text();

const menuBtn =
document.querySelector(".menu-btn");

const nav =
document.querySelector(".navbar nav");

if(menuBtn && nav){

    menuBtn.addEventListener("click", () => {

        nav.classList.toggle("active");

    });

}

if(typeof loadSettings === "function"){
    loadSettings();
}
```

}

loadLayout();
