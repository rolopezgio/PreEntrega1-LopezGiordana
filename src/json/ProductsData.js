export const productsData = [
    {
     id: 1,
     nombre: "Remera Hombre",
     descripcion: "jashkjdahjkdkajhdjsah",
     categoria: "Hombre",
     image:"../image/remera-hombre-negra.jpg" //COMO PONER LA RUTA DE LA IMAGEN

    },
    {
        id: 2,
        nombre: "Remera Hombre",
        descripcion: "jashkjdahjkdkajhdjsah",
        categoria: "Hombre",
        image: "../image/remera-hombre-bordo.jpg"
   
       },
       {
        id: 3,
        nombre: "Buzo Hombre",
        descripcion: "jashkjdahjkdkajhdjsah",
        categoria: "Hombre",
        image: "../image/buzo-hombre.jpg"
   
       },
       {
        id: 4,
        nombre: "Remera Mujer",
        descripcion: "jashkjdahjkdkajhdjsah",
        categoria: "Mujer",
        image: "../image/remera-mujer-salmon.jpg"
   
       },
       {
        id: 5,
        nombre: "Remera Mujer",
        descripcion: "jashkjdahjkdkajhdjsah",
        categoria: "Mujer",
        image: "../image/remera-mujer-negra.jpg"
   
       },
       {
        id: 6,
        nombre: "Top Mujer",
        descripcion: "jashkjdahjkdkajhdjsah",
        categoria: "Mujer",
        image: "../image/top-mujer.jpg"
   
       }
];

export const getProducts = () => {
   
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productsData)
      }, 2000);
    });
  };