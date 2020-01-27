import React, { PureComponent } from 'react'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { connect } from 'react-redux'
import store from '../../redux/store';
import { searchRepo } from '../../redux/actions';
import { getLoadingState } from '../../redux/selectors';

import history from '../../history';

import './browser.css';

import Loading from '../../components/loading/loading';
import CommitDetail from './commit-details/commit-details';
import CommitPlaceholder from '../browser/commit-placeholder/commit-placeholder';
import CommitDrawer from '../browser/commit-drawer/commit-drawer';
import Box  from '@material-ui/core/Box';


class Browser extends PureComponent {

    componentDidMount() {
        const user = history.location.pathname.split('/')[2];
        const repo = history.location.pathname.split('/')[3];
        store.dispatch(searchRepo(user, repo));
    }

    goToStart() {
        history.push('/start');
        history.go();
    }

    render() {
        return (
            <div className="browser">
                {this.props.loading ?
                    <Loading />
                    : <div>
                        <AppBar position="static">
                            <Toolbar className="toolbar">
                                <Typography variant="h6" className="app-bar-title">
                                    React Git Repo Browser
                                </Typography>
                                <Button color="inherit" onClick={this.goToStart}>New Search</Button>
                            </Toolbar>
                        </AppBar>
                        <CommitDrawer></CommitDrawer>
                        <Box className="detail-container">
                            {(this.props.commitSelected) ? <CommitDetail className="detail"></CommitDetail> : <CommitPlaceholder className="detail"></CommitPlaceholder>}
                        </Box>
                    </div>
                }
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        loading: getLoadingState(state.searchReducer)
    }
};

export default connect(mapStateToProps, null)(Browser)
