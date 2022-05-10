import React from 'react';
import {Navbar, NavbarBrand, NavDropdown, NavLink, Form, FormControl, Button, Container} from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import '../App.css';
import {Link} from "react-router-dom";

export default function NavBar() {

    return(
        <Navbar collapseOnSelect sticky="top" expand="lg">
            <Container fluid className="menu">
            <NavbarBrand className="brand" href="/home">
                <img
                    src="/assets/s-a logo.svg"
                    width="250px"
                    alt="sensor-automatic"
                />
            </NavbarBrand>
            <NavbarToggle area-controls="responsive-navbar-nav"/>
                <NavbarCollapse id="responsive-navbar-nav">
                    <Form className="d-inline-flex" >
                        <FormControl
                            type="search"
                            placeholder="Поиск по продукции"
                        />
                        <Button className="searchbutton" variant="danger">
                            <img className="searchicon" src="/assets/search.svg" alt="Поиск"/>
                        </Button>
                    </Form>
                    <NavLink><Link to="/home">Главная</Link></NavLink>
                    <NavDropdown
                        id="product-dropdown"
                        title="Продукция"
                    >
                        <NavDropdown.Item href="/products/#preasure">Давление</NavDropdown.Item>
                        <NavDropdown.Item href="/products/#level">Уровень</NavDropdown.Item>
                        <NavDropdown.Item href="/products/#asutp">AСУ ТП</NavDropdown.Item>
                        <NavDropdown.Item href="/products/#ovk">ОВК</NavDropdown.Item>
                        <NavDropdown.Item href="/products/#acessories">Аксессуары</NavDropdown.Item>
                    </NavDropdown>
                    <NavLink><Link to="/articles">Статьи</Link></NavLink>
                    <NavLink><Link to="/Utp">УТП</Link></NavLink>
                    <NavLink><Link to="/Contacts">Контакты</Link></NavLink>
                </NavbarCollapse>
                <div className="tel">8 (800) 44-400-82</div>
                <div className="tel2">8 (921) 99-660-44</div>
            </Container>
            <rect className="bgr"/>
            </Navbar>

    )
}