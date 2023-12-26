import { useState, useEffect } from "react";
import obtenerProductos from "../Utilidades/data";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import "./ItemListContainer.css";
import { Spinner } from "@nextui-org/react";

const ItemListContainer = ({ saludo }) => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    const { categoria } = useParams();

    useEffect(() => {
        setCargando(true);
        obtenerProductos
            .then((respuesta) => {
                if (categoria) {
                    const productosFiltrados = respuesta.filter(
                        (producto) => producto.categoria === categoria
                    );
                    setProductos(productosFiltrados);
                } else {
                    setProductos(respuesta);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setCargando(false);
            });
    }, [categoria]);

    return (
        <>
            {cargando ? (
                <div className="cargando">
                    <Spinner label="Cargando" color="warning" labelColor="warning" />
                </div>
            ) : (
                <div className="item-list-container">
                    <p className="saludo">{saludo}</p>
                    <ItemList productos={productos} />
                </div>
            )}
        </>
    );
};

export default ItemListContainer;
