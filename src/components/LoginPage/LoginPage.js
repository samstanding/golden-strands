import React, { Component } from 'react';
import { connect } from 'react-redux';
import { triggerLogin, formError, clearError } from '../../redux/actions/loginActions';
import Modal from 'react-bootstrap/lib/Modal';

const mapStateToProps = state => ({
    user: state.user,
    login: state.login,
});

class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
        };
    }

componentDidMount() {
    this.props.dispatch(clearError());
 }

 componentWillReceiveProps(nextProps) {
    if (nextProps.user.userName) {
      this.props.history.push('/user');
    }
  }

login = (event) => {
    event.preventDefault();

    if (this.state.username === '' || this.state.password === '') {
        this.props.dispatch(formError());
    } else {
        this.props.dispatch(triggerLogin(this.state.username, this.state.password));
    }
}

handleInputChangeFor = propertyName => (event) => {
    this.setState({
        [propertyName]: event.target.value,
    })
}


renderAlert() {
    if(this.props.login.message !== '') {
        return (
            <h2 
                className="alert"
                role="alert"
            > 
            { this.props.login.message }
            </h2>
        );
    }
    return (<span />);
 }

render() {
    return (
        
        <div className="static-modal text-center">
            <Modal.Dialog>
            <form onSubmit={this.login}>
            <Modal.Header>
                <h1>Login</h1>
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
                        value="Log In"
                    />
                    </Modal.Footer>
                </div>
            </form>
            </Modal.Dialog>
        </div>
        
    );
}
}

export default connect (mapStateToProps) (LoginPage);

