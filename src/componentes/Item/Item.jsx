import React, { useState } from "react";
import { Checkbox, Button } from "@nextui-org/react";
import "./Item.css";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <>
            <div className="item">
                <img className="image" src={producto.imagen1} alt={producto.nombre} />

                <p className="titulo"> {producto.nombre} </p>
                <p className="precio">$ {producto.precio} </p>
                <Link to={`/detalle/${producto.id}`}>
                    <Button className="boton text-tiny font-sans" color="warning" size="sm">
                        Ver Detalle
                    </Button>
                </Link>
            </div>
        </>
    );
};

export default Item;
