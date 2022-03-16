import { combineReducers } from "@reduxjs/toolkit";
import navigationSlice from "../navigation/navigationSlice";

export default combineReducers(
    {
        navigation:navigationSlice
    }
)