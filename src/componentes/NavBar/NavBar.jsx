import CartWidget from "./CartWidget";
import "./NavBar.css";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
} from "@nextui-org/react";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const NavBar = () => {
    const menuItems = [
        { name: "Ropa de Bebe", to: "/categorias/bebes" },
        { name: "Ropa de Niñ@s", to: "/categorias/ninos" },
        { name: "Accesorios", to: "/categorias/accesorios" },
        { name: "Contacto", to: "/contacto" },
    ];

    return (
        <Navbar shouldHideOnScroll>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3 " justify="center">
                <NavbarBrand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 ">
                <NavbarBrand>
                    <Link to="/">
                        <Logo />
                    </Link>
                </NavbarBrand>

                {menuItems.map((item, index) => (
                    <NavbarItem key={`${item}-${index}`}>
                        <Link to={item.to} aria-current="page" color="foreground">
                            {item.name}
                        </Link>
                    </NavbarItem>
                ))}

                <NavbarContent justify="end">
                    <NavbarItem>
                        <CartWidget />
                    </NavbarItem>
                </NavbarContent>

                <NavbarMenu>
                    {menuItems.map((item, index) => (
                        <NavbarMenuItem key={`${item}-${index}`}>
                            <Link
                                to={item.to}
                                className="w-full"
                                color={index === 0 ? "warning" : "foreground"}
                                size="lg"
                            >
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    );
};

export default NavBar;
