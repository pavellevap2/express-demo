import { createAction } from "redux-actions";

//Action Types

export const SAVE_USER_TOKEN = "AUTH/SAVE_USER_TOKEN";

export const INITIALIZE_REQUEST = "AUTH/INITIALIZE_REQUEST";

//Action Creators

export const saveUserToken = createAction(SAVE_USER_TOKEN);

export const initializeRequest = createAction(INITIALIZE_REQUEST);
