import React, { Component } from "react";
import '../App.css';
import propTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }
  onChange =(e)=>{
    this.setState({[e.target.name]: e.target.value})
  }
  onSubmit =(e)=>{
    e.preventDefault(e);
    this.props.AddTodo(this.state.title);
    this.setState({ title: ''});
  }
  render() {
    return (
          <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          placeholder="Add todo..." 
          style={{flex:'10', padding: '5'}} 
          value={this.state.title} 
          onChange={this.onChange}
          />
        <input 
          type="submit" 
          value="submit" 
          className="btn" 
          style={{flex:'1'}} 
          
          /> 
      </form>
    );
  }
}
AddTodo.propTypes = {
  addTodo: propTypes.func.isRequired,
  markComplete: propTypes.func.isRequired,
  delTodo: propTypes.func.isRequired
}
export default AddTodo;
