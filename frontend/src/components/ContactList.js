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

    componentDidMount() {
        fetch('/contacts')
            .then(response => response.json())
            .then(data => this.setState({contacts: data}));
    }

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
                        <Button size="sm" color="danger" onClick={() => this.remove(contact.id)}>Eliminar</Button>
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