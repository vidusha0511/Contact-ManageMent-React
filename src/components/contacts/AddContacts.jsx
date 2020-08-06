import React, { Component } from 'react';
import { Consumer } from '../../context';
import TextInputGroup from '../layout/TextInputGroup';
import axios from 'axios';

import { v4 as uuid } from 'uuid';

class AddContacts extends Component{
    state ={
        name: "",
        email: "",
        phone: "",
        errors: {}
    }

    onSubmit = async ( dispatch, event ) => { event.preventDefault();
        const { name, email, phone } = this.state;
        const newContact = { id:uuid(), name, email, phone };
        dispatch ({type: "ADD_CONTACT", payload: res.data});
        // clear state
        this.setState ({ name: "", email: "", phone: "", errors: {} });
        const res = await fetch.post('https://jsonplaceholder.typicode.com/users', newContact);

        console.log(this.state);

       // Check For Errors
        if (name === '') {
            this.setState({ errors: { name: 'Name is required' } });
            return;
        }
    
        if (email === '') {
            this.setState({ errors: { email: 'Email is required' } });
            return;
        }
    
        if (phone === '') {
            this.setState({ errors: { phone: 'Phone is required' } });
            return;
        }

        this.props.history.push('/');
        
    };

    onChange = ( event ) => this.setState({ [event.target.name]: event.target.value });

    render() {
        const { name, email, phone, errors } = this.state;

        return(
            <Consumer>
                {value => {
                const { dispatch } = value;
                    return (
                        <div className="card mb-3">
                            <div className="card-header">Add Contact</div>
                            <div className="card-body">
                                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                                    <TextInputGroup 
                                        label="Name" name="name" placeholder="Enter Name..."
                                        value={name} onChange={this.onChange}
                                        error={errors.name}
                                    />
                                    
                                    <TextInputGroup 
                                        label="Email" name="email" placeholder="Enter Email..." type="email"
                                        value={email} onChange={this.onChange}
                                        error={errors.email}
                                    />
                                    <TextInputGroup 
                                        label="Phone" name="phone" placeholder="Enter Phone..."
                                        value={phone} onChange={this.onChange}
                                        error={errors.phone}
                                    />
                                    <input
                                        type="submit"
                                        value="Add Contact"
                                        className="btn btn-success btn-block"
                                    />
                                </form>
                            </div>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AddContacts;