import React from 'react'
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import history from '../../../history';
import './search.css';

export const Search = () => {

    function onRepoSearch() {
        console.log(history);
        history.push('/browser/0/0');
        history.go();
    }
    
    return (
        <div>
            <div className="search-block m-b-xs">
                <div className="search-hint m-b-xs">Explore a Repository</div>
                <Input className="search-input" type="text" placeholder="username/repo"></Input>
            </div>
            <div className="button-block">
                <Button onClick={onRepoSearch.bind(this)} variant="contained" color="primary">Search</Button>
            </div>
        </div>
    )
}