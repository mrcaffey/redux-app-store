import axios from 'axios'

const APPS = 'APPS'
const ADD_APP = 'ADD_APP'
const UPDATE_APP = 'UPDATE_APP'
const DELETE_APP = 'DELETE_APP'

//INDEX
export const getApps = () => {
  return (dispatch, getState) => {
    axios.get('/api/apps')
    .then( res => dispatch({ type: APPS, apps: res.data }) )
  }
}

//CREATE
export const addApp = (app) => {
  return (dispatch) =>
  axios.post('/api/apps', {apps})
  .then( res => dispatch({ type: ADD_APP, app: res.data }) )
}


//UPDATE
export const updateApp = (app) => {
  return (dispatch) => {
    axios.put(`/api/apps/${app.id}`, {app})
    .then( res => dispatch({ type: UPDATE_APP, app: res.data }) )
  return { type: UPDATE_APP, app }
  }
}

//DESTROY
export const deleteApp = (id) => {
  return (dispatch) => {
    axios.delete(`/api/apps/${id}`)
    .then( () => dispatch({ type: DELETE_APP, id }) )
  }
}


export default (state = [], action) => {
  switch(action.type) {
    case APPS:
    //{ type: APPS, apps: [] }
      return action.apps
    case ADD_APP:
    //{ type: ADD_APP, app: { id: 1, name: 'Game' }}
    return [action.app, ...state]
    case UPDATE_APP:
    // { type: UPDATE_APP, app: { id: 1, name: 'Game2' }
      return state.map( a => {
        if (a.id === action.app.id)
          return action.app
        return a
      })
    case DELETE_APP:
    // { type: DELETE_APP, id: 1 }
      return state.filter( a => a.id !== action.id )
    default:
      return state
  }
}

