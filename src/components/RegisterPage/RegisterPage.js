import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/lib/Modal';

class RegisterPage extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            username:'',
            password: '',
            message: '',
        };
    }

    registerUser = (event) => {
        event.preventDefault();

        if (this.state.username === '' || this.state.password === '') {
            this.setState({
                message: 'Choose a username and password!',
            })
        } else {
            const request = new Request('api/user/register', {
                method: 'POST',
                headers: new Headers ({'Content-Type': 'application/json'}),
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            });

            fetch(request)
            .then((response) => {
                if(response.status === 201) {
                    this.props.history.push('/admin');
                } else {
                    this.setState({
                        message: 'That didn\'t work.', 
                    });
                }
            })
            .catch(() => {
                this.setState({
                    message: 'Something went wrong. Is the server running?',
                });
            });
        }
    }


handleInputChangeFor = propertyName => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    });
}

renderAlert() {
    if(this.state.message !== '') {
        return (
            <h2 
                className="alert"
                role="alert"
            > 
            {this.state.message}
            </h2>
        );
    }
    return (<span />);
 }

 render() {
     return (
         <div className="static-modal text-center">
             <Modal.Dialog>
             <form onSubmit={this.registerUser}>
             <Modal.Header>
                <h1>Register User</h1>
                </Modal.Header>
                <Modal.Body>
                <div className="auth-inputs"> 
                    <input 
                        type="text"
                        name="username"
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleInputChangeFor('username')}
                    />
                </div>
                <div className="auth-inputs">
                    <input 
                        type="password"
                        name="password"
                        placeholder="password"
                        value={this.state.password}
                        onChange={this.handleInputChangeFor('password')}
                    />
                </div>
                { this.renderAlert() }
                </Modal.Body>
                <div>
                    <Modal.Footer>
                    <input 
                        type="submit"
                        name="submit"
                        value="Register"
                    />
                    </Modal.Footer>
                </div>
            </form>
            </Modal.Dialog>
        </div>
        );
    }
}

export default RegisterPage;

