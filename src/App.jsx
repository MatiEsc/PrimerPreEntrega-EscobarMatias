import "./App.css";

import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./componentes/ItemListContainer/ItemListContainer";
import NavBar from "./componentes/NavBar/NavBar";
import Carrito from "./componentes/Carrito/Carrito";
import Error from "./componentes/Error/Error";
import Formulario from "./componentes/Formulario/Formulario";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path="/"
                        element={<ItemListContainer saludo="Bienvenidos a Motz-Regaleria" />}
                    />
                    <Route
                        path="/categorias/:categoria"
                        element={<ItemListContainer saludo="Bienvenidos a Motz-Regaleria" />}
                    />
                    <Route path="/detalle/:id" element={<ItemDetailContainer />} />
                    <Route path="/carrito" element={<Carrito />} />
                    <Route path="/contacto" element={<Formulario />} />
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
