import React, { Component } from 'react';

export default class Input extends Component {
    render() {
        const {title, description, handleChange, handleSubmit} = this.props;
        return (
        <div className="row" style={{marginLeft: '4%', marginRight: '4%'}}>
            <form className="col s12" onSubmit={handleSubmit}>
              <div className="row">
                <div className="input-field col s6">
                  <input placeholder="Title" id="title" type="text"  name= "title" value= {title} className="validate" onChange={handleChange} required/>
                  <label for="title">Title</label>
                </div>
                <div className="input-field col s6">
                <input placeholder="Description" id="description" type="text" name= "description"   value= {description} onChange={handleChange} className="validate" />
                  <label for="description">Description</label>
                </div>
                <button class="btn waves-effect waves-light" type="submit" value="Submit" name="action">Add
                     <i className="material-icons right" >send</i>
                  </button>
              </div>
            </form>
          </div>
        )
    }
}
