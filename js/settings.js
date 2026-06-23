const SETTINGS_URL =
"https://docs.google.com/spreadsheets/d/e/2PACX-1vRVGdyN0xEDos-PFYqADKhEgWWh-9Z9hwenPlyeBkMtdpsQGEwomLtvf3Y_m-vM0K6gQPsYlFmGeh_d/pub?gid=0&single=true&output=csv";

async function loadSettings() {

    const response = await fetch(SETTINGS_URL);
    const csv = await response.text();

    const rows = csv.trim().split("\n").map(row => row.split(","));

    const settings = {};

    rows.forEach(row => {
        settings[row[0]] = row[1];
    });

    // Site Title
    document.title = settings.BrandName || "3Kon Photography";

    // Logo Text
    const brandName = document.getElementById("brandName");

if (brandName) {
    brandName.textContent = settings.BrandName;
}

const logoImage = document.getElementById("logoImage");

if (logoImage && settings.Logo) {
    logoImage.src = settings.Logo;
}

    // Hero Image
    const heroImg = document.getElementById("heroImage");
    if (heroImg && settings.HeroImage) {
        heroImg.src = settings.HeroImage;
    }

    const portfolioHero =
document.getElementById("portfolioHeroImage");

if (portfolioHero && settings.PortfolioHeroImage) {
    portfolioHero.src =
    settings.PortfolioHeroImage;
}
const aboutImage =
document.getElementById("aboutImage");

if (aboutImage && settings.AboutImage) {
    aboutImage.src =
    settings.AboutImage;
}
    // Footer Brand
    const footerBrand = document.getElementById("footerBrand");
    if (footerBrand) {
        footerBrand.textContent = settings.BrandName;
    }

    // Footer Tagline
    const footerTagline = document.getElementById("footerTagline");
    if (footerTagline) {
        footerTagline.textContent = settings.Tagline;
    }

    // Instagram
    const instaLink = document.getElementById("instagramLink");
    if (instaLink) {
        instaLink.href = settings.Instagram;
    }

    // WhatsApp
    const whatsappLink = document.getElementById("whatsappLink");
    if (whatsappLink) {
        whatsappLink.href =
        `https://wa.me/${settings.Whatsapp}`;
    }

}

