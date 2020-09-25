import React from 'react';
import { saveProperty } from './actions';
import './PropertyForm.css';
import { connect } from 'react-redux';

class PropertyForm extends React.Component {

  state = {
    id: this.props.property.length  ?  
 this.props.property[0].id : null,
    title:  this.props.property.length?  
 this.props.property[0].title : '',
    imgURL:this.props.property.length ?  
 this.props.property[0].imgURL : '',
    desc : this.props.property.length ?  
 this.props.property[0].desc : '',
    location : this.props.property.length  ?  
 this.props.property[0].location : '',
    totalExp : this.props.property.length ?  
 this.props.property[0].totalExp : '',
    totalProjects :this.props.property.length  ?  
 this.props.property[0].totalProjects : '',
    logo : this.props.property.length ?  
 this.props.property[0].logo : '',
    button : this.props.property.length  ? 'UPDATE' : 'ADD'
  }
componentDidMount() {
  console.log(this.props)
  
}
  componentWillReceiveProps(nextProps) {
    
  if (nextProps.property) {
  this.setState( nextProps.property[0]);
  }
  }

  handleChange = (e) => {
    if (e.target.value) {
      this.setState({
        [e.target.name]: e.target.value
      });
    } 
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSave(this.state)
  }

  render() {
    return (

      <form className="form-container" onSubmit={this.handleSubmit}>
        <div>
          Featured developers
  </div>

        <div className="input-tile">
          <label htmlFor="imgURL">Developer logo Image URL</label>
          <input
            name="imgURL"
            value={this.state.imgURL}
            onChange={this.handleChange}
            id="imgURL"
          />
        </div>
        <div className="input-tile">
          <label htmlFor="title">Developer name</label>
          <input
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            id="title"
          />
        </div>
        <div className="input-tile">
          <label htmlFor="totalExp">Years of experience</label>
          <input
            name="totalExp"
            value={this.state.totalExp}
            onChange={this.handleChange}
            id="totalExp"
          />
        </div>
        <div className="input-tile">
          <label htmlFor="totalProjects">Project count</label>
          <input
            name="totalProjects"
            value={this.state.totalProjects}
            onChange={this.handleChange}
            id="totalProjects"
          />
        </div>
        <div className="input-tile">
          <label htmlFor="desc">Description</label>
          <textarea   name="desc"
            value={this.state.desc}
            onChange={this.handleChange}
            id="desc">      
          </textarea>
        </div>
        <div className="input-tile">
          <label htmlFor="location">Project location</label>
          <input   name="location"
            value={this.state.location}
            onChange={this.handleChange}
            id="location"/>      

        </div>
        <div className="input-tile">
          <label htmlFor="logo">Project Image URL</label>
          <input   name="logo"
            value={this.state.logo}
            onChange={this.handleChange}
            id="logo"/>      
        </div>

        <div className="field">
    <button className="btn-grad">{this.state.button}</button>
        </div>
      </form>
    );
  }
}

function mapsStateToProps(state) {

}

export default connect(mapsStateToProps, { saveProperty })(PropertyForm);