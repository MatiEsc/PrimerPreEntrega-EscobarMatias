import "./App.css";
import ItemCount from "./componentes/ItemCount/ItemCount";
import ItemListContainer from "./componentes/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import React, { useState } from "react";

function App() {
    const [carrito, setCarrito] = useState([]);
    const addToCart = (cantidad) => {
        console.log(`Añadir al carrito: ${cantidad} unidades`);

        // Crear un nuevo array con el contenido actual del carrito más los nuevos elementos
        setCarrito([...carrito, { cantidad }]);
    };
    return (
        <>
            <div>
                <NavBar />
                <ItemListContainer saludo="´Bienvenidos a mi Ecommerce´" />
                <ItemCount stock={10} onAdd={addToCart} />
                <p>Se mandaron {carrito.length} ordenes al carrito</p>
            </div>
        </>
    );
}

export default App;