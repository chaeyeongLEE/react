import React from 'react'
import {configureStore} from '@reduxjs/toolkit';
import userSlice from './User';

export default configureStore({
    reducer : {
        user: userSlice,
    },
});
