// import { SET, RESET } from '../types/user'

const SET = 'user/SET';
const RESET = 'user/RESET';

export const userActions = {
  SET,
  RESET,
};

export function setUser(payload){
  return {
    type: SET
  , payload
  }
}

export function resetUser(){
  return {
    type: RESET
  }
}
