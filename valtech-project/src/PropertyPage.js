import React from 'react';
import PropTypes from 'prop-types';
import GamesList from './PropertyList/PropertiesList';
import { connect } from 'react-redux';
import { fetchProperties, deleteProperty } from './actions';

class PropertyPage extends React.Component {
  componentDidMount() {
    this.props.fetchProperties();
  }

  render() {
    return (
      <div>
        <h1>Property list</h1>
        <GamesList propertyList={this.props.propertyList} deleteProperty={this.props.deleteProperty}/>
      </div>
    );
  }
}

PropertyPage.propTypes = {
  propertyList: PropTypes.array.isRequired,
  fetchProperties: PropTypes.func.isRequired,
  deleteProperty: PropTypes.func.isRequired
}

function mapsStateToProps(state) {
  return {
    propertyList: state.propertyList
  }
}

export default connect(mapsStateToProps, { fetchProperties, deleteProperty })(PropertyPage);
