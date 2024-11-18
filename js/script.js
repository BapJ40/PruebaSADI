import carnets from "./carnet.js";

// Carnets

carnets.forEach(carnets => {
    const carnet = document.createRange().createContextualFragment(`
        <div class="carnet ${carnets.estado}">
                    <div class="carnet-img">
                           <div class="galeria">
                                <a href="${carnets.img}" data-fancybox="carnet" data-caption="Este empleado esta: ${carnets.estado}">
                                    <img src="${carnets.img}" alt="carnet">
                                </a>
                            </div>
                    </div>
                    <div class="carnet-info">
                        <p class="info">${carnets.estado}</p>
                    </div>
        </div>
    `);
    const carnets_grind = document.querySelector(".carnets");
    carnets_grind.append(carnet);
})

// Filtro

const filtro = document.querySelector("#filtro");
filtro.addEventListener("change", () => {    
    if (filtro.value === "todos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            carnet.classList.remove("novisible");
        })
    } else if (filtro.value === "activos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            if (carnet.classList.contains("INACTIVO")) {
                carnet.classList.add("novisible");
            } else {
                carnet.classList.remove("novisible");
            }
        })
    } else if (filtro.value === "inactivos") {
        const carnets_grind = document.querySelectorAll(".carnet");
        carnets_grind.forEach(carnet => {
            if (carnet.classList.contains("INACTIVO")) {
                carnet.classList.remove("novisible");
            } else {
                carnet.classList.add("novisible");
            }
        })
    }
})


// QR

const qr = document.querySelector(".qr");

new QRCode(qr, "https://sadicu.netlify.app/#carnet-1");
