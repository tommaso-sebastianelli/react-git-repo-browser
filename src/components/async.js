import React from 'react';
import { usePromiseTracker } from "react-promise-tracker";
import CircularProgress from '@material-ui/core/CircularProgress';

/* Wraps a component and displays a progress spinner or the input component based on the promiseTracker hook */
export const AsyncComponent = ({component})=>{
    const { promiseInProgress } = usePromiseTracker();
    if(promiseInProgress){
        return <div className="loading"><CircularProgress /></div>
    }
    return component;
}