import React from 'react';
import { useHistory } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import './header.css'

function Header() {
	let history = useHistory();

	const handleOnClick = () => {
		history.push('/');
	};

	return (
		<div className="header">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">BULLY AT THE POLLS</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Link to="/" className="navlink">
							Home
						</Link>
						<Link to="/about" className="navlink">
							About Us
						</Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
