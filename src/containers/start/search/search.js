import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import { connect } from 'react-redux'
import store from '../../../redux/store'
import {searchRepo} from '../../../redux/actions';

import history from '../.././../history';

import './search.css';

const Search = (props) => {

    let inputValue= '';
    const [inputValidity, setInputValidity] = useState(false);

    const validSearchString = (val) => {
        const check1 = val.split('').filter(c => c === '/').length === 1;
        const check2 = val.indexOf('/') > 0 && val.indexOf('/') < val.length - 1;
        return check1 && check2;
      }

    const getUserFromInputValue = (val)=> {
        return val.split('/')[0];
    }
    
    const getRepoFromInputValue = (val)=> {
        return val.split('/')[1];
    }

    const updateInputValue = (evt) => {
        console.log(evt.target.value);
        inputValue= evt.target.value;
        setInputValidity(validSearchString(evt.target.value));
    }

    const onRepoSearch = () => {
        const user = getUserFromInputValue(inputValue);
        const repo = getRepoFromInputValue(inputValue);
        store.dispatch(searchRepo(user, repo));
        history.push(`/browser/${user}/${repo}`);
        history.go();
    }

    return (
        <div>
            <div className="search-block m-b-xs">
                <div className="search-hint m-b-xs">Explore a Repository</div>
                <Input defaultValue={inputValue} onChange={evt => updateInputValue(evt)} className="search-input" type="text" placeholder="username/repo"></Input>
            </div>
            <div className="button-block">
                <Button disabled={!inputValidity} onClick={onRepoSearch} variant="contained" color="primary">Search</Button>
            </div>
        </div>
    )
}

export default connect(null,null)(Search)
