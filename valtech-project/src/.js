import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveProperty, fetchProperty, updateProperty } from './actions';
import PropertyForm from './PropertyForm';
import './PropertyFormPage.css';

class PropertyFormPage extends React.Component {
  state = {
    redirect: false,
  }

  componentDidMount() {
    const { match } = this.props;
    if (match.params._id) {
      
      this.props.fetchProperty(match.params._id);
    }
  }

  onSave = (data) => {
    
   if (data.id) {
     
     this.props.updateProperty(data)
   } else {
    this.props.saveProperty(data)
   }
  }

  render() {
    console.log(this.props.property)
    
    return (
      <div>
        { this.state.redirect ? (
          <Redirect to="/" />
        ) : (
          <PropertyForm
            property={this.props.property}
            onSave={this.onSave}
          />
        )}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { match } = props;

  if (match.params._id) {

    return {
      property: state.propertyList
    }
  }

  return { property: [] };
}

export default connect(mapStateToProps, { saveProperty, fetchProperty, updateProperty })(PropertyFormPage);
