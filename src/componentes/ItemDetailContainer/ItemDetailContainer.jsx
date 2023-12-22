import { useEffect, useState } from "react";
import obtenerProductos from "../Utilidades/data";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState({});

    useEffect(() => {
        obtenerProductos.then((repuesta) => {
            const productoEncontrado = repuesta.find((prod) => prod.id === "s5843");
            setProducto(productoEncontrado);
        });
    }, []);

    return (
        <div>
            <ItemDetail producto={producto} />
        </div>
    );
};
export default ItemDetailContainer;
