import React from 'react';
import { useHistory } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";

// import './header.css'

function Header() {

	let history = useHistory();


	const handleOnClick = () => {
		history.push("/");
	};


	return (
		<div className="header">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand
					href="#home"
					onClick={ () => handleOnClick() }>BULLY AT THE POLLS
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link
							href="#home"
							onClick={ () => handleOnClick() }>HOME
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;