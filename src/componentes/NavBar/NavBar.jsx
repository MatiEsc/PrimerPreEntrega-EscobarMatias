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
    Button,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
} from "@nextui-org/react";

import Logo from "./Logo";

import { Activity, Flash, Scale } from "./Icons.jsx";

const NavBar = () => {
    const menuItems = [
        { name: "Home", link: "#" },
        { name: "Talles", link: "#" },
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

            <NavbarContent className="hidden sm:flex gap-4 " justify="center">
                <NavbarBrand>
                    <Logo />
                </NavbarBrand>
                <NavbarItem isActive>
                    <Link color="warning" href="#">
                        Home
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="#" aria-current="page" color="foreground">
                        Talles
                    </Link>
                </NavbarItem>

                <Dropdown>
                    <NavbarItem>
                        <DropdownTrigger>
                            <Button
                                disableRipple
                                className="p-0 bg-transparent data-[hover=true]:bg-transparent"
                                endContent={icons.chevron}
                                radius="sm"
                                variant="light"
                            >
                                Productos
                            </Button>
                        </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                        aria-label="ACME features"
                        className="w-[340px]"
                        itemClasses={{
                            base: "gap-4",
                        }}
                    >
                        <DropdownItem
                            key="autoscaling"
                            description="Ropa adorable y suave para los primeros momentos. Cuida a tus pequeños con estilo y comodidad desde el primer día."
                            startContent={icons.scale}
                        >
                            Bebes
                        </DropdownItem>
                        <DropdownItem
                            key="usage_metrics"
                            description="Diversión en cada prenda. Descubre moda vibrante y duradera diseñada para acompañar a tus pequeños en todas sus aventuras."
                            startContent={icons.activity}
                        >
                            Niñ@s
                        </DropdownItem>
                        <DropdownItem
                            key="production_ready"
                            description="Detalles encantadores que destacan. Completa el look con gorros y calcetines divertidos que expresan la personalidad única de tus niños."
                            startContent={icons.flash}
                        >
                            Accesorios
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
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
