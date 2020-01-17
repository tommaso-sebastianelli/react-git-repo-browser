import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { connect } from 'react-redux'
import store from '../../../redux/store'
import {searchRepo} from '../../../redux/actions';

import './search.css';

const Search = () => {

    let inputValue= '';

    const getUserFromInputValue = (val)=> {
        return val.split('/')[0];
    }
    
    const getRepoFromInputValue = (val)=> {
        return val.split('/')[1];
    }

    const updateInputValue = (evt) => {
        console.log(evt.target.value);
        inputValue= evt.target.value;
    }

    const onRepoSearch = () => {
        console.log(inputValue);
        store.dispatch(searchRepo(getUserFromInputValue(inputValue), getRepoFromInputValue(inputValue)));
        // history.push('/browser/0/0');
        // history.go();
    }

    return (
        <div>
            <div className="search-block m-b-xs">
                <div className="search-hint m-b-xs">Explore a Repository</div>
                <Input defaultValue={inputValue} onChange={evt => updateInputValue(evt)} className="search-input" type="text" placeholder="username/repo"></Input>
            </div>
            <div className="button-block">
                <Button onClick={onRepoSearch} variant="contained" color="primary">Search</Button>
            </div>
        </div>
    )
}

export default connect(null,null)(Search)
