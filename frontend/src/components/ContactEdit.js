import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from './AppNavBar';

class ContactEdit extends Component {

    emptyItem = {
        name: '',
        email: '',
        telephone: '',
        birthDay: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const contact = await (await fetch(`/contact/${this.props.match.params.id}`)).json();
            this.setState({item: contact});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;
    
        await fetch('/contact' + (item.id ? '/' + item.id : ''), {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/contacts');
    }

    render() {
        const {item} = this.state;
        const title = <h2 class="my-3">{item.id ? 'Editar Contacto' : 'Añadir Contacto'}</h2>;
    
        return <div>
            <AppNavbar/>
            <Container>
                {title }
                <Form onSubmit={this.handleSubmit} class="m-3">
                    <FormGroup class="my-3">
                        <Label for="name" class="my-3">Nombre</Label>
                        <Input class="my-3" type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name" placeholder="Nombre"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Correo</Label>
                        <Input type="text" name="email" id="email" value={item.email || ''}
                               onChange={this.handleChange} autoComplete="email" placeholder="Correo"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="telephone">Télefono</Label>
                        <Input type="text" name="telephone" id="telephone" value={item.telephone || ''}
                               onChange={this.handleChange} autoComplete="telephone" placeholder="Teléfono"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birthDay">Fecha de nacimiento</Label>
                        <Input type="text" name="birthDay" id="birthDay" value={item.birthDay || ''}
                               onChange={this.handleChange} autoComplete="birthDay" placeholder="YYYY-MM-DD"/>
                    </FormGroup>
                    <FormGroup class="mx-auto">
                        <Button class="my-3" color="primary" type="submit">Guardar</Button>{' '}
                        <Button class="my-3" color="secondary" tag={Link} to="/contacts">Cancelar</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(ContactEdit);