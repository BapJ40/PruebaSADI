class Carnet {
    constructor(img, estado) {
        this.img = img;
        this.estado = estado;
    }
}

const carnets = [];

const carnet1 = new Carnet("assets/FUERZA MOTORIZADA MIRANDA CRISTO VIVE.jpg", "ACTIVO");
carnets.push(carnet1);
const carnet2 = new Carnet("assets/FUERZA MOTORIZADA MIRANDA CRISTO VIVE.jpg", "INACTIVO");
carnets.push(carnet2);
const carnet3 = new Carnet("assets/FUERZA MOTORIZADA MIRANDA CRISTO VIVE.jpg", "ACTIVO");
carnets.push(carnet3);
const carnet4 = new Carnet("assets/FUERZA MOTORIZADA MIRANDA CRISTO VIVE.jpg", "ACTIVO");
carnets.push(carnet4);

export default carnets