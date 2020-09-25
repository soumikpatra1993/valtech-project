export const SET_PROPERTIES = 'SET_PROPERTIES';
export const ADD_PROTPERTY = 'ADD_PROTPERTY';
export const PROPERTY_FETCHED = 'PROPERTY_FETCHED';
export const PROPERTY_UPDATED = 'PROPERTY_UPDATED';
export const PROPERTY_DELETED = 'PROPERTY_DELETED';
const url = 'http://localhost:3004/items';
let idlen = 4
function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function fetchProperties() {
  return dispatch => {
    fetch(url)
      .then(res => res.json())
      .then(data =>  dispatch(setProperties(data)));
  }
}

export function fetchProperty(id) {
  
  return dispatch => {
    fetch(`${url}/${id}`)
      .then(res => res.json())
      .then(data => dispatch(propertyFetched(data)));
  }
}

export function setProperties(propertyList) {
  return {
    type: SET_PROPERTIES,
    propertyList
  }
}

export function addProperty(propertyList) {
  return {
    type: ADD_PROTPERTY,
    propertyList
    
  }
}

export function propertyFetched(propertyList) {
  
  return {
    type: PROPERTY_FETCHED,
    propertyList
  }
}

export function propertyUpdated(property) {
  return {
    type: PROPERTY_UPDATED,
    property
  }
}

export function propertyDeleted(id) {
  return {
    type: PROPERTY_DELETED,
    id
  }
}

export function saveProperty(data) {
  
  idlen = idlen +1 
  debugger
  return dispatch => {
    return fetch(`${url}/${idlen}`, {
      method: "POST",
      body: JSON.stringify({...data ,id : idlen}),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(addProperty(data)));
  }
}

export function updateProperty(data) {
  debugger
  return dispatch => {
    return fetch(`${url}/${data.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(propertyUpdated(data)));
  }
}

export function deleteProperty(id) {
  
  return dispatch => {
    return fetch(`${url}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(handleResponse)
    .then(data => dispatch(propertyDeleted(id)));
  }
}
