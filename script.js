// Mobile nav toggle
function toggleMenu() {
    const navList = document.querySelector('.nav ul');
    navList.classList.toggle('showing');
}

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Leaflet Map on destinations page
if (document.getElementById('map')) {
    const map = L.map('map').setView([20, 0], 2);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    const destinations = [
        { coords: [36.3932, 25.4615], name: "Santorini, Greece" },
        { coords: [35.0116, 135.7681], name: "Kyoto, Japan" },
        { coords: [-13.1631, -72.5450], name: "Machu Picchu, Peru" }
    ];

    destinations.forEach(dest => {
        L.marker(dest.coords).addTo(map).bindPopup(dest.name);
    });
}

// Handle inquiry form submission
document.querySelectorAll('.inquiry-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert("Thanks for your message! I'll get back to you soon.");
        form.reset();
    });
});