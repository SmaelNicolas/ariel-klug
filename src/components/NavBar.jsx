import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Flex,
	Heading,
	Image,
	Menu,
	MenuButton,
	MenuDivider,
	MenuGroup,
	MenuItem,
	MenuItemOption,
	MenuList,
	MenuOptionGroup,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Flex
			as="nav"
			align="center"
			justify="space-between"
			wrap="wrap"
			padding="1.5rem"
			bg="gray.700"
			width="100%">
			<Link to="/" style={{ textDecoration: "none" }}></Link>
			<Flex align="center" mr={5}>
				<Heading as="h1" size="lg">
					<Image
						maxH={55}
						src="./img/infinityPC.jpg"
						alt="Infinity PC"
						title="Infinity PC"
					/>
				</Heading>
			</Flex>
			<Link />

			<Box
				display={{ base: "block", md: "none" }}
				onClick={() => setIsOpen(!isOpen)}>
				<Flex minWidth="max-content" alignItems="center" gap="5">
					<svg
						fill="white"
						width="12px"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</Flex>
			</Box>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "flex" }}
				width={{ base: "full", md: "auto" }}
				alignItems="center">
				<ButtonGroup spacing={4}>
					<Button as={Link} to="/">
						Inicio
					</Button>

					<Menu closeOnSelect={false}>
						<MenuButton as={Button}>Categorías</MenuButton>
						<MenuList>
							<MenuOptionGroup title="Filtro" type="checkbox">
								<Link to={"/ropaDeHombre"}>
									<MenuItemOption value="hProcesador">
										Ropa de hombre
									</MenuItemOption>
								</Link>
								<Link to={"/ropaDeMujer"}>
									<MenuItemOption value="Placa video">
										Ropa de mujer
									</MenuItemOption>
								</Link>
								<Link to={"/joyeria"}>
									<MenuItemOption value="ram">
										Joyería
									</MenuItemOption>
								</Link>
								<Link to={"/electronica"}>
									<MenuItemOption value="electronica">
										Electrónica
									</MenuItemOption>
								</Link>
							</MenuOptionGroup>
							<MenuDivider />
						</MenuList>
					</Menu>

					<Button>Sobre nosotros</Button>
					<Button>Contacto</Button>
				</ButtonGroup>
			</Box>

			<Box
				display={{ base: isOpen ? "block" : "none", md: "block" }}
				mt={{ base: 4, md: 0 }}>
				<Flex align="flex-end">
					<Menu>
						<Avatar
							as={MenuButton}
							name="Elon Musk"
							src="data:image/jpeg;base64,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"
						/>
						<MenuList>
							<MenuGroup title="Hola, Elon Musk!">
								<MenuItem>Mi cuenta</MenuItem>
								<MenuItem>Mis pedidos</MenuItem>
							</MenuGroup>
							<MenuDivider />
							<MenuGroup title="Ayuda">
								<MenuItem>Docs</MenuItem>
								<MenuItem>FAQ</MenuItem>
							</MenuGroup>
						</MenuList>
					</Menu>
					<CartWidget />
				</Flex>
			</Box>
		</Flex>
	);
};

export default NavBar;
