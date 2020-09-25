import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { saveProperty, fetchProperty, updateProperty } from './actions';
import PropertyForm from './PropertyForm';

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
      return this.props.updateProperty(data.id)
        .then(
          () => { this.setState({ redirect: true })},
        );
    } else {
      return this.props.saveProperty(data)
        .then(
          () => { this.setState({ redirect: true })},
        );
    }
  }

  render() {
    return (
      <div>
        { this.state.redirect ? (
          <Redirect to="/games" />
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
     property : [state.propertyList.find((item ,i) => item.id === parseInt(match.params._id ,10))]
    }
  }

  return { property: [] };
}

export default connect(mapStateToProps, { saveProperty, fetchProperty, updateProperty })(PropertyFormPage);
