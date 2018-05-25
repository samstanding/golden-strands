import React, { Component } from 'react';
import axios from 'axios';
import ReactFilestack from 'react-filestack';
import { FormGroup, ControlLabel, FormControl, Grid, Row, Col } from 'react-bootstrap';

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
        .then(response =>{
            alert('Your post was successful');
        } )
        .catch(error => console.log(error));
    }
    

    render() {
        return (
                <Grid fluid={true}>
                    <Row className="form-header">   
                        <Col md={12}>
                            <h1>Golden Strands</h1>
                        </Col>
                    </Row>
                    <Row className="form-header">   
                        <Col md={12}>
                            <h3>Add a Post</h3>
                        </Col>
                    </Row>
                    <form onSubmit={this.post}>
                    <Row className="blog-entry">
                        <Col md={6} mdPush={3} xs={12} sm={6} smPush={3} >
                            <ControlLabel>Title</ControlLabel>
                            <FormControl 
                            id="formControlsText"
                            type="text" 
                            placeholder="Title" 
                            label="Title" 
                            value={this.state.title} 
                            onChange={this.handleChangeFor('title')}
                            />
                        </Col>
                    </Row>
                    <Row className="blog-entry">
                        <Col md={6} mdPush={3} xs={12} sm={6} smPush={3}>
                            <FormGroup controlId="formControlsTextarea">
                                <ControlLabel>Body</ControlLabel>
                                <FormControl componentClass="textarea" 
                                style={{ height: 150 }}
                                placeholder="Body"value={this.state.body} 
                                onChange={this.handleChangeFor('body')}  />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row className="form-header">
                        {/* <Col md={12}> */}
                            <ReactFilestack 
                            apikey={process.env.REACT_APP_FILESTACK_KEY} 
                            mode={'pick'}
                            onSuccess={(response) => {
                                this.handleChangeFor('media_url');
                                this.setState({
                                    media_url: response.filesUploaded[0],
                                })}}
                            onError={(e) => console.log(e)}
                            buttonText={'Upload A Photo'}
                            buttonClass="btn btn-primary"
                            />
                        {/* </Col> */}
                    </Row>
                    <hr/>
                    <Row className="form-header">
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </Row>
                </form>
            </Grid>
        )
    }
}

export default AdminHome;