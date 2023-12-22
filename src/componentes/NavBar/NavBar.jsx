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
    Link,
} from "@nextui-org/react";
import Logo from "./Logo";
import { Activity, Flash, Scale } from "./Icons.jsx";

const NavBar = () => {
    const menuItems = [
        { name: "Ropa de Bebe", link: "#" },
        { name: "Ropa de Niñ@s", link: "#" },
        { name: "Accesorios", link: "#" },
    ];
    const icons = {
        scale: <Scale className="text-warning" fill="currentColor" size={30} />,
        activity: <Activity className="text-secondary" fill="currentColor" size={30} />,
        flash: <Flash className="text-primary" fill="currentColor" size={30} />,
    };

    return (
        <Navbar shouldHideOnScroll>
            <NavbarContent className="sm:hidden" justify="start">
                <NavbarMenuToggle />
            </NavbarContent>

            <NavbarContent className="sm:hidden pr-3 " justify="center">
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 ">
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>

                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground">
                        Bebes
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground">
                        Niñ@s
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground">
                        Accesorios
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                    <CartWidget />
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                    <NavbarMenuItem key={`${item}-${index}`}>
                        <Link
                            className="w-full"
                            color={index === 0 ? "warning" : "foreground"}
                            href="#"
                            size="lg"
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
};

export default NavBar;
