import { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import "./Formulario.css";

const EjemploFormulario = () => {
    const [nombre, setNombre] = useState("");
    const [direccion, setDireccion] = useState("");
    const [email, setEmail] = useState("");

    const cambiarNombre = (event) => {
        setNombre(event.target.value);
    };

    const cambiarDireccion = (event) => {
        setDireccion(event.target.value);
    };

    const cambiarEmail = (event) => {
        setEmail(event.target.value);
    };

    const enviarFormulario = (event) => {
        event.preventDefault();
        const usuario = { nombre, direccion, email };
        //Validaciones
        console.log(usuario);
    };

    return (
        <div className="formulario    ">
            <form onSubmit={enviarFormulario}>
                <label>
                    Nombre: <Input type="text" value={nombre} onChange={cambiarNombre} />
                </label>

                <label>
                    Direccion: <Input type="text" value={direccion} onChange={cambiarDireccion} />
                </label>

                <label>
                    Email: <Input type="email" value={email} onChange={cambiarEmail} />
                </label>

                <Button type="submit" color="warning" className="mt-4">
                    Enviar
                </Button>
            </form>
        </div>
    );
};
export default EjemploFormulario;
