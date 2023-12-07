import { useState } from "react";
import { Button } from "@nextui-org/react";
import { Input } from "@nextui-org/react";

import "./ItemCount.css";

const ItemCount = ({ stock, onAdd }) => {
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
    const terminarCompra = () => {
        if (stock > 0) {
            onAdd && onAdd(contador);
        }
    };
    return (
        <>
            <div className="counter-input">
                <button onClick={sumar}>+</button>
                <h2>{contador}</h2>
                <button onClick={restar}>-</button>
            </div>
            <div>
                <Button color="warning" onClick={terminarCompra}>
                    Terminar compra
                </Button>
            </div>
        </>
    );
};

export default ItemCount;
