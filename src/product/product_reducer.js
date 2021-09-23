import React from 'react';
import { GET_PRODUCT_DATA } from './product_action';

export default function ProductReducer(state = {}, action) {
    switch (action.type) {
        case GET_PRODUCT_DATA:
            return { product_list: action.payload }
        default:
            return state;

    }
}