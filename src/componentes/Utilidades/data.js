const productos = [
    {
        id: "r6333",
        categoria: "bebes",
        subCategoria: "ranita",
        nombre: "RANITA PLUSH",
        descripcion: "Ranita plush, color natural",
        stock: 10,
        precio: 2965,
        talle: "0, 1",
        color: "natural",
        imagen1: "/img/ranitas/6333/6333-ranita.webp",
        imagen2: "/img/ranitas/6333/6333-ranita1.webp",
    },
    {
        id: "v6440",
        categoria: "ninos",
        subCategoria: "vestido",
        nombre: "VESTIDO VUAL",
        descripcion: "Vestido Vual, color rosa",
        stock: 10,
        precio: 19750,
        talle: "18, 24",
        color: "rosa",
        imagen1: "/img/vestidos/6440/6440-vestido.webp",
        imagen2: "/img/vestidos/6440/6440-vestido1.webp",
    },
    {
        id: "v5850",
        categoria: "bebes",
        subCategoria: "vestido",
        nombre: "VESTIDO FIBRANA ",
        descripcion: "Vestido Fibrana Frutillas, color rosa",
        stock: 10,
        precio: 7900,
        talle: "9, 12",
        color: "rosa",
        imagen1: "/img/vestidos/5850/5850-vestido.webp",
        imagen2: "/img/vestidos/5850/5850-vestido1.webp",
    },
    {
        id: "v5852",
        categoria: "bebes",
        subCategoria: "vestido",
        nombre: "VESTIDO BATIC",
        descripcion: "Vestido Batic, color lila",
        stock: 10,
        precio: 6490,
        talle: "9, 12",
        color: "lila",
        imagen1: "/img/vestidos/5852/5852-vestido.webp",
        imagen2: "/img/vestidos/5852/5852-vestido1.webp",
    },
    {
        id: "a6207",
        categoria: "bebes",
        subCategoria: "ajuar",
        nombre: "AJUAR NATURAL",
        descripcion: "Ajuar Natural, rayado",
        stock: 10,
        precio: 5990,
        talle: "0, 1",
        color: "natural",
        imagen1: "/img/ajuares/6207/6207-ajuar.webp",
        imagen2: "/img/ajuares/6207/6207-ajuar1.webp",
    },
    {
        id: "b5636",
        categoria: "ninos",
        subCategoria: "buzo",
        nombre: "BUZO RUSTICO LANGOSTA",
        descripcion: "Buzo Rustico con langostas en color rojo",
        stock: 10,
        precio: 8500,
        talle: "24, 36",
        color: "blanco",
        imagen1: "/img/buzos/5636/5636-buzo.webp",
        imagen2: "/img/buzos/5636/5636-buzo1.webp",
    },
    {
        id: "am5907",
        categoria: "accesorios",
        subCategoria: "accesorios",
        nombre: "MANTA CON CAPUCHA",
        descripcion: "Manta con Capucha y orejitas",
        stock: 10,
        precio: 5800,
        talle: "000",
        color: "azul",
        imagen1: "/img/accesorios/mantas/5907/5907-manta.webp",
        imagen2: "/img/accesorios/mantas/5907/5907-manta1.webp",
    },
    {
        id: "s5843",
        categoria: "ninos",
        subCategoria: "short",
        nombre: "SHORT ALGODON ",
        descripcion: "Short de Algodon Multicolor, Ideal Verano",
        stock: 10,
        precio: 1550,
        talle: "18,24",
        color: "multicolor",
        imagen1: "/img/shorts/5843/5843-short.webp",
        imagen2: "/img/shorts/5843/5843-short1.webp",
    },
];

const obtenerProductos = new Promise((resolve, reject) => {
    //Simulamos un retraso de red
    setTimeout(() => {
        resolve(productos);
    }, 2000);
});

export default obtenerProductos;
