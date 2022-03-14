/**
 * Contact list component responsible to list, edit, delete, and create contacts using the API.
 * @author Juan Pablo Allin Cañas - jpac.647@gmail.com
 * @version 1.0.0
 */
import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from './AppNavBar';
import { Link } from 'react-router-dom';

class ContactList extends Component {

    constructor(props) {
        super(props);
        this.state = {contacts: []};
        this.remove = this.remove.bind(this);
    }

    /**
    * ComponentDidMount function calls the API to load our contact list.
    */
    componentDidMount() {
        fetch('/contacts')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}));
    }

    /**
    * Remove function to handle the DELETE call to the API when we want to delete a contact.
    */
    async remove(id) {
        await fetch(`/contact/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }).then(() => {
            let updatedContacts = [...this.state.contacts].filter(i => i.id !== id);
            this.setState({clients: updatedContacts});
        });
    }
    
    /**
    * Render function renders the HTML with Edit, Delete, and Add Contact actions.
    */
    render() {
        const {contacts, isLoading} = this.state;
    
        if (isLoading) {
            return <p>Cargando...</p>;
        }
        const contactList = contacts.map(contact => {
            return <tr key={contact.id}>
                <td style={{whiteSpace: 'nowrap'}}>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.telephone}</td>
                <td>{contact.birthDay}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/contact/" + contact.id}>Editar</Button>
                        <Button size="sm" color="danger" onClick={() => {this.remove(contact.id);window.location.reload();}}>Eliminar</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right m-3">
                        <Button color="success" tag={Link} to="/contact/new">Añadir Contacto</Button>
                    </div>
                    <h3 class= "m-3">Contactos</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr >
                            <th width="30%">Nombre</th>
                            <th width="30%">Correo</th>
                            <th width="30%">Télefono</th>
                            <th width="30%">Fecha de nacimiento</th>
                            <th width="40%">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                        {contactList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}
export default ContactList;