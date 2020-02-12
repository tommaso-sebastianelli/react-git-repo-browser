import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import React from 'react';
import history from '../../../history';
import './search.css';
import { APP_ROUTER_BASENAME } from '../../../index';

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
        history.push(`${APP_ROUTER_BASENAME}/browser/${user}/${repo}`);
        history.go();
    }

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onRepoSearch();
        }
    }

    render() {
        return (
            <div className="block">
                <div className="search-input m-b-xs">
                    <h2 className="search-hint m-b-xs">Explore a Repository</h2>
                    <Input onKeyPress={this.handleKeyPress} defaultValue={this.state.inputValue} onChange={evt => this.updateInputValue(evt)} className="search-input" type="text" placeholder="username/repo"></Input>
                </div>
                <div className="search-button">
                    <Button disabled={!this.state.inputValidity} onClick={this.onRepoSearch} variant="contained" color="primary">Search</Button>
                </div>
            </div>
        )
    }
}

export default Search