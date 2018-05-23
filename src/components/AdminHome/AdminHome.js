import React, { Component } from 'react';
import axios from 'axios';
import ReactFilestack from 'react-filestack';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import FormControl from 'react-bootstrap/lib/FormControl';

class AdminHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:'',
            body:'',
            media_url:''
        }
    }

    handleChangeFor = propertyName => (event) => {
        this.setState({
            ...this.state, 
            [propertyName]: event.target.value,
        })
    }

    post = (e) => {
        e.preventDefault();
        axios.post('/api/blog/', { post: this.state })
        .then(response => console.log(response))
        .catch(error => console.log(error));
    }

    render() {
        return (
            <div>
                <h1>Golden Strands</h1>
                <h3>Add a Post</h3>
                <form onSubmit={this.post}>
                <ControlLabel>Title</ControlLabel>
                <FormControl 
                id="formControlsText"
                type="text" 
                placeholder="Title" 
                label="Title" 
                value={this.state.title} 
                onChange={this.handleChangeFor('title')}
                />
                <FormGroup>
                    <textarea type="text" value={this.state.body} onChange={this.handleChangeFor('body')}/>
                </FormGroup>
                <div className="input-group">
                <ReactFilestack 
                apikey={process.env.REACT_APP_FILESTACK_KEY} 
                mode={'pick'}
                onSuccess={(response) => {
                    this.props.handleChangeFor('media_url');
                    this.props.work.media_url=response.filesUploaded[0];
                    console.log(response);
                } }
                onError={(e) => console.log(e)}
                buttonText={''}
                buttonClass="fs-button"
                 />
                 </div>
                 <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default AdminHome;