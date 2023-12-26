import { Spinner, Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ItemCount from "../ItemCount/ItemCount";
import { ToastContainer, Zoom, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import "./ItemDetail.css";

const ItemDetail = ({ producto }) => {
    const [cargando, setCargando] = useState(true);
    const [toggle, setToggle] = useState(false);

    const agregarAlCarrito = (contador) => {
        console.log(contador);
        setToggle(true);
        toast.success("Se agregó tu producto al carrito", {
            position: toast.POSITION.BOTTOM_LEFT,
            className: "foo-bar",
            theme: "light",
            transition: Zoom,
        });
    };

    useEffect(() => {
        // Simulación de una carga asíncrona
        const cargarDatos = async () => {
            setCargando(false);
        };

        cargarDatos();
    }, []);

    // Configuración del carousel
    const carouselSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div>
            {cargando ? (
                <div className="cargando">
                    <Spinner label="Cargando" color="warning" labelColor="warning" />
                </div>
            ) : (
                <div className="contenedor-general">
                    <div className="carousel">
                        <Slider {...carouselSettings}>
                            <div>
                                <img
                                    className="imagen"
                                    src={producto.imagen1}
                                    alt={producto.nombre}
                                />
                            </div>
                            <div>
                                <img
                                    className="imagen"
                                    src={producto.imagen2}
                                    alt={producto.nombre}
                                />
                            </div>
                        </Slider>
                    </div>
                    <div className="item-detail">
                        <div className="texto">
                            <h2 className="detalle-nombre">{producto.nombre} </h2>
                            <p className="detalle-descripcion">{producto.descripcion}</p>
                            <p className="detalle-precio">${producto.precio}</p>

                            {toggle ? (
                                <div className="boton space-x-6">
                                    <Link to="/carrito">
                                        <Button color="warning" className="mt-4">
                                            Terminar mi compra
                                        </Button>
                                    </Link>
                                    <Link to="/">
                                        <Button color="warning" className="mt-4">
                                            Seguir comprando
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <ItemCount
                                    stock={producto.stock}
                                    agregarAlCarrito={agregarAlCarrito}
                                />
                            )}
                        </div>
                    </div>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default ItemDetail;
