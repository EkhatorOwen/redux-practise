import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPosts } from '../actions/postActions'

 class PostForm extends Component {
    constructor(){
        super()
        this.state={
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault();
        const post ={
            title: this.state.title,
            body: this.state.body
        }
        this.props.createPosts(post)
    }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit} >
            <div>
                <label>Title: </label>
                <br/>
                <input value={this.state.title} onChange={this.onChange} type="text" name="title"/>
            </div>
            <br/>
            <br/>
            <div>
                <label>Body: </label>
                <br/>
                <textarea value={this.state.body} onChange={this.onChange}  name="body"/>
            </div>
            <br/>
             <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

PostForm.PropTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect (null, { createPosts })(PostForm)