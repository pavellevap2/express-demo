import { createAction } from "redux-actions";

//Action Types

export const INITIALIZE_REQUEST = "AUTH/INITIALIZE_REQUEST";

export const SIGNUP_REQUEST = "AUTH/SIGNUP_REQUEST";

export const SIGNUP_SUCCESS = "AUTH/SIGNUP_SUCCESS";

export const SIGNUP_FAILURE = "AUTH/SIGNUP_FAILURE";

export const SAVE_USER_TOKEN = "AUTH/SAVE_USER_TOKEN";

//Action Creators

export const initializeRequest = createAction(INITIALIZE_REQUEST);

export const saveUserToken = createAction(SAVE_USER_TOKEN);

export const signupRequest = createAction(SIGNUP_REQUEST);

export const signupSuccess = createAction(SIGNUP_SUCCESS);

export const signupFailure = createAction(SIGNUP_FAILURE);
