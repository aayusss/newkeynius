import * as types from './ActionType';
import { auth } from '../firebase/firebase';
import axios from 'axios';

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = (user) => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerFail = (error) => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = (user) => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginFail = (error) => ({
  type: types.LOGIN_FAIL,
  payload: error,
});
const logoutStart = () => ({
  type: types.LOGOUT_START,
});

const logoutSuccess = (user) => ({
  type: types.LOGOUT_SUCCESS,
  payload: user,
});

const logoutFail = (error) => ({
  type: types.LOGOUT_FAIL,
  payload: error,
});
export const setUser = (user) => ({
  type: types.SET_USER,
  payload: user,
});

export const registerInitiate = (email, password, displayName) => {
  return function (dispatch) {
    dispatch(registerStart());
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(({ user }) => {
        user.updateProfile({
          displayName,
        });
        dispatch(registerSuccess(user));
      })
      .catch((error) => dispatch(registerFail(error.message)));
  };
};
export const LoginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    const getData = async (id) => {
      const res = await axios.post(`api/Account/login`, { 'email': email, 'password':password });
      console.log(res.data);
    };
    getData();
  };

  //   auth/api/Account/login
  //     .signInWithEmailAndPassword(email, password)
  //     .then(({user}) =>{
  //         dispatch(loginSuccess(user));
  //     })
  //     .catch((error) => dispatch(loginFail(error.message)));
  // };
};
export const LogoutInitiate = () => {
  return function (dispatch) {
    dispatch(logoutStart());
    auth
      .signOut()
      .then(() => dispatch(logoutSuccess()))
      .catch((error) => dispatch(logoutFail(error.message)));
  };
};
