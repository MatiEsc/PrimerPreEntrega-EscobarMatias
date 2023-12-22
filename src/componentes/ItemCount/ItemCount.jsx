import { useState } from "react";
import { Button } from "@nextui-org/react";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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

    const agregarCarrito = () => {
        toast("Se agrego tu producto al carrito", {
            position: toast.POSITION.BOTTOM_LEFT,
            className: "foo-bar",
            theme: "light",
            Transition: Zoom,
        });
    };

    return (
        <>
            <div className="font-sans flex flex-col items-center space-y-4 text-sm font-medium ">
                <div className="button-container flex">
                    <Button
                        onClick={restar}
                        className=" font-sans tamanio"
                        color="warning"
                        size="sm"
                    >
                        -
                    </Button>

                    <h2 className="text-sm font-semibold text-slate-900 mr-2 ml-2">{contador}</h2>

                    <Button
                        onClick={sumar}
                        className=" font-sans tamanio"
                        color="warning"
                        size="sm"
                    >
                        +
                    </Button>
                </div>

                <div className="flex flex-col items-center space-y-2">
                    <Button
                        className="text-tiny font-sans"
                        color="warning"
                        size="sm"
                        onClick={agregarCarrito}
                    >
                        Agregar
                    </Button>
                    <ToastContainer />
                </div>
            </div>
        </>
    );
};

export default ItemCount;
