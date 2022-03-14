/**
 * Home page
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
import React, { Component } from 'react';
import '../App.css';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';
import { Button, Container } from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <Button color="black"><Link to="/contacts">Contactos</Link></Button>
                </Container>
            </div>
        );
    }
}
export default Home;