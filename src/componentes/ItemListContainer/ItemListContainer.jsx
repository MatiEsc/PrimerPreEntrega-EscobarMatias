import { useState } from "react";
import obtenerProductos from "../Utilidades/data";
import { useEffect } from "react";
import ItemList from "../ItemList/ItemList";

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        obtenerProductos
            .then((repuesta) => {
                setProductos(repuesta);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                console.log("Finalizo la promesa");
            });
    }, []);

    return (
        <div>
            <p>{saludo}</p>
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;
