import { Action } from "@remix-run/router";
import React from "react";

export const alertReducer = (props:{state: any, action: any})=>{

    switch(props.action.type){
        case 'SET_ALERT':
            return props.action.payload;
    }
    return "";
};