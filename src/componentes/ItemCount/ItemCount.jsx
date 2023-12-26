import { useState } from "react";
import { Button } from "@nextui-org/react";

import "./ItemCount.css";

const ItemCount = ({ stock, agregarAlCarrito }) => {
    const [contador, setContador] = useState(1);

    const sumar = () => {
        if (contador < stock) {
            setContador(contador + 1);
        }
    };

    const restar = () => {
        if (contador > 1) {
            setContador(contador - 1);
        }
    };

    return (
        <div className="items-center mx-auto">
            <div className="flex items-center space-x-4">
                <button onClick={restar} color="warning" className="boton">
                    -
                </button>
                <p>{contador}</p>
                <button onClick={sumar} color="warning" className="boton">
                    +
                </button>
            </div>
            <div>
                <Button onClick={() => agregarAlCarrito(contador)} color="warning" className="mt-4">
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );
};

export default ItemCount;
