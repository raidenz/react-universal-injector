import { userActions } from 'actions';

const initialState = {
  email: 'user@example.com'
}
// export default function reducer(state = initialState, action) {
// export default (reducer) = (state = initialState, action) => {
export default (state = initialState, action) => {
  switch (action.type) {
    case userActions.SET:
      return {...state, ...action.payload}
    case userActions.RESET:
      return {...initialState}
    default:
      return state
  }
}
