import React from 'react';

import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

import history from '../../../history';
import './search.css';

class Search extends React.PureComponent {

    constructor(props) {
        super(props)

        this.state = {
            inputValue: '',
            inputValidity: false
        }
    }

    validSearchString(val) {
        const check1 = val.split('').filter(c => c === '/').length === 1;
        const check2 = val.indexOf('/') > 0 && val.indexOf('/') < val.length - 1;
        return check1 && check2;
    }

    getUserFromInputValue(val) {
        return val.split('/')[0];
    }

    getRepoFromInputValue(val) {
        return val.split('/')[1];
    }

    updateInputValue(evt) {
        console.log(evt.target.value);
        this.setState({ ...this.state, inputValue: evt.target.value, inputValidity: this.validSearchString(evt.target.value) });
    }

    onRepoSearch = () => {
        const user = this.getUserFromInputValue(this.state.inputValue);
        const repo = this.getRepoFromInputValue(this.state.inputValue);
        history.replace(`browser/${user}/${repo}`);
        history.go();
        // store.dispatch(searchRepo(user, repo));
    }

    render() {
        return (
            <div>
                <div className="search-block m-b-xs">
                    <div className="search-hint m-b-xs">Explore a Repository</div>
                    <Input defaultValue={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} className="search-input" type="text" placeholder="username/repo"></Input>
                </div>
                <div className="button-block">
                    <Button disabled={!this.state.inputValidity} onClick={this.onRepoSearch} variant="contained" color="primary">Search</Button>
                </div>
            </div>
        )
    }
}

export default Search