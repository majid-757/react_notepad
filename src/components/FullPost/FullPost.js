import React from 'react';
import axios from 'axios';

import './FullPost.css';



class FullPost extends React.Component {
    state = {
        loadedPost: null,
    }

    componentDidUpdate() {
        if (this.props.id) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id 
                !== this.props.id)) 

            
            axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.id}`)
                .then((response) => {
                    this.setState({ loadedPost: response.data })
                })
        }
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please Select Post</p>
        if (this.props.id) {
            post = <p>Loading...</p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className='full-post'>
                    <h2>{this.state.loadedPost.title}</h2>
                    <p>{this.state.loadedPost.body}</p>
                    <div>
                        <button className='delete'>Delete</button>
                    </div>
                </div>
                
            )
        }
        
        return post
    }
}


export default FullPost