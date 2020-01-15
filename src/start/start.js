import React, { PureComponent } from 'react'
import './start.css'
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import history from '../history';

class Start extends PureComponent {
    
    onRepoSearch() {
        console.log(history);
        history.push('/browser');
        history.go();
    }

    render() {
        return (
            <Container maxWidth="sm" className="container m-t-xl">
                <div className="search-block m-b-xs">
                    <div className="search-hint m-b-xs">Explore a Repository</div>
                    <Input className="search-input" type="text" placeholder="username/repo"></Input>
                </div>
                <div className="button-block">
                    <Button onClick={this.onRepoSearch.bind(this)} variant="contained" color="primary">Search</Button>
                </div>
                {/* <div className="auth-block"></div> */}
            </Container>
        )
    }
}

export default Start