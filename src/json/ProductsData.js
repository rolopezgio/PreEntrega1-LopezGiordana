export const productsData = [
  {
    id: 1,
    nombre: "Remera Ayllus",
    descripcion: "Remera deportiva negra",
    detalles: "Cuenta con espalda calada que favorece la respirabilidad del cuerpo en plena actividad física.",
    talles:"Talles: S, M, L, XL",
    categoria: "Hombre",
    image: "../image/remera-hombre-negra.jpg",
    precio: "$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 2,
    nombre: "Remera Quia",
    descripcion: "Remera depoortiva negra",
    detalles: "Confeccionada con tela flamé ideal para deportes y combinarla en tu uso cotidiano.",
    talles:"Talles: S, M, L, XL",
    categoria: "Mujer",
    image: "../image/remera-mujer-negra.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 3,
    nombre: "Buzo Nimo",
    descripcion: "Buzo deportivo negro",
    detalles: "Tela liviana con línea refractaria en cada manga, ideal para las tardes/noches de running.",
    talles:"Talles: S, M, L, XL",
    categoria: "Hombre",
    image: "../image/buzo-hombre.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 4,
    nombre: "Remera Quia",
    descripcion: "Remera deportiva salmon",
    detalles: "Confeccionada con tela flamé ideal para deportes y combinarla en tu uso cotidiano.",
    talles:"Talles: S, M, L, XL",
    categoria: "Mujer",
    image: "../image/remera-mujer-salmon.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 5,
    nombre: "Remera Ayllus",
    descripcion: "Remera deportiva bordo",
    detalles: "Cuenta con espalda calada que favorece la respirabilidad del cuerpo en plena actividad física.",
    talles:"Talles: S, M, L, XL",
    categoria: "Hombre",
    image: "../image/remera-hombre-bordo.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 6,
    nombre: "Top Nalba",
    descripcion: "Top deportivo negro",
    detalles: "Cuenta con regulables en sus tiras que permiten una mejor adaptación a cada cuerpo.",
    talles:"Talles: S, M, L, XL",
    categoria: "Mujer",
    image: "../image/top-mujer-negro.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"

  },
  {
    id: 7,
    nombre: "Short Torco",
    descripcion: "Short deportivo gris",
    detalles: "Especialmente confeccionado para realizar deporte con la mayor comodidad y flexibilidad.",
    talles:"Talles: S, M, L, XL",
    categoria: "Hombre",
    image: "../image/short-hombre.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 8,
    nombre: "Calza Mampa",
    descripcion: "Calza deportiva gris",
    detalles: "Tela elastizada para mejor adaptabilidad y comodidad en cada deporte.",
    talles:"Talles: S, M, L, XL",
    categoria: "Mujer",
    image: "../image/calza-mujer-gris.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  },
  {
    id: 9,
    nombre: "Top Nalba",
    descripcion: "Top deportivo verde",
    detalles: "Cuenta con regulables en sus tiras que permiten una mejor adaptación a cada cuerpo.",
    talles:"Talles: S, M, L, XL",
    categoria: "Mujer",
    image: "../image/top-mujer-verde.jpg",
    precio:"$3333",
    descuento:"20% off en efectivo",
    cuotas:"3 cuotas de $1111"
  }
];

export const getProducts = () => {

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(productsData)
    }, 2000);
  });
};