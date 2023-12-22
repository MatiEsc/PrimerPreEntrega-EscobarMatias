import React from "react";

import { Button } from "@nextui-org/react";

import "./Item.css";
import ItemCount from "../ItemCount/ItemCount";

const Item = ({ producto }) => {
    return (
        <>
            <div className="flex font-sans bg-natural-card rounded-md border-solid border border-gray-500 p-4 m-5 w-96">
                <div className="rounded-md overflow-hidden">
                    <img
                        src={producto.imagen1}
                        alt={producto.nombre}
                        className="w-64 h-64 object-cover rounded-md"
                        loading="lazy"
                    />
                </div>
                <form className="flex-auto p-6">
                    <div className="flex flex-wrap mb-4">
                        <h1 className="flex-auto text-lg font-semibold text-slate-900">
                            {producto.nombre}
                        </h1>
                        <div className="text-lg font-semibold text-slate-500">
                            ${producto.precio}
                        </div>
                    </div>
                    <div className="w-full text-sm font-medium text-slate-700 mb-4">
                        {producto.descripcion}
                    </div>
                    <p className="text-sm text-slate-700 mb-4">En Stock.</p>

                    <div className="font-sans flex space-x-4 text-sm font-medium">
                        <ItemCount stock={10} />
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button className="text-tiny font-sans" color="warning" size="sm">
                            Ver Detalle
                        </Button>
                        <Button className="text-tiny font-sans" color="warning" size="sm">
                            Terminar compra
                        </Button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default Item;
