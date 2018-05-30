import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { Grid, Row, Col } from 'react-bootstrap';
import { fetchBlogPosts } from '../../redux/actions/blogActions';
import { HomeHeader } from '../HomeHeader/HomeHeader';

const mapStateToProps = state => ({
    blogs: state.blog,
})

class HomePage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        this.props.dispatch(fetchBlogPosts());
        
    }
    

    render() {
        let content; 

        if (this.props.blogs) {
            content = (
                <Grid fluid={true}>
                    <div className="blog-post">
                        {this.props.blogs.map(blog => (
                            <div key={ blog.id }>
                                <Row className="blog-title">
                                    <Col md={6} mdPush={3} xs={12} sm={6} smPush={3}>
                                        <h1>{ blog.title }</h1>
                                    </Col>
                                </Row>
                                <Row className="blog-body">
                                    <Col md={6} mdPush={3} xs={12} sm={6} smPush={3}>
                                        <span>{ blog.body }</span>
                                        <hr/>
                                    </Col>
                                </Row>
                            </div>
                        ))}
                    </div>
                </Grid>
            );
        }
        return(
            <div>
                <NavBar/>
                
                    <div className="blog-posts">
                        {content}
                    </div>
            </div>
        )
    }

}

export default connect (mapStateToProps) (HomePage);