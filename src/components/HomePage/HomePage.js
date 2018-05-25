import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavBar } from '../NavBar/NavBar';
import { Grid } from 'react-bootstrap';
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
        return(
            <div>
            <div>
                <HomeHeader />
            </div>
            
           <div className="blog-posts">
            <p>{JSON.stringify(this.props.blogs)}</p>
            </div>
            </div>
        )
    }

}

export default connect (mapStateToProps) (HomePage);