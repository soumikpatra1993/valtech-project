import { SET_PROPERTIES, PROPERTY_FETCHED, PROPERTY_UPDATED, PROPERTY_DELETED, ADD_PROTPERTY } from '../actions';

export default function propertyList(state = [], action = {}) {
  switch(action.type) {
    case SET_PROPERTIES:
      return action.propertyList;

    case PROPERTY_FETCHED:
      
      return [action.propertyList]    
    case PROPERTY_UPDATED:
      return state.map(item => {
        if (item.id === action.property.id) return action.property;
        return item;
      })

    case PROPERTY_DELETED:
      
      return state.filter(item => item._id !== action.id);

    case ADD_PROTPERTY:
      return [
        ...state,
        action.property
      ];

    default: return state;
  }
}
